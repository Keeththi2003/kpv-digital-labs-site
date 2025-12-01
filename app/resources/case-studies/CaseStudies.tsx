"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";


const caseStudies = [
    {
        id: "cs1",
        title: "Redesigning Checkout Flow",
        description:
            "Reworked the e-commerce checkout to simplify steps, improve accessibility, and reduce friction. Result: 18% increase in completed purchases and 24% fewer support tickets related to checkout errors.",
        category: "Product",
        image: "/case-studies/checkout-redesign.jpg",
        href: "#checkout-redesign",
    },
    {
        id: "cs2",
        title: "Headless CMS Migration",
        description:
            "Migrated a legacy CMS to a headless architecture with incremental rollout. Improved page load performance and enabled faster content iteration across platforms.",
        category: "Backend",
        image: "/case-studies/headless-cms.jpg",
        href: "#headless-cms-migration",
    },
    {
        id: "cs3",
        title: "Design System Adoption",
        description:
            "Built a cross-team design system with tokens, component library, and governance. Reduced UI inconsistencies and sped up feature delivery by ~30%.",
        category: "Design",
        image: "/case-studies/design-system.jpg",
        href: "#design-system",
    },
    {
        id: "cs4",
        title: "Realtime Collaboration Engine",
        description:
            "Engineered a low-latency realtime collaboration service using CRDTs and WebSockets. Enabled multi-user editing with conflict-free merges and sub-200ms sync times.",
        category: "Frontend",
        image: "/case-studies/realtime-collab.jpg",
        href: "#realtime-collaboration",
    },
    {
        id: "cs5",
        title: "Platform Observability Overhaul",
        description:
            "Introduced centralized tracing, metrics, and logging. Reduced mean time to resolution by 40% and surfaced critical reliability issues proactively.",
        category: "DevOps",
        image: "/case-studies/observability.jpg",
        href: "#observability-overhaul",
    },
    {
        id: "cs6",
        title: "Offline-First Mobile Sync",
        description:
            "Implemented robust local-first storage and conflict-resolution sync for intermittent connectivity. Resulted in 95% task completion rate while offline.",
        category: "Mobile",
        image: "/case-studies/offline-mobile.jpg",
        href: "#offline-first-mobile",
    },
    {
        id: "cs7",
        title: "ML-Powered Recommendations",
        description:
            "Deployed a lightweight recommendations service using item- and session-based models. Lifted click-through by 12% and average order value by 7%.",
        category: "Data",
        image: "/case-studies/ml-recommendations.jpg",
        href: "#ml-recommendations",
    },
    {
        id: "cs8",
        title: "API Rate Limiting & Resilience",
        description:
            "Designed a tiered rate-limiting strategy with graceful degradation and retries. Protected public APIs from traffic spikes and improved overall SLA adherence.",
        category: "Security",
        image: "/case-studies/api-resilience.jpg",
        href: "#api-rate-limiting",
    },
    {
        id: "cs9",
        title: "Internationalization at Scale",
        description:
            "Launched multilingual support and locale-aware formatting across web and mobile. Reduced localization cycle time and improved global conversion rates.",
        category: "Product",
        image: "/case-studies/internationalization.jpg",
        href: "#internationalization",
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
