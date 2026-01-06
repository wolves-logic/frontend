import Link from "next/link";
import { BiPencil, BiBook, BiBarChartAlt, BiCodeAlt, BiRightArrowAlt } from "react-icons/bi";

export default function Services() {
    return (
        <section className="py-24 bg-gradient-to-br from-indigo-900 to-slate-900 text-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div>
                        <span className="text-indigo-300 font-bold uppercase tracking-widest text-sm mb-3 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Comprehensive <br /> Academic Services</h2>
                        <p className="text-indigo-200 text-lg max-w-lg">
                            From essays to complex coding projects, our experts cover every academic need with precision.
                        </p>
                    </div>
                    <Link href="/services" className="btn-outline-white group">
                        View All Services
                        <BiRightArrowAlt className="ml-2 text-xl group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { icon: BiPencil, title: "Essay Writing", desc: "Compelling narratives and structured arguments." },
                        { icon: BiBook, title: "Dissertations", desc: "In-depth research and professional formatting." },
                        { icon: BiBarChartAlt, title: "Case Studies", desc: "Analytical approach to real-world problems." },
                        { icon: BiCodeAlt, title: "Programming", desc: "Clean code in Python, Java, C++ and more." },
                    ].map((service, idx) => (
                        <Link
                            key={idx}
                            href="/services"
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden block"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-50 font-heading text-6xl text-white/5 scale-150 translate-x-4 -translate-y-4 group-hover:rotate-12 transition-transform duration-500">
                                {idx + 1}
                            </div>

                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <service.icon />
                            </div>

                            <h4 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition-colors">{service.title}</h4>
                            <p className="text-indigo-200 text-sm leading-relaxed mb-4">{service.desc}</p>

                            <span className="text-sm font-bold text-white/60 flex items-center gap-1 group-hover:text-white transition-colors">
                                Learn more <BiRightArrowAlt className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
