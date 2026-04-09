import Logo from "@/src/core/interface/components/atoms/Logo/Logo";
import Hero from "@/src/core/interface/components/organisms/Hero/Hero";
import RecomendedProducts from "@/src/core/interface/components/organisms/RecomendedProducts/RecomendedProducts";


export default function Home() {
  return (
<div className="flex flex-col gap-section-y">
    <Hero className="py-section-y"/>
    <RecomendedProducts className="bg-accent h-36"/>
</div>
  )
}
