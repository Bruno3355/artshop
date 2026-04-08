import Logo from "@/src/core/interface/components/atoms/Logo/Logo";
import Hero from "@/src/core/interface/components/organisms/Hero/Hero";


export default function Home() {
  return (
<div className="flex flex-col gap-section-y">
    <Hero />
    <div>Highlights</div>
</div>
  )
}
