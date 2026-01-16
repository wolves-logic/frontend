import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Terms & Conditions - OriginalAssignmentHelp.com",
};

export default function TermsConditions() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 md:p-12">

                    {/* Header */}
                    <div className="border-b border-slate-200 pb-8 mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading">
                            Terms & Conditions
                        </h1>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Please read the following terms carefully before using our services.
                        </p>
                    </div>

                    <div className="prose prose-slate max-w-none text-slate-700 leading-7">
                        <p className="lead font-medium text-slate-900">
                            Before using our services, please read the following terms carefully. Under no circumstances may OriginalAssignmentHelp.com be used by individuals under the age of 18. If any inappropriate or unlawful use of our services is identified, please report it immediately.
                        </p>
                        <p>
                            By placing an order or making a payment on our website, you confirm that you have read, understood, and agreed to all the Terms and Conditions stated below. A binding agreement is established once a service request or payment is submitted.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
                            1. How We Explain Our Terms
                        </h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-slate-500">
                            <li><strong>“Website”</strong> refers to OriginalAssignmentHelp.com</li>
                            <li><strong>“Consumer”, “Customer”, “You”, “Your”</strong> refers to any individual using our services to place orders, submit requests, upload information, communicate through the system, or make payments</li>
                            <li><strong>“Company”, “We”, “Us”, “Our”</strong> refers to Original Assignment Help (OAH)</li>
                            <li><strong>“Message System”</strong> refers to the internal communication platform that allows interaction between customers, customer support representatives, and subject experts</li>
                            <li><strong>“Order”</strong> refers to a request submitted by the customer to obtain a paid academic assistance service. An order includes specific requirements, instructions, scope of work, reference materials, and deadlines. An Order may also be defined as an electronic request for a paid service placed through the website or via email, containing complete service specifications and obligations.</li>
                            <li><strong>“Order Status”</strong> reflects the progress and current stage of the order</li>
                            <li><strong>“Product”</strong> refers to the final academic material delivered to the customer in digital format according to the order specifications</li>
                            <li><strong>“Revision Request”</strong> refers to a customer request for changes or edits to the delivered product based strictly on the original instructions</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
                            2. Placing Orders and Registrations
                        </h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-slate-500">
                            <li>Customers must complete the official order form available on the website to place an order. No alternative methods of service placement are accepted.</li>
                            <li>The order form includes scope, specifications, academic level, and delivery requirements. Providing complete and accurate information is the customer’s responsibility.</li>
                            <li>During order placement, customers must register by providing valid personal and contact information such as name, email address, country of residence, and phone number.</li>
                            <li>If customer contact details change, the profile must be updated. If unable to do so, customer support must be informed.</li>
                            <li>If multiple accounts are identified, OAH reserves the right to merge them under the original registered account.</li>
                        </ul>
                        <p className="mt-4 p-4 bg-slate-50 rounded-lg border-l-4 border-slate-900 italic text-slate-800">
                            We take appropriate measures to ensure the confidentiality and safety of your academic information. Our academic experts are committed to delivering high-quality assistance across a wide range of subjects and academic levels.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
                            3. Place Order and Apply Discount
                        </h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-slate-500">
                            <li>By completing an order, the customer confirms that they are purchasing services from the Company. Once payment is authorised, the Company will begin processing the order.</li>
                            <li>The service fee is calculated based on the details provided in the order form and must be paid in advance. The Company is not obligated to provide services until payment is successfully completed.</li>
                            <li>Customers may make payments using credit cards, debit cards, or other payment methods approved by the Company.</li>
                            <li>Promotional offers and discount codes must be applied during checkout. Discounts will not be granted if the code is not entered in the appropriate section of the order form.</li>
                            <li>All customers are provided equal access to discount programs and promotional offers without exception.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
                            4. The Best Order Fulfilment
                        </h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-slate-500">
                            <li>The Company makes reasonable efforts to meet the deadline specified in the order.</li>
                            <li>Once the product is completed, the customer is responsible for ensuring access to delivery channels. The Company is not responsible for issues caused by incorrect email addresses, spam filters, internet disruptions, or customer negligence.</li>
                            <li>Customers are responsible for downloading the delivered product within a reasonable time after delivery.</li>
                            <li>All orders are processed and delivered through the customer’s account on the website.</li>
                            <li>Once the service is delivered in accordance with the agreed specifications, it shall be considered completed, subject to the Refund / Money-Back Guarantee Policy.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
                            5. Using Various Products
                        </h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-slate-500">
                            <li>By making a payment, the customer agrees that the service is provided for personal and non-commercial use only. The payment reflects the time, effort, and academic support involved in research and content preparation.</li>
                            <li>The delivered product must not be reproduced, modified, distributed, published, or shared online without written consent from the Company.</li>
                            <li>All products are prepared by the Company and remain protected under applicable copyright and intellectual property laws.</li>
                            <li>All samples displayed on the website are for reference and educational purposes only. Intellectual property rights for all materials belong solely to the Company.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
                            6. Responsibility of the Company
                        </h2>
                        <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-slate-500">
                            <li>The Company strictly opposes plagiarism, academic dishonesty, fraud, and unethical use of its services. The Company cannot be held responsible for misuse of delivered materials.</li>
                            <li>Any violation of academic rules or institutional policies resulting from misuse of services is the sole responsibility of the customer.</li>
                            <li>Original Assignment Help does not endorse, approve, or control third-party websites or external resources linked on the website. The Company holds no responsibility for the content of such third-party sites.</li>
                            <li>Customer information is collected, stored, and protected in accordance with the Company’s Privacy Policy. Personal and billing information is not shared with unauthorised third parties.</li>
                        </ul>
                        <p className="mt-4">
                            For detailed information regarding the Company’s procedures and policies governing the collection, storage, processing, and use of personal information of customers and website visitors, users are requested to review the Privacy Policy available on OriginalAssignmentHelp.com. Customers are encouraged to review the Privacy Policy while using the website to gain a clear understanding of how their personal information is protected.
                        </p>
                        <p className="mt-4">
                            The Company reserves the right to contact customers via email, phone, or other communication channels to provide service-related updates, newly introduced services, discount offers, promotional communications, or important notifications related to their orders or account activity.
                        </p>
                        <p className="mt-4">
                            The Company ensures that a customer’s personal, academic, and billing information is treated with strict confidentiality and is not sold, rented, or shared with unauthorised third parties. To safeguard sensitive data, the Company has implemented secure online payment systems and industry-standard security measures.
                        </p>
                        <p className="mt-4">
                            However, while all reasonable precautions are taken, the Company cannot be held responsible for any unauthorised disclosure of information that occurs due to circumstances beyond its reasonable control, including but not limited to third-party payment gateway failures, cyber incidents, or data transmissions over the internet that the Company could not prevent.
                        </p>
                        <p className="mt-4">
                            Customers with questions or concerns related to privacy, data security, or information handling are encouraged to consult the Privacy Policy or contact customer support for further assistance.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
                            7. Academic Integrity Disclaimer
                        </h2>
                        <p className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500 text-slate-800">
                            All services provided by Original Assignment Help (OAH) are intended strictly for reference, research, and educational purposes only. Delivered materials must not be submitted as original academic work. The Company does not guarantee grades, results, or academic performance, and shall not be responsible for any misuse of the delivered content.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
                            8. Contact & Customer Support
                        </h2>
                        <p>For refund requests, privacy concerns, or service-related queries, customers may contact us at:</p>
                        <ul className="list-none pl-0 mb-6 space-y-1">
                            <li><strong>Email:</strong> <a href="mailto:contact@originalassignmenthelp.com" className="text-indigo-600 hover:underline">contact@originalassignmenthelp.com</a></li>
                            <li><strong>Response Time:</strong> Within 24–48 business hours</li>
                        </ul>

                        <div className="mt-12 p-8 bg-slate-900 rounded-xl text-slate-300">
                            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide border-b border-slate-700 pb-2">
                                Company Information
                            </h2>
                            <p className="mb-4">
                                <strong>Original Assignment Help (OAH)</strong> is a brand name owned, operated, and managed by <strong>Harviera IT Solutions LLP</strong>, a registered Limited Liability Partnership incorporated under the laws of India, with its principal place of business in Palwal, Haryana, India.
                            </p>
                            <p>
                                All services offered on OriginalAssignmentHelp.com and all payments made on this website are processed and received by Harviera IT Solutions LLP.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
