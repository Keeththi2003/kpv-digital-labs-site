"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const vaccancies = [
  {
    role: "Software Engineer Intern",
    location: "remote",
    skills: ["React", "Java", "Tailwind"],
    disc: "Work with mentors on real product features: implement UI components, write tests, and contribute to backend services. Great for learning full‑stack engineering practices.",
    href: "#",
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
        <rect x="3" y="4" width="18" height="14" rx="2"></rect>
        <path d="M8 20h8"></path>
        <path d="M9 8h6"></path>
      </svg>
    ),
  },
  {
    role: "Frontend Engineer",
    location: "hybrid (NYC)",
    skills: ["React", "TypeScript", "CSS", "Next.js"],
    disc: "Design and implement performant, accessible user interfaces. Collaborate with product and design to ship pixel‑perfect UIs and optimize client rendering and bundle size.",
    href: "#",
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
        <path d="M3 7h18"></path>
        <rect x="3" y="7" width="18" height="13" rx="2"></rect>
        <path d="M7 3v4"></path>
        <path d="M17 3v4"></path>
      </svg>
    ),
  },
  {
    role: "Backend Engineer",
    location: "remote",
    skills: ["Node.js", "Postgres", "API design", "Docker"],
    disc: "Build scalable APIs and services, design data models, and optimize queries. Ownership of reliability, performance, and backend architecture decisions.",
    href: "#",
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
        <path d="M6 8v6a6 6 0 0012 0V8"></path>
        <rect x="3" y="8" width="18" height="8" rx="2"></rect>
      </svg>
    ),
  },
  {
    role: "DevOps Engineer",
    location: "onsite (London)",
    skills: ["Kubernetes", "Terraform", "CI/CD", "AWS"],
    disc: "Manage cloud infrastructure, automate deployments, and improve observability. Drive SRE practices to reduce incidents and improve recovery time.",
    href: "#",
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
        <path d="M12 2v4"></path>
        <path d="M12 18v4"></path>
        <path d="M4.9 4.9l2.8 2.8"></path>
        <path d="M16.3 16.3l2.8 2.8"></path>
        <path d="M2 12h4"></path>
        <path d="M18 12h4"></path>
        <path d="M4.9 19.1l2.8-2.8"></path>
        <path d="M16.3 7.7l2.8-2.8"></path>
      </svg>
    ),
  },
  {
    role: "Product Designer",
    location: "remote",
    skills: ["Figma", "UX research", "Prototyping"],
    disc: "Lead user research, craft interaction patterns, and produce high‑fidelity prototypes. Work closely with engineers to ensure designs are feasible and consistent.",
    href: "#",
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
        <path d="M3 21l3-3 4 4 11-11a4 4 0 00-5.657-5.657L5 16l-2 5z"></path>
      </svg>
    ),
  },
  {
    role: "Data Scientist",
    location: "hybrid (Berlin)",
    skills: ["Python", "Pandas", "ML", "SQL"],
    disc: "Analyze product and usage data, build predictive models, and work with teams to turn insights into measurable product improvements.",
    href: "#",
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
        <circle cx="12" cy="8" r="3"></circle>
        <path d="M19 21v-6"></path>
        <path d="M5 21v-4"></path>
        <path d="M12 11v10"></path>
      </svg>
    ),
  },
  {
    role: "QA Engineer",
    location: "remote",
    skills: ["Testing", "Cypress", "Automation", "TDD"],
    disc: "Create test strategies, implement automated test suites, and help maintain high quality across releases through strong testing discipline and CI integration.",
    href: "#",
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
        <path d="M20 6L9 17l-5-5"></path>
        <rect x="2" y="3" width="20" height="18" rx="2"></rect>
      </svg>
    ),
  },
];

export default function OurOpenings() {
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
      id="ourOpenings"
      ref={sectionRef}
      className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">Our Benifits </span>
          </h2>
          <div>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out font-medium text-lg text-white/90 mb-4">
              People‑first teams building reliable, scalable software trusted by
              organizations worldwide.
            </p>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              We partner across product and design to deliver end‑to‑end
              solutions — from discovery and prototyping to deployment and
              production operations. Our cross‑functional teams prioritize
              reliability, measurable outcomes, and continuous improvement, with
              mentorship, autonomy, and modern tooling to help you grow.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {vaccancies.map((vaccancie, index) => (
            <article
              key={index}
              className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/3 rounded-xl p-6 border border-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-linear-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-medium text-lg">
                    JS
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {vaccancie.role}
                  </h3>
                  <p className="text-sm text-white/70">{vaccancie.location}</p>
                </div>
              </div>
              <p className="mt-4 text-white/70 leading-relaxed">
                {vaccancie.disc}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {vaccancie.skills.map((skill) => (
                  <li className="text-xs px-2 py-1 bg-white/5 rounded text-white/80">
                    {skill}
                  </li>
                ))}
               
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
