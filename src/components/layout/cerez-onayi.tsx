"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Google Analytics 4 için KVKK uyumlu çerez onayı.
 * - GA, ziyaretçi "Kabul et" demeden hiç yüklenmez (Consent Mode varsayılanı da "denied").
 * - Reklam çerezleri hiçbir durumda açılmaz; sadece analytics_storage onaya bağlıdır.
 * - Tercih tarayıcıda saklanır; footer'daki "Çerez tercihleri" ile her zaman değiştirilebilir.
 * - Vercel Analytics çerez kullanmaz ve bu onaydan bağımsız çalışır.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ANAHTAR = "cerez-onayi";
const CEREZ_TERCIHI_AC = "cerez-tercihi-ac";
type Tercih = "kabul" | "red";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function okuTercih(): Tercih | null {
  try {
    const v = localStorage.getItem(ANAHTAR);
    return v === "kabul" || v === "red" ? v : null;
  } catch {
    return null;
  }
}

function gaYukle(id: string) {
  if (window.gtag) {
    window.gtag("consent", "update", { analytics_storage: "granted" });
    return;
  }
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag() {
    // gtag.js "arguments" nesnesini bekler
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
}

/** Onay geri çekilince GA'yı durdurur ve _ga çerezlerini siler */
function gaDurdur() {
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
  const alan = window.location.hostname.replace(/^www\./, "");
  for (const c of document.cookie.split(";")) {
    const ad = c.split("=")[0].trim();
    if (!ad.startsWith("_ga")) continue;
    for (const domain of ["", `; domain=.${alan}`, `; domain=${alan}`]) {
      document.cookie = `${ad}=; Max-Age=0; path=/${domain}`;
    }
  }
}

export function CerezOnayi() {
  const [goster, setGoster] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    const t = okuTercih();
    if (t === "kabul") gaYukle(GA_ID);
    // Tarayıcı depolaması ilk çizimden sonra okunabilir; sunucu çıktısıyla uyuşmazlık olmasın diye efektte
    // eslint-disable-next-line react-hooks/set-state-in-effect
    else if (t === null) setGoster(true);
    const ac = () => setGoster(true);
    window.addEventListener(CEREZ_TERCIHI_AC, ac);
    return () => window.removeEventListener(CEREZ_TERCIHI_AC, ac);
  }, []);

  if (!GA_ID || !goster) return null;

  function sec(t: Tercih) {
    try {
      localStorage.setItem(ANAHTAR, t);
    } catch {
      /* depolama kapalı: tercih bu oturumla sınırlı kalır */
    }
    if (t === "kabul") gaYukle(GA_ID!);
    else gaDurdur();
    setGoster(false);
  }

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cerez-baslik"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-2xl border-2 border-plum bg-white p-4 shadow-[4px_5px_0_0_var(--color-plum)] sm:p-5"
      data-cerez-onayi
    >
      <p id="cerez-baslik" className="font-display text-lg font-bold">
        Çerez tercihin
      </p>
      <p className="mt-1 text-[15px] leading-relaxed text-plum-soft">
        Siteyi geliştirmek için Google Analytics ile anonim ziyaret istatistikleri toplamak istiyoruz. Reklam çerezi
        kullanmıyoruz. Reddetsen de site aynı şekilde çalışır.{" "}
        <Link href="/gizlilik" className="font-semibold text-plum underline underline-offset-2">
          Ayrıntılar
        </Link>
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => sec("kabul")}
          className="min-h-11 rounded-full border-2 border-plum bg-plum px-5 font-display font-bold text-paper"
        >
          Kabul et
        </button>
        <button
          type="button"
          onClick={() => sec("red")}
          className="min-h-11 rounded-full border-2 border-plum bg-plum px-5 font-display font-bold text-paper"
        >
          Reddet
        </button>
      </div>
    </div>
  );
}

/** Footer listesinde tercih penceresini yeniden açan madde (GA kapalıysa hiç çizilmez) */
export function CerezTercihleriMaddesi({ className = "" }: { className?: string }) {
  if (!GA_ID) return null;
  return (
    <li>
      <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(CEREZ_TERCIHI_AC))}>
        Çerez tercihleri
      </button>
    </li>
  );
}
