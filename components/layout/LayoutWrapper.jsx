"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const showNavFooter = [
    "/",
    "/courses",
    "/courses/aws-cloud",
    "/courses/backend-development",
    "/courses/c-language",
    "/courses/cpp-oops",
    "/courses/data-structures-and-algorithms",
    "/courses/devops",
    "/courses/frontend-development",
    "/courses/java",
    "/courses/javascript",
    "/courses/full-stack-development",
    "/courses/python",
    "/tutorials",
    "/dsa-sheet",
    "/core-subjects",
    "/about",
    "/contact",
    "/legal/privacy-policy",
    "/legal/refund-policy",
    "/legal/terms-of-use",
  ].includes(pathname);

  return (
    <>
      {showNavFooter && <Navbar />}
      {children}
      {showNavFooter && <Footer />}
    </>
  );
}
