import ProductCard from "../modules/caching/components/ProductCard";
import CacheInfo from "../modules/caching/components/CacheInfo";

import { useProducts } from "../modules/caching/hooks/useProducts";

const CachingPage = () => {
  const { data = [], isLoading, isFetching } = useProducts();

  if (isLoading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">React Query Caching</h1>

      <CacheInfo isFetching={isFetching} />

      <div className="grid grid-cols-2 gap-4">
        {data.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CachingPage;
