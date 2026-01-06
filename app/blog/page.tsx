"use client";

import { useState, useMemo } from "react";
import PageHeader from "@/components/ui/PageHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { BiUser, BiCalendar, BiTime, BiChevronRight, BiChevronLeft, BiSearch } from "react-icons/bi";
import { blogPosts } from "./data";
import { clsx } from "clsx";

export default function Blog() {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Filter posts based on search
    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
    const currentPosts = filteredPosts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <PageHeader
                title="Academic Insights & Resources"
                subtitle="Expert guides, tips, and strategies for your academic success"
            />

            <section className="py-16 md:py-24 relative">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">

                    {/* Search and Filter Bar */}
                    <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6 max-w-5xl mx-auto bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                        <div className="relative w-full md:w-96 group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <BiSearch className="text-slate-400 text-xl group-focus-within:text-indigo-500 transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search articles, topics..."
                                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-700 placeholder-slate-400"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </div>
                        <div className="text-sm text-slate-500 font-medium">
                            Showing <span className="text-indigo-600 font-bold">{filteredPosts.length}</span> articles
                        </div>
                    </div>

                    {/* Blog Grid */}
                    {currentPosts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {currentPosts.map((post) => (
                                <article key={post.id} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                                    <div className="relative h-60 w-full overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/95 backdrop-blur-md text-indigo-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm border border-indigo-100">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow relative">
                                        <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-medium uppercase tracking-wide">
                                            <span className="flex items-center gap-1.5"><BiUser className="text-lg" /> {post.author}</span>
                                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                            <span className="flex items-center gap-1.5"><BiCalendar className="text-lg" /> {post.date}</span>
                                        </div>
                                        <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                                            <span className="text-xs text-slate-400 font-semibold flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full">
                                                <BiTime className="text-lg" /> {post.readTime}
                                            </span>
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="text-indigo-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all group/link"
                                            >
                                                Read Article <BiChevronRight className="text-lg group-hover/link:translate-x-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-3xl mx-auto">
                            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-400 text-4xl">
                                <BiSearch />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">No articles found</h3>
                            <p className="text-slate-500">Try adjusting your search terms to find what you're looking for.</p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="mt-6 text-indigo-600 font-bold hover:underline"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-20 gap-3">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:border-indigo-500 hover:text-indigo-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:text-slate-500 bg-white"
                            >
                                <BiChevronLeft className="text-xl" />
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={clsx(
                                        "w-12 h-12 flex items-center justify-center rounded-xl font-bold transition-all shadow-sm",
                                        currentPage === page
                                            ? "bg-indigo-600 text-white shadow-indigo-200"
                                            : "bg-white border border-slate-200 text-slate-600 hover:border-indigo-500 hover:text-indigo-600"
                                    )}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:border-indigo-500 hover:text-indigo-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:text-slate-500 bg-white"
                            >
                                <BiChevronRight className="text-xl" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
