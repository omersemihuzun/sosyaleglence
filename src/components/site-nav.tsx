"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActive, navItems } from "@/lib/nav";

/**
 * Masaüstü menü (lg ve üstü). `pathname` boşsa (statik kabuk) hiçbir bölüm vurgulanmaz;
 * header bunu Suspense yedeği olarak kullanır, çünkü bazı rotalarda adres build sırasında bilinmiyor.
 */
export function DesktopNavView({ pathname }: { pathname: string }) {
  return (
    <nav aria-label="Ana menü" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {navItems.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-2 font-display text-[15px] font-semibold whitespace-nowrap ${
                  active ? "bg-plum text-paper" : "hover:bg-blush"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function DesktopNav() {
  return <DesktopNavView pathname={usePathname()} />;
}

export function SearchLinkView({ pathname }: { pathname: string }) {
  const active = isActive(pathname, "/ara");
  return (
    <Link
      href="/ara"
      aria-label="Sitede ara"
      aria-current={active ? "page" : undefined}
      className={`grid size-10 place-items-center rounded-full border-2 border-plum ${active ? "bg-plum text-paper" : "bg-white hover:bg-blush"}`}
    >
      <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m20 20-4.8-4.8" />
      </svg>
    </Link>
  );
}

export function SearchLink() {
  return <SearchLinkView pathname={usePathname()} />;
}
