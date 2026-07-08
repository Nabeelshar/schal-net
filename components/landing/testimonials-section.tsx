"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Ever since we switched to Sachal Fiber Net, Netflix plays in 4K without a single buffer. Best internet in Khairpur.",
    author: "Ahsan Ali",
    role: "Resident",
    company: "Mall Road Zone",
    metric: { value: "4K", label: "Zero buffering" },
  },
  {
    quote: "My PUBG ping dropped to under 15ms. No more lag during ranked matches, even in the evening rush.",
    author: "Bilal Memon",
    role: "Gamer",
    company: "Luqman Pocket",
    metric: { value: "<15ms", label: "Gaming ping" },
  },
  {
    quote: "During load-shedding our connection stays live thanks to their power backup. Work from home is finally reliable.",
    author: "Sana Shaikh",
    role: "Remote Worker",
    company: "University Residential",
    metric: { value: "24/7", label: "Always online" },
  },
  {
    quote: "Installation was done the same day and the local team responds instantly on WhatsApp. Truly local service.",
    author: "Imran Qureshi",
    role: "Resident",
    company: "Civic Center Ring",
    metric: { value: "24h", label: "Fast install" },
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => setActiveIndex(index);

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-40 bg-foreground text-background overflow-hidden">
      {/* ASCII background */}
      <div className="absolute inset-0 font-mono text-[10px] text-background/[0.02] leading-tight overflow-hidden whitespace-pre select-none pointer-events-none">
        {Array.from({ length: 60 }, () =>
          Array.from({ length: 100 }, () =>
            Math.random() > 0.7 ? '"' : ' '
          ).join("")
        ).join("\n")}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-start sm:items-center justify-between mb-12 sm:mb-20 gap-4">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-background/40 mb-3 sm:mb-4">
              <span className="w-8 sm:w-12 h-px bg-background/20 shrink-0" />
              Testimonials
            </span>
            <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-display transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              Trusted by homes
              <span className="text-background/40"> across Khairpur.</span>
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={goPrev}
              className="p-3 sm:p-4 border border-background/20 hover:bg-background/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={goNext}
              className="p-3 sm:p-4 border border-background/20 hover:bg-background/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20">
          {/* Quote */}
          <div className="lg:col-span-7 relative">
            <span className="absolute -left-2 -top-6 text-[100px] sm:text-[140px] font-display text-background/5 leading-none select-none">
              &ldquo;
            </span>

            <div className="relative">
              <blockquote
                key={activeIndex}
                className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-display leading-[1.25] tracking-tight animate-fadeSlideIn"
              >
                {activeTestimonial.quote}
              </blockquote>

              <div className="mt-8 sm:mt-12 flex items-center gap-4 sm:gap-6">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-background/10 flex items-center justify-center shrink-0">
                  <span className="font-display text-lg sm:text-xl">
                    {activeTestimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-base sm:text-lg font-medium">{activeTestimonial.author}</p>
                  <p className="text-sm sm:text-base text-background/60">
                    {activeTestimonial.role}, {activeTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Metric + controls */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4 sm:gap-6">
            <div
              key={`metric-${activeIndex}`}
              className="p-6 sm:p-10 border border-background/20 bg-background/5 animate-fadeSlideIn"
            >
              <span className="text-5xl sm:text-7xl lg:text-8xl font-display block mb-3 sm:mb-4">
                {activeTestimonial.metric.value}
              </span>
              <span className="text-base sm:text-lg text-background/60">
                {activeTestimonial.metric.label}
              </span>
            </div>

            {/* Progress */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className="flex-1 h-1 bg-background/20 overflow-hidden"
                >
                  <div
                    className={`h-full bg-background transition-all duration-300 ${
                      idx === activeIndex ? "w-full" : idx < activeIndex ? "w-full opacity-50" : "w-0"
                    }`}
                    style={idx === activeIndex ? { animation: "progress 8s linear forwards" } : {}}
                  />
                </button>
              ))}
            </div>

            {/* Neighborhoods */}
            <div className="mt-2 sm:mt-4 pt-4 sm:pt-6 border-t border-background/10">
              <span className="text-xs font-mono text-background/30 uppercase tracking-widest block mb-3 sm:mb-4">
                Neighborhoods
              </span>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {testimonials.map((t, idx) => (
                  <button
                    key={t.company}
                    onClick={() => goTo(idx)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border transition-all ${
                      idx === activeIndex
                        ? "border-background/40 text-background"
                        : "border-background/10 text-background/40 hover:border-background/30"
                    }`}
                  >
                    {t.company}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.5s ease-out forwards;
        }
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
