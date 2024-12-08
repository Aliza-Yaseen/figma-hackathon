import Navbar from "@/components/navbar";
import HeroSection from "../components/pages/hero";
import Logos from "@/components/pages/logo";
import FeaturedProducts from "@/components/pages/feProd";
import TopCategories from "@/components/pages/top";
import ExploreStyles from "@/components/pages/exp";
import ProductGrid from "@/components/pages/our";
import Footer from "@/components/pages/footer";
// import InstagramSection from "@/components/pages/insta";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Logos/>
      <FeaturedProducts/>
      <TopCategories/>
      <ExploreStyles/>
      <ProductGrid/>
      <Footer/>
    </div>
  );
}
