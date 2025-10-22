import JavaScriptClient from "./JavaScriptClient";

export const metadata = {
  title: "Learn JS from Basics to Advanced",
  description:"Learn JavaScript for web development. Master DOM manipulation, ES6+, async programming, APIs & frameworks with CodianHub.",
  alternates: { canonical: "https://codianhub.in/courses/javascript" },

  openGraph: {
    title: "JavaScript Course | Learn JS for Web Development",
    description:"Master JavaScript with CodianHub. Learn ES6+, DOM, async/await, APIs & frameworks to build interactive web apps.",
    url: "https://codianhub.in/courses/javascript",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "JavaScript Course - CodianHub",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "JavaScript Course | Learn JS from Basics to Advanced",
    description:"Hands-on JavaScript training with CodianHub. Learn DOM, ES6+, async programming, APIs & frameworks.",
    images: ["https://codianhub.in/og-image.png"],
  },
};

export default function page() {
  return (
    <>
      <JavaScriptClient />
    </>
  )
}
