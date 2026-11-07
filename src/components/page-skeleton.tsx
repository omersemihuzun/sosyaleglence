/** Dinamik sayfalar yüklenirken anında görünen iskelet: gezinme hiç beklemez. */
export function PageSkeleton() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-8 sm:pt-12" aria-busy="true" aria-label="Yükleniyor">
      <div className="h-4 w-28 rounded-full bg-line" />
      <div className="mt-6 flex items-center gap-4">
        <div className="size-16 rounded-2xl bg-blush" />
        <div className="h-10 flex-1 rounded-xl bg-line" />
      </div>
      <div className="mt-8 h-64 rounded-[18px] border-2 border-line bg-white" />
    </div>
  );
}
