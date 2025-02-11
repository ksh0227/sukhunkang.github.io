"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              SUKHUN KANG
            </Link>
          </div>

          {/* nav links */}
          <div className="flex items-center space-x-8">
            <NavItem href="/about" pathname={pathname}>
              ABOUT
            </NavItem>
            <NavItem href="/research" pathname={pathname}>
              RESEARCH
            </NavItem>
            <LabDropdown pathname={pathname} />
            <NavItem href="/teaching" pathname={pathname}>
              TEACHING
            </NavItem>
            <NavItem href="/resources" pathname={pathname}>
              RESOURCES
            </NavItem>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, pathname, children }) => {
  const isActive = pathname === href || (pathname === "/" && href === "/about");
  return (
    <Link
      href={href}
      className={`text-sm font-medium ${
        isActive ? "text-gray-900 font-bold" : "text-gray-300 hover:text-gray-900"
      }`}
    >
      {children}
    </Link>
  );
};

const LabDropdown = ({ pathname }) => {
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
        className={`text-sm font-medium ${
          pathname.startsWith("/lab") ? "text-gray-900 font-bold" : "text-gray-300 hover:text-gray-900"
        }`}
      >
        LAB
      </button>

      {/* dropdown portion */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg">
          <Link
            href="/lab/about"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            ABOUT
          </Link>
          <Link
            href="/lab/members"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            MEMBERS
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;