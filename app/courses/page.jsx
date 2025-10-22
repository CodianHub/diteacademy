import CoursesClient from "./CoursesClient"

export const metadata = {
  title: "Our Courses",
  description:"Explore CodianHub's structured courses in Data Structures & Algorithms, Full Stack Development, Cloud, DevOps, AI/ML, and Core Programming to crack MNC interviews.",
  alternates: {canonical: "https://codianhub.in/courses"},

  openGraph: {
    title: "Courses at CodianHub | Learn DSA, Full Stack, AI/ML & Cloud",
    description:"Master coding with CodianHub courses. Learn DSA, Full Stack, Python, Java, Cloud, AI/ML, and DevOps to boost your career.",
    url: "https://codianhub.in/courses",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodianHub Courses Page",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Courses at CodianHub | Learn DSA, Full Stack, AI/ML & Cloud",
    description:"Browse CodianHub's courses in DSA, Full Stack, Python, Java, Cloud, DevOps & AI/ML. Build skills & crack top MNC interviews.",
    images: ["https://codianhub.in/og-image.png"],
  },
};

export default function page() {
  return (
    <>
      <CoursesClient />
    </>
  )
}
