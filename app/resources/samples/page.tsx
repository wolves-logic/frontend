"use client";

import PageHeader from "@/components/ui/PageHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BiFolderOpen, BiDownArrowCircle, BiFile } from "react-icons/bi";
import Link from "next/link";

const samples = [
    { title: "MBA Business Strategy Analysis", category: "Management", size: "2.4 MB", type: "PDF" },
    { title: "Nursing Ethics Case Study", category: "Nursing", size: "1.8 MB", type: "DOCX" },
    { title: "Java Programming Project", category: "Computer Science", size: "5.1 MB", type: "ZIP" },
    { title: "Economic Trends Report 2024", category: "Economics", size: "3.2 MB", type: "PDF" },
    { title: "Psychology Research Paper", category: "Psychology", size: "1.5 MB", type: "PDF" },
    { title: "Marketing Plan for startup", category: "Marketing", size: "4.0 MB", type: "PPTX" },
];

export default function Samples() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <PageHeader
                title="Sample Works"
                subtitle="Browse our database of previously completed assignments to assess our quality."
            />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {samples.map((sample, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <BiFile />
                                    </div>
                                    <span className="bg-slate-100 text-slate-500 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                                        {sample.type}
                                    </span>
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-2 line-clamp-2 min-h-[3.5rem]">{sample.title}</h3>
                                <p className="text-slate-500 text-sm mb-6">{sample.category}</p>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <span className="text-xs text-slate-400 font-medium">{sample.size}</span>
                                    <button className="flex items-center gap-2 text-indigo-600 font-bold text-sm hover:text-indigo-800 transition-colors">
                                        <BiDownArrowCircle className="text-lg" /> Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-slate-500 mb-6 font-medium">Want to see more samples in your specific subject?</p>
                        <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                            Request Samples
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
