"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ClientHeader.module.scss";
import { NavItem } from "@/app/services/navigationService";
import { useServices } from "../../services/tidalServicesApi";
interface ClientHeaderProps {
  initialNavigation: NavItem[];
}

const ClientHeader = ({ initialNavigation }: ClientHeaderProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const servicesDropdownTimeout = React.useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const { data: services, isLoading, error } = useServices();

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "News", href: "/news" },
  ];
  // Memoize navigation with active states

  // Handle body class and hydration in one effect

  return (
    <>
      <header
        className={`bg-offWhite sticky top-0 w-full flex items-center z-10 ${
          styles.header
        } ${!isHydrated ? styles.preHydration : ""}`}
      >
        <div className="w-full px-6 lg:px-12 py-5 flex items-center relative justify-between">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="relative w-[146px] h-[58px] block">
              <Image
                src="/public2/logo2.svg"
                alt="Tidal Film Logo"
                width={146}
                height={58}
                className=" h-auto absolute top-0 left-0 transition-opacity duration-500 group-hover:opacity-0"
                priority
              />
              <Image
                src="/public2/color-logo2.svg"
                alt="Tidal Film Color Logo"
                width={146}
                height={58}
                className="h-auto absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                priority
              />
            </span>
            {/* <div className="">
              <p className="text-primary font-extrabold text-xl tracking-wide ">
                TIDAL
              </p>
              <p className="text-primary text-sm font-mediums tracking-wide">
                FILM
              </p>
            </div> */}
          </Link>

          {/* Desktop Navigation - Centered when CTA is shown, right-aligned when CTA is hidden */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              if (link.label === "Services") {
                return (
                  <div
                    key={link.label}
                    className="flex flex-col items-center relative"
                    onMouseEnter={() => {
                      if (servicesDropdownTimeout.current) {
                        clearTimeout(servicesDropdownTimeout.current);
                      }
                      setServicesDropdownOpen(true);
                      setHoveredLink(link.label);
                    }}
                    onMouseLeave={() => {
                      servicesDropdownTimeout.current = setTimeout(() => {
                        setServicesDropdownOpen(false);
                      }, 120); // 120ms delay
                      setHoveredLink(null);
                    }}
                  >
                    <Link
                      href={link.href}
                      className="font-montserrat text-darker-blue text-22"
                    >
                      {link.label}
                    </Link>
                    <span
                      className={`block h-1 rounded-full w-full
                      ${
                        isActive || hoveredLink === link.label
                          ? "bg-[#FE5F55] scale-100 opacity-100"
                          : "bg-transparent scale-75 opacity-0"
                      }
                    `}
                    />
                    {/* Dropdown menu */}
                    {servicesDropdownOpen && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-1 z-30 bg-offWhite rounded-xl shadow-xl p-4 min-w-[420px] max-w-[620px] w-max flex flex-col"
                        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 text-base font-semibold text-[#1C364F] min-w-[340px]">
                          {isLoading && <div>Loading...</div>}
                          {error && (
                            <div className="text-[#FE5F55] col-span-2">
                              {typeof error === "string"
                                ? error
                                : "An error occurred while loading services."}
                            </div>
                          )}
                          {!isLoading &&
                            !error &&
                            (!services || services.length === 0) && (
                              <div className="text-[#FE5F55] col-span-2">
                                No services found.
                              </div>
                            )}
                          {services &&
                            services.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                className="relative group px-2 py-2 rounded transition-colors whitespace-nowrap flex items-center"
                                onClick={() => setServicesDropdownOpen(false)}
                              >
                                {/* Animated orange line for all items, animated on hover */}
                                <span
                                  className="absolute left-0 top-1/2 -translate-y-1/2 h-9 w-1 rounded bg-[#FE5F55] opacity-0 group-hover:opacity-100 transition-all duration-300"
                                  aria-hidden="true"
                                />
                                <span className="group-hover:pl-1 font-montserrat text-darker-blue text-22 transition-all duration-300">
                                  {service.title}
                                </span>
                              </Link>
                            ))}
                          {/* View All Services as a grid item */}
                          <Link
                            href="/services"
                            className="relative group px-2 py-2 rounded transition-colors whitespace-nowrap flex items-center col-span-1 sm:col-span-2"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <span
                              className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded bg-[#FE5F55] opacity-0 group-hover:opacity-100 transition-all duration-500"
                              aria-hidden="true"
                            />
                            <span className="group-hover:pl-2 text-22 font-semibold text-primary transition-all duration-500">
                              View All Services
                            </span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <div
                  key={link.label}
                  className="flex flex-col items-center"
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <Link
                    href={link.href}
                    className={`font-montserrat text-darker-blue text-22`}
                  >
                    {link.label}
                  </Link>
                  <span
                    className={`block h-1  w-full 
                    ${
                      isActive || hoveredLink === link.label
                        ? "bg-[#FE5F55] scale-100 opacity-100"
                        : "bg-transparent scale-75 opacity-0"
                    }
                  `}
                  />
                </div>
              );
            })}
            <Link href="/contact" className="btn-primary font-jost ">
              GET IN TOUCH
            </Link>
          </nav>

          {/* Book Now and Mobile Menu Toggle - aligned to the right */}
          <div className="lg:hidden">
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="focus:outline-none"
            >
              {/* Hamburger icon */}
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <rect y="5" width="24" height="2" rx="1" fill="#1C364F" />
                <rect y="11" width="24" height="2" rx="1" fill="#1C364F" />
                <rect y="17" width="24" height="2" rx="1" fill="#1C364F" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menus - Only render when hydrated */}
      {menuOpen && (
        <div className="fixed inset-0 z-40">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-30"
            onClick={() => setMenuOpen(false)}
          />
          {/* Slide-in menu */}
          <div className="absolute top-0 right-0 h-full w-64 bg-[#F7F7FF] shadow-lg z-50 flex flex-col p-6 animate-slide-in">
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="self-end mb-6 focus:outline-none"
            >
              {/* Close icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                  stroke="#1C364F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="18"
                  y1="6"
                  x2="6"
                  y2="18"
                  stroke="#1C364F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#1C364F] font-semibold text-lg hover:opacity-80"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary font-jost ">
                GET IN TOUCH
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientHeader;
