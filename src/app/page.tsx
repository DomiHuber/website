import type { Metadata } from 'next'
import Home from '@/pages/Home'

export const metadata: Metadata = {
  title: 'Swiss Bitcoin Institute | Strategic Bitcoin Intelligence',
  description: 'Strategic Bitcoin Intelligence for business leaders and executives. Independent research, executive education, and strategic guidance from Switzerland\'s leading Bitcoin think tank.',
  openGraph: {
    title: 'Swiss Bitcoin Institute | Strategic Bitcoin Intelligence',
    description: 'Strategic Bitcoin Intelligence for business leaders and executives. Independent research, executive education, and strategic guidance from Switzerland\'s leading Bitcoin think tank.',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swiss Bitcoin Institute | Strategic Bitcoin Intelligence',
    description: 'Strategic Bitcoin Intelligence for business leaders and executives.',
    images: ['/opengraph-image.png'],
  },
}

export default function Page() {
  return <Home />
}
