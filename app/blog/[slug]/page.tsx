import PageHeader from "@/components/ui/PageHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { BiUser, BiCalendar, BiTime, BiChevronLeft, BiShareAlt, BiTag } from "react-icons/bi";
import { blogPosts } from "../data"; // Import data from dedicated file

// Next.js 15+ Params type
type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogDetail({ params }: { params: Params }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug) || blogPosts[0]; // Fallback to first post if not found (or handle 404)

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Custom Header for Post */}
            <div className="bg-primary/5 pt-28 pb-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-text-light hover:text-primary mb-8 font-medium transition-colors">
                        <BiChevronLeft /> Back to Blog
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            {post.category}
                        </span>
                        <span className="text-text-light text-sm flex items-center gap-1">
                            <BiTime /> {post.readTime}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden relative">
                            {/* Placeholder avatar */}
                            <div className="absolute inset-0 bg-secondary flex items-center justify-center text-white font-bold text-xl">
                                {post.author.charAt(0)}
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-text-dark text-sm">{post.author}</p>
                            <p className="text-text-light text-xs">{post.date}</p>
                        </div>
                    </div>
                </div>
            </div>

            <article className="container mx-auto px-4 max-w-4xl py-12">
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-12 shadow-xl">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="prose prose-lg prose-indigo max-w-none text-text-light">
                    <p className="lead text-xl text-text-dark font-medium mb-8">
                        {post.excerpt}
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Understanding the Core Concepts</h2>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-8 mt-4 bg-light-bg p-8 rounded-xl border border-gray-100">
                        <li><strong>Structure is Key:</strong> Always plan your outline before writing.</li>
                        <li><strong>Credible Sources:</strong> Use Google Scholar and library databases.</li>
                        <li><strong>Clear Arguments:</strong> Make sure every paragraph supports your thesis.</li>
                    </ul>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                    </p>
                    <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">Expert Tips for Success</h2>
                    <p>
                        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                    </p>
                    <blockquote>
                        "Success is not final, failure is not fatal: It is the courage to continue that counts."
                    </blockquote>
                    <p>
                        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                    </p>
                </div>

                {/* Tags & Share */}
                <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-2">
                        {["Academic", "Writing", "Tips", "Study"].map(tag => (
                            <span key={tag} className="flex items-center gap-1 text-sm bg-gray-50 text-text-light px-3 py-1 rounded-full border border-gray-100">
                                <BiTag className="text-xs" /> {tag}
                            </span>
                        ))}
                    </div>
                    <button className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
                        <BiShareAlt className="text-xl" /> Share Article
                    </button>
                </div>
            </article>

            {/* Related Posts */}
            <section className="bg-light-bg py-20 mt-12">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-8">Related Articles</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {blogPosts.slice(0, 3).map((related) => (
                            <Link key={related.id} href={`/blog/${related.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                                <div className="relative h-48">
                                    <Image src={related.image} alt={related.title} fill className="object-cover" />
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2">{related.title}</h4>
                                    <p className="text-xs text-text-light">{related.date}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
