import ProductItem from './ProductItem';

export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-grow">
      {products.length > 0 ? (
        products.map(product => <ProductItem key={product.id} product={product} />)
      ) : (
        <p className="text-center col-span-full">No products found</p>
      )}
    </div>
  );
}
