'use client';

import React, { useState, useEffect } from 'react';

const LinkCarousel = () => {
  const links = [
    { label: 'AOM2025 Biopharma PDW Pre-Registration', href: '…' },
    { label: 'AOM2025 Managing Your Dissertation Workshop Application', href: '…' },
    { label: 'SMS2025 Extension on Biopharma Strategy Registration', href: '…' },
  ];

  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + links.length) % links.length);
  const next = () => setIndex((i) => (i + 1) % links.length);

  useEffect(() => {
    const timer = setInterval(next, 10_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[300px] lg:w-[500px] flex flex-col items-center mb-6">
      {/* fixed emoji */}
      <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-lg">📢</span>

      <div className="flex items-center justify-center mb-4 gap-4 text-sm text-black">
        <button
          onClick={prev}
          className="px-1 text-base opacity-60 hover:opacity-100 transition"
        >
          ‹
        </button>
        <a
          href={links[index].href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {links[index].label}
        </a>
        <button
          onClick={next}
          className="px-1 text-base opacity-60 hover:opacity-100 transition"
        >
          ›
        </button>
      </div>

      {/* shortened divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50 dark:via-neutral-600" />
    </div>
  );
};

export default LinkCarousel;
