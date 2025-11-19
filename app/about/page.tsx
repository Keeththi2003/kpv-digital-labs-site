import Image from "next/image";
import { HeroSection } from "@/app/components/home/hero";
import { TechStack } from "@/app/components/home/TechStack";
import { CTASection } from "@/app/components/CTASection";
import {Hero} from "@/app/about/Hero";
import { TrustedBy } from "@/app/components/home/TrustedBy";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <Hero/>
      <CTASection/>
    </div>
  );
}
