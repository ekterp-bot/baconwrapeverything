import type { EpisodeVideoLinks as EpisodeVideoLinksType, VideoPlatform } from '../types/episode'

const platformLabels: Record<VideoPlatform, string> = {
  tiktok: 'Watch on TikTok',
  instagram: 'Watch on Instagram',
  youtube: 'Watch on YouTube',
}

const platformOrder: VideoPlatform[] = ['tiktok', 'instagram', 'youtube']

type EpisodeVideoLinksProps = {
  links: EpisodeVideoLinksType
  compact?: boolean
}

export function EpisodeVideoLinks({ links, compact = false }: EpisodeVideoLinksProps) {
  const availableLinks = platformOrder
    .map((platform) => ({ platform, href: links[platform] }))
    .filter((link): link is { platform: VideoPlatform; href: string } => Boolean(link.href))

  if (availableLinks.length === 0) {
    return (
      <p className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-black text-stone-300">
        Video coming soon
      </p>
    )
  }

  return (
    <div className="flex flex-wrap gap-2">
      {availableLinks.map(({ platform, href }) => (
        <a
          key={platform}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={platformLabels[platform]}
          className={`rounded-md bg-red-600 text-center font-black text-white transition hover:bg-red-500 ${
            compact ? 'px-3 py-2 text-xs' : 'px-4 py-2.5 text-sm'
          }`}
        >
          {platformLabels[platform]}
        </a>
      ))}
    </div>
  )
}
