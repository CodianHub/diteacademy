export const metadata = {
  title: "Privacy Policy",
  description: "Read CodianHub's Privacy Policy to understand how we collect, use, and protect your personal information while you learn coding and build your career.",
  alternates: { canonical: "https://codianhub.in/legal/privacy-policy" },
  openGraph: {
    title: "Privacy Policy",
    description: "Learn how CodianHub handles your data responsibly with our transparent Privacy Policy.",
    url: "https://codianhub.in/legal/privacy-policy",
    siteName: "CodianHub",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy",
    description: "Understand CodianHub's Privacy Policy – how we manage and protect your data.",
  },
};

function PrivacyPolicy() {
    return (
        <div className="max-w-4xl min-h-screen pt-35 mx-auto p-6 text-gray-800 leading-relaxed">
            <p className="text-3xl font-bold mb-6">Privacy Policy</p>
            <p className="mb-4">Last Updated: September 16, 2025</p>

            <p className="mb-4">
                This Privacy Policy explains how <strong>CodianHub</strong> collects,
                uses, stores, and protects your personal information when you use our
                website, courses, and related services. By accessing or using CodianHub,
                you agree to the practices outlined in this Privacy Policy.
            </p>

            {/* Section 1 */}
            <p className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</p>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, billing details, etc.</li>
                <li><strong>Account Information:</strong> Login credentials, course progress, and preferences.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, device information, and interactions with our platform.</li>
                <li><strong>Cookies & Tracking:</strong> We use cookies to improve user experience, track usage, and personalize content.</li>
            </ul>

            {/* Section 2 */}
            <p className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</p>
            <p className="mb-4">Your data helps us provide a better learning experience. Specifically, we use it to:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Provide and manage your course access.</li>
                <li>Improve our website functionality and user experience.</li>
                <li>Communicate with you regarding updates, offers, or support.</li>
                <li>Process payments and prevent fraudulent activity.</li>
                <li>Comply with legal and regulatory requirements.</li>
            </ul>

            {/* Section 3 */}
            <p className="text-2xl font-semibold mt-8 mb-4">3. Sharing of Information</p>
            <p className="mb-4">We respect your privacy. CodianHub does not sell your personal data. However, we may share data in these cases:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>With trusted service providers who help us operate our platform (e.g., payment gateways, cloud hosting).</li>
                <li>If required by law, regulation, or court order.</li>
                <li>During business transfers (e.g., merger, acquisition, or sale of assets).</li>
            </ul>

            {/* Section 4 */}
            <p className="text-2xl font-semibold mt-8 mb-4">4. Data Security</p>
            <p className="mb-4">
                We implement industry-standard security measures (encryption, firewalls,
                secure servers) to protect your personal information. However, no
                electronic storage or transmission method is 100% secure, and we cannot
                guarantee absolute security.
            </p>

            {/* Section 5 */}
            <p className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</p>
            <p className="mb-4">Depending on your location, you may have rights such as:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Accessing the data we hold about you.</li>
                <li>Requesting corrections or deletion of your personal information.</li>
                <li>Opting out of marketing communications.</li>
                <li>Restricting or objecting to certain data processing activities.</li>
            </ul>

            {/* Section 6 */}
            <p className="text-2xl font-semibold mt-8 mb-4">6. Children’s Privacy</p>
            <p className="mb-4">
                CodianHub does not knowingly collect information from children under 13
                (or the applicable age in your country). If we learn that we have
                collected data from a child, we will delete it promptly.
            </p>

            {/* Section 7 */}
            <p className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Links</p>
            <p className="mb-4">
                Our platform may contain links to third-party websites. We are not
                responsible for the privacy practices or content of external websites.
                Please review their privacy policies before providing personal data.
            </p>

            {/* Section 8 */}
            <p className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</p>
            <p className="mb-4">
                We may update this Privacy Policy from time to time. Updates will be
                reflected with a new "Last Updated" date. Continued use of our services
                indicates acceptance of any changes.
            </p>

            {/* Section 9 */}
            <p className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</p>
            <p className="mb-4">
                If you have questions, concerns, or requests regarding this Privacy
                Policy, please contact us at:
            </p>
            <p className="mb-4">
                📧 <strong>Email:</strong> support@codianhub.in
            </p>
        </div>
    );
}

export default PrivacyPolicy;
