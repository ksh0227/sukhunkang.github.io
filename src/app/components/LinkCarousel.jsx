'use client';

import React, { useState, useEffect } from 'react';

const LinkCarousel = () => {
  const links = [ /* … */ ];
  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i - 1 + links.length) % links.length);
  const next = () => setIndex(i => (i + 1) % links.length);

  useEffect(() => {
    const timer = setInterval(next, 10_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* remove top gap by using mb only */}
      <div className="flex justify-center items-center gap-2 text-sm text-black mb-2">
        <span className="text-lg leading-none">📢</span>
        <button onClick={prev} className="leading-none text-sm opacity-50 hover:opacity-80">
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
        <button onClick={next} className="leading-none text-sm opacity-50 hover:opacity-80">
          ›
        </button>
      </div>
      <div className="w-[300px] lg:w-[500px] h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50 mx-auto" />

      <style jsx>{`
        .animate-scroll {
          animation: scroll 12s linear infinite;
        }
        @keyframes scroll {
          0%, 10%   { transform: translateX(100%); }
          90%, 100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
};

export default LinkCarousel;
