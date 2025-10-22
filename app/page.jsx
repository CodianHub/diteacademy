import Hero from "../components/layout/Hero";
import Crowser from "../components/sections/Crowser";
import SocialState from "../components/sections/SocialState";
import Frequently from "../components/sections/Frequently";
import CourseAd from "../components/sections/CourseAd";

export const metadata = {
  title: "CodianHub | Learn Coding, Build Skills & Get Placed",
  description: "Master coding with CodianHub! Learn DSA, Full Stack Development, AI/ML, Cloud & more. Build skills, crack top MNC interviews & grow your career.",
  alternates: { canonical: "https://codianhub.in" },

  openGraph: {
    title: "CodianHub | Learn Coding, Build Skills & Get Placed",
    description: "Learn coding with CodianHub – DSA, Full Stack, AI/ML, Cloud. Courses, practice sheets & guidance to crack interviews and get placed in top MNCs.",
    url: "https://codianhub.in",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodianHub - Learn Coding",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CodianHub | Learn Coding, Build Skills & Get Placed",
    description: "Learn DSA, Full Stack, Python, Java, Cloud & AI/ML at CodianHub. Structured courses & practice sheets to build skills & crack MNC interviews.",
    images: ["https://codianhub.in/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Crowser />
      <SocialState />
      <Frequently />
      <CourseAd />
    </div>
  );
}
