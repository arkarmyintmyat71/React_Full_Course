import { Navbar } from "../../components/navbar/Navbar";
import { ProductCard } from "../../components/productCard/ProductCard";
import productsData from '../../data/products.json';

export function HomePage() {
  return (
    <>
      <Navbar />

      <div className="products-grid">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.priceCents}
            ratingStars={product.rating.stars}
            ratingCount={product.rating.count}
          />
        ))}

        <button className="reset-btn">
          ↺ Reset
        </button>
        
      </div>

    </>
  );
}