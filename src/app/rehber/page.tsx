import type { Metadata } from "next";
import { ArticleCard } from "@/components/articles/article-card";
import { articles } from "@/content/articles";
import { breadcrumbJsonLd, toJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "İlişki ve Kişilik Rehberleri",
  description:
    "Bağlanma stilleri, kıskançlık, red flag'ler, sevgi dilleri, situationship ve daha fazlası. Testlerin arkasındaki kavramları sade bir dille anlatan rehberler.",
  alternates: { canonical: "/rehber" },
};

const TILTS = [-0.8, 0.6, -0.4, 0.9, -0.6, 0.5, -0.9, 0.4];

export default function ArticlesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbJsonLd([{ name: "Rehberler", path: "/rehber" }])) }}
      />
      <h1 className="max-w-2xl font-display text-5xl leading-[1] font-extrabold tracking-tight sm:text-6xl">
        Testlerin arkasındaki hikâye.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-plum-soft">
        Bağlanma stilinden kıskançlığa, sevgi dillerinden toksik arkadaşlığa. Testlerde ölçtüğümüz kavramları sade bir
        dille anlatan rehberler.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a, i) => (
          <ArticleCard key={a.slug} article={a} tilt={TILTS[i % TILTS.length]} />
        ))}
      </div>
      <p className="mt-12 max-w-prose text-sm text-plum-soft">
        Bu içerikler bilgilendirme amaçlıdır, uzman görüşü yerine geçmez.
      </p>
    </section>
  );
}
