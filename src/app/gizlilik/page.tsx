import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik ve Kişisel Veriler",
  description:
    "Sosyal Eğlence hangi verileri topluyor, neden ve ne kadar süre saklıyor? Anonim istatistikler, karşılaştırma bağlantıları ve analitik hakkında bilgi.",
  alternates: { canonical: "/gizlilik" },
};

const UPDATED = "8 Kasım 2026";

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 pt-10 sm:pt-14">
      <h1 className="font-display text-5xl leading-[1] font-extrabold tracking-tight">Gizlilik</h1>
      <p className="mt-3 text-sm text-plum-soft">Son güncelleme: {UPDATED}</p>

      <div className="mt-8 space-y-8 text-[17px] leading-[1.7]">
        <section>
          <h2 className="font-display text-2xl font-bold">Kısaca</h2>
          <p className="mt-2">
            Üyelik yok, e-posta ya da telefon istemiyoruz, reklam çerezi kullanmıyoruz. Test ve oyun cevapların
            tarayıcında hesaplanır. Bizim tarafımızda kimliğinle eşleşmeyen, anonim sayaçlar tutulur.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Hangi verileri işliyoruz?</h2>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <strong>Anonim sonuç sayaçları:</strong> Bir testi bitirdiğinde hangi sonucun çıktığı, bir turnuvada hangi
              seçeneğin hangisini yendiği ve &quot;Bunu mu O mu?&quot; oyları birer sayaç olarak artırılır. Testleri
              geliştirmek için ayrıca her sorudaki şıkların kaç kez seçildiği, testi kaç kişinin başlatıp bitirdiği,
              yarıda bırakılan soru ve ortalama çözüm süresi toplam sayaç olarak tutulur. Cevapların tek tek, kişiye
              bağlı olarak saklanmaz. Amaç &quot;Bu sonucu alanların %20&apos;si&quot; gibi istatistikleri göstermek ve
              soruları iyileştirmektir.
            </li>
            <li>
              <strong>Karşılaştırma bağlantıları:</strong> &quot;Karşılaştır&quot; özelliğini kullanırsan test skorların ve
              isteğe bağlı olarak yazdığın isim (en fazla 24 karakter) bir bağlantı koduyla birlikte saklanır. Bu kayıt
              30 gün sonra otomatik olarak silinir. Gerçek adını yazmak zorunda değilsin.
            </li>
            <li>
              <strong>Kötüye kullanım önleme:</strong> Sayaçların şişirilmesini önlemek için IP adresin, kısa süreli
              (dakikalık) istek sınırlama amacıyla işlenir ve kalıcı olarak saklanmaz.
            </li>
            <li>
              <strong>Ziyaret istatistikleri:</strong> Vercel Web Analytics ile sayfa görüntüleme sayıları ve
              Speed Insights ile sayfa hızı ölçülür. Bu araçlar çerez kullanmaz ve seni siteler arasında takip etmez.
            </li>
            <li>
              <strong>Tarayıcında tutulanlar:</strong> Son sonucun ve bir sonucu kısa süre içinde tekrar saymamak için
              bir işaret, yalnızca kendi tarayıcının yerel depolamasında (localStorage) durur. Tarayıcı verilerini
              silerek bunları kaldırabilirsin.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Veriler nerede tutuluyor?</h2>
          <p className="mt-2">
            Site Vercel altyapısında barındırılır, sayaçlar ve karşılaştırma kayıtları Upstash veritabanında tutulur.
            Bu hizmet sağlayıcıların sunucuları yurt dışında olabilir.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Mağaza bağlantıları</h2>
          <p className="mt-2">
            Hediye sayfalarındaki Trendyol, Hepsiburada ve Amazon bağlantılarına tıkladığında o sitelere geçersin. Oradaki
            veri işleme o sitelerin kendi gizlilik politikalarına tabidir. Bu bağlantılardan yapılan alışverişlerden
            komisyon alabiliriz.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">Hakların ve iletişim</h2>
          <p className="mt-2">
            6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki hakların (bilgi alma, silme, düzeltme vb.) için
            bize <a className="font-semibold text-cherry underline" href={`mailto:${site.email}`}>{site.email}</a> adresinden
            ulaşabilirsin. Bir karşılaştırma bağlantısının erkenden silinmesini istersen bağlantıyı e-postana eklemen
            yeterli.
          </p>
        </section>

        <p>
          <Link href="/" className="font-display font-bold text-cherry hover:underline">
            Ana sayfaya dön
          </Link>
        </p>
      </div>
    </article>
  );
}
