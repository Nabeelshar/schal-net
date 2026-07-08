"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check, Zap } from "lucide-react";
import { withBasePath } from "@/lib/base-path";
import { usePhone } from "@/hooks/use-phone";

const plans = [
  {
    name: "Basic",
    description: "For light browsing & social media",
    price: "1,500",
    priceSuffix: "PKR/mo",
    features: [
      "6 Mbps Unlimited Data",
      "Social Media & Messaging",
      "24/7 Local Support",
    ],
    cta: "Get connected",
    highlight: false,
  },
  {
    name: "Standard",
    description: "For HD streaming & everyday use",
    price: "1,800",
    priceSuffix: "PKR/mo",
    features: [
      "8 Mbps Unlimited Data",
      "HD Video Streaming",
      "24/7 Local Support",
    ],
    cta: "Get connected",
    highlight: false,
  },
  {
    name: "Essential",
    description: "For families & heavy streaming",
    price: "2,000",
    priceSuffix: "PKR/mo",
    features: [
      "10 Mbps Unlimited Data",
      "Multi-Device Streaming",
      "Priority Support",
    ],
    cta: "Get connected",
    highlight: false,
  },
  {
    name: "Premium",
    description: "For remote work & entertainment",
    price: "2,500",
    priceSuffix: "PKR/mo",
    features: [
      "15 Mbps Unlimited Data",
      "Work From Home Ready",
      "Priority Support",
    ],
    cta: "Get connected",
    highlight: false,
  },
  {
    name: "Pro",
    description: "For gaming & heavy downloads",
    price: "4,000",
    priceSuffix: "PKR/mo",
    features: [
      "20 Mbps Unlimited Data",
      "Low-Ping Gaming Optimization",
      "Dedicated Fiber Core",
      "Priority Support",
    ],
    cta: "Get connected",
    highlight: true,
  },
  {
    name: "Ultra",
    description: "For power users & content creators",
    price: "5,500",
    priceSuffix: "PKR/mo",
    features: [
      "25 Mbps Unlimited Data",
      "4K Streaming Ready",
      "Dedicated Fiber Core",
      "Premium Support",
    ],
    cta: "Get connected",
    highlight: false,
  },
  {
    name: "Extreme",
    description: "For ultimate speed & performance",
    price: "6,500",
    priceSuffix: "PKR/mo",
    features: [
      "30 Mbps Unlimited Data",
      "Ultra-Low Latency",
      "Dedicated Fiber Core",
      "Premium Support",
    ],
    cta: "Get connected",
    highlight: false,
  },
];

export function PricingSection() {
  const { wa: whatsappUrl } = usePhone();
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

  return (
    <section id="pricing" ref={sectionRef} className="relative py-20 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-6 mb-12 sm:mb-20">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 sm:mb-8">
              <span className="w-8 sm:w-12 h-px bg-foreground/30 shrink-0" />
              Pricing
            </span>
            <h2 className={`text-[clamp(2.8rem,8vw,8rem)] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              Pure fiber,
              <br />
              <span className="text-stroke">fair price.</span>
            </h2>
          </div>

          {/* Whale image — visible on all screens */}
          <div className="lg:col-span-5 relative h-48 sm:h-64 lg:h-auto">
            <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}>
              <img
                src={withBasePath("/images/whale.png")}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-contain object-center"
              />
              {/* Bottom fade so image blends into cards on mobile */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent lg:hidden" />
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-background border transition-all duration-700 ${
                  plan.highlight
                    ? "border-foreground xl:z-10 xl:scale-105"
                    : "border-foreground/10"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Popular badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-8 right-8 flex justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-xs font-mono uppercase tracking-widest">
                      <Zap className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Plan header */}
                  <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-foreground/10">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-display mt-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 sm:mb-8">
                    {plan.price !== null ? (
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-display">
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground text-sm">{plan.priceSuffix}</span>
                      </div>
                    ) : (
                      <span className="text-3xl sm:text-4xl font-display">Custom</span>
                    )}
                    {plan.price !== null && (
                      <p className="text-xs text-muted-foreground mt-2 font-mono">
                        unlimited data included
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 sm:mb-10">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#eca8d6] mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 sm:py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                      plan.highlight
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className={`mt-12 sm:mt-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-8 pt-8 sm:pt-12 border-t border-foreground/10 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#eca8d6] shrink-0" />
              Unlimited data
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#eca8d6] shrink-0" />
              Power-backed uptime
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#eca8d6] shrink-0" />
              Free installation
            </span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Check coverage via WhatsApp
          </a>
        </div>
      </div>

      <style jsx>{`
        .text-stroke {
          -webkit-text-stroke: 1.5px currentColor;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
