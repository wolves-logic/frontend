import Link from "next/link";
import Image from "next/image";
import { BiGridAlt, BiCheckShield, BiTime, BiAward, BiLogoWhatsapp, BiStar } from "react-icons/bi";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero-bg.jpg"
                    alt="Students studying"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-indigo-950/90 to-purple-900/80"></div>

                {/* Modern subtle noise texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                {/* Animated decorative blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/30 rounded-full mix-blend-overlay filter blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/30 rounded-full mix-blend-overlay filter blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full border border-indigo-200/20 bg-indigo-500/10 backdrop-blur-md shadow-lg mb-8 animate-fade-in-up">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                        </span>
                        <span className="text-indigo-100/90 text-sm font-semibold tracking-wide">Rated #1 Academic Consultancy in UK</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white mb-8 leading-[1.1] tracking-tight animate-fade-in-up delay-100 drop-shadow-2xl">
                        Excellence in <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500 drop-shadow-md">
                            Academic Assessment
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-2xl text-indigo-100/80 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-light">
                        Empowering students with premium, original, and timely academic assistance.
                        Join <span className="font-semibold text-white">10,000+ students</span> achieving top grades with our PhD experts.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto animate-fade-in-up delay-300">
                        <Link
                            href="/services"
                            className="group btn-primary-lg relative overflow-hidden ring-offset-2 ring-offset-slate-900 focus:ring-2 focus:ring-indigo-500"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <BiGridAlt className="text-xl" />
                                Explore Services
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>

                        <a
                            href="https://wa.me/919959691347?text=Hi,%20I%20would%20like%20to%20place%20an%20order."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <BiLogoWhatsapp className="text-3xl text-green-400 group-hover:scale-110 transition-transform" />
                            <span>Order on WhatsApp</span>
                        </a>
                    </div>

                    {/* Social Proof / Trusted By */}
                    <div className="mt-16 sm:mt-20 pt-10 border-t border-white/10 w-full max-w-4xl animate-fade-in-up delay-500">
                        <p className="text-indigo-200/60 text-sm font-medium uppercase tracking-widest mb-6">Trusted by students from</p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholders for University Logos - represented by text for now to avoid broken images */}
                            <span className="text-xl font-bold text-white/80 font-serif">OXFORD</span>
                            <span className="text-xl font-bold text-white/80 font-serif">CAMBRIDGE</span>
                            <span className="text-xl font-bold text-white/80 font-serif">LSE</span>
                            <span className="text-xl font-bold text-white/80 font-serif">IMPERIAL</span>
                            <span className="text-xl font-bold text-white/80 font-serif">UCL</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 text-white/30">
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent"></div>
            </div>
        </section>
    );
}
