'use client';

import React, { useState, useEffect } from 'react';

const LinkCarousel = () => {
  const links = [
    { label: 'AOM2025 Biopharma PDW Pre-Registration', href: '…' },
    { label: 'AOM2025 Managing Your Dissertation Workshop Application', href: '…' },
    { label: 'SMS2025 Extension on Biopharma Strategy Registration', href: '…' },
  ];

  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i - 1 + links.length) % links.length);
  const next = () => setIndex(i => (i + 1) % links.length);

  useEffect(() => {
    const timer = setInterval(next, 10_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center mb-6">
      <div className="flex items-center justify-center gap-3 mb-4 text-sm text-black">
        <span className="text-lg">📢</span>
        <button onClick={prev} className="px-1 text-sm opacity-50 hover:opacity-80 transition">
          ‹
        </button>
        <a href={links[index].href} target="_blank" rel="noopener" className="underline">
          {links[index].label}
        </a>
        <button onClick={next} className="px-1 text-sm opacity-50 hover:opacity-80 transition">
          ›
        </button>
      </div>
      <div className="w-[300px] lg:w-[500px] h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50 dark:via-neutral-600" />
    </div>
  );
};

export default LinkCarousel;
