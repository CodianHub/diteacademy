import PythonClient from "./PythonClient"

export const metadata = {
  title: "Learn Python Programming",
  description:"Learn Python from basics to advanced. Master data types, OOPs, file handling, web frameworks & automation with CodianHub.",
  alternates: { canonical: "https://codianhub.in/courses/python" },

  openGraph: {
    title: "Python Course | Learn Python Programming",
    description:"Master Python programming with CodianHub. Learn data structures, OOPs, web frameworks & problem solving for real-world projects.",
    url: "https://codianhub.in/courses/python",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Python Course - CodianHub",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Python Course | Learn Python Programming",
    description:"Hands-on Python course with CodianHub. Build skills in Python for coding, automation, and development.",
    images: ["https://codianhub.in/og-image.png"],
  },
};

export default function page() {
  return (
    <>
      <PythonClient />
    </>
  )
}
