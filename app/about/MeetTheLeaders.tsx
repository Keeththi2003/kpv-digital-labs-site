"use client";
import { use, useEffect, useRef } from "react";

const leaders = [
  {
    initials: "AM",
    name: "Asha Mehra",
    title: "Founder & CEO",
    bio: "Driven by product-led growth and a passion for sustainable tech.",
  },
  {
    initials: "RK",
    name: "Ravi Kapoor",
    title: "CTO",
    bio: "Builds resilient platforms and champions engineering excellence.",
  },
  {
    initials: "LS",
    name: "Lina Shah",
    title: "Head of Design",
    bio: "Crafts human-centered experiences across web and mobile.",
  },
];

export default function PeopleInBusiness() {
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
      id="peopleInBuisness"
      ref={sectionRef}
      className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">Meet The Leaders</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            We have had the opportunity to work in a wide range of domains,
            technologies, and processes with partners that have given us a deep
            understanding of industry standards and engineering best practices.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          {leaders.map((l) => (
            <div
              key={l.name}
              className="flex gap-4 items-start bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-6 shadow-sm"
            >
              <div className="flex-none w-16 h-16 rounded-full bg-linear-to-br from-indigo-500 to-pink-500 text-white flex items-center justify-center font-bold text-xl">
                {l.initials}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{l.name}</h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                  {l.title}
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {l.bio}
                </p>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </section>
  );
}
