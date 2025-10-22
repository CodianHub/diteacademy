import BackendClient from "./BackendClient";

export const metadata = {
  title: "Backend Development Course",
  description:"Learn Backend Development with Node.js, Express, MongoDB & SQL. Build secure APIs, authentication, and scalable server-side apps with CodianHub.",
  alternates: { canonical: "https://codianhub.in/courses/backend-development" },

  openGraph: {
    title: "Backend Development Course | Node.js, Express & Databases",
    description:"Master backend development with CodianHub. Learn Node.js, Express, MongoDB, SQL, APIs & authentication for scalable applications.",
    url: "https://codianhub.in/courses/backend-development",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Backend Development Course - CodianHub",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Backend Development Course | Node.js, Express, Databases",
    description:"Hands-on Backend Development training with Node.js, Express, MongoDB & SQL. Build job-ready backend skills.",
    images: ["https://codianhub.in/og-image.png"],
  },
};

export default function page() {
  return (
    <>
      <BackendClient />
    </>
  )
}
