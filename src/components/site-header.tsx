import Link from "next/link";

const nav = [
  { href: "/testler", label: "Testler" },
  { href: "/eleme", label: "Eleme" },
  { href: "/hediye", label: "Hediye" },
];

export function SiteHeader() {
  return (
    <header className="border-b-2 border-plum bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span
            aria-hidden
            className="grid size-9 -rotate-6 place-items-center rounded-xl border-2 border-plum bg-cherry text-lg shadow-[2px_3px_0_0_var(--color-plum)] transition-transform group-hover:rotate-3"
          >
            🧠
          </span>
          {/* Dar ekranda yazı görsel olarak gizlenir ama linkin erişilebilir adı olarak kalır */}
          <span className="sr-only font-display text-lg leading-none font-extrabold tracking-tight min-[380px]:not-sr-only sm:text-xl">
            sosyal<span className="text-cherry">eğlence</span>
          </span>
        </Link>
        <nav aria-label="Ana menü">
          <ul className="flex items-center sm:gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-2 py-2 font-display text-[15px] font-semibold hover:bg-blush sm:px-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
