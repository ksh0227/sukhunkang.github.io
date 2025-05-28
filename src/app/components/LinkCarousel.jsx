'use client';

import React, { useState } from 'react';

const LinkCarousel = () => {
  const links = [
    { label: 'AOM2025 PDW Interest Form', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfE1MgUwsJAC6a3I5SbpyeZWVjKb9m81yt6SmZR5eXd2FuR5g/viewform' },
    { label: 'AOM2025 Managing Your Dissertation Workshop', href: 'https://docs.google.com/forms/d/e/1FAIpQLScFDD-ptIHpoND7KVsGwTVgOdwmlJPHE1ooKo_jc1hkJeBTzg/viewform' },
    { label: 'Rethinking Strategy & Innovation in Biopharmaceutical and Healthcare Industries', href: 'https://www.strategicmanagement.net/event/rethinking-strategy-innovation-in-biopharmaceutical-and-healthcare-industries/' },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + links.length) % links.length);
  const next = () => setIndex((index + 1) % links.length);

  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <div className="flex items-center justify-center mb-4 gap-4 text-sm text-black">
        <button onClick={prev} className="text-xl px-2">{'<'}</button>

        <a
          href={links[index].href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {links[index].label}
        </a>

        <button onClick={next} className="text-xl px-2">{'>'}</button>
      </div>

      <div className="my-6 w-[400px] lg:w-[600px] h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50 dark:via-neutral-600"></div>
    </div>
  );
};

export default LinkCarousel;
