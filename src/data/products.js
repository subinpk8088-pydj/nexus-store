import headphones from "../assets/images/products/headphones.jpg";
import smartwatch from "../assets/images/products/smartwatch.jpg";
import earbuds from "../assets/images/products/earbuds.jpg";
import laptop from "../assets/images/products/laptop.jpg";

const products = [
  {
    id: 1,
    name: "Nexus AirPods Pro",
    category: "Audio",
    price: 249,
    image: earbuds,
    featured: true,
  },

  {
    id: 2,
    name: "Nexus Smart Watch X",
    category: "Wearables",
    price: 399,
    image: smartwatch,
    featured: true,
  },

  {
    id: 3,
    name: "Nexus Studio Headphones",
    category: "Audio",
    price: 599,
    image: headphones,
    featured: true,
  },

  {
    id: 4,
    name: "NexusBook Ultra",
    category: "Computing",
    price: 1499,
    image: laptop,
    featured: true,
  },

  {
    id: 5,
    name: "Nexus Air Max",
    category: "Audio",
    price: 199,
    image: earbuds,
    featured: false,
  },

  {
    id: 6,
    name: "Nexus Watch Pro",
    category: "Wearables",
    price: 499,
    image: smartwatch,
    featured: false,
  },

  {
    id: 7,
    name: "NexusBook Air",
    category: "Computing",
    price: 999,
    image: laptop,
    featured: false,
  },

  {
    id: 8,
    name: "Nexus Sound Elite",
    category: "Audio",
    price: 699,
    image: headphones,
    featured: false,
  },
];

export default products;