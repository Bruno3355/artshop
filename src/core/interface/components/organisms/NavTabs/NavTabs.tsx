"use client";

import styles from "./NavTabs.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const tabs = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Contact Us", href: "/contact" },
];

const isActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
};

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <nav className={styles.wrapper}>
      {tabs.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className={`${styles.tab} ${isActive(pathname, href) ? styles.active : ""}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
