import { NextResponse, type NextRequest } from "next/server";
import { getTest } from "@/content/tests";
import { COMPARE_CODE } from "@/lib/compare";

/**
 * Kişiye özel dinamik rotalar (test karşılaştırma, "Beni ne kadar tanıyorsun" daveti):
 * Cache Components önceden üretilmiş kabuğu hemen 200 ile gönderdiği için sayfa içindeki notFound()
 * geç kalıyor ve "soft 404" oluşuyordu. Geçersiz slug ya da kod biçimini render başlamadan burada
 * yakalayıp gerçek 404 veriyoruz. (Biçimi doğru ama süresi dolmuş kodlar veritabanı gerektirir;
 * sayfalar onları kendi mesajıyla gösterir.)
 */
export function proxy(request: NextRequest) {
  const parts = request.nextUrl.pathname.split("/");
  const gecerli =
    parts[1] === "testler"
      ? Boolean(getTest(parts[2])) && COMPARE_CODE.test(parts[4] ?? "")
      : COMPARE_CODE.test(parts[3] ?? "") && parts.length === 4;
  if (gecerli) return NextResponse.next();
  return NextResponse.rewrite(new URL("/_not-found", request.url), { status: 404 });
}

export const config = {
  matcher: ["/testler/:slug/karsilastir/:code", "/cift-oyunlari/beni-ne-kadar-taniyorsun/:kod"],
};
