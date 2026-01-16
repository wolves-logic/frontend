import Link from "next/link";
import Image from "next/image";
import logoNew from "@/public/assets/logo-new.png";
import {
    BiChevronRight,
    BiMapPin,
    BiEnvelope,
    BiLogoWhatsapp,
    BiLogoFacebook,
    BiLogoInstagram,
    BiLogoLinkedin,
    BiLogoTwitter
} from "react-icons/bi";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500"></div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl rounded-bl-full pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand & Contact */}
                    <div className="space-y-6">
                        <Link href="/" className="block w-fit opacity-90 hover:opacity-100 transition-opacity">
                            <Image
                                src={logoNew}
                                alt="Original Assignment Help"
                                width={200}
                                height={50}
                                className="h-12 w-auto brightness-0 invert"
                                placeholder="blur"
                            />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empowering students worldwide with premium academic assistance.
                            Trusted by 10,000+ top achievers.
                        </p>

                        <div className="space-y-4 pt-2">
                            <div className="flex items-start gap-3 group">
                                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:bg-indigo-500/20 transition-colors mt-1">
                                    <BiMapPin className="text-lg" />
                                </div>
                                <div>
                                    <h5 className="text-white font-medium text-sm">Our Locations</h5>
                                    <p className="text-sm text-slate-400">Palwal & Hyderabad, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 group">
                                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:bg-indigo-500/20 transition-colors mt-1">
                                    <BiEnvelope className="text-lg" />
                                </div>
                                <div>
                                    <h5 className="text-white font-medium text-sm">Email Us</h5>
                                    <a href="mailto:contact@originalassignmenthelp.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                                        contact@originalassignmenthelp.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 group">
                                <div className="p-2 bg-green-500/10 rounded-lg text-green-400 group-hover:bg-green-500/20 transition-colors mt-1">
                                    <BiLogoWhatsapp className="text-lg" />
                                </div>
                                <div>
                                    <h5 className="text-white font-medium text-sm">WhatsApp Support</h5>
                                    <a href="https://wa.me/919959691347" className="text-sm text-slate-400 hover:text-white transition-colors">
                                        +91 99596 91347
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-heading font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Home", href: "/" },
                                { label: "About Us", href: "/about" },
                                { label: "Blog", href: "/blog" },
                                { label: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="group flex items-center text-slate-400 hover:text-indigo-300 hover:translate-x-1 transition-all duration-300">
                                        <BiChevronRight className="text-indigo-500/50 mr-2 group-hover:text-indigo-400 transition-colors" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-heading font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
                            Our Services
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "Essay Writing",
                                "Dissertation Help",
                                "Homework Support",
                                "Research Papers",
                                "Proofreading"
                            ].map((service) => (
                                <li key={service}>
                                    <Link href="/services" className="group flex items-center text-slate-400 hover:text-indigo-300 hover:translate-x-1 transition-all duration-300">
                                        <BiChevronRight className="text-indigo-500/50 mr-2 group-hover:text-indigo-400 transition-colors" />
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-lg font-heading font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                            Connect With Us
                        </h4>
                        <p className="text-slate-400 mb-6 text-sm">
                            Follow us on social media for exclusive offers, study tips, and academic updates.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: BiLogoFacebook, href: "https://www.facebook.com/profile.php?id=61584213512534", color: "hover:bg-blue-600" },
                                { icon: BiLogoInstagram, href: "https://www.instagram.com/originalassignmenthelp_offcl", color: "hover:bg-pink-600" },
                                { icon: BiLogoLinkedin, href: "https://www.linkedin.com/company/108492639/admin/dashboard/", color: "hover:bg-blue-700" },
                                { icon: BiLogoTwitter, href: "https://x.com/studywithoah", color: "hover:bg-slate-700" },
                                { icon: BiLogoWhatsapp, href: "https://wa.me/919959691347", color: "hover:bg-green-600" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 ${social.color} hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20`}
                                >
                                    <social.icon className="text-xl" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Original Assignment Help. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms-conditions" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link>
                        <Link href="/refund-policy" className="hover:text-indigo-400 transition-colors">Refund Policy</Link>
                    </div>
                </div>

                {/* Powered By */}
                <div className="text-center text-xs text-slate-600 mt-8 pb-2">
                    <p>Operated by <span className="text-slate-500 font-semibold">Harviera IT Solutions</span></p>
                </div>
            </div>
        </footer>
    );
}
