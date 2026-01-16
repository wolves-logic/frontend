import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy - OriginalAssignmentHelp.com",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 md:p-12">

          {/* Header */}
          <div className="border-b border-slate-200 pb-8 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading">
              Privacy Policy
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              We are committed to protecting your personal information. Please review how we handle your data.
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-7">
            <p className="lead font-medium text-slate-900">
              Customer satisfaction is a core priority at Original Assignment Help (OAH), and we consistently strive to maintain trust and transparency with our users. To support this commitment, we have implemented a comprehensive Privacy Policy that governs how customer information is collected, stored, and protected. Customers are encouraged to review this policy to better understand our data protection practices.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
              1. Personal Information That Is Kept Confidential
            </h2>
            <p>
              In accordance with our service requirements, the Company may collect personal information from customers such as name, contact details (including email address and phone number), city, country, and in certain cases, the name of the educational institution. This information is collected solely for the purpose of providing services in a standardised and efficient manner.
            </p>
            <p className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-900 italic text-slate-800 my-6">
              All personal information provided by customers is treated as strictly confidential. The Company does not disclose, sell, rent, or share customer information with unauthorised third parties under any circumstances, except where required to complete service-related operations or comply with legal obligations.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
              2. Payment Transactions That Are Safe
            </h2>
            <p>
              The Company does not store or have access to sensitive financial information such as credit/debit card numbers, PINs, passwords, or CVV details. All payment transactions are processed through secure, encrypted, and trusted third-party payment gateways.
            </p>
            <p>
              Due to encryption and security protocols, even Company employees and customer support representatives do not have access to customers’ financial credentials. These measures ensure that there is no misuse or unauthorised handling of customer payment information.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
              3. Assuring the Highest Possible Level of Quality
            </h2>
            <p>
              The Company is committed to delivering academic assistance that meets high-quality standards. All content is prepared with due diligence and is intended to be original and free from plagiarism. Sources referenced in the preparation of academic materials are legitimate and aligned with academic guidelines.
            </p>
            <p>
              Quality assurance measures are implemented to ensure that services provided meet the expectations and requirements outlined by customers.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
              4. Precautions Are Taken to Ensure Your Safety
            </h2>
            <p>
              The Company has established strict security protocols and monitoring systems to protect customer data from unauthorised access, misuse, or disclosure. Our website infrastructure is carefully designed, maintained, and regularly monitored to minimise the risk of cyber threats.
            </p>
            <p>
              Reasonable technical and administrative safeguards are in place to prevent hacking, data breaches, or third-party interference. Customer information shared through the website remains protected and inaccessible to unauthorised entities.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
              5. Customer Service That Is Specific
            </h2>
            <p>
              To protect customer privacy and maintain confidentiality, the Company follows a strict policy that does not allow direct communication between customers and academic experts. All communication is handled exclusively through authorised customer support representatives.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
              6. Governing Law and Jurisdiction
            </h2>
            <p>
              These policies and all transactions shall be governed and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of [Palwal, Haryana, India].
            </p>

            <p className="mt-8 text-slate-500 italic text-sm">
              This structured communication approach ensures secure handling of customer information while maintaining service quality and privacy standards.
            </p>

            <div className="mt-12 p-8 bg-slate-900 rounded-xl text-slate-300">
              <p className="mb-0">
                <strong>Original Assignment Help (OAH)</strong> is a brand name operated and managed by <strong>Harviera IT Solutions LLP</strong>, a registered Limited Liability Partnership incorporated under the laws of India.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
