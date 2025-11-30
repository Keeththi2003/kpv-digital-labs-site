
import { CTASection } from "@/app/components/CTASection";
import {Hero} from "@/app/how-we-work/staff-agumentation/Hero";
import WorkSteps from "@/app/how-we-work/staff-agumentation/WorkSteps";
import FAQ from "./FAQ";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <Hero/>
      <WorkSteps/>
      <FAQ/>
      <Projects/>
      <CTASection/>
    </div>
  );
}
