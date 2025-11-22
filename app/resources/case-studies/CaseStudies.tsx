"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const caseStudies = [
    {
        id: "b1",
        title: "Accessible React Components",
        description:
            "A practical guide to building keyboard-friendly, screen-reader compatible React components — ARIA, focus management, and testing best practices.",
        category: "Frontend",
        image: "/bl1.png",
        href: "#",
    },
    {
        id: "b2",
        title: "Scaling Node.js APIs",
        description:
            "Real-world patterns for designing scalable, resilient Node.js APIs: pagination, caching, rate limiting, and observability.",
        category: "Backend",
        image: "/bl2.jpeg",
        href: "#",
    },
    {
        id: "b3",
        title: "Data-Informed Product Strategy",
        description:
            "How to use analytics and experimentation to validate ideas, prioritize roadmaps, and measure customer impact effectively.",
        category: "Product",
        image: "/bl3.jpeg",
        href: "#",
    },
    {
        id: "b4",
        title: "Design Systems & Governance",
        description:
            "Creating and scaling design systems: tokens, shared components, and governance to ensure UI consistency across teams.",
        category: "Design",
        image: "/bl4.png",
        href: "#",
    },
    {
        id: "b5",
        title: "Observability for Distributed Systems",
        description:
            "Practical observability: combining metrics, traces, and logs to accelerate debugging and reduce mean time to resolution.",
        category: "DevOps",
        image: "/bl5.jpeg",
        href: "#",
    },
    {
        id: "b6",
        title: "Offline-First Mobile Architecture",
        description:
            "Patterns for reliable sync, local-first data storage, and graceful degradation to build robust mobile experiences.",
        category: "Mobile",
        image: "/bl6.png",
        href: "#",
    },
    {
        id: "b7",
        title: "React Performance Optimization",
        description:
            "Techniques to reduce render cost, minimize re-renders, and profile large React apps for measurable performance gains.",
        category: "Frontend",
        image: "/bl7.jpeg",
        href: "#",
    },
    {
        id: "b8",
        title: "Event-Driven Architectures",
        description:
            "Designing event-driven systems: idempotent consumers, message schemas, and strategies for eventual consistency.",
        category: "Backend",
        image: "/bl8.png",
        href: "#",
    },
    {
        id: "b9",
        title: "ML for Product Teams",
        description:
            "How to identify product opportunities for ML, evaluate feasibility, and ship models that deliver clear business value.",
        category: "Data",
        image: "/bl9.jpeg",
        href: "#",
    },
];
const categories = ["All", ...Array.from(new Set(caseStudies.map((b) => b.category)))];

export default function CaseStudies() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [visibleCount, setVisibleCount] = useState<number>(6);

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

    // optional: when more items are shown, run fade-in on newly revealed cards
    useEffect(() => {
        // small delay to let DOM update
        const t = setTimeout(() => {
            const el = sectionRef.current;
            if (!el) return;
            const elements = el.querySelectorAll(".fade-in-element.opacity-0");
            elements.forEach((element, index) => {
                setTimeout(() => element.classList.add("animate-fade-in-up"), index * 120);
            });
        }, 50);
        return () => clearTimeout(t);
    }, [visibleCount]);

    const showMore = () => setVisibleCount(caseStudies.length);
    const showLess = () => setVisibleCount(6);

    const visibleCaseStudies = caseStudies.slice(0, visibleCount);
    const hasMore = visibleCount < caseStudies.length;
    return (
        <section id="caseStudies" ref={sectionRef} className="pb-16 px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-7xl mx-auto flex  flex-col items-center">
                <div className="text-center mb-8 md:mb-12">
                    <div className="w-full flex flex-col items-center gap-8 mt-8">
                        <div className="inline-flex items-center bg-white/3 ring-1 ring-white/6 rounded-full  px-3 py-1 animate-fade-in-buttons">
                            {categories.map((cat, idx) => {
                                const id = `cat-${cat.toLowerCase().replace(/\s+/g, "-")}`;
                                return (
                                    <div key={id} className="relative">
                                        <input
                                            id={id}
                                            name="blog-category"
                                            type="radio"
                                            defaultChecked={idx === 0}
                                            className="sr-only cat-input"
                                        />
                                        <label
                                            htmlFor={id}
                                            className="cursor-pointer select-none px-6 py-2 text-md md:text-base rounded-full text-white/80 transition-all duration-200 flex items-center gap-2"
                                            aria-pressed={idx === 0}
                                        >
                                            {cat}
                                        </label>
                                    </div>
                                );
                            })}
                        </div>

                        <style>{`
                            input.cat-input:checked + label {
                                background: linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04));
                                color: #fff;
                            }
                            input.cat-input:focus-visible + label {
                                outline: 2px solid rgba(255,255,255,0.08);
                                outline-offset: 2px;
                            }
                            label:hover {
                                color: #fff;
                                transform: translateY(-1px);
                            }
                        `}</style>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto ">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {visibleCaseStudies.map((p) => (
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
                                    <a
                                        href={p.href}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white border border-white/10 bg-white/3 hover:bg-white/6 transition"
                                        aria-label={`Learn more about ${p.title}`}
                                    >
                                        Learn more
                                        <ArrowRight className="w-4 h-4 opacity-90" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="w-fit mt-12">
                    {hasMore ? (
                        <button
                            onClick={showMore}
                            className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/6 hover:bg-white/8 text-white font-medium px-6 py-2 rounded-full flex items-center cursor-pointer"
                            aria-label="Load more blogs"
                        >
                            <span className="mr-2">Load more</span>
                        </button>
                    ) : (
                        <button
                            onClick={showLess}
                            className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/6 hover:bg-white/8 text-white font-medium px-6 py-2 rounded-full flex items-center cursor-pointer"
                            aria-label="Show less blogs"
                        >
                            Show less
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
