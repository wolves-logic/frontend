"use client";
import { useState } from "react";
import { BiChevronDown, BiPlus, BiMinus, BiShieldQuarter, BiFile, BiRevision } from "react-icons/bi";
import { clsx } from "clsx";

const faqs = [
    {
        icon: BiShieldQuarter,
        question: "Is the service confidential and private?",
        answer: "Yes, we maintain 100% confidentiality. Your personal information is never shared with third parties. We use SSL encryption to protect your data."
    },
    {
        icon: BiFile,
        question: "Do you provide plagiarism reports?",
        answer: "Absolutely. We provide a complimentary Turnitin report with every assignment to ensure originality and authenticity."
    },
    {
        icon: BiRevision,
        question: "What if I need revisions on my work?",
        answer: "We offer free unlimited revisions until you are completely satisfied with the final output. Your success is our priority."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-3 block">Common Questions</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className={clsx(
                                    "rounded-2xl transition-all duration-300 border",
                                    isOpen ? "bg-white border-indigo-100 shadow-lg" : "bg-slate-50 border-transparent hover:bg-white hover:border-slate-100"
                                )}
                            >
                                <button
                                    className="w-full flex items-center p-6 text-left focus:outline-none"
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                >
                                    <div className={clsx(
                                        "w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-colors",
                                        isOpen ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-600"
                                    )}>
                                        <faq.icon className="text-xl" />
                                    </div>
                                    <span className={clsx("flex-grow font-bold text-lg md:text-xl", isOpen ? "text-indigo-900" : "text-slate-700")}>
                                        {faq.question}
                                    </span>
                                    <div className={clsx("transition-transform duration-300 text-xl", isOpen ? "rotate-45 text-indigo-500" : "text-slate-400")}>
                                        <BiPlus />
                                    </div>
                                </button>
                                <div
                                    className={clsx(
                                        "px-6 pb-6 pl-[4.5rem] text-slate-600 text-lg leading-relaxed overflow-hidden transition-all duration-300",
                                        isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0 pb-0"
                                    )}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
