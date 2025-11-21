"use client";
import { use, useEffect, useRef } from "react";
import Image from "next/image";

export default function TeamCulture() {

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
  
  const pillars = [
    { title: "Curiosity", desc: "We ask better questions and learn fast. We experiment, iterate, and share findings to continuously improve our products and processes.", color: "from-green-400 to-blue-500" },
    { title: "Craftsmanship", desc: "Quality over shortcuts—every time. We take pride in well-tested, maintainable code and thoughtful design that scales.", color: "from-yellow-400 to-orange-500" },
    { title: "Collaboration", desc: "Cross-functional teams, shared outcomes. We communicate openly, give constructive feedback, and align on goals to deliver impact together.", color: "from-purple-400 to-pink-500" },
    { title: "Ownership", desc: "We take responsibility end-to-end for outcomes and follow through. We proactively remove blockers, measure results, and learn from failures.", color: "from-teal-400 to-cyan-500" },
    { title: "Adaptability", desc: "We embrace change and respond quickly to new information. We balance long-term vision with pragmatic pivots when needed.", color: "from-indigo-400 to-purple-500" },
  ];

  return (
      <section
        id="meetTheLeaders"
        ref={sectionRef}
        className="relative py-4 px-4 sm:px-6 lg:px-8 mb-16"
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
  
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight text-balance">
              <span className="font-medium">Our Team Culture</span>
            </h2>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              We build reliable products through shared ownership, clear communication, and rigorous engineering. By iterating quickly, learning openly, and prioritizing user outcomes, we deliver scalable solutions that stand the test of time.
            </p>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            {pillars.map((l,index) => (
              <div
                key={index}
                className="flex flex-col gap-4 items-start bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:p-6 hover:bg-white/10 transition-all duration-300 p-6 shadow-sm"
              >
                <div className="flex justify-start items-center gap-3 w-full">
                  <div className="flex-none w-16 h-16 rounded-full overflow-hidden relative ">
                    <div className={`w-full h-full rounded-full bg-linear-to-br ${l.color} flex items-center justify-center shadow-md`}>
                      {l.title === "Curiosity" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 17a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" />
                        </svg>
                      ) : l.title === "Craftsmanship" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 13.3l-5.4 5.4a2 2 0 01-2.83 0l-1.4-1.4a2 2 0 010-2.83l5.4-5.4" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 7.5a2.1 2.1 0 00-2.97 0L16 9l1.5 1.5 1.53-1.53a2.1 2.1 0 000-2.97z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
                          <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 8a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col  items-start justify-center">
                    <h3 className="text-lg font-semibold">{l.title}</h3>
                  </div>
                </div>
                <div>
                  <p className="mt-2 text-md text-gray-200 leading-relaxed">
                    {l.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>{" "}
          <div>
          </div>
        </div>
      </section>
    );
}
