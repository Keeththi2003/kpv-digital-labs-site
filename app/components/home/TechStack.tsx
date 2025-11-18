// import { Button } from "@/components/ui/button"
import RotatingText from "@/app/components/home/RotatingText";

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const Play = () => (
  <svg
    className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
    />
  </svg>
);

export function TechStack() {
  return (
    <section className="flex items-center justify-center px-4 py-10 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
        
        <div
          className={`text-center mb-8 sm:mb-16 transition-all duration-1000 opacity-100translate-y-8
          `}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
                     <span>  We Are Proficient in Your Tech Stack</span>

          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Building scalable, maintainable applications with React, Next.js, TypeScript, Node.js, Java, .NET, and Tailwind — fast, reliable, and production-ready.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="text-center px-4 hidden sm:block overflow-hidden animate-fade-in-trust">
          <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
            <div className="flex items-center gap-10 hover:opacity-80 transition-all duration-500 animate-slide-left">
              <div className="flex items-center gap-10 whitespace-nowrap text-6xl">
                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-react-original colored"></i>
                <i className="devicon-nextjs-plain"></i>
                <i className="devicon-tailwindcss-plain colored"></i>
                <i className="devicon-nodejs-plain-wordmark colored"></i>
                <i className="devicon-java-plain-wordmark colored"></i>
                <i className="devicon-typescript-plain colored"></i>
                <i className="devicon-dot-net-plain-wordmark colored"></i>
                <i className="devicon-reactnative-original-wordmark colored"></i>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-10 whitespace-nowrap text-6xl">
                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-react-original colored"></i>
                <i className="devicon-nextjs-plain"></i>
                <i className="devicon-tailwindcss-plain colored"></i>
                <i className="devicon-nodejs-plain-wordmark colored"></i>
                <i className="devicon-java-plain-wordmark colored"></i>
                <i className="devicon-typescript-plain colored"></i>
                <i className="devicon-dot-net-plain-wordmark colored"></i>
                <i className="devicon-reactnative-original-wordmark colored"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Trust Indicators */}
        <div className="text-center px-4 mb-8 sm:hidden overflow-hidden animate-fade-in-trust">
          <p className="text-sm text-white mb-6">
            Trusted by innovative companies worldwide
          </p>
          <div className="relative overflow-hidden w-full max-w-sm mx-auto">
            {/* Left blur fade */}
            <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            {/* Right blur fade */}
            <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            <div className="flex items-center gap-6 opacity-60 animate-slide-left-mobile">
              <div className="flex items-center gap-6 whitespace-nowrap text-4xl">
                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-react-original colored"></i>
                <i className="devicon-nextjs-plain"></i>
                <i className="devicon-tailwindcss-plain colored"></i>
                <i className="devicon-nodejs-plain-wordmark colored"></i>
                <i className="devicon-java-plain-wordmark colored"></i>
                <i className="devicon-typescript-plain colored"></i>
                <i className="devicon-dot-net-plain-wordmark colored"></i>
                <i className="devicon-reactnative-original-wordmark colored"></i>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-6 whitespace-nowrap text-4xl">
               <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-react-original colored"></i>
                <i className="devicon-nextjs-plain"></i>
                <i className="devicon-tailwindcss-plain colored"></i>
                <i className="devicon-nodejs-plain-wordmark colored"></i>
                <i className="devicon-java-plain-wordmark colored"></i>
                <i className="devicon-typescript-plain colored"></i>
                <i className="devicon-dot-net-plain-wordmark colored"></i>
                <i className="devicon-reactnative-original-wordmark colored"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
