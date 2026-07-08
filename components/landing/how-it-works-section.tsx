"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Choose",
    subtitle: "your plan",
    description: "Select from our blazing-fast 6 Mbps or 20 Mbps local packages designed for smooth streaming, gaming, and remote work.",
  },
  {
    number: "02",
    title: "Instant",
    subtitle: "installation",
    description: "Our local splicing team deploys a dedicated drop-wire directly to your premises within 24 hours.",
  },
  {
    number: "03",
    title: "Enjoy",
    subtitle: "the speed",
    description: "Connect all your home devices. Enjoy unlimited data with crystal-clear stability.",
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-[oklch(0.09_0.01_260)] text-white overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="relative mb-12 lg:mb-0 grid lg:grid-cols-2 gap-6 lg:gap-12 items-end">
          <div className="overflow-hidden pb-0 lg:pb-32">
            <div className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-white/40 mb-6 sm:mb-8">
                <span className="w-8 sm:w-12 h-px bg-white/20 shrink-0" />
                Process
              </span>
            </div>

            <h2 className={`text-[clamp(2.8rem,8vw,8rem)] font-display tracking-tight leading-[0.85] transition-all duration-1000 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}>
              <span className="block">Choose.</span>
              <span className="block text-white/30">Install.</span>
              <span className="block text-white/10">Enjoy.</span>
            </h2>
          </div>

          {/* Tree image — visible on all sizes */}
          <div className={`relative h-48 sm:h-72 lg:h-[640px] overflow-hidden transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tree-uAia6REvB137CQyHFCf0za3O6h2zKO.png"
              alt=""
              aria-hidden="true"
              className="absolute bottom-0 left-0 w-full h-full object-contain object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.09_0.01_260)] via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.09_0.01_260)] via-transparent to-transparent pointer-events-none lg:hidden" />
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveStep(index)}
              className={`relative text-left p-6 sm:p-8 lg:p-12 border transition-all duration-500 ${
                activeStep === index
                  ? "bg-[#000000] border-white/60"
                  : "bg-[#000000] border-white/25 hover:border-white/50"
              }`}
            >
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <span className={`text-3xl sm:text-4xl font-display transition-colors duration-300 ${
                  activeStep === index ? "text-[#eca8d6]" : "text-white/20"
                }`}>
                  {step.number}
                </span>
                <div className="flex-1 h-px bg-white/10 overflow-hidden">
                  {activeStep === index && (
                    <div className="h-full bg-[#eca8d6]/50 animate-progress" />
                  )}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-1">
                {step.title}
              </h3>
              <span className="text-lg text-white/40 font-display block mb-4 sm:mb-6">
                {step.subtitle}
              </span>

              <p className={`text-sm sm:text-base text-white/60 leading-relaxed transition-opacity duration-300 ${
                activeStep === index ? "opacity-100" : "opacity-60"
              }`}>
                {step.description}
              </p>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-[#eca8d6] transition-transform duration-500 origin-left ${
                activeStep === index ? "scale-x-100" : "scale-x-0"
              }`} />
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 6s linear forwards;
        }
      `}</style>
    </section>
  );
}
