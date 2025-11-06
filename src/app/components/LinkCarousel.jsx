'use client';

import React, { useState, useEffect, useRef } from 'react';

const LinkCarousel = () => {
  const links = [
   {
     label: '2026 UCSB Technology Management PhD Program Application',
     href: 'https://tmp.ucsb.edu/academics/phd-technology-management',
   },
    {
      label: 'Measuring Biopharmaceutical Innovation in the Modern Era',
      href: 'https://theincidentaleconomist.com/wordpress/measuring-biopharmaceutical-innovation-in-the-modern-era/',  
     },
    {
      label: 'New Teaching Case on the "Baby Shark" company',
      href: 'https://store.hbr.org/product/behind-the-scenes-of-a-youtube-mega-hit-baby-shark-the-pinkfong-company-and-what-s-next/B6077',
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
