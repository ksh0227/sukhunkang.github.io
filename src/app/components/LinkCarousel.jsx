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

  // rotate every 10s
  useEffect(() => {
    const timer = setInterval(next, 10_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <div className="flex items-center justify-center mb-4 gap-4 text-sm text-black">
        <span className="mr-4 font-semibold">Announcement</span>

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

      <div className="my-6 w-[400px] lg:w-[600px] h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50 dark:via-neutral-600" />
    </div>
  );
};

export default LinkCarousel;
