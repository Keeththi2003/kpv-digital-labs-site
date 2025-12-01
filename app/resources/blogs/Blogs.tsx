"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const blogs = [
    {
        id: "b1",
        title: "Crafting Accessible React Components",
        description:
            "Practical guide to building accessible, keyboard-friendly components in React — ARIA, focus management, and testing strategies.",
        category: "Frontend",
        image: "/bl1.png",
        href: "#",
    },
    {
        id: "b2",
        title: "Scaling Node APIs: Practical Patterns",
        description:
            "Proven patterns for designing scalable, maintainable Node.js APIs — pagination, caching, rate limiting, and observability.",
        category: "Backend",
        image: "/bl2.jpeg",
        href: "#",
    },
    {
        id: "b3",
        title: "Data-Driven Product Decisions",
        description:
            "How to use analytics and experimentation to prioritize features, validate hypotheses, and reduce time to impact.",
        category: "Product",
        image: "/bl3.jpeg",
        href: "#",
    },
    {
        id: "b4",
        title: "Design Systems at Scale",
        description:
            "Establishing tokens, components, and governance to keep UI consistent across teams and platforms.",
        category: "Design",
        image: "/bl4.png",
        href: "#",
    },
    {
        id: "b5",
        title: "Observability for Modern Apps",
        description:
            "Practical observability: metrics, tracing, and logs to reduce MTTR and improve system understanding.",
        category: "DevOps",
        image: "/bl5.jpeg",
        href: "#",
    },
    {
        id: "b6",
        title: "Building Offline-First Mobile Apps",
        description:
            "Patterns for reliable sync, local-first data, and graceful degradation when network connectivity is poor.",
        category: "Mobile",
        image: "/bl6.png",
        href: "#",
    },
    {
        id: "b7",
        title: "Optimizing React Performance",
        description:
            "Techniques to reduce render cost, avoid unnecessary work, and scale large React applications efficiently.",
        category: "Frontend",
        image: "/bl7.jpeg",
        href: "#",
    },
    {
        id: "b8",
        title: "Event-Driven Architectures in Practice",
        description:
            "When to use events, designing idempotent consumers, and patterns for eventual consistency.",
        category: "Backend",
        image: "/bl8.png",
        href: "#",
    },
    {
        id: "b9",
        title: "Applying Machine Learning to Product",
        description:
            "How to identify ML opportunities, measure impact, and ship models that drive product outcomes.",
        category: "Data",
        image: "/bl9.jpeg",
        href: "#",
    },
];
const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];

export default function Blogs() {
    const sectionRef = useRef<HTMLElement | null>(null);
   const [visibleCount, setVisibleCount] = useState<number>(6);
       const [selectedCategory, setSelectedCategory] = useState<string>("All");
   

           // Filtered list based on selection
    const filtered = selectedCategory === "All" ? blogs : blogs.filter((c) => c.category === selectedCategory);
    const visibleBlogs = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < filtered.length;

    

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

   // run fade-in on newly revealed cards
    useEffect(() => {
        const t = setTimeout(() => {
            const el = sectionRef.current;
            if (!el) return;
            const elements = el.querySelectorAll(".fade-in-element.opacity-0");
            elements.forEach((element, index) => {
                setTimeout(() => element.classList.add("animate-fade-in-up"), index * 120);
            });
        }, 50);
        return () => clearTimeout(t);
    }, [visibleCount, selectedCategory]);

    // reset visible count when category changes
    useEffect(() => {
        setVisibleCount(6);
    }, [selectedCategory]);

    const showMore = () => setVisibleCount(filtered.length);
    const showLess = () => setVisibleCount(6);



    return (
        <section id="blogs" ref={sectionRef} className="pb-16 px-4 sm:px-6 lg:px-8">
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
                                            value={cat}
                                            checked={selectedCategory === cat}
                                            onChange={() => setSelectedCategory(cat)}
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
                        {visibleBlogs.map((p) => (
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
