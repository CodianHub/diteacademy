import CoreSubjectsClient from "./CoreSubjectsClient"

export const metadata = {
  title: "Core Subjects",
  description:"Master core computer science subjects including Operating Systems, DBMS, Computer Networks, and OOPs with CodianHub’s structured learning material.",
  alternates: {canonical: "https://codianhub.in/core-subjects"},

  openGraph: {
    title: "Core Subjects for MAANG",
    description:"Learn core CS fundamentals like DBMS, OS, CN, and OOPs with CodianHub to strengthen your computer science foundation for interviews and placements.",
    url: "https://codianhub.in/core-subjects",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodianHub Core Subjects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Core Subjects | CodianHub",
    description:"Learn DBMS, OS, CN & OOPs with CodianHub’s structured guides. Build your computer science fundamentals & crack interviews.",
    images: ["https://codianhub.in/og-image.png"],
  },
};

export default function page() {
  return (
    <>
      <CoreSubjectsClient />
    </>
  )
}
