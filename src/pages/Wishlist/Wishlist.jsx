import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import "./Wishlist.css";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <section className="empty-wishlist">
        <h1>Your Wishlist Is Empty</h1>

        <p>
          Save products you love and
          access them anytime.
        </p>

        <Link to="/shop" className="shop-btn">
          Explore Products
        </Link>
      </section>
    );
  }

  return (
    <section className="wishlist">
      <div className="wishlist-header">
        <h1>My Wishlist</h1>

        <p>
          Keep track of products you're
          interested in.
        </p>
      </div>

      <div className="wishlist-grid">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="wishlist-card"
          >
            <Link
              to={`/product/${product.id}`}
            >
              <div className="wishlist-image">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </Link>

            <div className="wishlist-info">
              <span>
                {product.category}
              </span>

              <h3>{product.name}</h3>

              <p>${product.price}</p>

              <div className="wishlist-actions">
                <Link
                  to={`/product/${product.id}`}
                  className="view-btn"
                >
                  View Product
                </Link>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromWishlist(
                      product.id
                    )
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Wishlist;