import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { BiBookContent } from "react-icons/bi";

export async function generateStaticParams() {
    return [
        { slug: 'mathematics' },
        { slug: 'management' },
        { slug: 'law' },
        { slug: 'nursing' },
    ];
}

export default async function SubjectDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const title = slug.charAt(0).toUpperCase() + slug.slice(1);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white text-center">
                <div className="container mx-auto px-4">
                    <BiBookContent className="text-6xl mx-auto mb-6 text-secondary" />
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{title} Assignment Help</h1>
                    <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                        Get expert guidance in {title} from PhD qualified tutors.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-xl text-text-light">
                        We have specialized experts for {title}. Contact us to get started with your assignment.
                    </p>
                    <div className="mt-8">
                        <a href={`https://wa.me/919959691347?text=Hi,%20I%20need%20help%20with%20${title}.`} target="_blank" rel="noopener noreferrer" className="btn-primary-lg">Get Help with {title} on WhatsApp</a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
