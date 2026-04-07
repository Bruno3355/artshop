"use client"

import styles from "./NavTabs.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const tabs = [{label: "Home", href: "/home"},{label: "Shop", href: "/shop"},{label: "Contact Us", href: "/contact"},]

export default function NavTabs() {
  const pathname = usePathname()

  return (
    <nav className={styles.wrapper}>
{tabs.map(({label, href}) => (
  <Link key={href} href={href}
  className={`${styles.tab} ${pathname === href ? styles.active : ''}`}>
    {label}
  </Link>
))}
    </nav>
  );
}
