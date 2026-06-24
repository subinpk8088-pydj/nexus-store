import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

import products from "../data/products";
import { useWishlist } from "../context/WishlistContext";

import "./FeaturedProducts.css";

function FeaturedProducts() {
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  return (
    <section className="featured">
      <div className="featured-header">
        <h2>Featured Products</h2>

        <p>
          Designed to deliver exceptional performance,
          premium craftsmanship and seamless experiences.
        </p>
      </div>

      <div className="products-grid">
        {featuredProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-card"
          >
            <button
              className={`wishlist-btn ${
                isInWishlist(product.id)
                  ? "active"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();

                if (
                  isInWishlist(product.id)
                ) {
                  removeFromWishlist(
                    product.id
                  );
                } else {
                  addToWishlist(product);
                }
              }}
            >
              <FiHeart />
            </button>

            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="product-info">
              <span>{product.category}</span>

              <h3>{product.name}</h3>

              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;