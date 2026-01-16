import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Refund & Money-Back Policy - OriginalAssignmentHelp.com",
};

export default function RefundPolicy() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 md:p-12">

                    {/* Header */}
                    <div className="border-b border-slate-200 pb-8 mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading">
                            Refund & Money-Back Guarantee Policy
                        </h1>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            We stand by our quality. Please review the terms of our money-back guarantee below.
                        </p>
                    </div>

                    <div className="prose prose-slate max-w-none text-slate-700 leading-7">
                        <p className="lead font-medium text-slate-900">
                            The Company is responsible for delivering services within the agreed deadline and in accordance with the specifications and requirements shared by the customer at the time of order placement. As per our policy, customers may be entitled to a partial or full refund if one or more of the Company’s commitments are not fulfilled.
                        </p>
                        <p>
                            If our service fails to meet its stated obligations, customers have the right to request a refund in accordance with the Terms and Conditions. Since Original Assignment Help (OAH) provides academic assistance services, we strive to ensure that every customer is satisfied with the outcome. A large percentage of our customers return to place repeat orders; however, in rare situations where issues arise, this refund policy is available to address concerns.
                        </p>
                        <p className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-900 italic text-slate-800">
                            Please note that full refunds are granted only under limited and specific circumstances, as outlined below.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
                            1. No Delivery / Cancellation by Customer
                        </h2>

                        {/* Formal Table for Refund Rules */}
                        <div className="overflow-x-auto my-8 border border-slate-200 rounded-lg shadow-sm">
                            <table className="min-w-full divide-y divide-slate-200">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Circumstance</th>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider w-32">Refund %</th>
                                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-200">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-bold text-slate-900 align-top">
                                            No Writer Assigned Yet
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-emerald-700 align-top">
                                            100%
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600 align-top">
                                            If no academic expert has been assigned to your order. The customer will be informed at the earliest possible time.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-bold text-slate-900 align-top">
                                            Writer Assigned but Cancelled
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-emerald-700 align-top">
                                            75% - 100%
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600 align-top">
                                            Depending on the progress made. This compensates the expert and Company for time/effort invested.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-bold text-slate-900 align-top">
                                            Late Cancellation
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-amber-600 align-top">
                                            0% - 50%
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600 align-top">
                                            If cancellation occurs after significant time has elapsed (e.g., &gt; 50% of timeline), based on stage of completion.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
                            2. Late Delivery
                        </h2>
                        <p>
                            Late delivery may occur only due to unforeseen circumstances such as medical emergencies or unavoidable situations affecting the expert. In such cases, the Company may issue a partial refund as compensation. The refund amount, if applicable, will be determined by the Company after an internal review, considering the duration and reason for the delay.
                        </p>
                        <p>
                            The Company endeavours to ensure on-time delivery for all orders. However, if delays occur due to the customer’s failure to provide complete instructions or required materials on time, no refund will be applicable. Customers are advised to submit all necessary details and reference materials at the time of order placement.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
                            3. Work Not As Described
                        </h2>
                        <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Disputed Claims</h3>
                        <p>
                            If a customer is dissatisfied with the quality or specifications of the delivered work, the Company will review the claim and attempt to resolve the issue in a fair manner. An internal assessment will be conducted to determine whether the work meets the original requirements.
                        </p>
                        <p>
                            If the claim is found to be valid, the Company may offer revisions, partial refunds, or other suitable resolutions. If the claim is found to be unsubstantiated, the refund request may be declined. The Company always strives to handle disputes objectively and in the best interest of customer satisfaction.
                        </p>

                        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100 uppercase tracking-wide">
                            4. Plagiarised Content
                        </h2>
                        <p>
                            Claims related to plagiarism must be supported by a <strong className="text-slate-900">Turnitin plagiarism report</strong>. No other plagiarism detection reports will be accepted as valid proof. If plagiarism is confirmed through Turnitin, the refund request will be reviewed accordingly. Without a valid Turnitin report, no refund will be issued for plagiarism claims.
                        </p>

                        <div className="mt-12 p-8 bg-slate-900 rounded-xl text-slate-300">
                            <p className="mb-0">
                                <strong>Original Assignment Help (OAH)</strong> is a brand name operated and managed by <strong>Harviera IT Solutions LLP</strong>, a registered Limited Liability Partnership incorporated under the laws of India, with its principal place of business in Palwal, Haryana, India.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
