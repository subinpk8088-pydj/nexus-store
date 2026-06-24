import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingBag,
  FiHeart,
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount } = useCart();
  const { wishlist } = useWishlist();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          NEXUS
        </Link>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/shop">Store</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn">
            <FiSearch />
          </button>

          <Link
            to="/wishlist"
            className="icon-btn cart-btn"
          >
            <FiHeart />

            <span className="badge">
              {wishlist.length}
            </span>
          </Link>

          <Link
            to="/cart"
            className="icon-btn cart-btn"
          >
            <FiShoppingBag />

            <span className="badge">
              {cartCount}
            </span>
          </Link>

          <button
            className="menu-btn"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen ? (
              <FiX />
            ) : (
              <FiMenu />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;