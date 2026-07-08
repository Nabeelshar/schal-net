"use client";

import { useEffect, useState, useRef } from "react";

const regions = [
  { name: "Mall Road Zone",        detail: "Fiber active",    status: "operational" },
  { name: "Luqman Pocket",         detail: "Fiber active",    status: "operational" },
  { name: "University Residential", detail: "Fiber active",   status: "operational" },
  { name: "Civic Center Ring",     detail: "Now connecting",  status: "live" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRegion, setActiveRegion] = useState(0);
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
      setActiveRegion((prev) => (prev + 1) % regions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="infra" ref={sectionRef} className="relative py-20 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 sm:mb-20">
          <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="w-8 sm:w-12 h-px bg-foreground/20 shrink-0" />
            Khairpur coverage
          </span>

          <div className="grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-16 items-center">
            {/* Globe image */}
            <div className={`w-24 sm:w-40 lg:w-72 xl:w-80 shrink-0 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/world-3i68QNWJwmO7W19ztZWbevAwJQHzYL.png"
                alt="Global network sphere"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Title + description */}
            <div className="flex flex-col justify-center">
              <h2 className={`text-[clamp(2.8rem,8vw,8rem)] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
                Local by
                <br />
                <span className="text-muted-foreground">design.</span>
              </h2>

              <p className={`mt-6 sm:mt-8 text-base sm:text-xl text-muted-foreground leading-relaxed max-w-lg transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}>
                Our fiber backbone runs directly through Khairpur&apos;s neighborhoods.
                Sub-15ms local ping to every connected home.
              </p>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Large stat card */}
          <div className={`lg:col-span-2 relative p-6 sm:p-8 lg:p-12 border border-foreground/10 bg-foreground/[0.02] overflow-hidden transition-all duration-700 min-h-[200px] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute inset-0 opacity-70">
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                <defs>
                  <style>{`
                    @keyframes drawLine {
                      0%   { stroke-dashoffset: 1000; opacity: 0; }
                      15%  { opacity: 1; }
                      70%  { opacity: 0.7; }
                      100% { stroke-dashoffset: 0; opacity: 0; }
                    }
                    .connecting-line {
                      stroke: #eca8d6;
                      stroke-width: 1.2;
                      fill: none;
                      stroke-dasharray: 1000;
                      animation: drawLine 3s ease-in-out infinite;
                    }
                  `}</style>
                </defs>
                {[...Array(19)].map((_, i) => {
                  const x1 = 10 + (i % 5) * 20;
                  const y1 = 10 + Math.floor(i / 5) * 25;
                  const x2 = 10 + ((i + 1) % 5) * 20;
                  const y2 = 10 + Math.floor((i + 1) / 5) * 25;
                  return (
                    <line
                      key={`line-${i}`}
                      x1={`${x1}%`} y1={`${y1}%`}
                      x2={`${x2}%`} y2={`${y2}%`}
                      className="connecting-line"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  );
                })}
              </svg>
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-[#eca8d6]"
                  style={{
                    left: `${10 + (i % 5) * 20}%`,
                    top: `${10 + Math.floor(i / 5) * 25}%`,
                    animation: `pulse 2s ease-in-out ${i * 0.1}s infinite`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl sm:text-8xl lg:text-[10rem] font-display leading-none">12</span>
                <span className="text-lg sm:text-2xl text-muted-foreground">sectors</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md">
                Fiber distribution points spread across Khairpur for maximum stability and minimum latency.
              </p>
            </div>
          </div>

          {/* Stacked stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
            <div className={`p-6 sm:p-8 border border-foreground/10 bg-foreground/[0.02] transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <span className="text-3xl sm:text-5xl lg:text-6xl font-display">99.9%</span>
              <span className="block text-xs sm:text-sm text-muted-foreground mt-2">Uptime (Power Backed)</span>
            </div>

            <div className={`p-6 sm:p-8 border border-foreground/10 bg-foreground/[0.02] transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <span className="text-3xl sm:text-5xl lg:text-6xl font-display">{"<"}15ms</span>
              <span className="block text-xs sm:text-sm text-muted-foreground mt-2">Local ping</span>
            </div>
          </div>
        </div>

        {/* Region list */}
        <div className={`mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          {regions.map((region, index) => (
            <div
              key={region.name}
              className={`p-4 sm:p-6 border transition-all duration-300 cursor-default ${
                activeRegion === index
                  ? "border-foreground/30 bg-foreground/[0.04]"
                  : "border-foreground/10"
              }`}
            >
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                  activeRegion === index ? "bg-[#eca8d6]" : "bg-foreground/20"
                }`} />
                <span className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {region.status}
                </span>
              </div>
              <span className="font-medium block mb-1 text-sm sm:text-base">{region.name}</span>
              <span className="text-xs sm:text-sm text-muted-foreground">{region.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
