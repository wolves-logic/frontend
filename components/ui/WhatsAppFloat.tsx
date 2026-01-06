import Link from "next/link";
import { BiLogoWhatsapp } from "react-icons/bi";

export default function WhatsAppFloat() {
    return (
        <Link
            href="https://wa.me/919959691347"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-bounce-slow"
            aria-label="Chat on WhatsApp"
        >
            <BiLogoWhatsapp className="text-4xl" />
        </Link>
    );
}
