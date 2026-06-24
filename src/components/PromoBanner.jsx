import "./PromoBanner.css";

import banner from "../assets/images/banner/promo-banner.jpg";

function PromoBanner() {
  return (
    <section className="promo-banner">
      <img src={banner} alt="Future Technology" />

      <div className="promo-overlay">
        <span>NEW GENERATION TECHNOLOGY</span>

        <h2>
          Innovation
          <br />
          Designed For Tomorrow.
        </h2>

        <p>
          Powerful devices engineered with precision,
          performance and simplicity at their core.
        </p>

        <button>Explore Collection</button>
      </div>
    </section>
  );
}

export default PromoBanner;