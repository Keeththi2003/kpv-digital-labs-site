"use client";

import { useEffect, useRef } from "react";


export default function PeopleInBusiness() {
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
      id="peopleInBuisness"
      ref={sectionRef}
      className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8"
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

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight text-balance">
            <span className="font-medium">Our People is Our Business</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            We have had the opportunity to work in a wide range of domains,
            technologies, and processes with partners that have given us a deep
            understanding of industry standards and engineering best practices.
          </p>
        </div>

        <div className="">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/3 rounded-xl p-6 border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-linear-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-medium text-lg">
                      JS
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Jasmine Stone</h3>
                    <p className="text-sm text-white/70">Head of Engineering</p>
                  </div>
                </div>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Jasmine leads cross-functional engineering teams, focuses on resilient
                  architectures and developer experience. She helps translate product
                  vision into reliable, maintainable systems.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li className="text-xs px-2 py-1 bg-white/5 rounded text-white/80">Platform</li>
                  <li className="text-xs px-2 py-1 bg-white/5 rounded text-white/80">Cloud</li>
                  <li className="text-xs px-2 py-1 bg-white/5 rounded text-white/80">Tribe Lead</li>
                </ul>
              </article>

              <article className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/3 rounded-xl p-6 border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-linear-to-br from-purple-500 to-pink-400 flex items-center justify-center text-white font-medium text-lg">
                      AR
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Ari Rivera</h3>
                    <p className="text-sm text-white/70">Product & UX Lead</p>
                  </div>
                </div>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Ari designs human-centered products that balance user needs with
                  business outcomes. Pragmatic, data-informed decisions guide the team's
                  roadmap.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li className="text-xs px-2 py-1 bg-white/5 rounded text-white/80">Design Systems</li>
                  <li className="text-xs px-2 py-1 bg-white/5 rounded text-white/80">Research</li>
                </ul>
              </article>

              <article className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/3 rounded-xl p-6 border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-linear-to-br from-yellow-500 to-orange-400 flex items-center justify-center text-white font-medium text-lg">
                      MK
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Maya Khan</h3>
                    <p className="text-sm text-white/70">DevOps & Reliability</p>
                  </div>
                </div>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Maya ensures systems are observable, secure, and scalable. She builds
                  pipelines and practices that let teams move quickly with confidence.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li className="text-xs px-2 py-1 bg-white/5 rounded text-white/80">SRE</li>
                  <li className="text-xs px-2 py-1 bg-white/5 rounded text-white/80">CI/CD</li>
                </ul>
              </article>

              <article className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/3 rounded-xl p-6 border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-linear-to-br from-green-500 to-emerald-400 flex items-center justify-center text-white font-medium text-lg">
                      DL
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Drew Lee</h3>
                    <p className="text-sm text-white/70">Senior Software Engineer</p>
                  </div>
                </div>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Drew focuses on clean APIs and performance. He mentors engineers and
                  champions pragmatic testing and observability across services.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li className="text-xs px-2 py-1 bg-white/5 rounded text-white/80">API</li>
                  <li className="text-xs px-2 py-1 bg-white/5 rounded text-white/80">Performance</li>
                </ul>
              </article>

              <article className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/3 rounded-xl p-6 border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-linear-to-br from-red-500 to-rose-400 flex items-center justify-center text-white font-medium text-lg">
                      SV
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Sam Venk</h3>
                    <p className="text-sm text-white/70">Data & ML</p>
                  </div>
                </div>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Sam builds reliable data pipelines and ML primitives that help teams
                  deliver smarter products while maintaining strong governance.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li className="text-xs px-2 py-1 bg-white/5 rounded text-white/80">Data</li>
                  <li className="text-xs px-2 py-1 bg-white/5 rounded text-white/80">ML Ops</li>
                </ul>
              </article>

              <article className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white/3 rounded-xl p-6 border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-linear-to-br from-indigo-500 to-sky-400 flex items-center justify-center text-white font-medium text-lg">
                      CT
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Cleo Tran</h3>
                    <p className="text-sm text-white/70">Client Success</p>
                  </div>
                </div>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Cleo partners with customers to ensure outcomes are met. She brings
                  program discipline and empathy to every engagement.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li className="text-xs px-2 py-1 bg-white/5 rounded text-white/80">Customer</li>
                  <li className="text-xs px-2 py-1 bg-white/5 rounded text-white/80">Delivery</li>
                </ul>
              </article>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
