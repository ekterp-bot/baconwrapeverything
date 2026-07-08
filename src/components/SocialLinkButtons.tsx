import { socialLinks } from '../data/siteData'

type SocialLinkButtonsProps = {
  compact?: boolean
}

export function SocialLinkButtons({ compact = false }: SocialLinkButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {socialLinks.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          className={`inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 font-black text-stone-100 transition hover:bg-white/10 hover:text-white ${
            compact ? 'px-3 py-2 text-xs' : 'px-4 py-2.5 text-sm'
          }`}
        >
          <span className="grid h-6 w-6 place-items-center rounded bg-red-600 text-[10px] text-white">
            {social.icon}
          </span>
          {compact ? social.name : social.cta}
        </a>
      ))}
    </div>
  )
}
