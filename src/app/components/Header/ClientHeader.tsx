'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './ClientHeader.module.scss';
import { NavItem } from "@/app/services/navigationService";
import { SocialIcon } from "@/app/lib/icons";

interface ClientHeaderProps {
    initialNavigation: NavItem[];
}

const ClientHeader = ({ initialNavigation }: ClientHeaderProps) => {
    const pathname = usePathname();
    const [isHydrated, setIsHydrated] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<NavItem[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    const showCta = !pathname.startsWith('/checkout') &&
        !pathname.startsWith('/search');

    // Memoize navigation with active states
    const navigationWithActive = initialNavigation.map(item => ({
        ...item,
        active: item.href === pathname ||
            (pathname?.startsWith(item.href) && item.href !== "/")
    }));

    // Memoize handlers
    const handleSubmenuClick = useCallback((submenu: NavItem[] | undefined) => {
        if (submenu) {
            setActiveSubmenu(submenu);
            setMobileSubmenuOpen(true);
        }
    }, []);

    const handleCloseMobileMenu = useCallback(() => {
        setMobileMenuOpen(false);
        setMobileSubmenuOpen(false);
    }, []);

    // Handle body class and hydration in one effect
    useEffect(() => {
        setIsHydrated(true);
        const className = styles.mobileOverlayMenuActive;

        // Check window width and set isMobile
        setIsMobile(window.innerWidth <= 500);

        // Add event listener for window resize
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500);
        };
        window.addEventListener('resize', handleResize);

        if (mobileMenuOpen || mobileSubmenuOpen) {
            document.body.classList.add(className);
        } else {
            document.body.classList.remove(className);
        }

        return () => {
            document.body.classList.remove(className);
            window.removeEventListener('resize', handleResize);
        };
    }, [mobileMenuOpen, mobileSubmenuOpen]);

    return (
        <>
            <header className={`bg-clear-blurred sticky top-0 w-full flex items-center z-10 ${styles.header} ${!isHydrated ? styles.preHydration : ''}`}>
                <div className="container mx-auto py-4 flex items-center relative">
                    {/* Logo on the left */}
                    <Link href="/" className="relative">
                        <Image
                            src="/logo.svg"
                            alt="company logo"
                            className="pr-2 lg:pr-0"
                            height={47}
                            width={180}
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation - Centered when CTA is shown, right-aligned when CTA is hidden */}
                    <nav className={`hidden lg:flex items-center lg:space-x-7 ${
                        showCta
                            ? "absolute left-1/2 transform -translate-x-1/2"
                            : "ml-auto"
                    }`}>
                        {navigationWithActive.filter(x => x.showHeader).map((item) => (
                            <div key={item.href} className="relative group">
                                {item.submenu && item.submenu.length > 0 ? (
                                    <div className="relative group">
                                        <Link
                                            href={item.href}
                                            className={`no-underline uppercase text-darkest-blue font-bold text-base leading-none tracking-widest ${item.active ? styles.active : ''}`}
                                        >
                                            {item.text}
                                        </Link>
                                        <div className="hidden group-hover:block absolute bg-offWhite shadow-lg rounded-xl w-max">
                                            {item.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.href}
                                                    href={subItem.href}
                                                    className="block py-3 px-4 text-dark no-underline hover:bg-gray hover:rounded-none first:hover:rounded-t-xl last:hover:rounded-b-xl"
                                                >
                                                    {subItem.text}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`no-underline uppercase text-darkest-blue font-bold text-base leading-none tracking-widest hover:border-b-[3px] hover:border-green ${item.active ? ` border-b-[3px] border-green ${styles.active}` : ''}`}
                                    >
                                        {item.text}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Book Now and Mobile Menu Toggle - aligned to the right */}
                    <div className={`flex items-center space-x-1 ml-auto ${showCta ? "ml-auto" : "lg:hidden"}`}>
                        {/* {showCta && (
                            <button
                                className="mx-2 lg:mx-0"
                                onClick={() => {
                                    // This button is now handled by CtaButtonTriggerDialog directly
                                    // No direct action needed here for now, as CtaButtonTriggerDialog manages its own state
                                }}
                            >
                                Book<span className="hidden md:inline">&nbsp;Now</span>
                            </button>
                        )} */}

                        <button
                            className="lg:hidden p-[10px] border rounded-full bg-white hover:bg-gray"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open menu"
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-main-menu"
                            role="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>


            {/* Mobile Menus - Only render when hydrated */}
            {isHydrated && (
                <>
                    {/* Mobile Submenu */}
                    <div
                        id="mobile-submenu"
                        className={`fixed inset-y-0 right-0 w-[90%] max-w-md bg-white transform transition-transform duration-300 ease-in-out lg:hidden z-30 ${
                            mobileSubmenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        <div className="flex flex-col h-full">
                            <div className="p-4 flex justify-between items-center border-b">
                                <button
                                    className="p-2"
                                    onClick={() => setMobileSubmenuOpen(false)}
                                    aria-label="Back to main menu"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="p-2"
                                    onClick={handleCloseMobileMenu}
                                    aria-label="Close menu"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto">
                                {activeSubmenu.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block text-dark px-4 py-3 border-b hover:bg-gray-50 no-underline"
                                        onClick={handleCloseMobileMenu}
                                    >
                                        {item.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Mobile Menu */}
                    <div
                        id="mobile-main-menu"
                        className={`fixed inset-y-0 right-0 w-[90%] max-w-md bg-white transform transition-transform duration-300 ease-in-out lg:hidden z-20 ${
                            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        <div className="flex flex-col h-full">
                            <div className="p-4 flex justify-between items-center border-b">
                                {/* {showCta && (
                                    <button
                                        className=""
                                        onClick={() => {
                                            // This button is now handled by CtaButtonTriggerDialog directly
                                            // No direct action needed here for now, as CtaButtonTriggerDialog manages its own state
                                        }}
                                    >
                                        Book Now
                                    </button>
                                )} */}

                                <button
                                    className="p-2 ml-auto"
                                    onClick={handleCloseMobileMenu}
                                    aria-label="Close menu"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <nav className="flex-1 overflow-y-auto p-0 lg:p-4">
                                {navigationWithActive.map((item) => (
                                    <div key={item.href}>
                                        {item.submenu && item.submenu.length > 0 ? (
                                            <button
                                                onClick={() => handleSubmenuClick(item.submenu)}
                                                className="w-full text-dark flex items-center justify-between px-4 py-3 border-b hover:bg-gray-50 no-underline"
                                                aria-expanded={mobileSubmenuOpen}
                                                aria-controls="mobile-submenu"
                                            >
                                                {item.text}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M9 18l6-6-6-6" />
                                                </svg>
                                            </button>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="block text-dark px-4 py-3 border-b hover:bg-gray-50 no-underline"
                                                onClick={handleCloseMobileMenu}
                                            >
                                                {item.text}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* Footer Section */}
                            {/* <div className="p-4 border-t">
                                <div className="mb-4">
                                    <div className="flex space-x-4">
                                        <a
                                            href={process.env.NEXT_PUBLIC_WHATSAPP_URL || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="WhatsApp"
                                            className="text-gray-600 hover:text-gray-900"
                                        >
                                            <SocialIcon type="whatsapp" />
                                        </a>
                                        <a
                                            href={process.env.NEXT_PUBLIC_TRIPADVISOR_PAGE_URL || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="TripAdvisor"
                                            className="text-gray-600 hover:text-gray-900"
                                        >
                                            <SocialIcon type="tripadvisor" />
                                        </a>
                                    </div>
                                </div>

                                <div className="text-sm text-gray-600">
                                    <ul className="flex flex-wrap -mx-2">
                                        <li className="px-2">
                                            <Link href="/terms-and-conditions" className="hover:text-gray-900 text-dark no-underline hover:underline text-sm">
                                                Terms and Conditions
                                            </Link>
                                        </li>
                                        <li className="px-2">
                                            <Link href="/privacy-and-cookie-policy" className="hover:text-gray-900 text-dark no-underline hover:underline text-sm">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ClientHeader;