import { React, useState, useRef, useEffect } from 'react'
import './header.css'

import { MdDarkMode } from 'react-icons/md'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdLightMode } from 'react-icons/md';

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [staggered, setStaggered] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isDark, setIsDark] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    // Hide on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setShowHeader(false); // Hide header
            } else {
                setShowHeader(true); // Show header
            }
            setLastScrollY(currentScrollY);

            // Close menu if open and user scrolls (on mobile)
            if (menuVisible && window.innerWidth < 1024) {
                setMenuVisible(false);
                setStaggered(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, menuVisible]);

    const handleClickOutside = (e) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(e.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(e.target)
        ) {
            setMenuVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleMenuToggle = () => {
        setMenuVisible((prev) => !prev);
        if (!menuVisible) {
            setTimeout(() => setStaggered(true), 50);
        } else {
            setStaggered(false);
        };
    };
    const toggleTheme = () => {
        setIsDark((prev) => {
            const newValue = !prev;
            if (newValue) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return newValue;
        });
    };

    return (
        <div
            className={`NavBarCont shadow fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md transition-transform duration-300 ${
                showHeader ? 'translate-y-0' : '-translate-y-full'
            } dark:bg-slate-grey dark:text-marigold`}
        >
            <div className="flex justify-between flex-wrap items-center mx-auto NavBar px-5 w-full">
                <div id="m-name" className="self-center font-bold">
                    <a href="#">KAKU</a>
                </div>
                <div className="flex justify-between ">
                    <button
                        ref={buttonRef}
                        id='more-button'
                        onClick={handleMenuToggle}
                        className="relative lg:hidden"
                        aria-label={menuVisible ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuVisible}
                    >
                        <div className="relative flex items-center justify-center w-[50px] h-[50px] duration-200">
                            <div
                                className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 ${
                                menuVisible ? '-rotate-[45deg]' : ''
                                } origin-center`}
                            >
                                <div
                                className={`bg-black h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                                    menuVisible ? '-rotate-90 h-[1px] -translate-y-[1px]' : ''
                                } origin-right delay-75 dark:bg-marigold`}
                                ></div>
                                <div className="bg-black h-[2px] rounded dark:bg-marigold"></div>
                                <div
                                className={`bg-black h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${
                                    menuVisible ? '-rotate-90 h-[1px] translate-y-[1px]' : ''
                                } origin-left delay-75 dark:bg-marigold`}
                                ></div>
                            </div>
                        </div>
                    </button>

                    <div
                        className={`menu ${menuVisible ? 'flex' : 'hidden'} flex-col lg:flex lg:flex-row lg:gap-4 `}
                        id="menu-container"
                        ref={menuRef}
                    >
                        <ul id="menu" className="flex flex-col lg:flex-row gap-2 items-center align-items-center bg-white dark:bg-slate-grey dark:text-marigold">
                            { [
                                { label: "HOME", href: "#" },
                                { label: "ABOUT", href: "#about" },
                                { label: "SERVICES", href: "#services" },
                                { label: "RESUME", href: "#resume" },
                                { label: "PORTFOLIO", href: "#portfolio" },
                                { label: "CONTACT", href: "#contact" },
                            ].map((item, idx) => (
                                <li
                                    key={item.label}
                                    style={{
                                        transition: 'opacity 0.4s, transform 0.4s',
                                        transitionDelay: menuVisible && staggered ? `${idx * 100}ms` : '0ms',
                                        opacity:
                                          // On large screens, always visible
                                            window.innerWidth >= 1024
                                                ? 1
                                                // On mobile, use staggered animation
                                                : (menuVisible ? (staggered ? 1 : 0) : 0),
                                            transform:
                                            window.innerWidth >= 1024
                                                ? 'none'
                                                : (menuVisible && staggered ? 'translateY(0)' : 'translateY(20px)'),
                                        }}
                                    >
                                        <a
                                            href={item.href}
                                            onClick={() => {
                                                if (window.innerWidth < 1024) setMenuVisible(false);
                                            }}
                                            >
                                            {item.label}
                                        </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div id="social-links" className='flex justify-between items-center gap-1'>
                        <a href="https://www.linkedin.com/kaku-amsalu" className="inline" target='_blank'>
                            {isDark ? <FaLinkedin size={22} color='slate-gray'/> : <FaLinkedin size={22}/>}
                        </a>
                        <a href="https://github.com/ke-kaa" target='_blank'>
                            {isDark ? <FaGithub size={22} color='slate-gray'/> : <FaGithub size={22}/>}
                        </a>
                        <a href="https://www.linkedin.com/in/kaku-amsalu-5aa926283/" target='_blank'>
                            {isDark ? <FaInstagram size={22} color='slate-gray'/> : <FaInstagram size={22}/>}
                        </a>
                    </div>
                    <button
                    className="flex items-center align-items-center mx-4"
                    onClick={toggleTheme}
                    aria-label="Toggle dark mode"
                    type="button"
                    >
                        {isDark ? <MdLightMode size={24} /> : <MdDarkMode size={24}/>}
                    </button>
                </div>
            </div>
        </div>
    )
}
