"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition ${isActive ? "text-orange-400" :  "" }`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
