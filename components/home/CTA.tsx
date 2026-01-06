import { BiLogoWhatsapp } from "react-icons/bi";

export default function CTA() {
    return (
        <section className="py-24 text-center text-white bg-gradient-to-r from-indigo-600 to-purple-700 relative overflow-hidden">
            {/* Decorative Patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-100 font-medium mb-6 text-sm">
                    Start Your Success Journey
                </span>
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Ready to Boost Your Grades?</h2>
                <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                    Get professional help from subject matter experts today. Fast, reliable, and confidential tailored support.
                </p>
                <a
                    href="https://wa.me/919959691347?text=Hi,%20I%20would%20like%20to%20place%20an%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-indigo-700 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:-translate-y-1 group"
                >
                    <BiLogoWhatsapp className="text-3xl text-green-500" />
                    <span>Chat with an Expert Now</span>
                </a>
                <p className="mt-6 text-sm text-indigo-200 opacity-80">No registration required. Instant response.</p>
            </div>
        </section>
    );
}
