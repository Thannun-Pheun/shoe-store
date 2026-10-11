// ============================================================
// App.jsx — THE BRAIN of the store
//
// All state lives here (the parent), and flows DOWN as props:
//
//   shoes (constant) ──► filter ──► ShoeList ──► ShoeCard
//   searchText / brand / category              ▲ SearchBar (writes back)
//   cart (array)  ──► Cart ◄── callback props (onAdd, onIncrease...)
//
// Golden rule used everywhere below:
//   NEVER do cart.push(...) — that mutates state and React won't notice.
//   ALWAYS build a NEW array with ...spread / filter / map, then setCart(newArray).
// ============================================================

import { useState } from "react";
import { shoes } from "./data/shoes";
import ShoeList from "./components/ShoeList";
import SearchBar from "./components/SearchBar";
import Cart from "./components/Cart";

function App() {
  // ---------- 1. STATE ----------
  // useState gives us [value, functionToChangeIt].
  // Changing any of these re-renders the whole component automatically.

  const [cart, setCart] = useState([]); // e.g. [{ ...shoe, quantity: 2 }, ...]

  // Filter state — read by the .filter() code below, written by <SearchBar />
  const [searchText, setSearchText] = useState("");
  const [brand, setBrand] = useState("All Brands");
  const [category, setCategory] = useState("All Categories");

  // ---------- 2. DERIVED DATA (computed on every render, not stored) ----------
  // We do NOT store "filteredShoes" in state. State duplication causes bugs;
  // instead we recompute it from the real state each time App renders.

  const normalizedSearch = searchText.trim().toLowerCase();

  const filteredShoes = shoes
    // First .filter(): the search box must match title OR brand.
    // String.includes() + toLowerCase() makes the search case-insensitive.
    .filter(
      (shoe) =>
        shoe.title.toLowerCase().includes(normalizedSearch) ||
        shoe.brand.toLowerCase().includes(normalizedSearch)
    )
    // Second .filter(): "All Brands" passes everything; otherwise exact match.
    .filter((shoe) => brand === "All Brands" || shoe.brand === brand)
    .filter((shoe) => category === "All Categories" || shoe.category === category);

  // Build dropdown options from the data so they stay in sync automatically.
  const brands = [...new Set(shoes.map((shoe) => shoe.brand))];
  const categories = [...new Set(shoes.map((shoe) => shoe.category))];

  // ---------- 3. CART LOGIC (all mutations live here) ----------

  // ADD: if the shoe is already in the cart, +1 its quantity;
  // otherwise append it as a new line with quantity 1.
  const addToCart = (shoe) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === shoe.id);

      if (existingItem) {
        // Found it -> map() returns a new array, replacing ONLY that one item.
        return currentCart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // Not in cart yet -> ...spread copies all shoe fields, we add quantity.
      return [...currentCart, { ...shoe, quantity: 1 }];
    });
  };

  // REMOVE: filter the item out entirely (the X button / "Remove").
  const removeFromCart = (shoeId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== shoeId));
  };

  // INCREASE quantity of one line.
  const increaseQuantity = (shoeId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === shoeId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // DECREASE quantity — and if it would drop to 0, remove the line instead.
  const decreaseQuantity = (shoeId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === shoeId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // 0-quantity lines disappear
    );
  };

  // TOTAL PRICE: reduce sums up every line (price x quantity).
  // 0 is the starting value of the accumulator.
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ---------- 4. RENDER ----------
  return (
    <div className="app">
      <header className="app__header">
        <h1>Sole&nbsp;Store 👟</h1>
        <p>Find your next favourite pair.</p>
      </header>

      <div className="app__layout">
        <main>
          <SearchBar
            searchText={searchText}
            onSearchChange={setSearchText}
            brand={brand}
            onBrandChange={setBrand}
            category={category}
            onCategoryChange={setCategory}
            brands={brands}
            categories={categories}
          />

          <ShoeList shoes={filteredShoes} onAddToCart={addToCart} />
        </main>

        {/* The cart reads the SAME state and calls the SAME setters */}
        <Cart
          cartItems={cart}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
}

export default App;
