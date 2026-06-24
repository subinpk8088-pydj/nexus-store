import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="hero-tag">
          New Release
        </span>

        <h1>
          Experience Technology
          <br />
          Without Limits.
        </h1>

        <p>
          Discover premium devices crafted for speed,
          creativity, and everyday performance.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Shop Now
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200"
          alt="Premium Device"
        />
      </div>
    </section>
  );
}

export default Hero;