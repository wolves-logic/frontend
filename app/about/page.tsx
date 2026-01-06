import PageHeader from "@/components/ui/PageHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { BiShield, BiDiamond, BiGroup, BiTrophy, BiGlobe, BiHappyHeartEyes } from "react-icons/bi";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <PageHeader
                title="About Original Assignment Help"
                subtitle="Dedication to Academic Excellence since 2014"
            />

            {/* Our Story Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-50/50 -skew-x-12 z-0 hidden lg:block"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="inline-block py-1 px-4 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-4">
                                Our Mission
                            </div>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                                Bridging the Gap Between <span className="text-indigo-600">Potential & Success</span>
                            </h2>
                            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                                Original Assignment Help began in 2014 with a simple mission: to empower students to achieve their full academic potential. What started as a small group of passionate PhD tutors has grown into a global consultancy, but our core belief remains unchanged.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                We believe that every student deserves access to high-quality academic guidance. Our platform is not just about "getting work done"—it's about learning from experts, understanding complex concepts, and building the confidence to excel in your career.
                            </p>

                            <div className="grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                                <div>
                                    <h3 className="text-4xl font-bold text-indigo-600 mb-1">10+</h3>
                                    <span className="text-slate-500 font-medium text-sm">Years Experience</span>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold text-indigo-600 mb-1">50+</h3>
                                    <span className="text-slate-500 font-medium text-sm">Subjects Covered</span>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold text-indigo-600 mb-1">15k+</h3>
                                    <span className="text-slate-500 font-medium text-sm">Students Helped</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl opacity-20 blur-xl rotate-2"></div>
                            {/* Placeholder image that works well */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src="/assets/hero-bg.jpg" // Reusing hero-bg or a reliable placeholder if prefered
                                    alt="Team collaboration"
                                    width={800}
                                    height={600}
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                    <p className="text-white font-medium italic">"Empowering the next generation of leaders."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        title="Our Core Values"
                        subtitle="Why We Are Different"
                        description="The principles that guide every assignment we handle and every student we interact with."
                    />

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {[
                            { icon: BiShield, title: "Unwavering Integrity", desc: "We adhere to strict ethical codes. Originality and honesty are the foundations of our work. No shortcuts.", color: "bg-blue-500", text: "text-blue-600", bg: "bg-blue-50" },
                            { icon: BiDiamond, title: "Premium Quality", desc: "We never compromise. Every paper goes through rigorous quality checks before delivery to ensure excellence.", color: "bg-purple-500", text: "text-purple-600", bg: "bg-purple-50" },
                            { icon: BiHappyHeartEyes, title: "Student Success", desc: "Your success is our priority. We are committed to your academic growth and provide support 24/7.", color: "bg-amber-500", text: "text-amber-600", bg: "bg-amber-50" }
                        ].map((value, idx) => (
                            <div key={idx} className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-soft hover:shadow-premium hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                                {/* Corner Accent */}
                                <div className={`absolute top-0 right-0 w-32 h-32 ${value.bg} rounded-bl-full opacity-50 transition-all duration-500 group-hover:scale-110`}></div>

                                <div className={`w-20 h-20 mb-6 ${value.bg} rounded-2xl flex items-center justify-center ${value.text} text-4xl group-hover:bg-white group-hover:shadow-md transition-all duration-300 shadow-sm relative z-10`}>
                                    <value.icon />
                                </div>

                                <h4 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{value.title}</h4>
                                <p className="text-slate-600 leading-relaxed relative z-10">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('/assets/grid.svg')]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-3 block">Milestones</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Our Journey Since 2014</h2>
                        <p className="text-indigo-200 text-lg max-w-2xl mx-auto">A decade of academic excellence and continuous growth.</p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Center Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-800 rounded-full hidden md:block"></div>

                        <div className="space-y-12 md:space-y-24">
                            {/* 2014 */}
                            <div className="relative flex flex-col md:flex-row items-center justify-between">
                                <div className="md:w-5/12 text-right order-2 md:order-1">
                                    <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                                        <h3 className="text-2xl font-bold text-white mb-2">Founded in UK</h3>
                                        <p className="text-indigo-200">Started with a small team of 5 tutors dedicated to Math & Science.</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-indigo-600 rounded-full border-4 border-slate-900 flex items-center justify-center font-bold text-white z-10 shadow-lg shadow-indigo-600/50 mb-4 md:mb-0 order-1 md:order-2">
                                    '14
                                </div>
                                <div className="md:w-5/12 order-3"></div>
                            </div>

                            {/* 2017 */}
                            <div className="relative flex flex-col md:flex-row items-center justify-between">
                                <div className="md:w-5/12 order-2 md:order-1"></div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-600 rounded-full border-4 border-slate-900 flex items-center justify-center font-bold text-white z-10 shadow-lg shadow-purple-600/50 mb-4 md:mb-0 order-1 md:order-2">
                                    '17
                                </div>
                                <div className="md:w-5/12 order-3 md:order-3">
                                    <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                                        <h3 className="text-2xl font-bold text-white mb-2">Global Expansion</h3>
                                        <p className="text-indigo-200">Expanded services to USA, Australia, and Canada, reaching 1000+ students.</p>
                                    </div>
                                </div>
                            </div>

                            {/* 2021 */}
                            <div className="relative flex flex-col md:flex-row items-center justify-between">
                                <div className="md:w-5/12 text-right order-2 md:order-1">
                                    <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                                        <h3 className="text-2xl font-bold text-white mb-2">Digital Platform</h3>
                                        <p className="text-indigo-200">Launched our comprehensive online portal for seamless assignment management.</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-amber-500 rounded-full border-4 border-slate-900 flex items-center justify-center font-bold text-white z-10 shadow-lg shadow-amber-500/50 mb-4 md:mb-0 order-1 md:order-2">
                                    '21
                                </div>
                                <div className="md:w-5/12 order-3"></div>
                            </div>

                            {/* 2026 */}
                            <div className="relative flex flex-col md:flex-row items-center justify-between">
                                <div className="md:w-5/12 order-2 md:order-1"></div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center font-bold text-white z-10 shadow-lg shadow-green-500/50 mb-4 md:mb-0 order-1 md:order-2">
                                    '26
                                </div>
                                <div className="md:w-5/12 order-3 md:order-3">
                                    <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                                        <h3 className="text-2xl font-bold text-white mb-2">Market Leader</h3>
                                        <p className="text-indigo-200">Now serving 10,000+ active students with a network of 1,500+ PhD experts.</p>
                                    </div>
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
