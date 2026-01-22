"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" onClick={handleLinkClick} className="text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200">
              SUKHUN KANG
            </Link>
            <div className="h-6 w-px bg-gray-400 hidden md:block"></div>
            <div className="hidden md:flex items-center space-x-8">
              <NavItem href="/about" pathname={pathname} onClick={handleLinkClick}>
                ABOUT
              </NavItem>
              <NavItem href="/research" pathname={pathname} onClick={handleLinkClick}>
                RESEARCH
              </NavItem>
              <LabDropdown pathname={pathname} onLinkClick={handleLinkClick} />
              <NavItem href="/teaching" pathname={pathname} onClick={handleLinkClick}>
                TEACHING
              </NavItem>
              <NavItem href="/resources" pathname={pathname} onClick={handleLinkClick}>
                RESOURCES
              </NavItem>
            </div>
          </div>

          {/* mobile only */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-900 focus:outline-none ml-4"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavItem href="/about" pathname={pathname} onClick={handleLinkClick}>
                ABOUT
              </NavItem>
              <NavItem href="/research" pathname={pathname} onClick={handleLinkClick}>
                RESEARCH
              </NavItem>
              <NavItem href="/lab/hil" pathname={pathname} onClick={handleLinkClick}>
                LAB
              </NavItem>
              <NavItem href="/lab/hiwg" pathname={pathname} onClick={handleLinkClick}>
                HIWG Seminar
              </NavItem>
              <NavItem href="/teaching" pathname={pathname} onClick={handleLinkClick}>
                TEACHING
              </NavItem>
              <NavItem href="/resources" pathname={pathname} onClick={handleLinkClick}>
                RESOURCES
              </NavItem>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavItem = ({ href, pathname, children, onClick }) => {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative block px-3 py-2 text-base font-medium transition-colors duration-200 ${
        isActive
          ? "text-gray-900 font-bold"
          : "text-gray-500 hover:text-gray-900"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gray-900 rounded-full hidden md:block" />
      )}
    </Link>
  );
};

const LabDropdown = ({ pathname, onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);

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

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`relative text-base font-medium transition-colors duration-200 ${
          pathname.startsWith("/lab") ? "text-gray-900 font-bold" : "text-gray-500 hover:text-gray-900"
        }`}
      >
        LAB
        <svg className="inline-block ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
        {pathname.startsWith("/lab") && (
          <span className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-gray-900 rounded-full" />
        )}
      </button>

      {/* dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
          <Link
            href="/lab/hil"
            onClick={onLinkClick}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
          >
            Health Innovation Lab
          </Link>
          <Link
            href="/lab/hiwg"
            onClick={onLinkClick}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
          >
            HIWG Seminar
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
