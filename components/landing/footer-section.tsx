"use client";

import { ArrowUpRight } from "lucide-react";
import { usePhone } from "@/hooks/use-phone";

const footerLinks = {
  Network: [
    { name: "Features",        href: "#features"      },
    { name: "How It Works",    href: "#how-it-works"  },
    { name: "Coverage Area",   href: "#infra"         },
    { name: "Home Use",        href: "#integrations"  },
  ],
  Plans: [
    { name: "Home Plans",      href: "#pricing"       },
    { name: "Business Plans",  href: "#pricing"       },
    { name: "Compare Plans",   href: "#pricing"       },
    { name: "Get Connected",   href: "#pricing"       },
  ],
  Company: [
    { name: "About Us",        href: "#"              },
    { name: "Our Network",     href: "#infra"         },
    { name: "Testimonials",    href: "#testimonials"  },
    { name: "Contact",         href: "#"              },
  ],
  Support: [
    { name: "WhatsApp Us",     href: "https://wa.me/YOUR_PHONE_NUMBER" },
    { name: "Call Support",    href: "tel:+92"        },
    { name: "Service Area",    href: "#infra"         },
    { name: "Network Status",  href: "#"              },
  ],
};

const socialLinks = [
  { name: "Facebook",  href: "#" },
  { name: "WhatsApp",  href: "https://wa.me/YOUR_PHONE_NUMBER" },
  { name: "Instagram", href: "#" },
];

function resolveHref(href: string, wa: string, tel: string): string {
  if (href === "tel:+92") return tel;
  if (href.includes("YOUR_PHONE_NUMBER")) return wa;
  return href;
}

export function FooterSection() {
  const { wa: whatsappUrl, tel: telUrl } = usePhone();
  return (
    <footer className="relative bg-black">
      {/* Panoramic banner image */}
      <div className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png"
          alt="Sachal Fiber Net coverage landscape"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-2">
              <a href="#" className="inline-flex items-baseline gap-2 mb-6">
                <span className="text-2xl font-display text-white">Sachal Fiber Net</span>
                <span className="text-xs text-white/40 font-mono">Khairpur</span>
              </a>

              <p className="text-white/50 leading-relaxed mb-8 max-w-xs text-sm">
                Pure optical fiber internet for Khairpur. Fast, reliable, and built for households that demand more from their connection.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                  {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={resolveHref(link.href, whatsappUrl, telUrl)}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium text-white mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={resolveHref(link.href, whatsappUrl, telUrl)}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && (link as { badge?: string }).badge && (
                          <span className="text-xs px-2 py-0.5 bg-white text-black rounded-full">
                            {(link as { badge?: string }).badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; 2025 Sachal Fiber Net, Khairpur. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-white/30">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#eca8d6]" />
              Network operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
