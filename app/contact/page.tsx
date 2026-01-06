import PageHeader from "@/components/ui/PageHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BiMapPin, BiEnvelope, BiLogoWhatsapp, BiTime, BiPhone } from "react-icons/bi";

export default function Contact() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <PageHeader
                title="Contact Us"
                subtitle="We are here to help you 24/7. Get in touch today."
            />

            <section className="py-24 relative overflow-hidden">
                {/* Decorative background blob */}
                <div className="absolute top-20 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none"></div>
                <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Contact Info (Left Side - Wider) */}
                        <div className="lg:col-span-7 space-y-10">
                            <div>
                                <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-3 block">Get In Touch</span>
                                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">We'd Love To Hear From You</h2>
                                <p className="text-slate-600 max-w-2xl leading-relaxed text-lg">
                                    Have specific questions about your assignment? Need a custom quote? Or just want to say hi?
                                    Our team is ready to assist you anytime.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-soft hover:shadow-premium hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50/50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 text-2xl mb-4 group-hover:scale-110 transition-transform relative z-10">
                                        <BiMapPin />
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-lg mb-2 relative z-10">Head Office</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed relative z-10">Old GT Rd, Gandhi Ashram Colony, Palwal, India, 121102</p>
                                </div>

                                <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-soft hover:shadow-premium hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50/50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 text-2xl mb-4 group-hover:scale-110 transition-transform relative z-10">
                                        <BiMapPin />
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-lg mb-2 relative z-10">Branch Office</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed relative z-10">L. B. Nagar, Hyderabad, Telangana, India</p>
                                </div>

                                <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-soft hover:shadow-premium hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50/50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 text-2xl mb-4 group-hover:scale-110 transition-transform relative z-10">
                                        <BiEnvelope />
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-lg mb-2 relative z-10">Email Us</h4>
                                    <a href="mailto:contact@originalassignmenthelp.com" className="text-slate-500 hover:text-amber-600 transition-colors text-sm break-all relative z-10">contact@originalassignmenthelp.com</a>
                                </div>

                                <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-soft hover:shadow-premium hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-green-50/50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 text-2xl mb-4 group-hover:scale-110 transition-transform relative z-10">
                                        <BiTime />
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-lg mb-2 relative z-10">Operating Hours</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed relative z-10">Mon - Sun: 24 Hours<br />(365 Days a Year)</p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA (Right Side - Sticky) */}
                        <div className="lg:col-span-5 lg:sticky lg:top-28">
                            <div className="bg-gradient-to-br from-slate-900 to-indigo-900 p-10 rounded-[2.5rem] text-center text-white relative overflow-hidden shadow-2xl ring-1 ring-white/10">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 animate-pulse"></div>
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl -ml-10 -mb-10"></div>

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 ring-4 ring-green-500/30">
                                        <BiLogoWhatsapp className="text-5xl text-green-400" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">Chat Instantly</h3>
                                    <p className="text-indigo-200 mb-8 leading-relaxed">
                                        Get a free quote in under 5 minutes. Our experts are online and ready to help.
                                    </p>
                                    <a
                                        href="https://wa.me/919959691347?text=Hi,%20I%20have%20a%20query."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-4 rounded-xl bg-[#25D366] text-white font-bold text-lg hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-3 group hover:-translate-y-1"
                                    >
                                        <BiLogoWhatsapp className="text-3xl" />
                                        <span>Start WhatsApp Chat</span>
                                    </a>
                                    <p className="mt-6 text-sm text-indigo-300 opacity-60">
                                        Average response time: &lt; 2 mins
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Full Width Map Section - Responsive Height */}
            <section className="bg-slate-200 h-[600px] md:h-[500px] w-full relative group">
                <div className="active:pointer-events-none absolute inset-0 z-10 pointer-events-none group-hover:pointer-events-none flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-0 transition-opacity">
                    <span className="bg-white px-4 py-2 rounded-lg shadow-md font-bold text-slate-800">Interact with Map</span>
                </div>

                <div className="grid md:grid-cols-2 h-full">
                    <div className="relative h-full border-b md:border-b-0 md:border-r border-white/50">
                        <iframe
                            src="https://maps.google.com/maps?q=Old+GT+Rd,+Gandhi+Ashram+Colony,+Palwal,+India,+121102&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Head Office - Palwal"
                            className="grayscale hover:grayscale-0 transition-all duration-700 w-full h-full"
                        ></iframe>
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg pointer-events-none z-10 border border-slate-100">
                            <div className="flex items-center gap-2">
                                <BiMapPin className="text-red-500 text-xl" />
                                <div>
                                    <p className="font-bold text-slate-900 text-sm">Head Office</p>
                                    <p className="text-slate-500 text-xs">Palwal, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-full">
                        <iframe
                            src="https://maps.google.com/maps?q=L.+B.+Nagar,+Hyderabad,+Telangana,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Branch Office - Hyderabad"
                            className="grayscale hover:grayscale-0 transition-all duration-700 w-full h-full"
                        ></iframe>
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg pointer-events-none z-10 border border-slate-100">
                            <div className="flex items-center gap-2">
                                <BiMapPin className="text-indigo-500 text-xl" />
                                <div>
                                    <p className="font-bold text-slate-900 text-sm">Branch Office</p>
                                    <p className="text-slate-500 text-xs">Hyderabad, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
