export const metadata = {
  title: "Refund Policy",
  description: "Check CodianHub's Refund Policy to learn about eligibility, conditions, and timelines for course fee refunds.",
  alternates: { canonical: "https://codianhub.in/legal/refund-policy" },
  openGraph: {
    title: "Refund Policy",
    description: "Understand CodianHub's Refund Policy – refund eligibility and conditions for students.",
    url: "https://codianhub.in/legal/refund-policy",
    siteName: "CodianHub",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Refund Policy",
    description: "Learn about CodianHub's Refund Policy – how and when you can request course fee refunds.",
  },
};

function RefundPolicy() {
  return (
    <div className="max-w-4xl min-h-screen pt-35 mx-auto p-6 text-gray-800 leading-relaxed">
      <p className="text-3xl font-bold mb-6">Refund & Cancellation Policy</p>
      <p className="mb-6">
        At <strong>CodianHub</strong>, we are committed to providing high-quality
        courses and services. However, we understand that situations may arise
        where you may request a refund or cancellation. Please read our policy
        carefully before making a purchase.
      </p>

      {/* Section 1 */}
      <p className="text-xl font-semibold mt-6 mb-3">1. Course Refunds</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          Refund requests can be made within <strong>7 days</strong> of purchase,
          provided that you have not accessed more than <strong>10%</strong> of
          the course content.
        </li>
        <li>
          If more than 10% of the course has been accessed, no refund will be
          granted.
        </li>
        <li>
          Refunds will be processed within 7–14 business days after approval,
          using the original method of payment.
        </li>
      </ul>

      {/* Section 2 */}
      <p className="text-xl font-semibold mt-6 mb-3">2. Subscription Cancellations</p>
      <p className="mb-4">
        If you are on a subscription plan, you may cancel anytime. Your access
        will remain active until the end of your current billing cycle.{" "}
        <strong>No refunds</strong> will be issued for payments already made.
      </p>

      {/* Section 3 */}
      <p className="text-xl font-semibold mt-6 mb-3">3. Digital Products</p>
      <p className="mb-4">
        No refunds will be provided for <strong>downloadable digital products</strong> 
        or courses that have been fully completed or marked as completed.
      </p>

      {/* Section 4 */}
      <p className="text-xl font-semibold mt-6 mb-3">4. Exceptional Circumstances</p>
      <p className="mb-4">
        In rare cases such as duplicate payments, technical issues, or other
        errors, CodianHub will review the situation and may issue a refund at our
        sole discretion.
      </p>

      {/* Section 5 */}
      <p className="text-xl font-semibold mt-6 mb-3">5. How to Request a Refund</p>
      <p className="mb-4">
        To request a refund, please email us at{" "}
        <a href="mailto:support@codianhub.com" className="text-blue-600 underline">
          support@codianhub.in
        </a>{" "}
        with your order details and reason for the request.
      </p>

      {/* Section 6 */}
      <p className="text-xl font-semibold mt-6 mb-3">6. Changes to This Policy</p>
      <p className="mb-4">
        CodianHub reserves the right to update or modify this Refund & Cancellation
        Policy at any time. Any changes will be effective immediately upon posting
        on our website.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Last Updated: September 16, 2025
      </p>
    </div>
  );
}

export default RefundPolicy;
