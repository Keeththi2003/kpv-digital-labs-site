
import { CTASection } from "@/app/components/CTASection";
import {Hero} from "@/app/services/Hero";
import {Stats} from "./Stats"
import Services from "@/app/services/Services";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <Hero/>
      <Stats/>
      <Services/>
      <CTASection/>
    </div>
  );
}
