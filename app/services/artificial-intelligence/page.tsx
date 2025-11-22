import { CTASection } from "@/app/components/CTASection";
import {Hero} from "@/app/services/artificial-intelligence/Hero";
import FAQ from "@/app/components/FAQ";

const faqs = {
  subtitle: "",
  faqs:[
    {
      question:"",
      answer:""
    },
    {
      question:"",
      answer:""
    },

  ]
}

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <Hero/>
      <FAQ faqs={faqs.faqs} subtitle={faqs.subtitle}/>
      <CTASection/>
    </div>
  );
}
