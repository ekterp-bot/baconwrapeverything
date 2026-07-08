import { GearSection } from '../components/GearSection'

export function GearPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
          Gear
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-6xl">
          The tools behind the questionable decisions.
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-300">
          Affiliate links are coming later. For launch, this is a sponsor-safe
          placeholder for the actual setup.
        </p>
      </section>
      <GearSection />
    </main>
  )
}
