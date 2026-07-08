"use client";

import { usePhone } from "@/hooks/use-phone";

export function WhatsAppFloat() {
  const { wa: whatsappUrl } = usePhone();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#1fb855] shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110"
    >
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="w-6 h-6 sm:w-7 sm:h-7"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.062 9.374L1.06 31.75l6.582-2.132A15.927 15.927 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.338 22.606c-.39 1.098-1.93 2.01-3.14 2.27-.834.18-1.924.322-5.596-1.204-4.7-1.946-7.718-6.73-7.948-7.04-.224-.31-1.83-2.432-1.83-4.636 0-2.206 1.156-3.286 1.566-3.73.39-.424.94-.54 1.25-.54.31 0 .62.002.89.016.284.014.664-.106 1.036.79.39.94 1.334 3.244 1.45 3.48.116.236.194.51.04.82-.15.31-.224.502-.44.77-.22.268-.454.6-.65.804-.22.236-.45.49-.192.96.258.47 1.148 1.89 2.464 3.06 1.694 1.506 3.12 1.972 3.574 2.19.35.17.734.128.97-.22.296-.444.66-1.13.978-1.514.22-.264.504-.33.824-.224.324.106 2.042.964 2.394 1.14.352.176.586.264.672.41.086.146.086.85-.304 1.948z"/>
      </svg>
    </a>
  );
}
