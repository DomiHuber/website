export default function StrategicSpeaking() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="swiss-section bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic Speaking
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Expert keynotes and strategic briefings for businesses, governments, and organizations navigating Bitcoin adoption.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team delivers high-impact presentations that translate Bitcoin's technical complexity into strategic clarity—from boardrooms to policy forums.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="swiss-section">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Swiss Bitcoin Institute Speakers</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Research-Based</h3>
                <p className="text-muted-foreground">
                  Every presentation draws on rigorous academic research and real-world case studies.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Audience-Tailored</h3>
                <p className="text-muted-foreground">
                  Customized for businesses, governments, non-profits, or technical audiences.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="9" x2="15" y1="15" y2="15"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Actionable Strategy</h3>
                <p className="text-muted-foreground">
                  Practical frameworks your organization can implement immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Talks */}
      <section className="swiss-section bg-muted/30">
        <div className="swiss-grid">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Presentations</h2>

            {/* Talk 1: Policy/Government */}
            <div className="bg-background rounded-lg border overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video bg-black">
                  <video
                    className="w-full h-full"
                    controls
                    preload="metadata"
                  >
                    <source 
                      src="https://oc-aem-dist-downloads.ethz.ch/mh_default_org/oaipmh-cq5/c7882de7-7c1f-453f-b7c8-f4787aa81a3b/7e4a5352-b2a1-4d09-9849-4bed6faed33e/MarcusDapp_ColloquiumFS25.mp4" 
                      type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-8">
                  <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    POLICY & GOVERNMENT
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Bitcoin as Strategic Policy Issue
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Dr. Marcus Dapp presents Bitcoin as a critical science and technology policy issue at ETH Zürich's Institute for Science, Technology, and Policy.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                      </svg>
                      <span>ETH Zürich, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      <span>English presentation, English slides</span>
                    </div>
                  </div>
                  <a
                    href="https://istp.ethz.ch/events/colloquia/2025/fs/colloquium-recording--dr-marcus-dapp.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium mt-6 hover:underline"
                  >
                    View Full Recording
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" x2="21" y1="14" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Talk 2: Business */}
            <div className="bg-background rounded-lg border overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YBaL_iNleTA"
                    title="Bitcoin Strategy Playbook for Businesses"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-8">
                  <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    BUSINESS STRATEGY
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Bitcoin Strategy Playbook for Businesses
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A comprehensive framework for corporate Bitcoin adoption—from treasury management to payment integration and strategic positioning.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                      </svg>
                      <span>Swiss Bitcoin Conference, 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      <span>German presentation, English slides (SBI branded)</span>
                    </div>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=YBaL_iNleTA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium mt-6 hover:underline"
                  >
                    Watch on YouTube
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" x2="21" y1="14" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Talk 3: Non-Profits */}
            <div className="bg-background rounded-lg border overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/hi0r08pUrh4"
                    title="Bitcoin Strategy Playbook for Non-Profits"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-8">
                  <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    NON-PROFITS & NGOs
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Bitcoin Strategy Playbook for Non-Profits
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    How charitable organizations and NGOs can leverage Bitcoin for fundraising, treasury diversification, and global remittances.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                      </svg>
                      <span>Bitcoin Alps, 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      <span>German presentation, German slides</span>
                    </div>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=hi0r08pUrh4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium mt-6 hover:underline"
                  >
                    Watch on YouTube
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" x2="21" y1="14" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="swiss-section">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Speaking Topics</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">For Businesses</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Bitcoin treasury strategies and risk management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Payment integration and customer experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Competitive positioning through Bitcoin adoption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Regulatory compliance and accounting standards</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">For Governments</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Monetary sovereignty in the digital age</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Bitcoin vs. stablecoins: policy implications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Strategic Bitcoin reserves for nations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Energy policy and sustainable mining</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">For Non-Profits</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Bitcoin fundraising and donation infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Cross-border remittances and financial inclusion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Treasury diversification for endowments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Transparency and accountability through Bitcoin</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Technical Audiences</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Bitcoin protocol development and Layer 2 solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Lightning Network architecture and use cases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Cryptographic security and quantum resistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0 text-primary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Mining economics and difficulty adjustment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="swiss-section bg-primary text-primary-foreground">
        <div className="swiss-grid">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Book a Speaker for Your Event
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Whether you're organizing a conference, corporate strategy session, or policy briefing, our team brings clarity to Bitcoin's strategic implications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-white/90 h-11 rounded-md px-8"
              >
                Request a Speaker
              </a>
              <a
                href="/research"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white/20 hover:bg-white/10 h-11 rounded-md px-8"
              >
                View Our Research
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Past Speaking Engagements */}
      <section className="swiss-section">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Recent Speaking Engagements</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">ETH Zürich—Institute for Science, Technology, and Policy</h3>
                  <p className="text-sm text-muted-foreground">Bitcoin as strategic policy issue • 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <path d="M8 6h.01"></path>
                    <path d="M16 6h.01"></path>
                    <path d="M12 6h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 10h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M8 14h.01"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Swiss Bitcoin Conference</h3>
                  <p className="text-sm text-muted-foreground">Corporate Bitcoin strategy playbook • 2024</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Bitcoin Alps</h3>
                  <p className="text-sm text-muted-foreground">Non-profit Bitcoin adoption strategies • 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

