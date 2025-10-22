import DSASheetClient from "./DSASheetClient"

export const metadata = {
  title: "Ultimate DSA Sheet",
  description:"Crack FAANG's interviews with CodianHub’s DSA sheet covering 400+ problems on arrays, strings, linked lists, trees, graphs, and dynamic programming with solution.",
  alternates: {canonical: "https://codianhub.in/dsa-sheet"},

  openGraph: {
    title: "Ultimate DSA Sheet",
    description:"Crack interviews with CodianHub’s DSA sheet covering 400+. Inspired from Striver's DSA Sheet, Learn and Get Job in Top MNC's like Google, Facebook, Amazon, Netflix etc.",
    url: "https://codianhub.in/dsa-sheet",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodianHub DSA Sheet",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DSA Practice Sheet | CodianHub",
    description:"Prepare for MNC interviews with CodianHub’s structured DSA sheet. CodeHelp like DSA Sheet free for to get Job. Covers arrays, strings, trees, graphs & DP problems.",
    images: ["https://codianhub.in/og-image.png"],
  },
};

export default function page() {
  return (
    <>
      <DSASheetClient />
    </>
  )
}
