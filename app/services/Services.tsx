"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Artificial Intelligence",
        desc: "End-to-end product delivery: discovery, architecture, implementation, and continuous improvement.",
        href: "/services/artificial-intelligence",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
        ),
    },
    {
        title: "Devops as a Service",
        desc: "Design and operate resilient cloud platforms, migrations, and cost-optimized infrastructure.",
        href: "/services/devops",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <path d="M20 17.58A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 4 16.25"></path>
            </svg>
        ),
    },
    {
        title: "Enterprise Software Development",
        desc: "Design and build scalable, maintainable enterprise applications — APIs, integrations, microservices, and observability for long‑lived systems.",
        href: "/services/enterprise-software-development",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <rect x="3" y="4" width="18" height="6" rx="1"></rect>
                <rect x="3" y="14" width="18" height="6" rx="1"></rect>
                <path d="M7 10v4"></path>
                <path d="M17 10v4"></path>
            </svg>
        ),
    },
    {
        title: "Managed Service Augmentation",
        desc: "Embed security into development and operations and achieve regulatory compliance.",
        href: "/services/managed-service-augmentation",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <path d="M12 2l7 4v6c0 5-3.58 9-7 10-3.42-1-7-5-7-10V6l7-4z"></path>
                <path d="M9 12l2 2 4-4"></path>
            </svg>
        ),
    },
    {
        title: "MVP Factory",
        desc: "Rapid prototyping and platform engineering to validate ideas fast — CI/CD, observability, and repeatable delivery patterns for early stage products.",
        href: "/services/mvp-factory",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <path d="M12 2v6"></path>
                <path d="M12 22v-6"></path>
                <path d="M4 8l8 8 8-8"></path>
            </svg>
        ),
    },
    {
        title: "QA as a Service",
        desc: "Comprehensive quality engineering: test automation, manual testing, performance, accessibility and security testing to ensure reliable releases.",
        href: "/services/qa",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <rect x="3" y="4" width="14" height="16" rx="2"></rect>
                <path d="M7 8h6"></path>
                <path d="M9.5 14l2 2 4-6"></path>
            </svg>
        ),
    },
    {
        title: "Search Engine Optimization",
        desc: "Improve organic visibility with technical SEO, content strategy, structured data, and analytics-driven optimization.",
        href: "/services/seo",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <circle cx="11" cy="11" r="6"></circle>
                <path d="M21 21l-4.35-4.35"></path>
                <path d="M7 11l3-3 5 5"></path>
            </svg>
        ),
    },
];

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
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">
              Our Software Development Services
            </span>
          </h2>
          <div>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out font-medium text-lg text-white/90 mb-4">
              Practitioners building reliable software — trusted across
              industries
            </p>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              We design, build, and operate software that delivers measurable
              business outcomes. From product discovery through delivery and
              run‑time operations, our cross‑functional teams focus on reducing
              risk, improving velocity, and creating durable value for
              customers.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <article
                key={idx}
                className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/3 dark:bg-white/2 ring-1 ring-white/6 rounded-2xl p-6 flex flex-col justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-none rounded-lg bg-white/5 flex items-center justify-center text-indigo-500">
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
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white border border-white/10 bg-white/3 hover:bg-white/6 transition"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 opacity-90" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
