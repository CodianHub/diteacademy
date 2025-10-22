import MernClient from "./MernClient";

export const metadata = {
  title: "Full Stack Development with AI",
  description:"Become a full-stack developer with the MERN stack. Learn MongoDB, Express.js, React & Node.js with CodianHub and build real-world projects.",
  alternates: { canonical: "https://codianhub.in/courses/mern-stack" },

  openGraph: {
    title: "MERN Stack Development Course | MongoDB, Express, React, Node",
    description:"Join CodianHub’s MERN Stack course. Learn frontend + backend with MongoDB, Express, React, and Node.js to build full-stack applications.",
    url: "https://codianhub.in/courses/mern-stack",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "MERN Stack Development Course - CodianHub",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MERN Stack Development Course | MongoDB, Express, React, Node",
    description:"Hands-on MERN stack training with CodianHub. Build full-stack apps with MongoDB, Express, React, and Node.js.",
    images: ["https://codianhub.in/og-image.png"],
  },
};

export default function page() {
  return (
    <>
      <MernClient />
    </>
  )
}
