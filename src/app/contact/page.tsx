import type { Metadata } from 'next'
import Contact from '@/pages/Contact'

export const metadata: Metadata = {
  title: 'Contact | Swiss Bitcoin Institute',
  description: 'Get in touch with the Swiss Bitcoin Institute. Partner with us for Bitcoin intelligence, executive education, research collaboration, or speaking engagements.',
  openGraph: {
    title: 'Contact | Swiss Bitcoin Institute',
    description: 'Partner with Switzerland\'s independent Bitcoin think tank for research, education, and strategic intelligence.',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Swiss Bitcoin Institute',
    description: 'Get in touch for Bitcoin intelligence, education, and research collaboration.',
    images: ['/opengraph-image.png'],
  },
}

export default function ContactPage() {
  return <Contact />
}
