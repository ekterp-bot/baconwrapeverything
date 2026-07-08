import { BaconIndex } from '../components/BaconIndex'
import { EpisodeCard } from '../components/EpisodeCard'
import { GearSection } from '../components/GearSection'
import { Hero } from '../components/Hero'
import { Leaderboard } from '../components/Leaderboard'
import { SocialsSection } from '../components/SocialsSection'
import { episodes } from '../data/episodes'
import { viewerSuggestions } from '../data/siteData'

export function HomePage() {
  const latestEpisodes = episodes.slice(0, 4)

  return (
    <>
      <Hero />

      <section id="episodes" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
              Latest Episodes
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Fresh from the air fryer
            </h2>
          </div>
          <a
            href="/episodes"
            className="rounded-md border border-white/15 px-4 py-2 text-sm font-black text-stone-200 transition hover:bg-white/10 hover:text-white"
          >
            Watch all episodes
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {latestEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-red-950/30">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-red-200">
              Viewer Lab
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Got a wrap idea that should probably be supervised?
            </h2>
            <p className="mt-3 max-w-3xl text-stone-300">
              Send the next contender. If it has a shape and questionable confidence,
              it belongs in the queue.
            </p>
          </div>
          <a
            href="/suggest-a-wrap"
            className="rounded-md bg-red-600 px-6 py-3.5 text-center text-base font-black uppercase tracking-wide text-white transition hover:bg-red-500"
          >
            Suggest the Next Wrap
          </a>
        </div>
      </section>

      <BaconIndex episodes={episodes.slice(0, 4)} />
      <ViewerSuggestionsPreview />
      <Leaderboard episodes={episodes} />
      <GearSection />
      <SocialsSection />
      <WaitlistTeaser />
    </>
  )
}

function ViewerSuggestionsPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
          Top Viewer Suggestions
        </p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
          The internet is preheating
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {viewerSuggestions.map((suggestion) => (
          <article key={suggestion.item} className="rounded-lg border border-white/10 bg-stone-950 p-4">
            <p className="text-3xl font-black text-white">{suggestion.votes}</p>
            <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-red-300">
              viewer votes
            </p>
            <h3 className="mt-4 text-xl font-black leading-tight text-white">
              {suggestion.item}
            </h3>
            <p className="mt-3 rounded-md bg-white/5 px-3 py-2 text-sm font-bold text-stone-300">
              {suggestion.status}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function WaitlistTeaser() {
  return (
    <section className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
            Seasoning Waitlist
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Email drops, recipe notes, and questionable decisions soon.
          </h2>
        </div>
        <div className="rounded-lg border border-white/10 bg-stone-950 p-4">
          <p className="text-sm leading-6 text-stone-300">
            Email collection is not wired yet. This is the future home for drops,
            voting reminders, and sponsor-friendly chaos.
          </p>
          <button
            type="button"
            className="mt-4 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm font-black text-stone-300"
          >
            Coming Soon
          </button>
        </div>
      </div>
    </section>
  )
}
