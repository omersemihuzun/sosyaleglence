export const site = {
  name: "Sosyal Eğlence",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sosyaleglence.com",
  description:
    "İlişki ve kişilik testleri, sevdiklerine göre hediye önerileri. Kendini tanı, sonucunu paylaş, doğru hediyeyi bul.",
  email: "info@sosyaleglence.com",
};

/**
 * Sosyal medya hesapları. Adresi boş bırakılan hesap sitede gösterilmez.
 * Hesaplar açıldığında buraya tam profil adresini yaz.
 */
const socialAccounts: Record<string, string> = {
  Instagram: "",
  TikTok: "",
  X: "",
  Facebook: "",
};

export const socialLinks = Object.entries(socialAccounts)
  .filter(([, href]) => href)
  .map(([name, href]) => ({ name, href }));

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}
