import { SocialLinkButtons } from '../components/SocialLinkButtons'
import { contactEmail } from '../data/siteData'

export function ContactSponsorPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
            Contact / Sponsor
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-6xl">
            Bring snacks, ideas, or a responsible adult.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-300">
            This is the home base for product testing, food challenges, gear
            sponsorships, brand collabs, and general wrap-related business.
          </p>
          <p className="mt-6 max-w-2xl rounded-lg border border-red-300/20 bg-red-950/30 p-4 text-lg font-black text-white">
            Want your product wrapped, tested, or judged? Reach out.
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-stone-950 p-5">
          <h2 className="text-2xl font-black text-white">Sponsor lanes</h2>
          <p className="mt-3 text-sm leading-6 text-stone-300">
            Real media kit and contact form are coming soon. For now, the launch
            plan is built around clean, sponsor-safe food entertainment.
          </p>
          <ul className="mt-5 grid gap-2 text-sm font-bold text-stone-200">
            <li className="rounded-md bg-white/5 px-3 py-2">Product testing</li>
            <li className="rounded-md bg-white/5 px-3 py-2">Food challenges</li>
            <li className="rounded-md bg-white/5 px-3 py-2">Gear sponsorships</li>
            <li className="rounded-md bg-white/5 px-3 py-2">Brand collabs</li>
            <li className="rounded-md bg-white/5 px-3 py-2">General contact</li>
          </ul>
          {contactEmail ? (
            <a
              href={`mailto:${contactEmail}`}
              className="mt-5 block rounded-md border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-black text-stone-200 transition hover:bg-white/10 hover:text-white"
            >
              {contactEmail}
            </a>
          ) : (
            <p className="mt-5 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-black text-stone-200">
              Contact form coming soon
            </p>
          )}
        </div>
      </section>
      <section className="border-y border-white/10 bg-red-950/20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
              Media Kit Coming Soon
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Built for clean brand collabs, not fake numbers.
            </h2>
            <p className="mt-4 text-stone-300">
              Stats will be added once the launch content has real public data.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {['Platforms', 'Audience', 'Average views', 'Best-performing videos', 'Collaboration options'].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-stone-950 p-4">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-red-300">
                  {item}
                </p>
                <p className="mt-2 text-sm text-stone-400">Coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-stone-950 p-5">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
            Follow the Chaos
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">Social links</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-300">
            Public social profiles are live. Video links get added to individual
            episodes only when the real posts are available.
          </p>
          <div className="mt-5">
            <SocialLinkButtons />
          </div>
        </div>
      </section>
    </main>
  )
}
