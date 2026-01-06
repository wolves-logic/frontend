import { BiSolidStar, BiSolidQuoteAltLeft } from "react-icons/bi";

const reviews = [
    {
        initials: "SJ",
        name: "Sarah J.",
        role: "Business Management",
        color: "bg-indigo-500",
        text: "Original Assignment Help saved my semester. The quality of the research paper was outstanding and delivered early."
    },
    {
        initials: "MR",
        name: "Michael R.",
        role: "Computer Science",
        color: "bg-purple-500",
        text: "Timely delivery and excellently written. The coding assignment ran perfectly without any errors. Highly recommended!"
    },
    {
        initials: "EW",
        name: "Emily W.",
        role: "Law Studies",
        color: "bg-amber-500",
        text: "Professional support team and great experts. Helped me understand the complex case study very clearly."
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-3 block">Student Success Stories</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Trusted by Students Worldwide</h2>
                    <p className="text-slate-500 text-lg">Join thousands of students who have improved their grades with our expert assistance.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="p-8 rounded-3xl bg-white shadow-soft hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative border border-slate-100 group">
                            <BiSolidQuoteAltLeft className="text-6xl text-indigo-50 absolute top-4 right-4 group-hover:text-indigo-100 transition-colors duration-500" />

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className={`${review.color} w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md ring-4 ring-white`}>
                                    {review.initials}
                                </div>
                                <div>
                                    <strong className="block text-slate-900 text-lg">{review.name}</strong>
                                    <span className="text-slate-500 text-sm">{review.role}</span>
                                </div>
                            </div>

                            <div className="flex text-amber-400 mb-4 text-lg">
                                {[...Array(5)].map((_, i) => <BiSolidStar key={i} />)}
                            </div>

                            <p className="text-slate-600 leading-relaxed relative z-10 italic">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
