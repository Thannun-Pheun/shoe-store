# Sole Store — beginner React shoe store

Plain React (Vite + plain CSS, no other libraries). Covers: shoe card UI,
grid layout, full cart logic (add / remove / + / − / total), search box and
brand + category filters. All files are heavily commented for learning.

```
package.json           npm config — react, react-dom, vite
vite.config.js         enables JSX via @vitejs/plugin-react
index.html             page shell with <div id="root">
src/
  main.jsx             mounts <App /> into the page
  index.css            all styling (plain CSS)
  App.jsx              ALL STATE: cart + filters, cart functions, .filter()
  data/shoes.js        8 mock shoes (id, title, brand, price, category, image)
  components/
    ShoeList.jsx       maps shoes -> responsive CSS grid of ShoeCard
    ShoeCard.jsx       image, brand, title, category, price, "Add to Cart"
    SearchBar.jsx      controlled input + brand/category dropdowns
    Cart.jsx           cart lines, quantity +/- steppers, Remove, total
dist/                  pre-built version (what the live preview serves)
```

## Run it on your computer

```bash
npm install
npm run dev        # http://localhost:5173
```

## About the images

`placehold.co` is a placeholder service (it just prints text on a colored box)
so the demo always works. To use real photos: pick a shoe on
https://unsplash.com/s/photos/shoes, save the photo into `src/assets/`, then in
`src/data/shoes.js` do:

```js
import airMax from "../assets/air-max.jpg";
// ... image: airMax
```

## Suggested next steps (in order)

1. localStorage: save `cart` with `useEffect` so it survives refresh.
2. A quantity badge on each "Add to Cart" button.
3. Split cart state into a custom hook (`useCart`) once it feels comfortable.
