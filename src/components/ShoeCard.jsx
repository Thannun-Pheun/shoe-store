// ============================================================
// ShoeCard — one single shoe tile in the grid
//
// PROPS (data passed in from the parent):
//   shoe        -> one shoe object from shoes.js
//   onAddToCart -> a FUNCTION owned by App.jsx. We never modify the
//                  cart inside this component, we just CALL the function
//                  and let the parent handle state. ("Lift state up")
// ============================================================

function ShoeCard({ shoe, onAddToCart }) {
  return (
    <article className="shoe-card">
      {/* Shoe image. alt text is required for accessibility */}
      <img
        className="shoe-card__image"
        src={shoe.image}
        alt={`${shoe.brand} ${shoe.title}`}
      />

      <div className="shoe-card__body">
        {/* Brand shown small + uppercase above the title */}
        <p className="shoe-card__brand">{shoe.brand}</p>

        {/* Shoe model name */}
        <h3 className="shoe-card__title">{shoe.title}</h3>

        {/* Category tag, e.g. "Running" */}
        <span className="shoe-card__category">{shoe.category}</span>

        <div className="shoe-card__footer">
          {/* price is a number, so we turn it into text: 129.99 -> "$129.99" */}
          <p className="shoe-card__price">${shoe.price.toFixed(2)}</p>

          {/* onClick receives a function. The arrow ()=>... delays the call
              until the user actually clicks (otherwise it would fire on render). */}
          <button
            className="shoe-card__button"
            onClick={() => onAddToCart(shoe)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ShoeCard;
