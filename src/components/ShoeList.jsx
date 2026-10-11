// ============================================================
// ShoeList — turns an array of shoes into a CSS grid of ShoeCards
//
// PROPS:
//   shoes       -> the (already filtered!) array to display
//   onAddToCart -> passed straight through to every ShoeCard
// ============================================================

import ShoeCard from "./ShoeCard";

function ShoeList({ shoes, onAddToCart }) {
  // Empty state: if the search matches nothing, show a friendly message
  if (shoes.length === 0) {
    return <p className="empty">No shoes match your search.</p>;
  }

  return (
    // .shoe-grid in the CSS does the layout: display:grid + grid-template-columns
    <div className="shoe-grid">
      {/* .map() converts our array of data into an array of JSX elements.
          key={shoe.id} tells React which item is which (required for lists). */}
      {shoes.map((shoe) => (
        <ShoeCard key={shoe.id} shoe={shoe} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ShoeList;
