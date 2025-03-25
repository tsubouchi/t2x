export const validServices = [
  'slides',
  'docs',
  'sheets',
  'sql',
  'codes',
  'images',
  'videos',
  'research'
] as const

export type ServiceType = typeof validServices[number]

export const serviceNames = {
  slides: 'TTSLIDES',
  docs: 'TTDOCS',
  sheets: 'TTSHEETS',
  sql: 'TTSQL',
  codes: 'TTCODES',
  images: 'TTIMAGES',
  videos: 'TTVIDEOS',
  research: 'TTRESEARCH'
} as const 