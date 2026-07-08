import { SocialLinkButtons } from './SocialLinkButtons'

const footerLinks = [
  { label: 'Contact/Sponsor', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-black text-white">BaconWrapEverything</p>
          <p className="text-sm text-stone-500">
            If it can be wrapped, it will be. BaconWrapEverything.com
          </p>
        </div>
        <div className="grid gap-3">
          <SocialLinkButtons compact />
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md border border-white/10 px-3 py-2 text-sm font-bold text-stone-300 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
