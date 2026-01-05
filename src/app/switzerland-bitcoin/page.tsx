import type { Metadata } from 'next'
import About from '@/pages/About'

export const metadata: Metadata = {
  title: 'About | Swiss Bitcoin Institute',
  description: 'Switzerland and Bitcoin share foundational values—sovereignty, neutrality, consensus, decentralization, and liberty. Learn how the Swiss Bitcoin Institute bridges monetary evolution with Swiss principles.',
  openGraph: {
    title: 'About the Swiss Bitcoin Institute',
    description: 'Independent Bitcoin research and analysis for Switzerland, combining academic rigor with practical expertise to guide the nation\'s monetary evolution.',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Swiss Bitcoin Institute',
    description: 'Switzerland and Bitcoin share foundational values. Discover how we guide confident leadership in the digital age.',
    images: ['/opengraph-image.png'],
  },
}

export default function AboutPage() {
  return <About />
}
