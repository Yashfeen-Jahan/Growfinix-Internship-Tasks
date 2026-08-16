import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <section className="flex-1">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-stone-800">
          Products
        </h2>

        <p className="text-stone-900">
          {products.length} Products
        </p>
      </div>

      {/* Products */}
      {products.length === 0 ? (
        <div className="bg-[#fdc591] backdrop-blur-md rounded-xl shadow-md p-10 text-center">
          <div className="text-5xl mb-4">🔍</div>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            No Products Found
          </h3>

          <p className="text-[#ec5100]">
            Try changing your search or filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

    </section>
  );
};

export default ProductList;