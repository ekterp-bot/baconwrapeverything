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
          <a
            href="mailto:hello@baconwrapeverything.com"
            className="mt-5 block rounded-md border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-black text-stone-200 transition hover:bg-white/10 hover:text-white"
          >
            hello@baconwrapeverything.com
          </a>
        </div>
      </section>
    </main>
  )
}
