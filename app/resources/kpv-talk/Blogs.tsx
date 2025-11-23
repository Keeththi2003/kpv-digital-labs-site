"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";

const episodes = [
    {
        id: "e1",
        title: "Episode 1 — Building Scalable APIs",
        description:
            "Hands-on walkthrough of designing APIs for high concurrency: routing, rate limiting, caching, and autoscaling with real benchmark results.",
        image: "/episodes/ep1.jpeg",
        href: "https://youtu.be/placeholder-e1",
    },
    {
        id: "e2",
        title: "Episode 2 — Product Discovery to MVP",
        description:
            "A practical playbook for discovery: user interviews, prototyping, and shipping an MVP in weeks with measurable validation techniques.",
        image: "/episodes/ep2.jpeg",
        href: "https://youtu.be/placeholder-e2",
    },
    {
        id: "e3",
        title: "Episode 3 — Observability & SLOs",
        description:
            "Implementing logs, metrics, and tracing; defining SLOs and alerting to catch issues before customers do.",
        image: "/episodes/ep3.jpeg",
        href: "https://youtu.be/placeholder-e3",
    },
    {
        id: "e4",
        title: "Episode 4 — Event-Driven Architectures",
        description:
            "Design patterns for reliable event pipelines: idempotency, delivery guarantees, consumer scaling, and troubleshooting tips.",
        image: "/episodes/ep4.jpeg",
        href: "https://youtu.be/placeholder-e4",
    },
    {
        id: "e5",
        title: "Episode 5 — CI/CD & Safe Releases",
        description:
            "Automate builds, tests, and deployments with progressive rollout strategies, feature flags, and fast rollback patterns.",
        image: "/episodes/ep5.jpeg",
        href: "https://youtu.be/placeholder-e5",
    },
    {
        id: "e6",
        title: "Episode 6 — ML in Production",
        description:
            "Operationalizing models: feature infrastructure, serving strategies, monitoring drift, and cost-effective inference at scale.",
        image: "/episodes/ep6.jpeg",
        href: "https://youtu.be/placeholder-e6",
    },
];

export default function Episodes() {
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
      id="blogs"
      ref={sectionRef}
      className=" pt-16 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto flex  flex-col items-center">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">Our Previous Episodes</span>
          </h2>
        <div>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out font-medium text-lg text-white/90 mb-4">
                Video Episodes — Product engineering stories & case studies
            </p>
            <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                Watch concise case studies, technical deep-dives, and founder interviews that reveal how resilient, scalable products are built. Expect practical lessons on architecture, delivery, and growth—new episodes and demos published regularly. Subscribe on YouTube to stay updated.
            </p>
        </div>
        </div>

        <div className="max-w-5xl mx-auto ">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {episodes.map((p, i) => (
              <article
                key={p.id}
                className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out group rounded-2xl overflow-hidden bg-white/3 ring-1 ring-white/6"
                aria-labelledby={`proj-${p.id}-title`}
              >
                <div className="relative h-48 sm:h-56 lg:h-44 overflow-hidden bg-zinc-900">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-6">
                  <h3
                    id={`proj-${p.id}-title`}
                    className="text-xl md:text-2xl font-medium text-white mb-2"
                  >
                    {p.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">
                    {p.description}
                  </p>
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white border border-white/10 bg-white/3 hover:bg-white/6 transition"
                    aria-label={`Learn more about ${p.title}`}
                  >
                    Watch on Youtube
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
