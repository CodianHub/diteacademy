import Link from "next/link";

export const metadata = {
  title: "Error - 404",
  description: "The page you are looking for doesn’t exist or may have been moved. Return to CodianHub’s homepage to continue learning.",
  robots: {
    index: false, // ❌ Google ko bolo: isse index mat karo
    follow: true, // ✅ Lekin links follow karo
  },
  alternates: { canonical: "https://codianhub.in/404" },
  openGraph: {
    title: "Page Not Found",
    description: "Oops! The page you’re trying to reach is not available. Head back to CodianHub’s homepage.",
    url: "https://codianhub.in/404",
    siteName: "CodianHub",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Page Not Found",
    description: "This page is unavailable. Visit CodianHub’s homepage and explore coding courses.",
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* 404 Text */}
      <p className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        404
      </p>

      {/* Subtitle */}
      <p className="mt-4 text-xl md:text-2xl text-center">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <Link
          href='/'
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md hover:scale-105 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
