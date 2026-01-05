import type { Metadata } from 'next'
import CTAButton from '@/components/ui/cta-button'
import { Card } from '@/components/ui/card'
import { CheckCircle2, Users, Clock, MapPin, BookOpen, Award, Laptop } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Financial Sovereignty - Technical Bitcoin Course | Swiss Bitcoin Institute',
  description: 'Technical Bitcoin training for wealth managers, financial advisors, and investment professionals. Master custody, compliance, and client advisory. 3-day intensive course with hands-on labs.',
  openGraph: {
    title: 'Financial Sovereignty Course | Swiss Bitcoin Institute',
    description: 'Technical Bitcoin training for financial professionals. Hands-on custody, compliance, and portfolio implementation.',
    images: ['/opengraph-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Sovereignty Course | Swiss Bitcoin Institute',
    description: 'Technical Bitcoin training for financial professionals. Hands-on custody, compliance, and portfolio implementation.',
    images: ['/opengraph-image.png'],
  },
}

export default function FinancialSovereigntyPage() {
  const courseDetails = [
    { icon: <Clock className="w-5 h-5" />, label: 'Duration', value: '3-day intensive or 6 half-day sessions' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Format', value: 'In-person (preferred) or live online' },
    { icon: <Users className="w-5 h-5" />, label: 'Class Size', value: '10-20 participants' },
    { icon: <Laptop className="w-5 h-5" />, label: 'Labs', value: 'Hands-on technical workshops' },
  ]

  const modules = [
    {
      number: '01',
      title: 'Bitcoin Technical Foundations',
      duration: '4 hours',
      topics: [
        'Cryptographic primitives: Public-key cryptography, hashing, digital signatures',
        'Blockchain data structure and transaction anatomy',
        'The UTXO model and script language',
        'Proof-of-work mining and network consensus',
        'Full nodes vs. light clients: Security trade-offs',
        'Hands-on: Running a Bitcoin node, exploring the blockchain',
      ],
    },
    {
      number: '02',
      title: 'Keys, Addresses & Custody',
      duration: '5 hours',
      topics: [
        'Hierarchical deterministic wallets (BIP32, BIP39, BIP44)',
        'Address types: Legacy, SegWit, Taproot',
        'Single-sig vs. multi-sig: When to use each',
        'Custody spectrum: From hot wallets to cold storage',
        'Hardware wallets: Evaluating security models',
        'Enterprise custody solutions and trade-offs',
        'Hands-on: Wallet setup, backup procedures, multi-sig creation',
      ],
    },
    {
      number: '03',
      title: 'Security Best Practices',
      duration: '3 hours',
      topics: [
        'Threat modeling for different client profiles',
        'Operational security and attack vectors',
        'Inheritance and estate planning with Bitcoin',
        'Social engineering and physical security',
        'Insurance and recovery solutions',
        'Case studies: What went wrong and why',
        'Lab: Secure key generation and storage procedures',
      ],
    },
    {
      number: '04',
      title: 'Bitcoin in Portfolio Construction',
      duration: '4 hours',
      topics: [
        'Asset allocation theory and Bitcoin\'s role',
        'Correlation analysis and portfolio optimization',
        'Volatility management strategies',
        'Rebalancing frameworks',
        'Tax considerations (Swiss context)',
        'Client suitability assessment',
        'Workshop: Building Bitcoin allocation models',
      ],
    },
    {
      number: '05',
      title: 'Client Advisory & Implementation',
      duration: '3.5 hours',
      topics: [
        'Client discovery: Assessing needs, goals, risk tolerance',
        'Education frameworks for clients (teaching without overwhelming)',
        'Addressing objections and concerns',
        'Regulatory compliance and documentation (FINMA guidelines)',
        'KYC/AML considerations for Bitcoin transactions',
        'Ongoing client support and market communication',
        'Role-play: Client consultation scenarios',
      ],
    },
    {
      number: '06',
      title: 'Advanced Topics',
      duration: '3.5 hours',
      topics: [
        'Lightning Network: Layer-2 scaling for payments',
        'Privacy techniques: CoinJoin, PayJoin',
        'Bitcoin DeFi: Lending, wrapped Bitcoin, smart contracts',
        'Regulatory evolution and future outlook',
        'Building a Bitcoin-focused practice',
        'Continuing education resources',
      ],
    },
    {
      number: '07',
      title: 'Practical Implementation Project',
      duration: '3 hours',
      topics: [
        'Working session: Design a Bitcoin solution for a client case study',
        'Present to class and receive feedback',
        'Operational procedures checklist',
        'Compliance documentation templates',
        'Resource library and ongoing support',
      ],
    },
  ]

  const included = [
    'Technical manuals and operational checklists',
    'Access to SBI technical resources and updates',
    'Hardware wallet (for hands-on labs)',
    'Certificate of completion with technical proficiency recognition',
    '6 months alumni community access with monthly technical office hours',
    'Ongoing regulatory updates specific to Swiss financial professionals',
    'Client advisory framework templates',
  ]

  const whoShouldAttend = [
    'Wealth managers and financial advisors',
    'Private bankers serving high-net-worth clients',
    'Family office investment professionals',
    'Independent financial consultants',
    'Investment professionals building Bitcoin competency',
    'CTOs evaluating custody solutions',
    'Compliance officers navigating Bitcoin regulations',
  ]

  const prerequisites = [
    {
      title: 'Recommended Experience',
      items: ['Financial services or investment advisory experience', 'Basic understanding of investment principles and portfolio management'],
    },
    {
      title: 'Not Required',
      items: ['Programming or coding knowledge (helpful but not necessary)', 'Prior Bitcoin or cryptocurrency experience'],
    },
  ]

  const faqs = [
    {
      q: 'I\'m not technical. Will I be able to follow the material?',
      a: 'The course is designed for financial professionals, not programmers. We explain technical concepts in practical terms and focus on what you need to know for client implementation. No coding required.',
    },
    {
      q: 'Is this course recognized by any professional associations?',
      a: 'Participants receive a Certificate of Completion with technical proficiency recognition from SBI. We\'re working on formal CPD/CE credit recognition with Swiss professional bodies.',
    },
    {
      q: 'What if Bitcoin\'s price drops significantly during or after the course?',
      a: 'Price volatility is precisely why technical competency matters. This course teaches you how to advise clients through market cycles, not how to time them. The skills remain valuable regardless of short-term price movements.',
    },
    {
      q: 'How is this different from online Bitcoin courses?',
      a: 'Most online courses teach Bitcoin philosophy or basic blockchain concepts. This is professional training focused on client implementation in the Swiss regulatory context. You\'ll leave with operational procedures, compliance frameworks, and hands-on custody experience.',
    },
    {
      q: 'Will this prepare me to handle large client allocations (CHF 1M+)?',
      a: 'Yes. We cover enterprise custody solutions, multi-signature setups, and risk management frameworks specifically designed for high-net-worth implementations.',
    },
    {
      q: 'What\'s the enrollment process?',
      a: 'Schedule a brief consultation call to discuss your needs and confirm course fit. We keep class sizes small to ensure quality peer discussion and hands-on attention.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="swiss-hero swiss-gradient relative overflow-hidden">
        <div className="absolute inset-0 swiss-blue-gradient-hero"></div>
        <div className="swiss-grid relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="pill-hero mb-6">
                <span className="mr-2">🔧</span>
                <span className="pill-hero-text">Technical Course</span>
              </span>
            </div>
            <h1 className="mb-10 text-gray-900">Financial Sovereignty</h1>
            <p className="swiss-prose-lg mb-12 max-w-4xl mx-auto text-gray-700 leading-relaxed">
              Deep technical training for financial professionals who need to implement Bitcoin solutions for clients. 
              Master custody, compliance, portfolio allocation, and client advisory—with hands-on labs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton variant="primary" size="lg" href="/inquiry?service=courses&course=financial-sovereignty">
                Schedule Consultation
              </CTAButton>
              <CTAButton variant="secondary" size="lg" href="/contact">
                Request Information
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="swiss-section bg-white">
        <div className="swiss-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {courseDetails.map((detail, index) => (
              <Card key={index} className="p-6 border-gray-200 hover:border-bitcoin-orange transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="text-bitcoin-orange mt-1">{detail.icon}</div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{detail.label}</div>
                    <div className="font-semibold text-gray-900">{detail.value}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-center mb-8 text-gray-900">Course Overview</h2>
            <div className="swiss-prose text-gray-700 leading-relaxed space-y-6">
              <p>
                <strong>Financial Sovereignty</strong> is deep technical training for financial professionals who need 
                to implement Bitcoin solutions for clients or organizations. This course combines theory, practical skills, 
                and client advisory frameworks.
              </p>
              <p>
                You'll master Bitcoin technical fundamentals from first principles, implement secure custody solutions, 
                advise clients on allocation strategies, navigate Swiss regulatory requirements, and build Bitcoin competency 
                within your organization.
              </p>
              <p className="text-lg font-semibold text-bitcoin-orange">
                This is not a philosophical course about "the future of money." This is practical, implementation-focused 
                training that prepares you to serve clients competently and compliantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Access */}
      <section className="swiss-section bg-gray-50">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-gray-900">Detailed Curriculum</h2>
            <p className="swiss-prose-lg text-gray-600 mb-8">
              Our comprehensive curriculum covers seven technical modules from cryptographic fundamentals to client implementation, with hands-on labs.
              Detailed curriculum materials are available upon request.
            </p>

            <Card className="p-8 bg-white border-2 border-bitcoin-orange/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-bitcoin-orange to-bitcoin-orange/80 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Request Full Curriculum</h3>
                <p className="text-gray-600 mb-6">
                  Get detailed course materials, learning objectives, and hands-on lab information sent directly to your inbox.
                </p>
              </div>

              <CTAButton variant="primary" size="lg" href="/inquiry?service=courses&course=financial-sovereignty" className="w-full">
                Request Detailed Curriculum
              </CTAButton>

              <p className="text-sm text-gray-500 mt-4">
                No commitment required. We'll send you comprehensive course details within 24 hours.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="swiss-section bg-white">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 text-gray-900">Who Should Attend</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whoShouldAttend.map((role, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50">
                  <CheckCircle2 className="w-5 h-5 text-bitcoin-orange flex-shrink-0" />
                  <span className="text-gray-700">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="swiss-section bg-gray-50">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 text-gray-900">Prerequisites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {prerequisites.map((section, index) => (
                <Card key={index} className="p-6 border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-bitcoin-orange flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="swiss-section bg-white">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 text-gray-900">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4">
                  <BookOpen className="w-5 h-5 text-bitcoin-orange flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="swiss-section bg-gray-50">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 border-gray-200 bg-white">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </Card>
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
            <h2 className="mb-8 text-white">Ready to Build Technical Bitcoin Competency?</h2>
            <p className="swiss-prose mb-12 text-gray-300 max-w-3xl mx-auto">
              Join Switzerland's leading financial professionals in mastering Bitcoin implementation. 
              Schedule a consultation to discuss your needs and confirm course fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton 
                variant="primary" 
                size="lg" 
                href="/inquiry?service=courses&course=financial-sovereignty"
                className="shadow-2xl"
              >
                Schedule Consultation
              </CTAButton>
              <CTAButton 
                variant="secondary" 
                size="lg" 
                href="/education"
                className="border-white text-gray-900 bg-white hover:bg-gray-100"
              >
                View Other Courses
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

