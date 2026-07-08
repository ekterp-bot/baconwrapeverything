import { EpisodeCard } from '../components/EpisodeCard'
import { episodes } from '../data/episodes'

export function EpisodesPage() {
  return (
    <main>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
            Episodes
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-6xl">
            Every wrap on record
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-300">
            The official watch list: experiments, disasters, Hall of Fame moments,
            and pending ideas waiting for the air fryer.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {episodes.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {episodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

function EmptyState() {
  return (
    <div className="rounded-lg border border-white/10 bg-stone-950 p-8 text-center">
      <h2 className="text-2xl font-black text-white">No episodes yet.</h2>
      <p className="mt-2 text-stone-300">
        The air fryer is quiet. Suspiciously quiet.
      </p>
    </div>
  )
}
