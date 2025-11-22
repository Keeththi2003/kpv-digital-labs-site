
import { CTASection } from "@/app/components/CTASection";
import {Hero} from "@/app/services/Hero";
import {Stats} from "./Stats"
import Services from "@/app/services/Services";
import Projects from "@/app/how-we-work/Projects"; 
import Testimonials from "@/app/services/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <Hero/>
      <Stats/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <CTASection/>
    </div>
  );
}
