import "./Categories.css";

import mobile from "../assets/images/categories/mobile.jpg";
import audio from "../assets/images/categories/audio.jpg";
import wearables from "../assets/images/categories/wearables.jpg";
import computing from "../assets/images/categories/computing.jpg";

function Categories() {
  const categories = [
    {
      title: "Mobile",
      image: mobile,
    },
    {
      title: "Audio",
      image: audio,
    },
    {
      title: "Wearables",
      image: wearables,
    },
    {
      title: "Computing",
      image: computing,
    },
  ];

  return (
    <section className="categories">
      <div className="categories-header">
        <h2>Explore Categories</h2>

        <p>
          Discover a complete ecosystem of premium technology
          designed to elevate every part of your life.
        </p>
      </div>

      <div className="categories-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="category-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;