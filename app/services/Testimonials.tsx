"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Jane Doe, CEO of TechCorp",
    quote:
      "KPV Digital Labs transformed our software development process. Their expertise and dedication helped us launch our product ahead of schedule.",
    image: "/jane-doe.jpg",
  },
  {
    name: "John Smith, CTO of InnovateX",
    quote:
      "The team at KPV Digital Labs is exceptional. They understood our vision and delivered a solution that exceeded our expectations.",
    image: "/john-smith.jpg",
  },
  {
    name: "Emily Johnson, Product Manager at SoftSolutions",
    quote:
      "KPV Digital Labs provided exceptional service and delivered a product that perfectly met our needs.",
    image: "/emily-johnson.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, []);

  return (
    <section className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      {" "}
      <div className="relative max-w-7xl mx-auto text-center mb-12 md:mb-16">
        {" "}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
          {" "}
          <span className="font-medium">What Clients Say</span>{" "}
        </h2>{" "}
        <p className="text-lg text-white/90 mb-4">
          Trusted partners for mission‑critical software{" "}
        </p>{" "}
        <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
          We partner with product and engineering teams to design, build, and
          operate resilient systems that drive measurable business outcomes.{" "}
        </p>{" "}
      </div>
      {/* Slider */}
      <div className="relative max-w-5xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex-none w-full px-4">
              <div className="align-middle bg-white/3 dark:bg-white/2 ring-1 ring-white/6  rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border-2 border-white/10">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <p className="text-white/90 mb-4">{t.quote}</p>
                <h3 className="text-white font-semibold">{t.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-white/30"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
}
