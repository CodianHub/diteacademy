import Hero from "../components/layout/Hero";
import Crowser from "../components/sections/Crowser";
import SocialState from "../components/sections/SocialState";
import Frequently from "../components/sections/Frequently";
import CourseAd from "../components/sections/CourseAd";

export const metadata = {
  title: "Dite Academy | Learn Computer Skills & Grow Your Career",
  description:
    "Join Dite Academy to master computer skills — from Basic Computer, Excel, MS Office, and Typing to Coding, DCA, ADCA, CCC, Digital Marketing, and Graphic Designing. Learn, Practice & Succeed.",
  alternates: { canonical: "https://diteacademy.in" },

  openGraph: {
    title: "Dite Academy | Learn Computer Skills & Grow Your Career",
    description:
      "Learn Basic Computer, Excel, DCA, ADCA, CCC, Typing, Coding, Digital Marketing, and more with Dite Academy. Build essential computer skills for your future success.",
    url: "https://diteacademy.in",
    siteName: "Dite Academy",
    images: [
      {
        url: "https://diteacademy.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dite Academy - Learn Computer Skills",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dite Academy | Learn Computer Skills & Grow Your Career",
    description:
      "Start your computer learning journey with Dite Academy — Basic Computer, Excel, MS Office, Coding, Digital Marketing, and Graphic Designing made easy for everyone.",
    images: ["https://diteacademy.in/og-image.png"],
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
