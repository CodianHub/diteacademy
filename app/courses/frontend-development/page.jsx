import FrontendClient from "./FrontendClient";

export const metadata = {
  title: "Frontend Development Course",
  description:"Learn Frontend Development with HTML, CSS, JavaScript, React & modern UI frameworks. Build responsive and interactive websites with CodianHub.",
  alternates: { canonical: "https://codianhub.in/courses/frontend-development" },

  openGraph: {
    title: "Frontend Development Course | React, HTML, CSS, JS",
    description:"Master frontend development with CodianHub. Learn React, HTML, CSS, JavaScript, and build responsive, user-friendly websites.",
    url: "https://codianhub.in/courses/frontend-development",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Frontend Development Course",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Frontend Development Course | React, HTML, CSS, JS",
    description:"Hands-on Frontend Development course covering HTML, CSS, JavaScript & React. Build professional websites and apps.",
    images: ["https://codianhub.in/og-image.png"],
  },
};

export default function page() {
  return (
    <>
      <FrontendClient />
    </>
  )
}
