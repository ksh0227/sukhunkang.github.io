'use client';

import React, { useState, useEffect } from 'react';

const LinkCarousel = () => {
  const links = [
    { label: 'AOM2025 Biopharma PDW Pre-Registration', href: '…' },
    { label: 'AOM2025 Dissertation Workshop Application', href: '…' },
    { label: 'SMS2025 Biopharma Strategy Reg. Extension', href: '…' },
  ];

  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i - 1 + links.length) % links.length);
  const next = () => setIndex(i => (i + 1) % links.length);

  useEffect(() => {
    const timer = setInterval(next, 10_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center my-4">
      <div className="flex items-center gap-2 text-sm text-black py-1">
        <span className="text-lg leading-none">📢</span>

        <button
          onClick={prev}
          className="leading-none text-sm opacity-50 hover:opacity-80 transition"
        >
          ‹
        </button>

        <div className="flex-1 text-center">
          <a
            href={links[index].href}
            target="_blank"
            rel="noopener"
            className="underline leading-none"
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

      <div className="w-[300px] lg:w-[500px] h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50 dark:via-neutral-600" />
    </div>
  );
};

export default LinkCarousel;
