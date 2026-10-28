"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

// In the page flow (not fixed): name on the left, links on the right, aligned
// with the page content. The current page carries a gold underline.
const itemClass =
  "inline-block border-b-2 pb-0.5 transition-colors duration-200";
const activeClass = "border-gold text-gray-900";
const idleClass = "border-transparent text-gray-900 hover:border-gray-300";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* lg and up: name and menu items share a text baseline despite
            different sizes. Below lg the row holds the menu icon, so center. */}
        <div className="flex justify-between items-center lg:items-baseline pt-6 pb-5">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="text-[1.1rem] text-gray-900 hover:text-gray-600 transition-colors duration-200"
          >
            Sukhun Kang
          </Link>
          <div className="hidden lg:flex items-center gap-x-7 text-[0.95rem]">
            <NavItem href="/about" pathname={pathname} onClick={handleLinkClick}>
              About
            </NavItem>
            <NavItem href="/research" pathname={pathname} onClick={handleLinkClick}>
              Research
            </NavItem>
            <LabDropdown pathname={pathname} onLinkClick={handleLinkClick} />
            <NavItem href="/teaching" pathname={pathname} onClick={handleLinkClick}>
              Teaching
            </NavItem>
            <NavItem href="/resources" pathname={pathname} onClick={handleLinkClick}>
              Resources
            </NavItem>
            <CvLink />
          </div>

          {/* below lg: menu button */}
          <div className="lg:hidden flex items-center ml-auto">
            <button
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="text-gray-600 hover:text-gray-900 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ml-4"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden flex flex-col items-start gap-3 pb-6">
            <NavItem href="/about" pathname={pathname} onClick={handleLinkClick}>
              About
            </NavItem>
            <NavItem href="/research" pathname={pathname} onClick={handleLinkClick}>
              Research
            </NavItem>
            <NavItem href="/lab/hil" pathname={pathname} onClick={handleLinkClick}>
              Lab
            </NavItem>
            <NavItem href="/lab/hiwg" pathname={pathname} onClick={handleLinkClick}>
              HIWG Research Chat
            </NavItem>
            <NavItem href="/teaching" pathname={pathname} onClick={handleLinkClick}>
              Teaching
            </NavItem>
            <NavItem href="/resources" pathname={pathname} onClick={handleLinkClick}>
              Resources
            </NavItem>
            <CvLink onClick={handleLinkClick} />
          </div>
        )}
      </div>
    </nav>
  );
};

// The CV is a PDF, not a page, so it opens in a new tab and is never "active".
const CvLink = ({ onClick }) => (
  <a
    href="/Sukhun-Kang-CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className={`${itemClass} ${idleClass}`}
  >
    CV
  </a>
);

const NavItem = ({ href, pathname, children, onClick }) => {
  // Pages are served with a trailing slash (trailingSlash: true); hrefs are not.
  const isActive = pathname.replace(/\/$/, "") === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`${itemClass} ${isActive ? activeClass : idleClass}`}
    >
      {children}
    </Link>
  );
};

const LabDropdown = ({ pathname, onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const wrapperRef = useRef(null);
  const isActive = pathname.startsWith("/lab");

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 75);
    setCloseTimeout(timeout);
  };

  // Escape closes and returns focus to the trigger button.
  const handleKeyDown = (e) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
      wrapperRef.current?.querySelector("button")?.focus();
    }
  };

  // Close when keyboard focus leaves the dropdown entirely.
  const handleBlur = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    onLinkClick?.();
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="lab-menu"
        className={`${itemClass} ${isActive ? activeClass : idleClass} focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
      >
        Lab
        <svg aria-hidden="true" className="inline-block ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* dropdown */}
      {isOpen && (
        <div
          id="lab-menu"
          className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 z-50"
        >
          <Link
            href="/lab/hil"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-[0.95rem] text-gray-900 hover:bg-gray-50 transition-colors duration-150"
          >
            Health Innovation Lab
          </Link>
          <Link
            href="/lab/hiwg"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-[0.95rem] text-gray-900 hover:bg-gray-50 transition-colors duration-150"
          >
            HIWG Research Chat
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
