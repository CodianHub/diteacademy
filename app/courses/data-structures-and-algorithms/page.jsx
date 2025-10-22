import DSAClient from "./DSAClient";

export const metadata = {
  title: "Learn Data Structures & Algorithms",
  description:"Master Data Structures & Algorithms Basic to Advanced with CodianHub. Learn arrays, strings, linked lists, stacks, queues, trees, graphs, and dynamic programming to crack top MNC interviews.",
  alternates: { canonical: "https://codianhub.in/courses/data-structures-and-algorithms" },

  openGraph: {
    title: "DSA Course | Crack Coding Interviews with CodianHub",
    description:"Hands-on DSA course covering arrays, linked lists, recursion, trees, graphs, DP & problem solving. Build skills for FAANG & MNC interviews.",
    url: "https://codianhub.in/courses/data-structures-and-algorithms",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "DSA Course - CodianHub",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DSA Course | Learn Data Structures & Algorithms",
    description:"Learn DSA with CodianHub. Solve problems on arrays, trees, graphs & dynamic programming. Prepare for FAANG & MNC coding interviews.",
    images: ["https://codianhub.in/og-image.png"],
  },
};

export default function page() {
  return (
    <>
      <DSAClient />
    </>
  )
}
