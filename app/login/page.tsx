import Link from "next/link";
import Image from "next/image";
import logoNew from "@/public/assets/logo-new.png";
import { BiEnvelope, BiLockAlt, BiArrowBack } from "react-icons/bi";

export default function Login() {
    return (
        <main className="min-h-screen grid lg:grid-cols-2">
            {/* Left: Branding */}
            <div className="relative hidden lg:flex flex-col justify-end p-16 bg-primary text-white overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-4xl font-heading font-bold mb-6">Welcome Back!</h2>
                    <p className="text-indigo-100 text-lg leading-relaxed max-w-md">
                        Login to access your dashboard, track your orders in real-time, and connect with your experts.
                    </p>
                </div>
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
            </div>

            {/* Right: Form */}
            <div className="flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md">
                    <div className="mb-8">
                        <Link href="/" className="inline-flex items-center gap-2 text-text-dark hover:text-primary transition-colors text-sm font-medium mb-8">
                            <BiArrowBack /> Back to Home
                        </Link>
                        <Link href="/" className="block mb-6">
                            <Image
                                src={logoNew}
                                alt="Logo"
                                width={200}
                                height={50}
                                className="h-14 w-auto"
                                placeholder="blur"
                            />
                        </Link>
                        <h1 className="text-3xl font-heading font-bold text-primary mb-2">Login to your account</h1>
                        <p className="text-text-light">Enter your credentials to access your account.</p>
                    </div>

                    <form className="space-y-5">
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
                            <div className="flex justify-between items-center mb-1">
                                <label className="block text-sm font-medium text-text-dark">Password</label>
                                <Link href="#" className="text-sm text-secondary hover:text-primary font-medium">Forgot password?</Link>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-light">
                                    <BiLockAlt />
                                </div>
                                <input
                                    type="password"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full btn-primary-lg">Sign In</button>
                    </form>

                    <div className="mt-8 text-center text-sm text-text-light">
                        Don't have an account?
                        <Link href="/signup" className="text-secondary font-bold hover:text-primary ml-1">Create free account</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
