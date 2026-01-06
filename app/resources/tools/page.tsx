"use client";

import PageHeader from "@/components/ui/PageHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BiFontSize, BiCalculator, BiBookBookmark, BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

const tools = [
    { title: "Citation Generator", desc: "Generate APA, MLA, and Chicago citations instantly.", icon: BiBookBookmark, color: "bg-blue-50 text-blue-600" },
    { title: "GPA Calculator", desc: "Calculate your semester and cumulative GPA easily.", icon: BiCalculator, color: "bg-green-50 text-green-600" },
    { title: "Word Counter", desc: "Count words, characters, and estimate reading time.", icon: BiFontSize, color: "bg-purple-50 text-purple-600" },
];

export default function Tools() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <PageHeader
                title="Free Student Tools"
                subtitle="Use our Citation Generator, GPA Calculator, and Word Count tools."
            />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {tools.map((tool, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                                <div className={`w-16 h-16 ${tool.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                                    <tool.icon />
                                </div>
                                <h3 className="font-bold text-slate-900 text-xl mb-3">{tool.title}</h3>
                                <p className="text-slate-500 mb-8 leading-relaxed h-12">{tool.desc}</p>

                                <button className="w-full py-3 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all flex items-center justify-center gap-2">
                                    Launch Tool <BiRightArrowAlt />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20"></div>
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Need more than just tools?</h2>
                                <p className="text-indigo-100 text-lg mb-8">
                                    Our experts can handle the entire assignment for you, ensuring perfect formatting and citation from start to finish.
                                </p>
                                <a href="https://wa.me/919959691347" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                                    Get Expert Help Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
