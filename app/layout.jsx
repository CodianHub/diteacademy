import "../styles/globals.css";
import LayoutWrapper from "../components/layout/LayoutWrapper";

export const metadata = {
  title: "Dite Academy | Learn Computer Skills & Build Your Career",
  description:
    "Master computer skills with Dite Academy! Learn Basic Computer, MS Office, Excel, DCA, ADCA, CCC, Typing, Coding, Digital Marketing, and Graphic Designing. Build your skills and advance your career.",
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: "https://diteacademy.in" },

  openGraph: {
    title: "Dite Academy | Learn Computer Skills & Build Your Career",
    description:
      "Free and affordable computer courses including Basic Computer, Excel, MS Office, Digital Marketing, and Graphic Designing. Learn with Dite Academy — your step toward digital success.",
    url: "https://diteacademy.in",
    siteName: "Dite Academy",
    images: [
      {
        url: "https://diteacademy.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dite Academy OG Image",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dite Academy | Learn Computer Skills & Build Your Career",
    description:
      "Join Dite Academy to learn computer courses like Excel, MS Office, DCA, ADCA, CCC, Digital Marketing, and more. Start learning today and enhance your skills.",
    images: ["https://diteacademy.in/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
