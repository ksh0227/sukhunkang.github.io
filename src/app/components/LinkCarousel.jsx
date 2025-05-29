'use client';

import React, { useState, useEffect } from 'react';

const LinkCarousel = () => {
  const links = [
    { label: 'AOM2025 Biopharma PDW Pre-Registration', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfE1MgUwsJAC6a3I5SbpyeZWVjKb9m81yt6SmZR5eXd2FuR5g/viewform' },
    { label: 'AOM2025 Managing Your Dissertation Workshop Application', href: 'https://docs.google.com/forms/d/e/1FAIpQLScFDD-ptIHpoND7KVsGwTVgOdwmlJPHE1ooKo_jc1hkJeBTzg/viewform' },
    { label: 'SMS2025 Extension on Biopharma Strategy Registration', href: 'https://www.strategicmanagement.net/event/rethinking-strategy-innovation-in-biopharmaceutical-and-healthcare-industries/' },
  ];

  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i - 1 + links.length) % links.length);
  const next = () => setIndex(i => (i + 1) % links.length);

  useEffect(() => {
    const timer = setInterval(next, 10_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center gap-2 text-sm text-black my-2">
        <span className="text-lg leading-none">📢</span>
        <button
          onClick={prev}
          className="leading-none text-sm opacity-50 hover:opacity-80 transition"
        >
          ‹
        </button>
        <div className="overflow-hidden whitespace-nowrap w-60">
          <a
            href={links[index].href}
            target="_blank"
            rel="noopener"
            className="inline-block animate-scroll underline leading-none"
          >
            {links[index].label}
          </a>
        </div>
        <button
          onClick={next}
          className="leading-none text-sm opacity-50 hover:opacity-80 transition"
        >
          ›
        </button>
      </div>
      <div className="w-[300px] lg:w-[500px] h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50 dark:via-neutral-600 mx-auto" />

      <style jsx>{`
        .animate-scroll {
          animation: scroll 8s linear infinite;
        }
        @keyframes scroll {
          0%   { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
};

export default LinkCarousel;
