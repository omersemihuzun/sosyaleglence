/**
 * Eleme oyunu fotoğraflarının atıf kayıtları (scripts/gorsel-sec.mjs üretir, elle düzenleme).
 * Anahtar: oyun slug, değer: seçenek id -> görsel bilgisi.
 */
import type { BracketImage } from "@/lib/bracket-types";
import balayiRotaniSec from "./balayi-rotani-sec.json";
import enAffedilmezRedFlag from "./en-affedilmez-red-flag.json";
import enGuzelIstanbulSemti from "./en-guzel-istanbul-semti.json";
import enIyiKahvaltilik from "./en-iyi-kahvaltilik.json";
import enSevdiginMevsimlikAn from "./en-sevdigin-mevsimlik-an.json";
import gelecektekiEviniSec from "./gelecekteki-evini-sec.json";
import hangiSuperGuc from "./hangi-super-guc.json";
import hayalindekiDugun from "./hayalindeki-dugun.json";
import hayalindekiEvcilHayvan from "./hayalindeki-evcil-hayvan.json";
import hayalindekiIlkBulusma from "./hayalindeki-ilk-bulusma.json";
import hayalindekiKafe from "./hayalindeki-kafe.json";
import hayalindekiTatilGunu from "./hayalindeki-tatil-gunu.json";
import kariyerRuyan from "./kariyer-ruyan.json";
import partnerdeEnCekiciOzellik from "./partnerde-en-cekici-ozellik.json";
import sevgilidenGelecekEnGuzelMesaj from "./sevgiliden-gelecek-en-guzel-mesaj.json";
import sevgilinleGidilecekKonser from "./sevgilinle-gidilecek-konser.json";
import sevgilinleYapilacakEnGuzelSey from "./sevgilinle-yapilacak-en-guzel-sey.json";
import turkMutfagininSampiyonu from "./turk-mutfaginin-sampiyonu.json";
import turkTatlilarininSampiyonu from "./turk-tatlilarinin-sampiyonu.json";
import turkiyeninEnGuzelTatilYeri from "./turkiyenin-en-guzel-tatil-yeri.json";

export const bracketImages: Record<string, Record<string, BracketImage>> = {
  "balayi-rotani-sec": balayiRotaniSec,
  "en-affedilmez-red-flag": enAffedilmezRedFlag,
  "en-guzel-istanbul-semti": enGuzelIstanbulSemti,
  "en-iyi-kahvaltilik": enIyiKahvaltilik,
  "en-sevdigin-mevsimlik-an": enSevdiginMevsimlikAn,
  "gelecekteki-evini-sec": gelecektekiEviniSec,
  "hangi-super-guc": hangiSuperGuc,
  "hayalindeki-dugun": hayalindekiDugun,
  "hayalindeki-evcil-hayvan": hayalindekiEvcilHayvan,
  "hayalindeki-ilk-bulusma": hayalindekiIlkBulusma,
  "hayalindeki-kafe": hayalindekiKafe,
  "hayalindeki-tatil-gunu": hayalindekiTatilGunu,
  "kariyer-ruyan": kariyerRuyan,
  "partnerde-en-cekici-ozellik": partnerdeEnCekiciOzellik,
  "sevgiliden-gelecek-en-guzel-mesaj": sevgilidenGelecekEnGuzelMesaj,
  "sevgilinle-gidilecek-konser": sevgilinleGidilecekKonser,
  "sevgilinle-yapilacak-en-guzel-sey": sevgilinleYapilacakEnGuzelSey,
  "turk-mutfaginin-sampiyonu": turkMutfagininSampiyonu,
  "turk-tatlilarinin-sampiyonu": turkTatlilarininSampiyonu,
  "turkiyenin-en-guzel-tatil-yeri": turkiyeninEnGuzelTatilYeri,
};
