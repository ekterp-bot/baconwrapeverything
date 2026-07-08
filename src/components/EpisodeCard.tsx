import type { Episode, EpisodeStatus } from '../types/episode'
import { EpisodeVideoLinks } from './EpisodeVideoLinks'

const statusClasses: Record<EpisodeStatus, string> = {
  'Hall of Fame': 'bg-yellow-300 text-black',
  'Solid Wrap': 'bg-emerald-300 text-emerald-950',
  Disaster: 'bg-red-600 text-white',
  Pending: 'bg-stone-700 text-stone-100',
}

type EpisodeCardProps = {
  episode: Episode
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-stone-950 shadow-xl shadow-black/20">
      <div className="flex aspect-video items-center justify-center bg-[repeating-linear-gradient(135deg,#7f1d1d_0,#7f1d1d_16px,#fef3c7_16px,#fef3c7_22px,#1c1917_22px,#1c1917_42px)]">
        <span className="rounded-md bg-black/70 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
          Thumbnail Soon
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-red-300">
          {episode.number} / {episode.category}
        </p>
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-lg font-black leading-tight text-white">
            <a href={`/episodes/${episode.id}`} className="transition hover:text-red-200">
              {episode.title}
            </a>
          </h3>
          <span className={`shrink-0 rounded-md px-2 py-1 text-[11px] font-black ${statusClasses[episode.status]}`}>
            {episode.status}
          </span>
        </div>
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-stone-500">Category</dt>
            <dd className="font-bold text-stone-100">{episode.category}</dd>
          </div>
          <div>
            <dt className="text-stone-500">Bacon</dt>
            <dd className="font-bold text-stone-100">{episode.baconType}</dd>
          </div>
          <div>
            <dt className="text-stone-500">Brand</dt>
            <dd className="font-bold text-stone-100">{episode.baconBrand}</dd>
          </div>
          <div>
            <dt className="text-stone-500">Cook</dt>
            <dd className="font-bold text-stone-100">{episode.temp}</dd>
          </div>
          <div>
            <dt className="text-stone-500">Time</dt>
            <dd className="font-bold text-stone-100">{episode.cookTime}</dd>
          </div>
        </dl>
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-stone-300">
          {episode.verdict}
        </p>
        <div className="mt-auto pt-4">
          <p className="rounded-md bg-white/5 px-3 py-2 text-sm font-black text-red-100">
            Verdict: {episode.rating === null ? 'Pending taste test' : `${episode.rating.toFixed(1)} / 10`}
          </p>
          <div className="mt-3">
            <EpisodeVideoLinks links={episode.videoLinks} compact />
          </div>
          <a
            href={`/episodes/${episode.id}`}
            className="mt-3 block rounded-md border border-white/15 bg-white/5 px-3 py-2 text-center text-sm font-black text-stone-200 transition hover:bg-white/10 hover:text-white"
          >
            View Details
          </a>
        </div>
      </div>
    </article>
  )
}
