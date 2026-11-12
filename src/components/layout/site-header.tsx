import Link from "next/link";
import { Suspense } from "react";
import { MobileMenu, MobileMenuFallback } from "@/components/layout/mobile-menu";
import { DesktopNav, DesktopNavView, SearchLink, SearchLinkView } from "@/components/layout/site-nav";

export function SiteHeader() {
  return (
    <header className="border-b-2 border-plum bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:px-6">
        <Link href="/" className="group flex shrink-0 items-center gap-2">
          <span
            aria-hidden
            className="grid size-9 -rotate-6 place-items-center rounded-xl border-2 border-plum bg-cherry text-lg shadow-[2px_3px_0_0_var(--color-plum)] transition-transform group-hover:rotate-3"
          >
            🧠
          </span>
          {/* Dar ekranda yazı görsel olarak gizlenir ama linkin erişilebilir adı olarak kalır */}
          <span className="sr-only font-display text-lg leading-none font-extrabold tracking-tight min-[380px]:not-sr-only sm:text-xl">
            sosyal<span className="text-cherry">eğlence</span>
          </span>
        </Link>
        {/* Aktif bölüm vurgusu adrese bağlı: statik kabukta vurgusuz hâli çizilir */}
        <div className="flex items-center gap-2">
          <Suspense fallback={<DesktopNavView pathname="" />}>
            <DesktopNav />
          </Suspense>
          <Suspense fallback={<SearchLinkView pathname="" />}>
            <SearchLink />
          </Suspense>
          <Suspense fallback={<MobileMenuFallback />}>
            <MobileMenu />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
