'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

const LinkCarousel = () => {
  const links = [
    {
      label: 'Measuring Biopharmaceutical Innovation in the Modern Era',
      href: 'https://theincidentaleconomist.com/wordpress/measuring-biopharmaceutical-innovation-in-the-modern-era/',
     },
    {
      label: 'New Teaching Case on the "Baby Shark" company',
      href: 'https://store.hbr.org/product/behind-the-scenes-of-a-youtube-mega-hit-baby-shark-the-pinkfong-company-and-what-s-next/B6077',
    },
    {
      label: 'EIP Virtual Seminar: Data Privacy Regulation and Innovation',
      href: 'https://uconn-edu.zoom.us/meeting/register/2MTYxVAySYaPjqk_AQlGxw#/registration',
    },
  ];

  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);
  const indexRef = useRef(index);
  const pausedRef = useRef(paused);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const scheduleNext = useCallback(() => {
    clearTimer();
    if (pausedRef.current) return;
    timeoutRef.current = setTimeout(() => {
      const nextIndex = (indexRef.current + 1) % links.length;
      setIndex(nextIndex);
      setAnimKey(k => k + 1);
      scheduleNext();
    }, 5000);
  }, [clearTimer, links.length]);

  const goTo = useCallback((newIndex) => {
    setIndex(newIndex);
    setAnimKey(k => k + 1);
    scheduleNext();
  }, [scheduleNext]);

  const handleMouseEnter = () => {
    setPaused(true);
    clearTimer();
  };

  const handleMouseLeave = () => {
    setPaused(false);
  };

  // Resume auto-rotation when unpaused
  useEffect(() => {
    if (!paused) {
      scheduleNext();
    }
    return clearTimer;
  }, [paused, scheduleNext, clearTimer]);

  // Initial auto-rotation
  useEffect(() => {
    scheduleNext();
    return clearTimer;
  }, []);

  return (
    <>
      <div
        className="flex flex-col items-center gap-1.5 text-sm text-black mt-2 mb-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="region"
        aria-label="Announcements"
        aria-roledescription="carousel"
      >
        <div className="flex justify-center items-center">
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
              className={`block w-full text-center underline ${paused ? '' : 'animate-scroll'}`}
            >
              {links[index].label}
            </a>
          </div>
        </div>

        {/* Position indicators */}
        <div className="flex gap-1.5" role="tablist" aria-label="Announcement slides">
          {links.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === index}
              aria-label={`Announcement ${i + 1} of ${links.length}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? 'bg-gray-700 scale-110'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
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
