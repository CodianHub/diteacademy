import CppClient from "./CppClient";

export const metadata = {
  title: "Learn C++ Programming",
  description:"Master C++ programming with CodianHub. Learn OOP concepts, STL, pointers, memory management & crack coding interviews.",
  alternates: { canonical: "https://codianhub.in/courses/cpp-oops" },

  openGraph: {
    title: "C++ & OOPs Course | Programming & Problem Solving",
    description:"Hands-on C++ course covering OOPs, STL, memory management & advanced programming concepts.",
    url: "https://codianhub.in/courses/cpp-oops",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "C++ & OOPs Course - CodianHub",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "C++ & OOPs Course | Learn C++ Programming",
    description:"Learn C++ and Object-Oriented Programming with CodianHub. Build problem-solving skills for competitive coding & interviews.",
    images: ["https://codianhub.in/og-image.png"],
  },
};

export default function page() {
  return (
    <>
      <CppClient />
    </>
  )
}
