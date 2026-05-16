import AboutUs from "@/src/core/interface/components/organisms/AboutUs/AboutUs";
import Hero from "@/src/core/interface/components/organisms/Hero/Hero";
import Newsletter from "@/src/core/interface/components/organisms/Newsletter/Newsletter";
import RecomendedProducts from "@/src/core/interface/components/organisms/RecomendedProducts/RecomendedProducts.server";

export default function Home() {
  return (
    <div className="flex flex-col gap-section-y pb-section-y">
      <Hero />
      <RecomendedProducts />
      <AboutUs className="px-section-x" />
      <Newsletter />
    </div>
  );
}
