import { useState, useEffect } from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";

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

  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          NEXUS
        </Link>

        <nav
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >
          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/shop"
            onClick={closeMenu}
          >
            Store
          </Link>

          <Link
            to="/wishlist"
            onClick={closeMenu}
          >
            Wishlist
          </Link>

          <Link
            to="/cart"
            onClick={closeMenu}
          >
            Cart
          </Link>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn">
            <FiSearch />
          </button>

          <Link
            to="/wishlist"
            className="icon-btn cart-btn"
            onClick={closeMenu}
          >
            <FiHeart />

            <span className="badge">
              {wishlist.length}
            </span>
          </Link>

          <Link
            to="/cart"
            className="icon-btn cart-btn"
            onClick={closeMenu}
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