export const metadata = {
  title: "Terms of Use",
  description: "Review CodianHub's Terms of Use to understand the rules and guidelines for accessing our platform, courses, and services.",
  alternates: { canonical: "https://codianhub.in/legal/terms-of-use" },
  openGraph: {
    title: "Terms of Use",
    description: "Read CodianHub's Terms of Use to know your rights and responsibilities when using our platform.",
    url: "https://codianhub.in/legal/terms-of-use",
    siteName: "CodianHub",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use",
    description: "Explore CodianHub's Terms of Use – rules and conditions for accessing our courses and services.",
  },
};

function TermsOfUse() {
  return (
    <div className="min-h-screen max-w-4xl pt-35 mx-auto p-6 text-gray-800 leading-relaxed">
      <p className="text-3xl font-bold mb-6">Terms of Use</p>
      <p className="mb-6">
        Welcome to <strong>CodianHub</strong>. By accessing or using our website,
        courses, or services, you agree to be bound by these Terms of Use. Please
        read them carefully. If you do not agree, you may not use our services.
      </p>

      {/* Section 1 */}
      <p className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</p>
      <p className="mb-4">
        By accessing CodianHub, registering for an account, or enrolling in our
        courses, you acknowledge that you have read, understood, and agree to
        abide by these Terms of Use and our Privacy Policy.
      </p>

      {/* Section 2 */}
      <p className="text-xl font-semibold mt-6 mb-3">2. Eligibility</p>
      <p className="mb-4">
        You must be at least 13 years old to use our services. If you are under
        18, you may only use CodianHub under the supervision of a parent or legal
        guardian who agrees to these terms.
      </p>

      {/* Section 3 */}
      <p className="text-xl font-semibold mt-6 mb-3">3. Account Responsibilities</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>You are responsible for maintaining the confidentiality of your login details.</li>
        <li>You agree to provide accurate, current, and complete information during registration.</li>
        <li>You are solely responsible for any activity under your account.</li>
        <li>Notify us immediately if you suspect unauthorized access to your account.</li>
      </ul>

      {/* Section 4 */}
      <p className="text-xl font-semibold mt-6 mb-3">4. Payments & Refunds</p>
      <p className="mb-4">
        Payment for courses and services must be made in advance. Prices are
        subject to change without notice. Refund requests are subject to our
        Refund Policy. Unauthorized use of payment methods is strictly prohibited.
      </p>

      {/* Section 5 */}
      <p className="text-xl font-semibold mt-6 mb-3">5. Permitted Use</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Use our courses only for personal, educational purposes.</li>
        <li>You may not copy, resell, or redistribute CodianHub content without permission.</li>
        <li>Do not use our platform to spread harmful, illegal, or abusive content.</li>
        <li>Any violation may result in suspension or permanent termination.</li>
      </ul>

      {/* Section 6 */}
      <p className="text-xl font-semibold mt-6 mb-3">6. Intellectual Property</p>
      <p className="mb-4">
        All course materials, videos, graphics, logos, and content are the
        intellectual property of CodianHub or our instructors. You may not copy,
        modify, distribute, or exploit any material without written consent.
      </p>

      {/* Section 7 */}
      <p className="text-xl font-semibold mt-6 mb-3">7. Third-Party Services</p>
      <p className="mb-4">
        Our platform may contain links to third-party websites or services. We do
        not control and are not responsible for their content, policies, or
        practices.
      </p>

      {/* Section 8 */}
      <p className="text-xl font-semibold mt-6 mb-3">8. Disclaimer of Warranties</p>
      <p className="mb-4">
        CodianHub services are provided “as is” without warranties of any kind,
        either express or implied. We do not guarantee uninterrupted access,
        error-free content, or specific results from using our services.
      </p>

      {/* Section 9 */}
      <p className="text-xl font-semibold mt-6 mb-3">9. Limitation of Liability</p>
      <p className="mb-4">
        To the maximum extent permitted by law, CodianHub shall not be liable for
        any indirect, incidental, special, or consequential damages arising out of
        your use of our services, even if we have been advised of the possibility
        of such damages.
      </p>

      {/* Section 10 */}
      <p className="text-xl font-semibold mt-6 mb-3">10. Termination</p>
      <p className="mb-4">
        We reserve the right to suspend or terminate your access to CodianHub at
        any time for violations of these Terms or for any conduct that we deem
        harmful to our community.
      </p>

      {/* Section 11 */}
      <p className="text-xl font-semibold mt-6 mb-3">11. Governing Law</p>
      <p className="mb-4">
        These Terms of Use are governed by and construed under the laws of India.
        Any disputes shall be resolved exclusively in the courts of [Your City].
      </p>

      {/* Section 12 */}
      <p className="text-xl font-semibold mt-6 mb-3">12. Changes to Terms</p>
      <p className="mb-4">
        We may update or revise these Terms of Use from time to time. The updated
        version will be posted on this page with a revised “Last Updated” date.
      </p>

      {/* Section 13 */}
      <p className="text-xl font-semibold mt-6 mb-3">13. Contact Us</p>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at{" "}
        <a href="mailto:support@codianhub.com" className="text-blue-600 underline">
          support@codianhub.in
        </a>.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Last Updated: September 16, 2025
      </p>
    </div>
  );
}

export default TermsOfUse;
