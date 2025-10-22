import CoreSubjectsClient from "./CoreSubjectsClient";

export const metadata = {
  title: "Academic Subjects | Dite Academy",
  description:
    "Study key academic subjects for BCA, MCA, and B.Tech such as Computer Fundamentals, Programming in C, Operating Systems, DBMS, and Networking — only at Dite Academy.",
  alternates: { canonical: "https://diteacademy.in/core-subjects" },

  openGraph: {
    title: "Academic Subjects | Dite Academy",
    description:
      "Explore academic subjects for BCA, MCA, and B.Tech students — including Programming in C, Operating Systems, DBMS, Computer Networks, and more. Build strong academic and practical skills with Dite Academy.",
    url: "https://diteacademy.in/core-subjects",
    siteName: "Dite Academy",
    images: [
      {
        url: "https://diteacademy.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dite Academy Academic Subjects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Academic Subjects | Dite Academy",
    description:
      "Learn core academic subjects like Computer Fundamentals, C Programming, DBMS, OS, and Networking with Dite Academy. Tailored for BCA, MCA, and B.Tech students.",
    images: ["https://diteacademy.in/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <CoreSubjectsClient />
    </>
  );
}
