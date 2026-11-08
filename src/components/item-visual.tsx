import Image from "next/image";
import type { Bracket, BracketItem } from "@/lib/bracket-types";

/**
 * Bir oyunun fotoğraflı düzende gösterilip gösterilmeyeceği. Karışık (yarı fotoğraf yarı emoji)
 * bir görünüm olmasın diye seçeneklerin en az 12'sinin fotoğrafı olmalı.
 */
export function hasPhotos(bracket: Bracket): boolean {
  return bracket.items.filter((i) => i.image).length >= Math.min(12, bracket.items.length);
}

/** Seçeneğin görseli: fotoğraf varsa fotoğraf, yoksa emoji. Ad zaten yazılı olduğundan alt metin boş. */
export function ItemVisual({
  item,
  className = "",
  small = false,
  priority = false,
}: {
  item: BracketItem;
  className?: string;
  small?: boolean;
  priority?: boolean;
}) {
  if (item.image) {
    return (
      <span className={`relative block overflow-hidden bg-blush ${className}`}>
        <Image
          src={item.image.src}
          alt=""
          width={800}
          height={600}
          // Dosyalar zaten 800x600 WebP olarak hazırlanmış; ayrıca optimize etmeye gerek yok
          unoptimized
          priority={priority}
          className="size-full object-cover"
        />
      </span>
    );
  }
  return (
    <span aria-hidden className={`grid place-items-center bg-paper ${small ? "text-2xl" : "text-6xl"} ${className}`}>
      {item.emoji}
    </span>
  );
}
