import type { Metadata } from 'next'
import CTAButton from '@/components/ui/cta-button'
import { Users, Clock, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bitcoin Courses for Professionals | Swiss Bitcoin Institute',
  description: 'Professional Bitcoin education for executives, wealth managers, and financial advisors. Strategic and technical courses from Switzerland\'s independent Bitcoin think tank.',
  openGraph: {
    title: 'Bitcoin Courses | Swiss Bitcoin Institute',
    description: 'Strategic and technical Bitcoin education for Swiss professionals.',
    images: ['/opengraph-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin Courses | Swiss Bitcoin Institute',
    description: 'Strategic and technical Bitcoin education for Swiss professionals.',
    images: ['/opengraph-image.png'],
  },
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="swiss-hero swiss-gradient relative overflow-hidden">
        <div className="absolute inset-0 swiss-blue-gradient-hero"></div>
        <div className="swiss-grid relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="pill-hero mb-6">
                <span className="mr-2">🎓</span>
                <span className="pill-hero-text">Professional Education</span>
              </span>
            </div>
            <h1>Bitcoin Courses for Decision-Makers</h1>
            <p className="swiss-prose-lg mb-12 max-w-4xl mx-auto text-gray-700 leading-relaxed">
              A comprehensive educational program is in development, designed specifically for decision-makers. 
              Express your interest to be among the first to know when enrollment opens.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Course */}
      <section className="swiss-section bg-white">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto">
            <div className="card-general card-gradient-hover mt-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-swiss-blue/10 mb-6">
                  <span className="swiss-blue-gradient-text text-sm font-medium">Coming Soon</span>
                    </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">Strategic Bitcoin Fundamentals</h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  A foundational course designed for decision-makers who need to understand Bitcoin's strategic implications 
                  without getting lost in technical details. Build the knowledge framework your organization needs.
                </p>
                  </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-gray-200">
                <div className="text-center">
                  <Clock className="w-8 h-8 swiss-blue-gradient-text mx-auto mb-3" />
                  <div className="text-sm text-gray-500 mb-1">Duration</div>
                  <div className="font-semibold text-gray-900">TBD</div>
                      </div>
                <div className="text-center">
                  <Users className="w-8 h-8 swiss-blue-gradient-text mx-auto mb-3" />
                  <div className="text-sm text-gray-500 mb-1">Format</div>
                  <div className="font-semibold text-gray-900">TBD</div>
                    </div>
                <div className="text-center">
                  <Award className="w-8 h-8 swiss-blue-gradient-text mx-auto mb-3" />
                  <div className="text-sm text-gray-500 mb-1">Level</div>
                  <div className="font-semibold text-gray-900">Strategic</div>
                      </div>
                    </div>

              <div className="text-center">
                <CTAButton 
                  variant="primary" 
                  size="lg" 
                  href="/inquiry?service=education"
                  className="shadow-xl"
                >
                  Express Interest
                </CTAButton>
                <p className="text-sm text-gray-500 mt-4">
                  Be among the first to know when enrollment opens
                </p>
                  </div>
                </div>
          </div>
        </div>
      </section>

      {/* Future Modules */}
      <section className="swiss-section bg-gray-50">
        <div className="swiss-grid">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="swiss-blue-gradient-accent mx-auto"></div>
              </div>
              <h2>Future Specialized Modules</h2>
              <p className="swiss-prose max-w-3xl mx-auto text-gray-600">
                Following the strategic fundamentals, we'll develop specialized modules covering our six research domains. 
                Each module will dive deep into specific strategic implications for decision-makers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Markets & Geopolitics', icon: '🌍' },
                { name: 'Finance & Economics', icon: '💼' },
                { name: 'Technology & Innovation', icon: '⚡' },
                { name: 'Energy & Climate', icon: '🌱' },
                { name: 'Access & Agency', icon: '🔓' },
                { name: 'Strategy & Policy', icon: '📋' }
              ].map((domain, index) => (
                <div key={index} className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-swiss-blue/50 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br from-swiss-blue/10 to-swiss-blue/5 group-hover:from-swiss-blue/20 group-hover:to-swiss-blue/10 transition-all duration-300 mx-auto">
                    <span className="text-3xl">{domain.icon}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg group-hover:swiss-blue-gradient-text transition-colors duration-300">
                    {domain.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="swiss-section bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 cta-section-bg"></div>
        <div className="swiss-grid relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="mb-8 text-white">Interested in Strategic Bitcoin Education?</h2>
            <p className="swiss-prose mb-12 text-gray-300 max-w-3xl mx-auto">
              Express your interest and we'll keep you informed as we develop our comprehensive program 
              covering strategic fundamentals and our six research domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton 
                variant="primary" 
                size="lg" 
                href="/contact"
                className="shadow-2xl"
              >
                Schedule Consultation
              </CTAButton>
              <CTAButton 
                variant="secondary" 
                size="lg" 
                href="/research"
                className="border-white text-gray-900 bg-white hover:bg-gray-100"
              >
                View Research
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

