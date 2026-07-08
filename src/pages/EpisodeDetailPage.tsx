import { EpisodeCard } from '../components/EpisodeCard'
import { EpisodeVideoLinks } from '../components/EpisodeVideoLinks'
import { episodes } from '../data/episodes'
import type { Episode } from '../types/episode'

type EpisodeDetailPageProps = {
  episode: Episode
}

export function EpisodeDetailPage({ episode }: EpisodeDetailPageProps) {
  const relatedEpisodes = episodes
    .filter((candidate) => candidate.id !== episode.id)
    .slice(0, 3)

  return (
    <main>
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
              {episode.number}
            </p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-6xl">
              {episode.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-300">
              {episode.verdict}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-md bg-yellow-300 px-3 py-1 text-sm font-black text-black">
                {episode.rating === null ? 'Rating Pending' : `${episode.rating.toFixed(1)} / 10`}
              </span>
              <span className="rounded-md bg-white/10 px-3 py-1 text-sm font-black text-white">
                {episode.status}
              </span>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-stone-950 p-4">
            <div className="grid aspect-video place-items-center rounded-md bg-[repeating-linear-gradient(135deg,#7f1d1d_0,#7f1d1d_16px,#fef3c7_16px,#fef3c7_22px,#1c1917_22px,#1c1917_42px)]">
              <span className="rounded-md bg-black/70 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                {Object.keys(episode.videoLinks).length > 0 ? 'Public Watch Link Ready' : 'Video Embed Coming Soon'}
              </span>
            </div>
            <div className="mt-4">
              <EpisodeVideoLinks links={episode.videoLinks} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <InfoCard label="Food" value={episode.item} />
        <InfoCard label="Category" value={episode.category} />
        <InfoCard label="Bacon" value={`${episode.baconType} / ${episode.baconBrand}`} />
        <InfoCard label="Cook" value={`${episode.cookMethod} / ${episode.temp} / ${episode.cookTime}`} />
        <InfoCard label="Mess Level" value={episode.messLevel === null ? 'Pending' : `${episode.messLevel} / 10`} />
        <InfoCard label="Wrap Again?" value={episode.wrapAgain} />
      </section>

      <section className="border-y border-white/10 bg-red-950/30">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-200">
              Next Experiment
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              Think you can top this?
            </h2>
          </div>
          <a
            href="/suggest"
            className="rounded-md bg-red-600 px-6 py-3.5 text-center text-base font-black uppercase tracking-wide text-white transition hover:bg-red-500"
          >
            Suggest the Next Wrap
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white">Related episodes</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {relatedEpisodes.map((related) => (
            <EpisodeCard key={related.id} episode={related} />
          ))}
        </div>
      </section>
    </main>
  )
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-stone-950 p-4">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-red-300">
        {label}
      </p>
      <p className="mt-2 text-xl font-black text-white">{value}</p>
    </div>
  )
}
