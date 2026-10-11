// ============================================================
// Cart.jsx
// The shopping cart panel.
//
// IMPORTANT IDEA: a cart item is NOT just a shoe. It is the shoe plus
// a quantity: { ...shoe, quantity: 2 }. App.jsx hands us that array.
//
// This component displays things and forwards button clicks upward.
// It never touches state itself — all mutations live in App.jsx.
// ============================================================

function Cart({ cartItems, onIncrease, onDecrease, onRemove, totalPrice }) {
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <aside className="cart">
      <h2 className="cart__heading">
        Your Cart
        {/* itemCount tells the user how many pairs they have, not how many lines */}
        <span className="cart__count">{itemCount}</span>
      </h2>

      {cartItems.length === 0 ? (
        <p className="cart__empty">Your cart is empty. Add some shoes!</p>
      ) : (
        <ul className="cart__list">
          {cartItems.map((item) => (
            <li className="cart-item" key={item.id}>
              <img className="cart-item__image" src={item.image} alt={item.title} />

              <div className="cart-item__info">
                <p className="cart-item__brand">{item.brand}</p>
                <p className="cart-item__title">{item.title}</p>
                <p className="cart-item__price">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>

              <div className="cart-item__controls">
                {/* Quantity stepper: - [n] + */}
                <div className="qty">
                  <button className="qty__btn" onClick={() => onDecrease(item.id)} aria-label="Decrease quantity">
                    −
                  </button>
                  <span className="qty__value">{item.quantity}</span>
                  <button className="qty__btn" onClick={() => onIncrease(item.id)} aria-label="Increase quantity">
                    +
                  </button>
                </div>

                <button className="cart-item__remove" onClick={() => onRemove(item.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <div className="cart__footer">
          <span>Total</span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>
      )}
    </aside>
  );
}

export default Cart;
