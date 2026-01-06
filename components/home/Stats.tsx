"use client";

import { useCounter } from "@/hooks/useCounter";
import { useRef, useState, useEffect } from "react";

const StatItem = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
    const [start, setStart] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const count = useCounter(value, 2000, start);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setStart(true);
            }
        }, { threshold: 0.5 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center group border border-slate-100">
            <h2 className="text-5xl md:text-6xl font-heading font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:scale-105 transition-transform inline-block">
                {count}{suffix}
            </h2>
            <p className="text-slate-500 font-semibold uppercase tracking-widest text-sm mt-2 group-hover:text-indigo-500 transition-colors">{label}</p>
        </div>
    );
};

export default function Stats() {
    return (
        <section className="py-12 relative z-20">
            <div className="container mx-auto px-4">
                {/* Responsive Grid: 2 cols mobile, 4 cols desktop. Floating overlap effect. */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 lg:-mt-32">
                    <StatItem value={10} suffix="K+" label="Active Students" />
                    <StatItem value={1500} suffix="+" label="Expert Tutors" />
                    <StatItem value={98} suffix="%" label="Satisfaction Rate" />
                    <StatItem value={100} suffix="K+" label="Delivered Works" />
                </div>
            </div>
        </section>
    );
}
