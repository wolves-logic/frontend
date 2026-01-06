export default function PageHeader({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 py-28 text-center text-white overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0">
                {/* Modern subtle noise texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] opacity-50 -mr-20 -mt-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] opacity-50 -ml-20 -mb-20 animate-pulse delay-700"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 animate-fade-in-up drop-shadow-2xl tracking-tight leading-tight">
                    {title}
                </h1>
                <p className="text-lg md:text-2xl text-indigo-100/90 max-w-3xl mx-auto animate-fade-in-up delay-100 font-light leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </section>
    );
}
