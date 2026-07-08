import { useMemo, useState } from 'react'
import type { Episode } from '../types/episode'

type BaconIndexProps = {
  episodes: Episode[]
}

export function BaconIndex({ episodes }: BaconIndexProps) {
  const [query, setQuery] = useState('')

  const filteredEpisodes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) return episodes

    return episodes.filter((episode) =>
      episode.item.toLowerCase().includes(normalizedQuery),
    )
  }, [episodes, query])

  return (
    <section id="bacon-index" className="border-y border-white/10 bg-stone-950/70">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
              The Bacon Index
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Searchable wrap database
            </h2>
          </div>
          <label className="grid gap-2 text-sm font-bold text-stone-200 lg:w-80">
            Search by item
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="rounded-md border border-white/10 bg-black px-3 py-3 text-white outline-none transition placeholder:text-stone-600 focus:border-red-300"
              placeholder="Chicken Bake"
            />
          </label>
        </div>

        <div className="overflow-x-auto rounded-lg border border-white/10">
          <table className="min-w-[760px] w-full border-collapse bg-black/50 text-left text-sm">
            <thead className="bg-white/10 text-xs uppercase tracking-[0.16em] text-stone-300">
              <tr>
                <th className="px-4 py-3">Item</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Bacon</th>
                <th className="px-4 py-3">Temp</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Rating</th>
                <th className="px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {filteredEpisodes.map((episode) => (
                <tr key={episode.id} className="border-t border-white/10">
                  <td className="px-4 py-4 font-black text-white">
                    <a href={`/episodes/${episode.id}`} className="transition hover:text-red-200">
                      {episode.item}
                    </a>
                  </td>
                  <td className="px-4 py-4 text-stone-300">{episode.category}</td>
                  <td className="px-4 py-4 text-stone-300">
                    {episode.baconType} / {episode.baconBrand}
                  </td>
                  <td className="px-4 py-4 text-stone-300">{episode.temp}</td>
                  <td className="px-4 py-4 text-stone-300">{episode.cookTime}</td>
                  <td className="px-4 py-4 font-black text-white">
                    {episode.rating === null ? 'Pending' : episode.rating.toFixed(1)}
                  </td>
                  <td className="px-4 py-4 text-stone-300">{episode.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
