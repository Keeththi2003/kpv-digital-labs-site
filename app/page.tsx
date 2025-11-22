import Image from "next/image";
import { HeroSection } from "./components/home/hero";
import { TechStack } from "./components/home/TechStack";
import { CTASection } from "./components/CTASection";
import { TrustedBy } from "./components/home/TrustedBy";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <HeroSection/>
      <TechStack></TechStack>
      <TrustedBy/>
      <Testimonials/>
      <CTASection/>
    </div>
  );
}
