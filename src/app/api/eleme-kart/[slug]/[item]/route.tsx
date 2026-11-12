import { ImageResponse } from "next/og";
import { getBracket } from "@/content/brackets";
import { loadOgFonts } from "@/lib/og/og";
import { BracketStoryCard, loadItemPhoto } from "@/lib/og/og-bracket";
import { guardRender } from "../../../_lib/guard";

/** Eleme oyunu story kartı (1080×1920). ?f=finalist-id ile finaldeki rakibi de yazar. */
export async function GET(request: Request, ctx: RouteContext<"/api/eleme-kart/[slug]/[item]">) {
  const tooLong = await guardRender(request);
  if (tooLong) return tooLong;
  const { slug, item } = await ctx.params;
  const bracket = getBracket(slug);
  const champion = bracket?.items.find((i) => i.id === item);
  if (!bracket || !champion) return new Response("Bulunamadı", { status: 404 });

  const f = new URL(request.url).searchParams.get("f");
  const finalist = bracket.items.find((i) => i.id === f && i.id !== champion.id);

  return new ImageResponse(
    <BracketStoryCard
      bracket={bracket}
      champion={champion}
      finalist={finalist}
      host="sosyaleglence.com"
      photo={await loadItemPhoto(champion, { width: 820, height: 560 })}
    />,
    {
      width: 1080,
      height: 1920,
      fonts: await loadOgFonts(),
      headers: { "Cache-Control": "public, max-age=86400, s-maxage=31536000, immutable" },
    },
  );
}
