import Image from "next/image";
import { HeroSection } from "./components/home/hero";
import { TechStack } from "./components/home/TechStack";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center  font-sans dark:bg-black ">
      <HeroSection/>
      <TechStack></TechStack>
    </div>
  );
}
