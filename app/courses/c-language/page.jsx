import CClient from "./CClient";

export const metadata = {
  title: "C Language for Beginners",
  description:"Master C programming with CodianHub. Learn variables, loops, functions, arrays, pointers, and problem-solving skills to crack coding interviews.",
  alternates: { canonical: "https://codianhub.in/courses/c-language" },

  openGraph: {
    title: "C Language Course | Programming Fundamentals",
    description:"Hands-on C programming course covering arrays, pointers, memory management & problem solving. Build strong coding foundations.",
    url: "https://codianhub.in/courses/c-language",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "C Language Course - CodianHub",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "C Language Course | Learn Programming Fundamentals",
    description:"Learn C programming with CodianHub. Build problem-solving skills for coding interviews and computer fundamentals.",
    images: ["https://codianhub.in/og-image.png"],
  },
};

export default function page() {
  return (
    <>
      <CClient />
    </>
  )
}
