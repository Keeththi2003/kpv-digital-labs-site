"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";

const blogs = [
    {
        id: "b1",
        title: "Crafting Accessible React Components",
        description:
            "Practical guide to building accessible, keyboard-friendly components in React — ARIA, focus management, and testing strategies.",
        category: "Frontend",
        image: "/bl1.jpeg",
        href: "/blogs/accessible-react",
    },
    {
        id: "b2",
        title: "Scaling Node APIs: Practical Patterns",
        description:
            "Proven patterns for designing scalable, maintainable Node.js APIs — pagination, caching, rate limiting, and observability.",
        category: "Backend",
        image: "/bl2.jpeg",
        href: "/blogs/scaling-node-apis",
    },
    {
        id: "b3",
        title: "Data-Driven Product Decisions",
        description:
            "How to use analytics and experimentation to prioritize features, validate hypotheses, and reduce time to impact.",
        category: "Product",
        image: "/bl3.jpeg",
        href: "/blogs/data-driven-product",
    },
];
                const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];


export default function Blogs() {
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
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl md:text-2xl lg:text-3xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">Blog Categories</span>
          </h2>
          <div>
            {(() => {
                const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];

                return (
                    <div className="w-full flex flex-col items-center gap-4">
                        <div className="inline-flex items-center bg-white/3 ring-1 ring-white/6 rounded-full p-1">
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
                                            className="cursor-pointer select-none px-4 py-2 text-sm md:text-base rounded-full text-white/80 transition-all duration-200 flex items-center gap-2"
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
                                background: linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04));
                                color: #fff;
                                box-shadow: 0 6px 18px rgba(0,0,0,0.45);
                                transform: translateY(-2px);
                            }

                            /* focus-visible for keyboard users */
                            input.cat-input:focus-visible + label {
                                outline: 2px solid rgba(255,255,255,0.08);
                                outline-offset: 2px;
                            }

                            /* small hover/active polish */
                            label:hover {
                                color: #fff;
                                transform: translateY(-1px);
                            }
                        `}</style>
                    </div>
                );
            })()}
            
          </div>
        </div>

        <div className="max-w-5xl mx-auto ">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((p, i) => (
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

        <Link
          href={"#"}
          className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out w-fit mt-12 bg-white hover:bg-gray-300 text-background font-medium px-10 py-3 rounded-full flex items-center  hover:scale-105 hover:shadow-lg cursor-pointer group"
        >
          <span className="mr-2">Learn More</span>
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
