"use client";

import { useState, useEffect } from "react";
import { getWhatsAppUrl, getTelUrl } from "@/lib/phone";

export function usePhone() {
  const [urls, setUrls] = useState({ wa: "#", tel: "#" });

  useEffect(() => {
    setUrls({ wa: getWhatsAppUrl(), tel: getTelUrl() });
  }, []);

  return urls;
}
