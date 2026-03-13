"use client";

import { useEffect } from "react";
import { getApiBaseUrl } from "@/lib/api";

export function PageViewTracker() {
  useEffect(() => {
    const key = `pv:${window.location.pathname}`;
    if (sessionStorage.getItem(key)) return;

    const send = async () => {
      try {
        await fetch(`${getApiBaseUrl()}/api/analytics/page-view`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ path: window.location.pathname })
        });
        sessionStorage.setItem(key, "1");
      } catch {
        // No-op: analytics should never block UX.
      }
    };

    send();
  }, []);

  return null;
}
