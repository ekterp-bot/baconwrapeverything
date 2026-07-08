import { gearItems } from '../data/siteData'

export function GearSection() {
  return (
    <section id="gear" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
          Gear We Use
        </p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Future affiliate shelf
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {gearItems.map((item) => (
          <article key={item.href} className="rounded-lg border border-white/10 bg-stone-950 p-4">
            <div className="mb-4 grid aspect-square place-items-center rounded-md bg-[linear-gradient(145deg,#292524,#57534e,#111827)]">
              <span className="text-3xl font-black text-white/80">
                {item.name.slice(0, 2)}
              </span>
            </div>
            <h3 className="font-black text-white">{item.name}</h3>
            <a
              href={item.href}
              className="mt-4 block w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-center text-sm font-black text-stone-300 transition hover:bg-white/10 hover:text-white"
            >
              Coming Soon
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
