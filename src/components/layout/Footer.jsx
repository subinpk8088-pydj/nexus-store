import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>NEXUS</h2>

          <p>
            Premium electronics crafted for
            performance, innovation, and
            everyday excellence.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Store</h4>

            <a href="#">Audio</a>
            <a href="#">Wearables</a>
            <a href="#">Computing</a>
            <a href="#">Accessories</a>
          </div>

          <div className="footer-column">
            <h4>Support</h4>

            <a href="#">Help Center</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>

            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Nexus Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;