
import { CTASection } from "@/app/components/CTASection";
import {Hero} from "@/app/resources/case-studies/Hero";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <Hero/>
      <CTASection/>
    </div>
  );
}
