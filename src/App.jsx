import { useState, useEffect } from 'react';
import productsData from './data/products';
import FilterPanel from './components/FilterPanel';
import ProductList from './components/ProductList';
import Loader from './components/Loader';

function App() {
  const [filters, setFilters] = useState({
    category: 'All',
    brand: 'All',
    priceRange: [0, 500],
    rating: 0,
  });
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  
  useEffect(() => {
    // Save filters to localStorage
    localStorage.setItem('filters', JSON.stringify(filters));
  }, [filters]);

  useEffect(() => {
    const applyFilters = () => {
      setLoading(true);
      setTimeout(() => {
        const filtered = productsData.filter((product) => {
          const withinPriceRange = product.price <= filters.priceRange[1];
          const matchesCategory = filters.category === 'All' || product.category === filters.category;
          const matchesBrand = filters.brand === 'All' || product.brand === filters.brand;
          const matchesRating = product.rating >= filters.rating;
          return withinPriceRange && matchesCategory && matchesBrand && matchesRating;
        });

        setFilteredProducts(filtered);
        setLoading(false);
      }, 1000);
    };

    applyFilters();
  }, [filters]);

  return (
    <div className="flex flex-col lg:flex-row p-4">
      <FilterPanel filters={filters} setFilters={setFilters} />
      <div className="flex-grow ml-4">
        {loading ? (
          <Loader />
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </div>
    </div>
  );
}

export default App;
