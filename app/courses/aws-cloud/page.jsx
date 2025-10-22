import AWSClient from "./AwsClient";

export const metadata = {
  title: "AWS Cloud Bootcamp",
  description:"Master AWS Cloud with CodianHub. Learn EC2, S3, Lambda, IAM, CloudFormation & DevOps practices. Get hands-on experience and crack top MNC interviews.",
  alternates: { canonical: "https://codianhub.in/courses/aws-cloud" },

  openGraph: {
    title: "AWS Cloud Course | Learn Cloud Computing & Deployment",
    description:"Join CodianHub’s AWS Cloud course to learn cloud computing, storage, deployment, and DevOps workflows. Build career-ready skills for top companies.",
    url: "https://codianhub.in/courses/aws-cloud",
    siteName: "CodianHub",
    images: [
      {
        url: "https://codianhub.in/og-aws.png",
        width: 1200,
        height: 630,
        alt: "AWS Cloud Course - CodianHub",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AWS Cloud Course | Learn Cloud Computing with CodianHub",
    description:"Hands-on AWS Cloud training with EC2, S3, Lambda, IAM & DevOps integration. Start your cloud career today.",
    images: ["https://codianhub.in/og-aws.png"],
  },
};

export default function page() {
  return (
    <>
      <AWSClient />
    </>
  )
}
