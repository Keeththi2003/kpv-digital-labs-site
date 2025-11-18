import Image from "next/image";
import { HeroSection } from "./components/home/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans dark:bg-black ">
      <HeroSection/>
    </div>
  );
}
