import AboutClient from "./AboutClient"

export const metadata = {
  title: "About Us",
  description: "CodianHub is built by passionate developers and educators to help students master DSA, Full Stack Development, AI/ML, and Cloud. Our mission is to guide aspiring engineers to crack top MNC interviews and build successful careers.",
  alternates: {canonical: "https://codianhub.in/about"},

  openGraph: {
    title: "About CodianHub | Empowering Future Software Engineers",
    description: "Discover the story behind CodianHub. Learn how we help students master coding, DSA, and full stack skills to crack MNC interviews and achieve career goals.",
    url: "https://codianhub.in/about",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodianHub About Page",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About CodianHub | Empowering Future Software Engineers",
    description: "CodianHub helps students master coding skills, DSA, and Full Stack Development with structured courses and practice sheets. Learn our vision and mission.",
    images: ["https://codianhub.in/og-image.png"],
  },
};

export default function page() {
  return (
    <>
      <AboutClient />
    </>
  )
}
