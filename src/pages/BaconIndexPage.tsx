import { BaconIndex } from '../components/BaconIndex'
import { episodes } from '../data/episodes'

export function BaconIndexPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
          Bacon Index
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-6xl">
          The searchable wrap ledger.
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-300">
          Every result, rating, cook time, and lesson learned. Local data for now,
          database-ready later.
        </p>
      </section>
      <BaconIndex episodes={episodes} />
    </main>
  )
}
