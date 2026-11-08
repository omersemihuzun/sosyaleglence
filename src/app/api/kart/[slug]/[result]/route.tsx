import { ImageResponse } from "next/og";
import { getTest } from "@/content/tests";
import { decodeScores, headlineScore } from "@/lib/scoring";
import { loadOgFonts, StoryCard } from "@/lib/og";
import { guardRender } from "../../../_lib/guard";

/** Story boyutunda (1080×1920) paylaşım kartı. ?s=64-20-80-33 ile kişisel skorları da çizer. */
export async function GET(request: Request, ctx: RouteContext<"/api/kart/[slug]/[result]">) {
  const tooLong = await guardRender(request);
  if (tooLong) return tooLong;
  const { slug, result: resultId } = await ctx.params;
  const test = getTest(slug);
  const result = test?.results.find((r) => r.id === resultId);
  if (!test || !result) return new Response("Bulunamadı", { status: 404 });

  const url = new URL(request.url);
  const scores = decodeScores(test, url.searchParams.get("s"));
  const headline = scores ? headlineScore(test, scores) : null;

  return new ImageResponse(
    <StoryCard test={test} result={result} scores={scores} headline={headline} host="sosyaleglence.com" />,
    {
      width: 1080,
      height: 1920,
      fonts: await loadOgFonts(),
      headers: { "Cache-Control": "public, max-age=86400, s-maxage=31536000, immutable" },
    },
  );
}
