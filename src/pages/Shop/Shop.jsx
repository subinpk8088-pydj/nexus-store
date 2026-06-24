 import { useState } from "react";
import { Link } from "react-router-dom";

import products from "../../data/products";
import "./Shop.css";

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="shop">
      <div className="shop-header">
        <h1>Store</h1>

        <p>
          Discover premium technology crafted
          for everyday excellence.
        </p>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option value="All">All</option>
          <option value="Audio">Audio</option>
          <option value="Wearables">
            Wearables
          </option>
          <option value="Computing">
            Computing
          </option>
        </select>
      </div>

      <div className="shop-grid">
        {filteredProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="shop-card"
          >
            <img
              src={product.image}
              alt={product.name}
            />

            <div className="shop-info">
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

export default Shop;