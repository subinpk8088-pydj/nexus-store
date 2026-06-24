import { useParams } from "react-router-dom";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const inWishlist = isInWishlist(product.id);

  return (
    <section className="product-details">
      <div className="details-container">
        <div className="details-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="details-content">
          <span>{product.category}</span>

          <h1>{product.name}</h1>

          <h2>${product.price}</h2>

          <p>
            Experience premium quality,
            cutting-edge performance and
            seamless connectivity with the
            latest Nexus technology.
          </p>

          <div className="product-actions">
            <button
              className="cart-btn"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>

            <button
              className="wishlist-action-btn"
              onClick={() =>
                inWishlist
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              }
            >
              {inWishlist
                ? "Remove Wishlist"
                : "Add Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;