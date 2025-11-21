// import { Button } from "@/components/ui/button"
import RotatingText from "@/app/components/home/RotatingText";
import { ArrowRight } from "lucide-react";
import StatCard from "./StatCard";

const Arrow = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const Play = () => (
  <svg
    className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
    />
  </svg>
);

export function TechStack() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-8 relative translate-y-8 transition-all duration-1000">
      <div className="mx-auto text-center relative z-10 animate-fade-in-hero">
        <div className="text-center mb-24 sm:mb-32 transition-all duration-1000 opacity-100 translate-y-8">
          <h2 className="fade-in-element opacity-100 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight text-balance">
            We Are Proficient in Your{" "}
            <span className="font-medium italic"> Tech Stack</span>
          </h2>
          <p className="fade-in-element opacity-100 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Building scalable, maintainable applications with React, Next.js,
            TypeScript, Node.js, Java, .NET, and Tailwind — fast, reliable, and
            production-ready.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-24 sm:mb-32 max-w-5xl px-4 hidden sm:block overflow-hidden animate-fade-in-trust">
          <div className="relative overflow-hidden w-full max-w-5xl mx-auto">
            <div className="flex items-center gap-10 hover:opacity-80 transition-all duration-500 animate-slide-left">
              <div className="flex items-center gap-10 whitespace-nowrap text-9xl">
                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-react-original colored"></i>
                <i className="devicon-nextjs-plain"></i>
                <i className="devicon-tailwindcss-plain colored"></i>
                <i className="devicon-nodejs-plain-wordmark colored"></i>
                <i className="devicon-java-plain-wordmark colored"></i>
                <i className="devicon-typescript-plain colored"></i>
                <i className="devicon-dot-net-plain-wordmark colored"></i>
                <i className="devicon-reactnative-original-wordmark colored"></i>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-10 whitespace-nowrap text-6xl">
                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-react-original colored"></i>
                <i className="devicon-nextjs-plain"></i>
                <i className="devicon-tailwindcss-plain colored"></i>
                <i className="devicon-nodejs-plain-wordmark colored"></i>
                <i className="devicon-java-plain-wordmark colored"></i>
                <i className="devicon-typescript-plain colored"></i>
                <i className="devicon-dot-net-plain-wordmark colored"></i>
                <i className="devicon-reactnative-original-wordmark colored"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Trust Indicators */}
        <div className="text-center px-4 mb-10 sm:hidden overflow-hidden animate-fade-in-trust">
          <div className="relative overflow-hidden w-full max-w-sm mx-auto">
            <div className="flex items-center gap-6 opacity-60 animate-slide-left-mobile">
              <div className="flex items-center gap-6 whitespace-nowrap text-4xl">
                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-react-original colored"></i>
                <i className="devicon-nextjs-plain"></i>
                <i className="devicon-tailwindcss-plain colored"></i>
                <i className="devicon-nodejs-plain-wordmark colored"></i>
                <i className="devicon-java-plain-wordmark colored"></i>
                <i className="devicon-typescript-plain colored"></i>
                <i className="devicon-dot-net-plain-wordmark colored"></i>
                <i className="devicon-reactnative-original-wordmark colored"></i>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-6 whitespace-nowrap text-4xl">
                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-react-original colored"></i>
                <i className="devicon-nextjs-plain"></i>
                <i className="devicon-tailwindcss-plain colored"></i>
                <i className="devicon-nodejs-plain-wordmark colored"></i>
                <i className="devicon-java-plain-wordmark colored"></i>
                <i className="devicon-typescript-plain colored"></i>
                <i className="devicon-dot-net-plain-wordmark colored"></i>
                <i className="devicon-reactnative-original-wordmark colored"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16 sm:mb-24 transition-all duration-1000 opacity-100 translate-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            <span> Scale with AI-Powered Software</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
            We are a leading software development outsourcing company
            headquartered in Melbourne, Australia with a proven track record of
            delivering top-tier solutions for businesses worldwide.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 px-10 mb-6 sm:mb-16 transition-all duration-1000 delay-600 opacity-100 translate-y-8"
          `}
        >
          <StatCard title="Budget Saved" value={500} suffix="€+" />
          <StatCard title="Budget Saved" value={500} suffix="€+" />
          <StatCard title="Client Trusted Us" value={78} suffix="%" />
          <StatCard title="Industries Covered" value={24} />
        </div>
      </div>
      <button className="relative bg-white hover:bg-gray-300 text-background font-medium px-10 py-3 rounded-full flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group">
        <span className="mr-2">Let&apos;s Talk</span>
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </section>
  );
}
