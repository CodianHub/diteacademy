import TutorialsClient from "./TutorialsClient";

export const metadata = {
  title: "Learn from Tutorials for Free",
  description:"Step-by-step tutorials in C, C++, Java, Python, JavaScript, DSA, Development and more. Learn programming from scratch with CodianHub.",
  alternates: {canonical: "https://codianhub.in/tutorials"},
  
  openGraph: {
    title: "Programming Tutorials",
    description:"Explore CodianHub’s tutorials for C, C++, Java, Python, JavaScript, Data Structures, Web Development, AI/ML, Coding and more to strengthen coding skills and prepare for interviews.",
    url: "https://codianhub.in/tutorials",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodianHub Tutorials",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Tutorials for Free to learn for everyone online",
    description:"Learn coding with CodianHub’s tutorials in C, C++, Python, Java, and JavaScript. Perfect for beginners and interview prep. Codian Hub is Best for Software Engineers.",
    images: ["https://codianhub.in/og-image.png"],
  },
};


export default function page() {
  return (
    <>
      <TutorialsClient />
    </>
  )
}
