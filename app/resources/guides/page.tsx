"use client";

import PageHeader from "@/components/ui/PageHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BiBookContent, BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";

const guides = [
    { title: "The Ultimate Guide to APA 7th Referencing", category: "Referencing", readTime: "10 min read" },
    { title: "How to Structure a Dissertation", category: "Writing", readTime: "15 min read" },
    { title: "Mastering the Art of Critical Analysis", category: "Academic Skills", readTime: "8 min read" },
    { title: "A Student's Guide to Avoiding Plagiarism", category: "Ethics", readTime: "6 min read" },
    { title: "Effective Research Methods for Undergraduates", category: "Research", readTime: "12 min read" },
    { title: "Tips for Scoring High in Case Studies", category: "Business", readTime: "7 min read" },
];

export default function Guides() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <PageHeader
                title="Study Guides"
                subtitle="Comprehensive guides on writing, researching, and referencing styles."
            />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {guides.map((guide, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:scale-[1.01] group flex items-center justify-between">
                                <div className="pr-4">
                                    <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-2 block">
                                        {guide.category}
                                    </span>
                                    <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-indigo-600 transition-colors">{guide.title}</h3>
                                    <p className="text-slate-400 text-sm flex items-center gap-2">
                                        <BiBookContent /> {guide.readTime}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all flex-shrink-0">
                                    <BiRightArrowAlt className="text-2xl" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center bg-indigo-900 text-white rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
                            <p className="text-indigo-200 mb-8">Our blog is updated weekly with new articles and tips.</p>
                            <Link href="/blog" className="px-6 py-3 bg-white text-indigo-900 rounded-full font-bold hover:bg-indigo-50 transition-colors">
                                Visit Our Blog
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
