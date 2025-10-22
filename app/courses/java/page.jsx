import JavaClient from "./JavaClient";

export const metadata = {
  title: "Learn Java Programming",
  description:"Learn Java programming with CodianHub. Master OOP concepts, collections, multithreading, JDBC & build enterprise-level applications.",
  alternates: { canonical: "https://codianhub.in/courses/java" },

  openGraph: {
    title: "Java Course | Beginner to Advanced",
    description:"Hands-on Java training covering OOPs, data structures, multithreading, collections & database connectivity.",
    url: "https://codianhub.in/courses/java",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Java Course - CodianHub",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Java Course | Learn Java Programming",
    description:"Learn Java programming with CodianHub. Master OOP, JDBC, collections, and build scalable applications.",
    images: ["https://codianhub.in/og-image.png"],
  },
};


export default function page() {
  return (
    <>
      <JavaClient />
    </>
  )
}
