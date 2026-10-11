// ============================================================
// SearchBar — a controlled search input + brand & category dropdowns
//
// "Controlled component" = the input's value ALWAYS comes from React
// state (props), and every keystroke is sent back up to App.jsx via a
// callback. App.jsx owns the state, this bar just reports what changed.
// ============================================================

function SearchBar({ searchText, onSearchChange, brand, onBrandChange, category, onCategoryChange, brands, categories }) {
  return (
    <div className="search-bar">
      {/* 1) Text search — matches shoe title or brand */}
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search shoes or brands..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* 2) Brand dropdown — options built from the data itself */}
      <select
        className="search-bar__select"
        value={brand}
        onChange={(e) => onBrandChange(e.target.value)}
      >
        <option value="All Brands">All Brands</option>
        {brands.map((b) => (
          <option key={b} value={b}>{b}</option>
        ))}
      </select>

      {/* 3) Category dropdown */}
      <select
        className="search-bar__select"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All Categories">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
