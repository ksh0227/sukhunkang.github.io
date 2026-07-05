'use client';

import React, { useState, useEffect } from 'react';

const LinkCarousel = () => {
  const links = [
    {
      label: 'Application Open: Student Assistant in the Health Innovation Lab',
      href: 'https://forms.gle/zyPZJYx93Qh3CJmL6',
    },
    {
      label: 'New Research Article on Seeding Trials',
      href: 'https://doi.org/10.1136/bmjebm-2025-114242',
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
  const [userPaused, setUserPaused] = useState(false); // explicit Pause button
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Auto-rotate only when nothing is pausing it. Pausing on focus is what
  // keeps the link from remounting (and stealing focus) while a keyboard user
  // is on it.
  const active = !userPaused && !hovered && !focused && !reducedMotion;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Advance 5s after each slide, but only while active. Re-runs when `active`
  // or `index` changes, clearing the pending timer on pause.
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % links.length);
      setAnimKey((k) => k + 1);
    }, 5000);
    return () => clearTimeout(t);
  }, [active, index, links.length]);

  const goTo = (newIndex) => {
    setIndex(newIndex);
    setAnimKey((k) => k + 1);
  };

  const handleRegionBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
  };

  return (
    <>
      <div
        className="flex flex-col items-center gap-1.5 text-sm text-black mt-2 mb-10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={handleRegionBlur}
        role="region"
        aria-label="Announcements"
        aria-roledescription="carousel"
      >
        <div className="flex justify-center items-center gap-2">
          <div
            className="overflow-hidden w-[260px] sm:w-[360px] md:w-[420px] lg:w-[480px] h-5"
            aria-live="polite"
            aria-atomic="true"
          >
            <a
              key={animKey}
              href={links[index].href}
              target="_blank"
              rel="noopener"
              className={`block w-full text-center underline ${active ? 'animate-scroll' : ''}`}
            >
              {links[index].label}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Pause / play control (WCAG 2.2.2) */}
          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            aria-label={userPaused ? 'Play announcement rotation' : 'Pause announcement rotation'}
            className="text-gray-400 hover:text-gray-700 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {userPaused ? (
              <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
              </svg>
            )}
          </button>

          {/* Position indicators */}
          <div className="flex gap-1.5" role="tablist" aria-label="Announcement slides">
            {links.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === index}
                aria-label={`Announcement ${i + 1} of ${links.length}`}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  i === index
                    ? 'bg-gray-700 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
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
