"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import StatCard from "../StatCard";
import Link from "next/link";


export function TechStack() {

  const sectionRef = useRef<HTMLElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const elements = entry.target.querySelectorAll(".fade-in-element");
              elements.forEach((element, index) => {
                setTimeout(() => {
                  element.classList.add("animate-fade-in-up");
                }, index * 300);
              });
            }
          });
        },
        { threshold: 0.1 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => observer.disconnect();
    }, []);

  return (
    <section
     id="tehStack"
      ref={sectionRef}
     className=" flex flex-col items-center justify-center py-8 relative ">
      <div className="mx-auto max-w-7xl text-center relative z-10 animate-fade-in-hero">
        <div className="text-center mb-24 sm:mb-32 transition-all duration-1000 opacity-100 translate-y-8">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight text-balance">
            We Are Proficient in Your{" "}
            <span className="font-medium italic"> Tech Stack</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Building scalable, maintainable applications with React, Next.js,
            TypeScript, Node.js, Java, .NET, and Tailwind — fast, reliable, and
            production-ready.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-18 sm:mb-24 max-w-5xl px-4 hidden sm:block overflow-hidden animate-fade-in-trust">
          <div className=" relative overflow-hidden w-full max-w-5xl mx-auto">
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
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white text-balance mb-4 sm:mb-6">
            <span> Scale with AI-Powered Software</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
            We are a leading software development outsourcing company
            headquartered in Melbourne, Australia with a proven track record of
            delivering top-tier solutions for businesses worldwide.
          </p>
        </div>

        <div
        className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 px-10 mb-16 transition-all duration-1000 delay-600 opacity-100 translate-y-8"

          >
          <StatCard title="Budget Saved" value={500} suffix="€+" />
          <StatCard title="Years in Feild" value={5} suffix="+" />
          <StatCard title="Client Trusted Us" value={78} suffix="%" />
          <StatCard title="Industries Covered" value={24} />
        </div>
      </div>
      <Link
      href={"/contact"}
      className="relative bg-white hover:bg-gray-300 text-background font-medium px-10 py-3 rounded-full flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group">
        <span className="mr-2">Let&apos;s Talk</span>
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </section>
  );
}
