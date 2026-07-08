import { ComingSoonPage } from './components/ComingSoonPage'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { episodes } from './data/episodes'
import { BaconIndexPage } from './pages/BaconIndexPage'
import { ContactSponsorPage } from './pages/ContactSponsorPage'
import { EpisodeDetailPage } from './pages/EpisodeDetailPage'
import { EpisodesPage } from './pages/EpisodesPage'
import { GearPage } from './pages/GearPage'
import { HomePage } from './pages/HomePage'
import { SuggestPage } from './pages/SuggestPage'

const comingSoonPages: Record<string, string> = {
  '/instagram': 'Instagram',
  '/tiktok': 'TikTok',
  '/youtube': 'YouTube',
  '/gear/air-fryer': 'Air Fryer',
  '/gear/prep-board': 'Prep Board',
  '/gear/gloves': 'Gloves',
  '/gear/thermometer': 'Thermometer',
  '/gear/lighting': 'Lighting',
}

const routeAliases: Record<string, string> = {
  '/suggest-a-wrap': '/suggest',
  '/creations': '/bacon-index',
  '/socials': '/contact',
  '/contact-sponsor': '/contact',
}

function App() {
  const pathname = routeAliases[window.location.pathname] ?? window.location.pathname
  const page = getPage(pathname)

  return (
    <div className="min-h-screen overflow-hidden text-stone-100">
      <Header />
      {page}
      <Footer />
    </div>
  )
}

function getPage(pathname: string) {
  if (pathname === '/') return <HomePage />
  if (pathname === '/episodes') return <EpisodesPage />
  if (pathname === '/suggest') return <SuggestPage />
  if (pathname === '/bacon-index') return <BaconIndexPage />
  if (pathname === '/gear') return <GearPage />
  if (pathname === '/contact') return <ContactSponsorPage />

  const episodeMatch = pathname.match(/^\/episodes\/([^/]+)$/)
  if (episodeMatch) {
    const episode = episodes.find((candidate) => candidate.id === episodeMatch[1])

    if (episode) return <EpisodeDetailPage episode={episode} />

    return <ComingSoonPage title="Episode Not Found" />
  }

  const comingSoonTitle = comingSoonPages[pathname] ?? getFallbackPageTitle(pathname)

  return <ComingSoonPage title={comingSoonTitle ?? 'Coming Soon'} />
}

function getFallbackPageTitle(pathname: string) {
  return pathname
    .split('/')
    .filter(Boolean)
    .at(-1)
    ?.split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default App
