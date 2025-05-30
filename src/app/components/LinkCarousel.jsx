'use client';

import React, { useState, useEffect, useRef } from 'react';

const LinkCarousel = () => {
  const links = [
    {
      label: 'AOM2025 Biopharma PDW Pre-Registration',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSfE1MgUwsJAC6a3I5SbpyeZWVjKb9m81yt6SmZR5eXd2FuR5g/viewform',
    },
    {
      label: 'AOM2025 Managing Your Dissertation Workshop Application',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLScFDD-ptIHpoND7KVsGwTVgOdwmlJPHE1ooKo_jc1hkJeBTzg/viewform',
    },
    {
      label: 'SMS2025 Extension on Biopharma Strategy Registration',
      href: 'https://www.strategicmanagement.net/event/rethinking-strategy-innovation-in-biopharmaceutical-and-healthcare-industries/',
    },
  ];

  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timeoutRef = useRef(null);
  const indexRef = useRef(index);

  // Keep indexRef updated
  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const clearAndSetTimeout = (callback) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(callback, 5000);
  };

  const goTo = (newIndex) => {
    setIndex(newIndex);
    setAnimKey(k => k + 1);
    clearAndSetTimeout(() => {
      const nextIndex = (indexRef.current + 1) % links.length;
      goTo(nextIndex);
    });
  };

  const prev = () => {
    const newIndex = (indexRef.current - 1 + links.length) % links.length;
    goTo(newIndex);
  };

  const next = () => {
    const newIndex = (indexRef.current + 1) % links.length;
    goTo(newIndex);
  };

  // Start auto-scroll on mount
  useEffect(() => {
    clearAndSetTimeout(() => {
      const nextIndex = (indexRef.current + 1) % links.length;
      goTo(nextIndex);
    });

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center items-center gap-2 text-sm text-black mt-2 mb-10">
        <span className="text-lg leading-none">📢</span>

        <button
          onClick={prev}
          className="leading-none text-sm opacity-50 hover:opacity-80 transition"
        >
          ‹
        </button>

        <div className="overflow-hidden w-[260px] sm:w-[360px] md:w-[420px] lg:w-[480px] h-5">
          <a
            key={animKey}
            href={links[index].href}
            target="_blank"
            rel="noopener"
            className="block w-full text-center underline animate-scroll"
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

      <div className="mb-8 w-[260px] sm:w-[360px] md:w-[420px] lg:w-[480px] h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50 dark:via-neutral-600 mx-auto" />

      <style jsx>{`
        @keyframes scroll {
          0%   { transform: translateX(100%); }
          10%, 90% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        .animate-scroll {
          animation: scroll 5s ease-in-out forwards;
        }
      `}</style>
    </>
  );
};

export default LinkCarousel;
