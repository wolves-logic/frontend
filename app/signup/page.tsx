import Link from "next/link";
import Image from "next/image";
import logoNew from "@/public/assets/logo-new.png";
import { BiUser, BiEnvelope, BiLockAlt, BiArrowBack, BiCheckCircle } from "react-icons/bi";

export default function Signup() {
    return (
        <main className="min-h-screen grid lg:grid-cols-2">
            {/* Right: Form (Order swapped on desktop for variety) */}
            <div className="flex items-center justify-center p-8 bg-white order-2 lg:order-1">
                <div className="w-full max-w-md">
                    <div className="mb-8">
                        <Link href="/" className="inline-flex items-center gap-2 text-text-dark hover:text-primary transition-colors text-sm font-medium mb-8">
                            <BiArrowBack /> Back to Home
                        </Link>
                        <h1 className="text-3xl font-heading font-bold text-primary mb-2">Create your account</h1>
                        <p className="text-text-light">Join thousands of students achieving top grades.</p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-text-dark mb-1">Full Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-light">
                                    <BiUser />
                                </div>
                                <input
                                    type="text"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-dark mb-1">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-light">
                                    <BiEnvelope />
                                </div>
                                <input
                                    type="email"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-dark mb-1">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-light">
                                    <BiLockAlt />
                                </div>
                                <input
                                    type="password"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="Create a strong password"
                                    required
                                />
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-3">
                            <div className="flex items-center h-5">
                                <input id="terms" type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" required />
                            </div>
                            <label htmlFor="terms" className="text-sm text-text-light">
                                I agree to the <Link href="#" className="text-primary hover:underline">Terms of Service</Link> and <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
                            </label>
                        </div>

                        <button type="submit" className="w-full btn-primary-lg">Create Account</button>
                    </form>

                    <div className="mt-8 text-center text-sm text-text-light">
                        Already have an account?
                        <Link href="/login" className="text-secondary font-bold hover:text-primary ml-1">Sign in</Link>
                    </div>
                </div>
            </div>

            {/* Left: Branding */}
            <div className="relative hidden lg:flex flex-col justify-center p-16 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden order-1 lg:order-2">
                <div className="relative z-10 max-w-md mx-auto">
                    <div className="mb-8">
                        <Image
                            src={logoNew}
                            alt="Logo"
                            width={250}
                            height={60}
                            className="h-14 w-auto brightness-0 invert"
                            placeholder="blur"
                        />
                    </div>
                    <h2 className="text-3xl font-heading font-bold mb-8">Why Join Us?</h2>
                    <ul className="space-y-6">
                        {[
                            "Direct access to PhD experts",
                            "Real-time order tracking",
                            "Exclusive discounts and offers",
                            "Secure payment and confidentiality",
                            "24/7 Priority support"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-lg">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <BiCheckCircle />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
            </div>
        </main>
    );
}
