import type { Metadata } from "next";
import { site, socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Sosyal Eğlence ile iletişime geç: test önerileri, iş birlikleri ve geri bildirimler.",
  alternates: { canonical: "/iletisim" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 pt-10 sm:pt-14">
      <h1 className="font-display text-5xl leading-[1] font-extrabold tracking-tight">Bize yaz</h1>
      <p className="mt-5 text-lg leading-relaxed text-plum-soft">
        Görmek istediğin bir test, bir hata ya da bir iş birliği fikri mi var? Bize e-postayla ulaşabilirsin.
      </p>
      <a
        href={`mailto:${site.email}`}
        className="sticker sticker-press mt-8 inline-block bg-white px-6 py-4 font-display text-xl font-bold break-all"
      >
        {site.email}
      </a>
      {socialLinks.length > 0 && (
        <ul className="mt-8 flex flex-wrap gap-2">
          {socialLinks.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener"
                className="inline-block rounded-full border-2 border-plum bg-white px-4 py-2 font-semibold hover:bg-blush"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
