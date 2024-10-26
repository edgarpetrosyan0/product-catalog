import Dropdown from '../components/Dropdown';
import productsData from '../data/products';

export default function FilterPanel({ filters, setFilters }) {

  const categories = ["All", ...new Set(productsData.map((item) => item.category))];
  const brands = ["All", ...new Set(productsData.map((item) => item.brand))];

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };


  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-md mb-4 lg:mb-0 w-full lg:w-1/4">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <Dropdown
        label="Select Category"
        options={categories}
        selected={filters.category}
        onSelect={(value) => handleFilterChange("category", value)}
      />

      <Dropdown
        label="Select Brand"
        options={brands}
        selected={filters.brand}
        onSelect={(value) => handleFilterChange("brand", value)}
      />

      <label className="mb-2">Price Range:</label>
      <b className="text-sm">Up to ${filters.priceRange[1]}</b>
      <input
        type="range"
        min="0"
        max="500"
        value={filters.priceRange[1]}
        onChange={(e) => handleFilterChange("priceRange", [0, e.target.value])}
        className="mb-4 w-full"
      />

      <label className="mb-2">Rating:</label>
      <input
        type="number"
        min="0"
        max="5"
        value={filters.rating}
        onChange={(e) => handleFilterChange("rating", Number(e.target.value))}
        className="mb-4 p-2 border rounded"
      />
    </div>
  );
}

