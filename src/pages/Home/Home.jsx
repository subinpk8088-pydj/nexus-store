import Hero from "../../components/Hero";
import FeaturedProducts from "../../components/FeaturedProducts";
import Categories from "../../components/Categories";
import PromoBanner from "../../components/PromoBanner";
import WhyNexus from "../../components/WhyNexus";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <PromoBanner />
      <WhyNexus />
    </>
  );
}

export default Home;