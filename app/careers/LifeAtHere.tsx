"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";

const projects = [
  {
    id: "p1",
    title: "Product Discovery Platform",
    description:
      "Research-driven platform that helped a fintech startup validate market fit and accelerate MVP delivery.",
    image: "/pr1.jpeg",
    href: "#",
  },
  {
    id: "p2",
    title: "Scalable Commerce API",
    description:
      "Headless commerce API built for high throughput, reducing latency and improving checkout conversion.",
    image: "/pr2.png",
    href: "#",
  },
  {
    id: "p3",
    title: "Enterprise Data Pipeline",
    description:
      "Robust ETL pipeline that unified analytics and slashed reporting time from hours to minutes.",
    image: "/pr3.jpeg",
    href: "#",
  },
];

export default function LifeAtHere() {
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
      id="lifeAtHere"
      ref={sectionRef}
      className=" pt-16 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto flex  flex-col items-center">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">Life at KPV Digital Labs</span>
          </h2>
          <div>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out font-medium text-lg text-white/90 mb-4">
                A product-engineering culture focused on craftsmanship and measurable impact
            </p>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                For over a decade we've partnered with startups and enterprises to design, build, and scale mission‑critical products. We combine user-centered design, pragmatic engineering, and data-driven decision making to speed delivery, reduce risk, and drive real business outcomes.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto ">
          
        </div>

      
      </div>
    </section>
  );
}
