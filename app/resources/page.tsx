import PageHeader from "@/components/ui/PageHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BiFile, BiDownload, BiBookBookmark, BiLinkExternal, BiLogoWhatsapp } from "react-icons/bi";
import Link from "next/link";

const resources = [
    {
        category: "Guides",
        title: "Academic Writing Style Guide",
        description: "Master the art of academic writing with our comprehensive guide on tone, structure, and formatting.",
        icon: BiBookBookmark,
        link: "#",
        type: "PDF",
        color: "text-blue-500",
        bg: "bg-blue-50"
    },
    {
        category: "Tools",
        title: "Citation Generator",
        description: "Free tool to generate citations in APA, MLA, Chicago, and Harvard formats instantly.",
        icon: BiLinkExternal,
        link: "#",
        type: "Tool",
        color: "text-purple-500",
        bg: "bg-purple-50"
    },
    {
        category: "Templates",
        title: "Dissertation Proposal Template",
        description: "A ready-to-use template to help you structure your research proposal effectively.",
        icon: BiFile,
        link: "#",
        type: "DOCX",
        color: "text-amber-500",
        bg: "bg-amber-50"
    },
    {
        category: "Samples",
        title: "Sample MBA Case Study",
        description: "Download a high-distinction grade sample case study to understand what professors look for.",
        icon: BiDownload,
        link: "#",
        type: "PDF",
        color: "text-red-500",
        bg: "bg-red-50"
    },
    {
        category: "Checklists",
        title: "Pre-Submission Checklist",
        description: "Ensure you haven't missed anything before hitting that submit button.",
        icon: BiFile,
        link: "#",
        type: "PDF",
        color: "text-green-500",
        bg: "bg-green-50"
    },
    {
        category: "Guides",
        title: "Guide to Statistical Analysis",
        description: "Basics of SPSS and R for social science students.",
        icon: BiBookBookmark,
        link: "#",
        type: "PDF",
        color: "text-indigo-500",
        bg: "bg-indigo-50"
    }
];

export default function Resources() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <PageHeader
                title="Student Resources"
                subtitle="Free tools and guides to boost your grades"
            />

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.map((resource, idx) => (
                            <div key={idx} className="group bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden">
                                <div className={`absolute top-0 right-0 w-24 h-24 ${resource.bg} rounded-bl-full opacity-50`}></div>

                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div className={`w-14 h-14 ${resource.bg} rounded-2xl flex items-center justify-center ${resource.color} text-2xl group-hover:scale-110 transition-transform`}>
                                        <resource.icon />
                                    </div>
                                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{resource.category}</span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">{resource.title}</h3>
                                <p className="text-slate-500 mb-8 text-sm leading-relaxed flex-grow relative z-10">{resource.description}</p>

                                <Link href="#" className="w-full py-3 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all text-sm flex items-center justify-center gap-2 cursor-not-allowed opacity-70 relative z-10" title="Download coming soon">
                                    {resource.type === "Tool" ? <BiLinkExternal /> : <BiDownload />}
                                    {resource.type === "Tool" ? "Access Tool" : "Download Now"}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 p-12 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[2.5rem] text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Need Something Custom?</h2>
                            <p className="text-indigo-200 mb-8 text-lg">
                                If you can't find what you're looking for, our experts can create custom study materials just for you.
                            </p>
                            <a href="https://wa.me/919959691347?text=Hi,%20I%20need%20custom%20study%20materials." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg hover:shadow-green-500/20">
                                <BiLogoWhatsapp className="text-2xl" />
                                Request Custom Help
                            </a>
                        </div>
                        {/* decorative circles */}
                        <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl -ml-40 -mt-40"></div>
                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl -mr-40 -mb-40"></div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
