"use client";

import dynamic from "next/dynamic";

/**
 * Çift oyunları rastgele sıra/deste ile başlar; sunucu ve tarayıcı çıktısı uyuşmasın diye sadece tarayıcıda çizilir.
 * Sayfa başlığı, açıklama ve SSS sunucuda üretildiği için arama motorları içeriği yine görür.
 */
const yukleniyor = () => <div className="sticker h-80 bg-white" aria-busy="true" />;

export const SohbetDestesiIstemci = dynamic(() => import("./sohbet-destesi").then((m) => m.SohbetDestesi), {
  ssr: false,
  loading: yukleniyor,
});
export const DogrulukCesaretIstemci = dynamic(() => import("./dogruluk-cesaret").then((m) => m.DogrulukCesaret), {
  ssr: false,
  loading: yukleniyor,
});
export const HangimizIstemci = dynamic(() => import("./hangimiz").then((m) => m.Hangimiz), {
  ssr: false,
  loading: yukleniyor,
});
export const RandevuCarkiIstemci = dynamic(() => import("./randevu-carki").then((m) => m.RandevuCarki), {
  ssr: false,
  loading: yukleniyor,
});
export const TaniyorKurIstemci = dynamic(() => import("./taniyor").then((m) => m.TaniyorKur), {
  ssr: false,
  loading: yukleniyor,
});
export const TaniyorTahminIstemci = dynamic(() => import("./taniyor").then((m) => m.TaniyorTahmin), {
  ssr: false,
  loading: yukleniyor,
});
