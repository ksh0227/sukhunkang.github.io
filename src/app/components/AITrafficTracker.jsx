"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Matched against the referrer hostname (exact or subdomain). Default browser
// referrer policy strips cross-origin paths, so path-based patterns like
// "bing.com/chat" can never match and are excluded.
const AI_REFERRER_DOMAINS = [
  { domain: "chat.openai.com", source: "chatgpt" },
  { domain: "chatgpt.com", source: "chatgpt" },
  { domain: "perplexity.ai", source: "perplexity" },
  { domain: "claude.ai", source: "claude" },
  { domain: "gemini.google.com", source: "gemini" },
  { domain: "bard.google.com", source: "gemini" },
  { domain: "copilot.microsoft.com", source: "copilot" },
  { domain: "you.com", source: "you" },
  { domain: "phind.com", source: "phind" },
  { domain: "kagi.com", source: "kagi" },
  { domain: "poe.com", source: "poe" },
  { domain: "meta.ai", source: "meta_ai" },
  { domain: "huggingface.co", source: "huggingchat" },
  { domain: "deepseek.com", source: "deepseek" },
  { domain: "grok.com", source: "grok" },
  { domain: "x.ai", source: "grok" },
  { domain: "mistral.ai", source: "mistral" },
];

// Matched against utm_source: exact, or the value with a TLD appended
// (ChatGPT sends utm_source=chatgpt.com, not utm_source=chatgpt).
const AI_UTM_SOURCES = [
  "chatgpt",
  "perplexity",
  "claude",
  "gemini",
  "copilot",
  "phind",
  "you.com",
  "poe",
  "meta_ai",
  "deepseek",
  "grok",
  "mistral",
  "ai",
];

const SESSION_KEY = "ai_ref_tracked";

function matchReferrerSource(referrer) {
  if (!referrer) return null;
  let hostname;
  try {
    hostname = new URL(referrer).hostname;
  } catch {
    return null;
  }
  for (const { domain, source } of AI_REFERRER_DOMAINS) {
    if (hostname === domain || hostname.endsWith("." + domain)) {
      return source;
    }
  }
  return null;
}

function matchUtmSource(utmSource) {
  if (!utmSource) return null;
  for (const s of AI_UTM_SOURCES) {
    if (utmSource === s || utmSource.startsWith(s + ".")) {
      return s;
    }
  }
  return null;
}

export default function AITrafficTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // One attribution per visit: document.referrer persists across SPA
    // navigations, so without this guard every route change re-fires.
    let alreadyTracked = false;
    try {
      alreadyTracked = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // sessionStorage unavailable (privacy mode); fall through and track.
    }
    if (alreadyTracked) return;

    const referrer = document.referrer;
    const utmSource = searchParams.get("utm_source")?.toLowerCase();
    const aiSource = matchReferrerSource(referrer) || matchUtmSource(utmSource);
    if (!aiSource) return;

    // Queue via the dataLayer so the event survives even if gtag.js has not
    // loaded yet; gtag processes queued arguments objects on load.
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("event", "ai_referral", {
      ai_source: aiSource,
      page_path: pathname,
      referrer_url: referrer || "(direct)",
    });

    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // Ignore; worst case is a duplicate event in privacy mode.
    }
  }, [pathname, searchParams]);

  return null;
}
