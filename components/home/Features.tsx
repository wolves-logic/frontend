import { BiStar, BiCloudLightning, BiCheckCircle } from "react-icons/bi";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
    {
        icon: BiStar,
        title: "Top Quality Excellence",
        description: "Every assignment is crafted by subject matter experts ensuring high academic standards and original insights."
    },
    {
        icon: BiCloudLightning,
        title: "Lightning Fast Delivery",
        description: "We respect your deadlines. Get your work delivered well before your submission date, every single time."
    },
    {
        icon: BiCheckCircle,
        title: "100% Plagiarism Free",
        description: "Guaranteed original content with Turnitin reports provided on request to ensure your academic integrity."
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <SectionHeader
                    title="Premium Academic Support"
                    subtitle="Why Choose Us"
                    description="We blend academic expertise with professional reliability to ensure your success."
                />

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-soft hover:shadow-premium hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50/50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Icon */}
                            <div className="w-14 h-14 mb-6 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-3xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 relative z-10 shadow-sm ring-1 ring-indigo-100 group-hover:ring-indigo-600">
                                <feature.icon />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-indigo-700 transition-colors">{feature.title}</h3>
                            <p className="text-slate-500 leading-relaxed relative z-10 text-sm md:text-base">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
