import './ProductCard.css'

export function ProductCard({ image, name, price, ratingStars, ratingCount }) {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={image}
          alt={name}
          className="product-image"
        />
      </div>

      <p className="product-name">{name}</p>

      <div className="product-detail">
        <img
          src={new URL(
            `../../assets/ratings/rating-${ratingStars * 10}.png`,
            import.meta.url
          ).href}
          className="rating"
          alt="rating"
        />

        <p className="rating-no">
          {ratingCount}
        </p>
      </div>

      <div className="price">
        ${(price / 100).toFixed(2)}
      </div>

      <div className="quantity">
        <select>
          {[...Array(10)].map((_, index) => (
            <option
              key={index + 1}
              value={index + 1}
            >
              {index + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="add-to-cart-btn">
        <button>Add to Cart</button>
      </div>
    </div>
  );
}