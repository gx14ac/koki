"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SectionBarProps {
  variant?: "default" | "more-left" | "mobile-large" | "centered";
}

export default function SectionBar({ variant = "default" }: SectionBarProps) {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  const links: Array<{ label: string; href: string; external?: boolean }> = [
    { label: "RESERVATION", href: "/reservation" },
    { label: "STAY", href: "/stay" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
    { label: "MAP", href: "https://maps.app.goo.gl/wzpyAXsDesZ4mmiq9?g_st=ic", external: true },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("http")) return false;
    if (href === "/" && pathname !== "/") return false;
    return pathname.startsWith(href);
  };

  const containerClasses =
    variant === "more-left"
      ? "w-full layout-left pr-8 md:pr-12 flex items-center justify-between text-gray-700"
      : variant === "mobile-large"
      ? "w-full layout-left pr-4 flex flex-col items-start gap-1 text-gray-700"
      : variant === "centered"
      ? "w-full max-w-7xl mx-auto flex items-center justify-between text-gray-700"
      : "w-full layout-left pr-12 md:pr-12 flex items-center justify-between text-gray-700";

  const navClasses =
    variant === "mobile-large"
      ? "text-xs text-gray-500"
      : variant === "centered"
      ? "text-base text-gray-500"
      : "text-base text-gray-500";

  const footerClasses =
    variant === "mobile-large" ? "w-full py-0" : "w-full py-6";

  return (
    <footer className={footerClasses}>
      <div className={containerClasses}>
        <nav className={navClasses}>
          {links.map((link, idx) => {
            const active = isActive(link.href);
            const content = (
              <span className={active ? (variant === "mobile-large" ? "underline underline-offset-4" : "underline underline-offset-4") : undefined}>
                {link.label}
              </span>
            );
            return (
              <span key={link.label}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    {content}
                  </a>
                ) : (
                  <Link href={link.href} className="hover:opacity-80">
                    {content}
                  </Link>
                )}
                {idx !== links.length - 1 && (
                  <span className={variant === "mobile-large" ? "mx-1" : "mx-2"}>/</span>
                )}
              </span>
            );
          })}
        </nav>
        <div className={
          variant === "mobile-large" 
            ? "text-[12px] text-gray-500 mb-2" 
            : variant === "centered"
            ? "text-sm text-gray-500 mb-8"
            : "text-xs md:text-sm text-gray-500 mb-6"
        }>©{year} Auberge KOKI</div>
      </div>
    </footer>
  );
}
