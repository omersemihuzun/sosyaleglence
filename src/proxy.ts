import { NextResponse, type NextRequest } from "next/server";
import { getTest } from "@/content/tests";
import { COMPARE_CODE } from "@/lib/compare";

const CODE = COMPARE_CODE;

/**
 * Karşılaştırma sayfası dinamik bir rota: Cache Components önceden üretilmiş kabuğu hemen
 * 200 ile gönderdiği için sayfa içindeki notFound() geç kalıyor ve "soft 404" oluşuyordu.
 * Geçersiz test ya da kod biçimini render başlamadan burada yakalayıp gerçek 404 veriyoruz.
 * (Biçimi doğru ama süresi dolmuş kodlar veritabanı gerektirir; sayfa onları kendi mesajıyla gösterir.)
 */
export function proxy(request: NextRequest) {
  const [, , slug, , code] = request.nextUrl.pathname.split("/");
  if (getTest(slug) && CODE.test(code ?? "")) return NextResponse.next();
  return NextResponse.rewrite(new URL("/_not-found", request.url), { status: 404 });
}

export const config = {
  matcher: "/testler/:slug/karsilastir/:code",
};
