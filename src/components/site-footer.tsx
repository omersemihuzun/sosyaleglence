import Link from "next/link";
import { site, socialLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-plum text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-[1.4fr_1fr_1fr] sm:px-6">
        <div className="max-w-sm">
          <p className="font-display text-2xl font-extrabold">
            sosyal<span className="text-blush-deep">eğlence</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-paper/75">
            Testlerimiz eğlence ve kendini tanıma amaçlıdır; psikolojik tanı yerine geçmez.
            Hediye bağlantılarından yapılan alışverişlerden komisyon alabiliriz.
          </p>
        </div>
        <div>
          <p className="font-display font-bold">Keşfet</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/80">
            <li><Link className="hover:text-butter" href="/testler">Tüm testler</Link></li>
            <li><Link className="hover:text-butter" href="/eleme">Eleme oyunları</Link></li>
            <li><Link className="hover:text-butter" href="/bunu-mu-o-mu">Bunu mu o mu?</Link></li>
            <li><Link className="hover:text-butter" href="/burclar">Burç uyumu</Link></li>
            <li><Link className="hover:text-butter" href="/hediye">Hediye bulucu</Link></li>
            <li><Link className="hover:text-butter" href="/iletisim">İletişim</Link></li>
            <li><Link className="hover:text-butter" href="/gizlilik">Gizlilik</Link></li>
            <li><Link className="hover:text-butter" href="/gorsel-kaynaklari">Görsel kaynakları</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display font-bold">{socialLinks.length > 0 ? "Takip et" : "Bize ulaş"}</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/80">
            {socialLinks.map((s) => (
              <li key={s.name}>
                <a className="hover:text-butter" href={s.href} rel="noopener" target="_blank">
                  {s.name}
                </a>
              </li>
            ))}
            <li>
              <a className="hover:text-butter" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-paper/60 sm:px-6">
          © Sosyal Eğlence. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
