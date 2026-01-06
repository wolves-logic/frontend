import PageHeader from "@/components/ui/PageHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { BiPencil, BiBook, BiBookContent, BiCode, BiLaptop, BiCheckDouble, BiRightArrowAlt, BiLogoWhatsapp } from "react-icons/bi";

const services = [
    { icon: BiPencil, title: "Essay Writing", slug: "essay-writing", desc: "High-quality custom essays on any topic. Argumentative, descriptive, narrative, and more.", color: "bg-indigo-500", light: "bg-indigo-50", text: "text-indigo-600" },
    { icon: BiBook, title: "Dissertation Help", slug: "dissertation", desc: "End-to-end dissertation support from proposal to final editing and proofreading.", color: "bg-purple-500", light: "bg-purple-50", text: "text-purple-600" },
    { icon: BiBookContent, title: "Research Papers", slug: "research-paper", desc: "In-depth research and analysis with proper citations (APA, MLA, Harvard, Chicago).", color: "bg-amber-500", light: "bg-amber-50", text: "text-amber-600" },
    { icon: BiCode, title: "Programming Help", slug: "programming", desc: "Clean code solutions for Java, Python, C++, Web Development, and Data Science.", color: "bg-blue-500", light: "bg-blue-50", text: "text-blue-600" },
    { icon: BiLaptop, title: "Online Exam Help", slug: "online-exam-help", desc: "Expert assistance for online quizzes, tests, and timed exams with guaranteed grades.", color: "bg-red-500", light: "bg-red-50", text: "text-red-600" },
    { icon: BiCheckDouble, title: "Proofreading", slug: "proofreading", desc: "Polishing your work to perfection. Grammar check, formatting, and style improvements.", color: "bg-green-500", light: "bg-green-50", text: "text-green-600" }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <PageHeader title="Our Services" subtitle="Comprehensive Academic Solutions for Every Need" />

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-soft hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                                <div className={`absolute top-0 right-0 w-24 h-24 ${service.light} rounded-bl-full opacity-50 transition-all duration-500 group-hover:scale-110`}></div>

                                <div className={`w-16 h-16 ${service.light} rounded-2xl flex items-center justify-center ${service.text} text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm relative z-10`}>
                                    <service.icon />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-3 relative z-10 group-hover:text-indigo-600 transition-colors">{service.title}</h3>
                                <p className="text-slate-500 mb-8 flex-grow leading-relaxed relative z-10">{service.desc}</p>

                                <Link
                                    href={`/services/${service.slug}`}
                                    className="inline-flex items-center text-slate-900 font-bold hover:text-indigo-600 mt-auto group/link relative z-10"
                                >
                                    Learn More <BiRightArrowAlt className="ml-2 text-xl group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Need a custom service?</h2>
                    <p className="text-indigo-100 mb-10 text-xl max-w-2xl mx-auto">We can handle any academic request. Just ask our experts directly.</p>
                    <a href="https://wa.me/919959691347?text=Hi,%20I%20need%20a%20custom%20service." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-indigo-700 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                        <BiLogoWhatsapp className="text-2xl text-green-500" />
                        Order Custom Service
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
