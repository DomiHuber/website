import type { Metadata } from 'next'
import Team from '@/pages/Team'

export const metadata: Metadata = {
  title: 'Team | Swiss Bitcoin Institute',
  description: 'Meet our world-class team of Bitcoin experts, researchers, and practitioners. Combining 50+ years of experience across academia, finance, energy, and technology to provide strategic Bitcoin intelligence.',
  openGraph: {
    title: 'Our Team | Swiss Bitcoin Institute',
    description: 'World-class Bitcoin expertise spanning protocol development, energy integration, treasury strategy, and monetary policy.',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Team | Swiss Bitcoin Institute',
    description: 'Meet our team of Bitcoin experts combining academic rigor with practical expertise.',
    images: ['/opengraph-image.png'],
  },
}

export default function TeamPage() {
  return <Team />
}
