import { describe, expect, it } from "vitest";
import { MAX_QUERY_LENGTH, rejectLongQuery } from "./guard";

describe("rejectLongQuery", () => {
  it("normal sorguya izin verir", () => {
    expect(rejectLongQuery(new Request("https://x.test/api/kart/a/b?s=10-20-30-40"))).toBeNull();
    expect(rejectLongQuery(new Request("https://x.test/api/kart/a/b"))).toBeNull();
  });

  it("çok uzun sorguyu 414 ile reddeder", () => {
    const res = rejectLongQuery(new Request(`https://x.test/api/kart/a/b?s=${"9".repeat(MAX_QUERY_LENGTH)}`));
    expect(res?.status).toBe(414);
  });
});
