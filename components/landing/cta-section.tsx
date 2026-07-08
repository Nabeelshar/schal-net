"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { withBasePath } from "@/lib/base-path";
import { usePhone } from "@/hooks/use-phone";

export function CtaSection() {
  const { wa: whatsappUrl } = usePhone();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
            }}
          />

          <div className="relative z-10 px-6 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12">
              {/* Left content */}
              <div className="w-full lg:flex-1 lg:min-w-0">
                <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-display tracking-tight mb-6 sm:mb-8 leading-[0.95] break-words">
                  Ready for fiber
                  <br />
                  that never lags?
                </h2>

                <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-xl break-words overflow-hidden">
                  Join hundreds of homes across Khairpur on Sachal Fiber Net.
                  Check coverage and get connected within 24 hours.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-foreground hover:bg-foreground/90 text-background px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base rounded-full group w-full sm:w-auto"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Check Coverage via WhatsApp
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base rounded-full border-foreground/20 hover:bg-foreground/5 w-full sm:w-auto"
                  >
                    <a href="#pricing">View plans</a>
                  </Button>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8 font-mono">
                  Free installation with Sachal Fiber Net
                </p>
              </div>

              {/* Right image — visible on all screens */}
              <div className="relative w-full h-52 sm:h-72 lg:flex lg:items-end lg:justify-center lg:w-[500px] lg:h-[580px] lg:-mr-16 lg:shrink-0">
                <img
                  src={withBasePath("/images/bridge.png")}
                  alt="Two trees connected by glowing arcs"
                  className="w-full h-full object-contain object-bottom"
                />
                {/* Fade top edge on mobile so it blends with content above */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent lg:hidden pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-0 right-0 w-24 h-24 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
