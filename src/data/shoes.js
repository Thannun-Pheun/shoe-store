// ============================================================
// MOCK DATA — the single source of truth for our store
// Each shoe is a plain JavaScript object with 5 fields:
//   id       -> unique number (React uses this as the list "key")
//   title    -> the shoe model name
//   brand    -> used by the Brand filter dropdown
//   price    -> number, formatted with toFixed(2) when displayed
//   category -> used by the Category filter dropdown
//   image    -> placeholder URL. Replace it with your own file later, e.g.
//               import airMax from "../assets/air-max.jpg";  image: airMax
// ============================================================

export const shoes = [
  {
    id: 1,
    title: "Air Max Pulse",
    brand: "Nike",
    price: 129.99,
    category: "Running",
    image: "https://placehold.co/600x400/111827/ffffff?text=Nike+Air+Max",
  },
  {
    id: 2,
    title: "Ultraboost Light",
    brand: "Adidas",
    price: 189.99,
    category: "Running",
    image: "https://placehold.co/600x400/1d4ed8/ffffff?text=Ultraboost",
  },
  {
    id: 3,
    title: "Jordan Playmaker",
    brand: "Nike",
    price: 99.99,
    category: "Basketball",
    image: "https://placehold.co/600x400/b91c1c/ffffff?text=Jordan",
  },
  {
    id: 4,
    title: "Court Vision Low",
    brand: "Nike",
    price: 74.99,
    category: "Casual",
    image: "https://placehold.co/600x400/374151/ffffff?text=Court+Vision",
  },
  {
    id: 5,
    title: "Old Skool",
    brand: "Vans",
    price: 69.99,
    category: "Casual",
    image: "https://placehold.co/600x400/0f766e/ffffff?text=Old+Skool",
  },
  {
    id: 6,
    title: "990v6",
    brand: "New Balance",
    price: 199.99,
    category: "Casual",
    image: "https://placehold.co/600x400/78716c/ffffff?text=NB+990v6",
  },
  {
    id: 7,
    title: "Puma Train Xtend",
    brand: "Puma",
    price: 79.99,
    category: "Training",
    image: "https://placehold.co/600x400/7c3aed/ffffff?text=Puma+Train",
  },
  {
    id: 8,
    title: "Dame 8",
    brand: "Adidas",
    price: 129.99,
    category: "Basketball",
    image: "https://placehold.co/600x400/0369a1/ffffff?text=Dame+8",
  },
];
