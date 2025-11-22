"use client";

import { useEffect, useRef } from "react";

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">
              Our Software Development Services
            </span>
          </h2>
          <div>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out font-medium text-lg text-white/90 mb-4">
              Practitioners building reliable software — trusted across industries
            </p>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              We design, build, and operate software that delivers measurable business outcomes.
              From product discovery through delivery and run‑time operations, our cross‑functional teams
              focus on reducing risk, improving velocity, and creating durable value for customers.
            </p>
          </div>
        </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                    title: "Product Engineering",
                    desc:
                        "End-to-end product delivery: discovery, architecture, implementation, and continuous improvement.",
                    icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                    ),
                },
                {
                    title: "Cloud & Infrastructure",
                    desc:
                        "Design and operate resilient cloud platforms, migrations, and cost-optimized infrastructure.",
                    icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <path d="M20 17.58A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 4 16.25"></path>
                        </svg>
                    ),
                },
                {
                    title: "Data & Analytics",
                    desc:
                        "Turn raw data into reliable insights with pipelines, warehousing, and observability.",
                    icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <ellipse cx="12" cy="5" rx="8" ry="3"></ellipse>
                            <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"></path>
                            <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"></path>
                        </svg>
                    ),
                },
                {
                    title: "Security & Compliance",
                    desc:
                        "Embed security into development and operations and achieve regulatory compliance.",
                    icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <path d="M12 2l7 4v6c0 5-3.58 9-7 10-3.42-1-7-5-7-10V6l7-4z"></path>
                            <path d="M9 12l2 2 4-4"></path>
                        </svg>
                    ),
                },
                {
                    title: "DevOps & Platform",
                    desc:
                        "Platform engineering, CI/CD, observability and run‑time reliability to accelerate delivery.",
                    icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <rect x="2" y="6" width="20" height="8" rx="2"></rect>
                            <path d="M6 20h12"></path>
                            <path d="M8 10v.01"></path>
                            <path d="M16 10v.01"></path>
                        </svg>
                    ),
                },
                {
                    title: "UX & Design",
                    desc:
                        "User‑centered design, prototyping and research that create delightful, usable products.",
                    icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <path d="M3 21l3-3"></path>
                            <path d="M14.5 6.5l3 3L7 20l-3-3L14.5 6.5z"></path>
                            <path d="M18 9l3-3"></path>
                        </svg>
                    ),
                },
                {
                    title: "AI & Automation",
                    desc:
                        "Automate workflows and leverage ML/AI to augment decision‑making and build smarter products.",
                    icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                        </svg>
                    ),
                },
            ].map((service, idx) => (
                <article
                    key={idx}
                    className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/3 dark:bg-white/2 ring-1 ring-white/6 rounded-2xl p-6 flex flex-col justify-between gap-4"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-none rounded-lg bg-white/5 flex items-center justify-center text-indigo-400">
                            {service.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-white tracking-tight">
                                {service.title}
                            </h3>
                            <p className="mt-2 text-sm text-white/75 max-w-prose leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-white transition-colors"
                            aria-label={`Learn more about ${service.title}`}
                        >
                            <span>Learn more</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </article>
            ))}
            </div>
          </div>
        </div>
    </section>
  );
}
