"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import {
    BiHomeAlt,
    BiGrid,
    BiBook,
    BiFolderOpen,
    BiBookContent,
    BiInfoCircle,
    BiEnvelope,
    BiMenu,
    BiX,
    BiChevronDown,
    BiLogoWhatsapp,
    BiEdit,
    BiAward,
    BiSearch,
    BiCode,
    BiBarChartAlt,
    BiBriefcase,
    BiBuilding,
    BiPlusCircle,
    BiRightArrowAlt
} from "react-icons/bi";

// --- Configuration & Data ---

const navLinks = [
    { href: "/", label: "Home", icon: BiHomeAlt },
    {
        href: "/services",
        label: "Services",
        icon: BiGrid,
        dropdown: [
            { href: "/services", label: "All Services", icon: BiGrid, desc: "Explore our full range of academic solutions" },
            { href: "/services/essay-writing", label: "Essay Writing", icon: BiEdit, desc: "Custom essays tailored to your needs" },
            { href: "/services/dissertation", label: "Dissertation Help", icon: BiAward, desc: "Expert guidance for your thesis" },
            { href: "/services/research-paper", label: "Research Papers", icon: BiSearch, desc: "In-depth research and analysis" },
            { href: "/services/programming", label: "Programming", icon: BiCode, desc: "Code solutions in any language" },
        ]
    },
    {
        href: "/subjects",
        label: "Subjects",
        icon: BiBook,
        dropdown: [
            { href: "/subjects", label: "All Subjects", icon: BiBook, desc: "Browse subjects we cover" },
            { href: "/subjects/mathematics", label: "Mathematics", icon: BiBarChartAlt, desc: "Algebra, Calculus, Statistics" },
            { href: "/subjects/management", label: "Management", icon: BiBriefcase, desc: "Business, Finance, Marketing" },
            { href: "/subjects/law", label: "Law", icon: BiBuilding, desc: "Civil, Criminal, Corporate Law" },
            { href: "/subjects/nursing", label: "Nursing", icon: BiPlusCircle, desc: "Healthcare and Medical Sciences" },
        ]
    },
    {
        href: "/resources",
        label: "Resources",
        icon: BiFolderOpen,
        dropdown: [
            { href: "/resources", label: "All Resources", icon: BiFolderOpen, desc: "Browse all our academic resources" },
            { href: "/resources/samples", label: "Sample Works", icon: BiFolderOpen, desc: "Check our quality with sample assignments" },
            { href: "/resources/guides", label: "Study Guides", icon: BiBook, desc: "Comprehensive academic writing guides" },
            { href: "/resources/tools", label: "Free Tools", icon: BiCode, desc: "Citation generator, GPA calculator & more" },
        ]
    },
    { href: "/blog", label: "Blog", icon: BiBookContent },
    { href: "/about", label: "About", icon: BiInfoCircle },
    { href: "/contact", label: "Contact", icon: BiEnvelope },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav
            ref={navRef}
            className="sticky top-0 inset-x-0 z-[100] bg-white border-b border-slate-200 shadow-sm transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center relative">
                    {/* --- Logo --- */}
                    <Link href="/" className="flex-shrink-0 relative group z-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg">
                        <Image
                            src="/assets/logo-new.png"
                            alt="Original Assignment Help"
                            width={220}
                            height={50}
                            className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
                            priority
                        />
                    </Link>

                    {/* --- Desktop Navigation (Centered) --- */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                        <ul className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li
                                    key={link.label}
                                    className="relative group h-full flex items-center"
                                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                                    onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className={clsx(
                                            "flex items-center gap-1.5 py-6 text-sm font-medium transition-colors relative",
                                            pathname === link.href || (link.dropdown && pathname.startsWith(link.href) && link.href !== "/")
                                                ? "text-indigo-600 font-bold"
                                                : "text-slate-600 hover:text-indigo-600"
                                        )}
                                        aria-haspopup={!!link.dropdown}
                                        aria-expanded={activeDropdown === link.label}
                                    >
                                        <span>{link.label}</span>
                                        {link.dropdown && (
                                            <BiChevronDown
                                                className={clsx(
                                                    "text-xs transition-transform duration-300 opacity-50 group-hover:opacity-100",
                                                    activeDropdown === link.label ? "rotate-180 text-indigo-500" : ""
                                                )}
                                            />
                                        )}
                                        {/* Subtle Active/Hover Underline */}
                                        <span className={clsx(
                                            "absolute bottom-4 left-0 w-full h-0.5 bg-indigo-600 rounded-full transform transition-transform duration-300 origin-left",
                                            pathname === link.href || (link.dropdown && pathname.startsWith(link.href) && link.href !== "/")
                                                ? "scale-x-100"
                                                : "scale-x-0 group-hover:scale-x-50"
                                        )}></span>
                                    </Link>

                                    {/* --- Mega Dropdown --- */}
                                    {link.dropdown && (
                                        <div
                                            className={clsx(
                                                "absolute top-full left-1/2 -translate-x-1/2 pt-0 w-80 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top",
                                                activeDropdown === link.label
                                                    ? "opacity-100 visible translate-y-0 scale-100"
                                                    : "opacity-0 invisible -translate-y-2 scale-95"
                                            )}
                                        >
                                            <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-2 overflow-hidden ring-1 ring-black/5 relative mt-1">
                                                {/* Triangle */}
                                                <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-slate-100 rounded-tl-sm"></div>

                                                <div className="relative z-10 flex flex-col">
                                                    {link.dropdown.map((item) => (
                                                        <Link
                                                            key={item.href}
                                                            href={item.href}
                                                            className="group/item flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                                                        >
                                                            <div className="mt-1 w-8 h-8 rounded-lg bg-indigo-50/50 flex items-center justify-center text-indigo-500 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all duration-300 flex-shrink-0 shadow-sm border border-indigo-100/50 group-hover/item:border-indigo-600">
                                                                {item.icon && <item.icon className="text-lg" />}
                                                            </div>
                                                            <div>
                                                                <span className="block text-slate-800 font-bold text-sm group-hover/item:text-indigo-700 transition-colors">{item.label}</span>
                                                                <span className="block text-slate-500 text-xs mt-0.5 leading-snug">{item.desc}</span>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* --- Action Buttons --- */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="https://wa.me/919959691347?text=Hi,%20I%20would%20like%20to%20place%20an%20order."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-full shadow-lg px-7 py-3 font-bold text-sm transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-slate-900 text-white shadow-indigo-500/20 hover:shadow-indigo-500/40 focus:ring-slate-900"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <BiLogoWhatsapp className="text-xl transition-transform group-hover:scale-110 text-green-400" />
                                <span>Order Now</span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                    </div>

                    {/* --- Mobile Toggle --- */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative z-50 p-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        aria-label="Toggle Navigation"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <BiX className="text-2xl" /> : <BiMenu className="text-2xl" />}
                    </button>
                </div>
            </div>

            {/* --- Mobile Menu Overlay --- */}
            <div
                className={clsx(
                    "fixed inset-0 z-40 bg-white/98 backdrop-blur-3xl transition-all duration-500 lg:hidden flex flex-col pt-28 px-6 pb-8 overflow-y-auto",
                    isOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible translate-x-full"
                )}
            >
                {/* Noise Texture for Premium Feel */}
                <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

                <div className="flex flex-col gap-2 max-w-md mx-auto w-full relative z-10">
                    {navLinks.map((link, idx) => (
                        <div key={link.label} className="border-b border-slate-100/80 pb-2 last:border-0" style={{ transitionDelay: `${idx * 50}ms` }}>
                            {link.dropdown ? (
                                <details className="group/mobile">
                                    <summary className="flex items-center justify-between text-lg font-bold text-slate-800 cursor-pointer list-none py-3.5 hover:text-indigo-600 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover/mobile:text-indigo-600 transition-colors">
                                                <link.icon className="text-xl" />
                                            </div>
                                            {link.label}
                                        </div>
                                        <BiChevronDown className="text-slate-400 text-xl transition-transform duration-300 group-open/mobile:rotate-180" />
                                    </summary>
                                    <div className="pl-14 pr-2 mt-2 flex flex-col gap-2 animate-fade-in-up pb-4">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-slate-600 hover:text-indigo-700 hover:bg-indigo-50/50 transition-all text-sm font-medium"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <BiRightArrowAlt className="text-indigo-400" />
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </details>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-4 text-lg font-bold text-slate-800 py-3.5 hover:text-indigo-600 transition-colors group/link"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover/link:text-indigo-600 group-hover/link:bg-indigo-50 transition-colors">
                                        <link.icon className="text-xl" />
                                    </div>
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-auto pt-8 max-w-md mx-auto w-full relative z-10">
                    <a
                        href="https://wa.me/919959691347?text=Hi,%20I%20would%20like%20to%20place%20an%20order."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-4 rounded-2xl shadow-xl shadow-green-500/20 hover:bg-green-600 hover:shadow-green-500/40 hover:-translate-y-1 transition-all"
                    >
                        <BiLogoWhatsapp className="text-3xl" />
                        <span className="text-lg">Chat on WhatsApp</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
