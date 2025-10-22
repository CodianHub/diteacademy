import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us",
  description:
    "Have questions about our courses or need support? Contact CodianHub today. We're here to help you with DSA, Full Stack, AI/ML, Cloud and more.",
  alternates: { canonical: "https://codianhub.in/contact" },

  openGraph: {
    title: "Contact CodianHub | Get in Touch with Us",
    description:
      "Reach out to CodianHub for queries about courses, DSA sheets, or support. We're here to guide you on your coding journey.",
    url: "https://codianhub.in/contact",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodianHub Contact Page",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact CodianHub | Get in Touch with Us",
    description:
      "Connect with CodianHub for queries about DSA, Full Stack, Python, Java, Cloud & AI/ML. We're here to help you succeed.",
    images: ["https://codianhub.in/og-image.png"],
  },
};

export default function Page() {
  return <ContactClient />;
}
