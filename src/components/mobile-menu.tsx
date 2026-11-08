"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { isActive, navItems } from "@/lib/nav";

/** Statik kabuktaki yer tutucu: aynı görünüm, menü sayfa yüklenince çalışır hâle gelir. */
export function MobileMenuFallback() {
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={false}
        className="rounded-full border-2 border-plum bg-white px-4 py-2 font-display text-[15px] font-bold"
      >
        Menü
      </button>
    </div>
  );
}

const FOCUSABLE ='a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])';

/**
 * Mobil menü (lg altı). Tam ekran çekmece: odak içeride döner, Esc kapatır,
 * açıkken sayfa kaymaz. Hangi adreste açıldığını tutar: adres değişince kendiliğinden kapanır.
 */
export function MobileMenu() {
  const pathname = usePathname();
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === pathname;
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpenedAt(null);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const items = [...panel.querySelectorAll<HTMLElement>(FOCUSABLE)];
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobil-menu"
        onClick={() => setOpenedAt(open ? null : pathname)}
        className="rounded-full border-2 border-plum bg-white px-4 py-2 font-display text-[15px] font-bold hover:bg-blush"
      >
        Menü
      </button>
      <div
        id="mobil-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menü"
        hidden={!open}
        className="fixed inset-0 z-50 overflow-y-auto bg-paper"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <span className="font-display text-lg font-extrabold">
            sosyal<span className="text-cherry">eğlence</span>
          </span>
          <button
            type="button"
            onClick={() => {
              setOpenedAt(null);
              buttonRef.current?.focus();
            }}
            className="rounded-full border-2 border-plum bg-white px-4 py-2 font-display text-[15px] font-bold hover:bg-blush"
          >
            Kapat
          </button>
        </div>
        <nav aria-label="Mobil menü" className="mx-auto max-w-6xl px-4 pt-4 pb-10 sm:px-6">
          <ul className="grid gap-3 sm:grid-cols-2">
            {navItems.map((item, i) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} style={{ rotate: `${i % 2 ? 0.6 : -0.6}deg` }}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpenedAt(null)}
                    className={`sticker sticker-press flex items-center gap-4 p-4 ${active ? "bg-butter" : "bg-white"}`}
                  >
                    <span aria-hidden className="text-3xl">
                      {item.emoji}
                    </span>
                    <span>
                      <span className="block font-display text-xl font-bold">{item.label}</span>
                      <span className="block text-sm text-plum-soft">{item.blurb}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/ara"
            onClick={() => setOpenedAt(null)}
            className="sticker sticker-press mt-6 flex items-center justify-center gap-2 bg-plum px-4 py-3.5 font-display text-lg font-bold text-paper"
          >
            Sitede ara
          </Link>
        </nav>
      </div>
    </div>
  );
}
