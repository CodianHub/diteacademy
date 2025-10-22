import '../styles/globals.css'
import LayoutWrapper from '../components/layout/LayoutWrapper';

export const metadata = {
  title: "CodianHub | Learn Coding, Build Skills & Get Placed",
  description: "Master coding with CodianHub! Learn Data Structures & Algorithms, Full Stack Development, Data Science, AI/ML and Devops & Cloud. Crack MNC interviews and build your dream career.",
  icons: {icon: "/favicon.svg"},
  alternates: { canonical: "https://codianhub.in" },

  openGraph: {
    title: "CodianHub | Learn Coding, Build Skills & Get Placed",
    description: "Structured coding courses and DSA sheets for aspiring software engineers.",
    url: "https://codianhub.in",
    siteName: "CodianHub",
    images: [{ url: "https://codianhub.in/og-image.png", width: 1200, height: 630, alt: "CodianHub OG Image" }],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CodianHub | Learn Coding, Build Skills & Get Placed",
    description: "CodianHub | Learn DSA, Full Stack, Python, Java, Cloud & AI/ML with structured courses and practice sheets. Build skills & crack top MNC interviews.",
    images: ["https://codianhub.in/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return( 
  <html lang="en">
    <body>
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
    </body>
  </html>
  )
}
