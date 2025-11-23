import { CTASection } from "@/app/components/CTASection";
import {Hero} from "@/app/careers/Hero";
import LifeAtHere from "@/app/careers/LifeAtHere";
import OurBenifits from "./OurBenifits";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <Hero/>
      <LifeAtHere/>
      <OurBenifits/>
      <CTASection/>
    </div>
  );
}
