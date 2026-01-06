import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { BiPencil, BiTime, BiCheckShield, BiHeadphone, BiCheckCircle } from "react-icons/bi";

export async function generateStaticParams() {
    return [
        { slug: 'essay-writing' },
        { slug: 'dissertation' },
        { slug: 'research-paper' },
        { slug: 'programming' },
        { slug: 'online-exam-help' },
        { slug: 'proofreading' },
    ];
}

export default async function ServiceDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // Simple title formatting from slug
    const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Service Hero */}
            <section className="relative py-20 bg-primary text-white overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-2/3">
                            <span className="inline-block bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">Detailed Guide</span>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Professional {title} Service</h1>
                            <p className="text-xl text-indigo-100 mb-8 max-w-2xl leading-relaxed">
                                Unlock your academic potential with {title.toLowerCase()} crafted by subject matter experts. Original, well-researched, and tailored to your requirements.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://wa.me/919959691347?text=Hi,%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer" className="btn-secondary-lg">Order Now on WhatsApp</a>
                                <Link href="#process" className="px-8 py-3 rounded-full border border-white text-white font-bold hover:bg-white hover:text-primary transition-colors">How It Works</Link>
                            </div>
                        </div>
                        <div className="hidden lg:flex lg:w-1/3 justify-center">
                            <BiPencil className="text-[12rem] text-white opacity-20" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            <div className="mb-12">
                                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Why Choose Our {title} Service?</h2>
                                <Image
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Student studying"
                                    width={1000}
                                    height={600}
                                    className="rounded-2xl shadow-sm mb-8 w-full h-auto"
                                />
                                <p className="text-text-light text-lg mb-4 leading-relaxed">
                                    Writing a high-quality {title.toLowerCase()} requires deep research, critical thinking, and flawless structuring. Our team of PhD experts and professional writers are here to take that burden off your shoulders.
                                </p>
                                <p className="text-text-light text-lg leading-relaxed">
                                    We understand the pressure of deadlines and the importance of grades. That's why we've built a service that prioritizes quality, speed, and confidentiality.
                                </p>
                            </div>

                            <div id="process" className="mb-12 scroll-mt-24">
                                <h3 className="text-2xl font-bold text-primary mb-8">Our Writing Process</h3>
                                <div className="space-y-8">
                                    {[
                                        { num: 1, title: "Requirement Analysis", desc: "We carefully review your topic, rubric, and instructions to ensure full compliance with your university's standards." },
                                        { num: 2, title: "In-Depth Research", desc: "Our writers gather credible sources from peer-reviewed academic journals, books, and reputable databases." },
                                        { num: 3, title: "Writing & Drafting", desc: "We craft the essay from scratch, ensuring a logical flow, strong arguments, and proper academic tone." },
                                        { num: 4, title: "Editing & Proofreading", desc: "Every paper goes through a rigorous quality check for grammar, style, and originality using advanced tools." }
                                    ].map((step) => (
                                        <div key={step.num} className="flex gap-6">
                                            <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-sm">
                                                {step.num}
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-primary mb-2">{step.title}</h4>
                                                <p className="text-text-light">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-primary mb-6">Types of {title} We Handle</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="space-y-3">
                                        {["Argumentative", "Descriptive", "Narrative"].map(item => (
                                            <li key={item} className="flex items-center gap-2 text-text-light">
                                                <BiCheckCircle className="text-secondary" /> {item} {title}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="space-y-3">
                                        {["Compare & Contrast", "Admission", "Application"].map(item => (
                                            <li key={item} className="flex items-center gap-2 text-text-light">
                                                <BiCheckCircle className="text-secondary" /> {item} {title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-1/3 space-y-8">
                            <div className="bg-light-bg p-8 rounded-2xl text-center sticky top-24">
                                <h4 className="text-xl font-bold text-primary mb-4">Ready to Boost Your Grades?</h4>
                                <p className="text-text-light text-sm mb-6">Get high-quality academic help today. Contact us for a quote.</p>
                                <a href="https://wa.me/919959691347?text=Hi,%20I%20would%20like%20to%20get%20a%20quote." target="_blank" rel="noopener noreferrer" className="btn-primary w-full mb-3 block">Get a Free Quote on WhatsApp</a>
                                <small className="text-text-light block">No hidden fees. 100% Confidential.</small>
                            </div>

                            <div className="border border-gray-100 p-8 rounded-2xl shadow-sm">
                                <h4 className="text-xl font-bold text-primary mb-6">Why Students Trust Us</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary"><BiTime /></div>
                                        <div>
                                            <span className="block font-bold text-text-dark">On-Time Delivery</span>
                                            <span className="text-xs text-text-light">Never miss a deadline</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary"><BiCheckShield /></div>
                                        <div>
                                            <span className="block font-bold text-text-dark">Plagiarism Free</span>
                                            <span className="text-xs text-text-light">100% Original content</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary"><BiHeadphone /></div>
                                        <div>
                                            <span className="block font-bold text-text-dark">24/7 Support</span>
                                            <span className="text-xs text-text-light">Always here to help</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
