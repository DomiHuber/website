import type { Metadata } from 'next'
import Research from '@/pages/Research'

export const metadata: Metadata = {
  title: 'Research | Swiss Bitcoin Institute',
  description: 'Strategic Bitcoin Intelligence Briefs and research reports for decision-makers. Evidence-based analysis on Bitcoin\'s implications for business, policy, and society.',
  openGraph: {
    title: 'Research | Swiss Bitcoin Institute',
    description: 'Strategic Bitcoin Intelligence Briefs and research reports for decision-makers. Evidence-based analysis on Bitcoin\'s implications for business, policy, and society.',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research | Swiss Bitcoin Institute',
    description: 'Strategic Bitcoin Intelligence Briefs and research reports for decision-makers.',
    images: ['/opengraph-image.png'],
  },
}

export default function ResearchPage() {
  return <Research />
}
