import { socialLinks } from '../data/siteData'

type SocialsSectionProps = {
  standalone?: boolean
}

export function SocialsSection({ standalone = false }: SocialsSectionProps) {
  return (
    <section id="socials" className="border-t border-white/10 bg-red-950/20">
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${standalone ? 'py-20' : 'py-12'}`}>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
              Socials
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Follow the wrap trail
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-stone-300">
            Links are parked here for now. Drop in the real accounts when the pages
            are ready.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {socialLinks.map((social) => (
            <article
              key={social.href}
              className="rounded-lg border border-white/10 bg-stone-950 p-4 shadow-xl shadow-black/20"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-md bg-red-600 text-xl font-black text-white">
                {social.name.slice(0, 2)}
              </div>
              <h3 className="text-xl font-black text-white">{social.name}</h3>
              <p className="mt-1 text-sm font-bold text-red-200">{social.handle}</p>
              <p className="mt-3 min-h-12 text-sm leading-6 text-stone-300">
                {social.note}
              </p>
              <a
                href={social.href}
                className="mt-5 block rounded-md border border-white/15 bg-white/5 px-3 py-2 text-center text-sm font-black text-stone-200 transition hover:bg-white/10 hover:text-white"
              >
                {social.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
