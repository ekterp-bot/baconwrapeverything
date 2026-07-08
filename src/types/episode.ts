export type EpisodeStatus = 'Hall of Fame' | 'Solid Wrap' | 'Disaster' | 'Pending'
export type WrapAgain = 'Absolutely' | 'Maybe' | 'Nope' | 'TBD'

export type Episode = {
  id: string
  number: string
  title: string
  item: string
  category: string
  baconType: string
  baconBrand: string
  cookMethod: string
  temp: string
  cookTime: string
  rating: number | null
  status: EpisodeStatus
  messLevel: number | null
  wrapAgain: WrapAgain
  notes: string
  verdict: string
  videoUrl: string
  thumbnailUrl: string
}
