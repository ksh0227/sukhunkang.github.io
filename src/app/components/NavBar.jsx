"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <NavItem href="/lab" pathname={pathname}>
              LAB
            </NavItem>
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
  const isActive = pathname === href;
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

export default Navbar;
