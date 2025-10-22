import DevopsClient from "./DevopsClient"

export const metadata = {
  title: "DevOps Bootcamp",
  description:"Master DevOps with CodianHub. Learn CI/CD pipelines, Docker, Kubernetes, Jenkins, GitHub Actions & cloud deployment to accelerate your career.",
  alternates: { canonical: "https://codianhub.in/courses/devops" },

  openGraph: {
    title: "DevOps Course | Learn CI/CD, Docker, Kubernetes & Cloud",
    description:"Join CodianHub’s DevOps course to gain expertise in automation, CI/CD, containers & cloud. Get job-ready skills for MNCs.",
    url: "https://codianhub.in/courses/devops",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevOps Course",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DevOps Course | Learn CI/CD, Docker, Kubernetes & Cloud",
    description:"Hands-on DevOps course covering Docker, Kubernetes, Jenkins & pipelines. Prepare for top MNC DevOps jobs.",
    images: ["https://codianhub.in/og-image.png"],
  },
};

export default function page() {
  return (
    <>
      <DevopsClient />
    </>
  )
}
