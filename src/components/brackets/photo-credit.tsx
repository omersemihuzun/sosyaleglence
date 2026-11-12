import type { BracketImage } from "@/lib/bracket-types";

/** CC lisanslarının istediği atıf: eser, yapan, kaynak ve lisans bağlantısı. */
export function PhotoCredit({ image, className = "" }: { image: BracketImage; className?: string }) {
  return (
    <p className={`mt-3 text-xs leading-snug text-plum-soft ${className}`}>
      Fotoğraf:{" "}
      <a href={image.sourceUrl} target="_blank" rel="noopener nofollow" className="underline">
        {image.title || "kaynak"}
      </a>
      , {image.creator}
      {image.licenseUrl ? (
        <>
          {" "}
          (
          <a href={image.licenseUrl} target="_blank" rel="noopener nofollow license" className="underline">
            {image.license}
          </a>
          )
        </>
      ) : (
        <> ({image.license})</>
      )}
      , {image.source}. Kırpılıp yeniden boyutlandırıldı.
    </p>
  );
}
