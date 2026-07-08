const navItems = [
  { label: 'Episodes', href: '/episodes' },
  { label: 'Suggest', href: '/suggest' },
  { label: 'Bacon Index', href: '/bacon-index' },
  { label: 'Gear', href: '/gear' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/bacon-mobius-logo.svg"
            alt=""
            className="h-10 w-10 shrink-0 rounded-md bg-red-700/20 p-1"
          />
          <span className="truncate text-base font-black tracking-tight text-white sm:text-lg">
            BaconWrapEverything
          </span>
        </a>
        <div className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-bold text-stone-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-3 sm:hidden">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-stone-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  )
}
