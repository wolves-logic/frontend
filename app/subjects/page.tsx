import PageHeader from "@/components/ui/PageHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { BiMath, BiBriefcase, BiBuilding, BiPulse } from "react-icons/bi";

const subjects = [
    { icon: BiMath, slug: "mathematics", title: "Mathematics", desc: "Algebra, Calculus, Statistics, and more." },
    { icon: BiBriefcase, slug: "management", title: "Management", desc: "Business strategy, HR, Marketing, and Finance." },
    { icon: BiBuilding, slug: "law", title: "Law", desc: "Corporate law, Criminal law, and Constitutional law." },
    { icon: BiPulse, slug: "nursing", title: "Nursing", desc: "Medical case studies, anatomy, and patient care." }
];

export default function SubjectsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <PageHeader title="Our Subjects" subtitle="Expertise across 50+ academic disciplines" />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {subjects.map((sub, idx) => (
                            <Link
                                key={idx}
                                href={`/subjects/${sub.slug}`}
                                className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-light-bg rounded-full flex items-center justify-center text-primary text-3xl group-hover:bg-primary group-hover:text-white transition-colors">
                                    <sub.icon />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">{sub.title}</h3>
                                <p className="text-text-light text-sm">{sub.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
