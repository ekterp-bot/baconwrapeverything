import type { Episode } from '../types/episode'

type LeaderboardProps = {
  episodes: Episode[]
}

export function Leaderboard({ episodes }: LeaderboardProps) {
  const ratedEpisodes = episodes.filter((episode) => episode.rating !== null)
  const topRated = [...ratedEpisodes].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)).slice(0, 3)
  const worstRated = [...ratedEpisodes].sort((a, b) => (a.rating ?? 0) - (b.rating ?? 0)).slice(0, 3)

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
          Leaderboard
        </p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
          The glory and the damage
        </h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Board title="Top Rated Wraps" episodes={topRated} tone="best" />
        <Board title="Worst Rated Wraps" episodes={worstRated} tone="worst" />
      </div>
    </section>
  )
}

function Board({
  title,
  episodes,
  tone,
}: {
  title: string
  episodes: Episode[]
  tone: 'best' | 'worst'
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-stone-950 p-4">
      <h3 className="text-xl font-black text-white">{title}</h3>
      <ol className="mt-4 grid gap-3">
        {episodes.map((episode, index) => (
          <li key={episode.id} className="flex items-center justify-between gap-3 rounded-md bg-white/5 p-3">
            <div className="flex min-w-0 items-center gap-3">
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-md text-sm font-black ${
                  tone === 'best' ? 'bg-yellow-300 text-black' : 'bg-red-600 text-white'
                }`}
              >
                {index + 1}
              </span>
              <span className="truncate font-bold text-stone-100">{episode.item}</span>
            </div>
            <span className="shrink-0 font-black text-white">{episode.rating?.toFixed(1)}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
