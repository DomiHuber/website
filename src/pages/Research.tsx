"use client";

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CTAButton from '@/components/ui/cta-button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { fetchArticles, fetchAuthors, Article, Author } from '@/lib/content-client';
import ArticleCard from '@/components/articles/ArticleCard';

const Research = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedDomainIndex, setExpandedDomainIndex] = useState<number | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const [articlesData, authorsData] = await Promise.all([
          fetchArticles(),
          fetchAuthors()
        ]);
        setArticles(articlesData);
        setAuthors(authorsData);
      } catch (error) {
        console.error('Error loading content:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our latest Bitcoin intelligence reports."
    });
    setEmail('');
  };

  const getAuthorById = (authorId: string) => {
    return authors.find(author => author.id === authorId);
  };

  const intelligenceFeatures = [{
    emoji: "📈",
    title: "Market Intelligence",
    description: "Real-time analysis of Bitcoin market dynamics, institutional adoption patterns, and regulatory developments across global markets."
  }, {
    emoji: "🎯",
    title: "Strategic Insights",
    description: "Actionable intelligence for C-suite decision-making, risk assessment, and competitive positioning in the Bitcoin economy."
  }, {
    emoji: "🌍",
    title: "Macro Analysis",
    description: "Deep-dive reports on Bitcoin's role in monetary policy, geopolitical shifts, and macroeconomic trends affecting businesses."
  }, {
    emoji: "👥",
    title: "Live Sessions",
    description: "Interactive intelligence briefings with our research team, featuring Q&A and personalized strategic discussions."
  }];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading intelligence reports...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="swiss-hero swiss-gradient relative overflow-hidden">
        <div className="absolute inset-0 swiss-blue-gradient-hero"></div>
        <div className="swiss-grid relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="pill-hero mb-6">
                <span className="mr-2">🧠</span>
                <span className="pill-hero-text">Strategic Intelligence</span>
              </span>
            </div>
            <h1>Bitcoin Intelligence</h1>
            <p className="swiss-prose-lg mb-12 max-w-4xl mx-auto text-gray-700 leading-relaxed">
              Our regular reports and live sessions cover all strategic aspects of Bitcoin and deliver 
              actionable insights for your decision-making. Stay ahead with intelligence that matters.
            </p>
          </div>
        </div>
      </section>

      {/* Intelligence Features */}
      <section className="swiss-section bg-white">
        <div className="swiss-grid">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="swiss-blue-gradient-accent mx-auto"></div>
            </div>
            <h2>Intelligence That Drives Decisions</h2>
            <p className="swiss-prose max-w-3xl mx-auto text-gray-600">
              From market dynamics to regulatory shifts, our intelligence covers every angle 
              of Bitcoin's impact on business and society.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {intelligenceFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-swiss-blue/10 to-swiss-blue/5 rounded-2xl flex items-center justify-center group-hover:from-swiss-blue/20 group-hover:to-swiss-blue/10 transition-all duration-300">
                  <span className="text-3xl">{feature.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Domains */}
      <section className="swiss-section bg-gray-50">
        <div className="swiss-grid">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="swiss-blue-gradient-accent mx-auto"></div>
            </div>
            <h2>Six Research Domains</h2>
            <p className="swiss-prose max-w-4xl mx-auto text-gray-600">
              Our research spans six interconnected domains that capture Bitcoin's full strategic significance
              for Switzerland's leadership in the global monetary system.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {[
              {
                title: "Markets & Geopolitics",
                short: "Global trade, aid, and financial flows today rely on politicized, inflation-prone fiat currencies and fragmented payment systems.",
                full: "Global trade, aid, and financial flows today rely on politicized, inflation-prone fiat currencies and fragmented payment systems. This creates currency wars, sanctions risk, and unequal access to the global economy, especially for poorer or unstable nations. Power concentrates in a few reserve-currency issuers, shaping geoeconomics and geopolitics as much as traditional diplomacy. Bitcoin raises new questions for international trade and aid: What happens when countries and companies can settle value in a neutral, borderless asset that no single state controls? How might a global, censorship-resistant settlement network change competition, sanctions, and capital controls? Could Bitcoin reduce reliance on dominant fiat currencies and rebalance geopolitical power?"
              },
              {
                title: "Finance & Economics",
                short: "Today's financial system is built on credit expansion, inflationary money, and tight links between central banks, governments, and commercial banks.",
                full: "Today's financial system is built on credit expansion, inflationary money, and tight links between central banks, governments, and commercial banks. This model can erode savings, distort investment, and concentrate power. The rise of central bank digital currencies (CBDCs) increases efficiency but also enables greater surveillance and control over transactions. Bitcoin introduces a different economic logic: a fixed supply asset, rules without rulers, and a clear separation of money and state. What would deflationary or low-inflation economics mean for saving, lending, and investment? How might Bitcoin compete or coexist with CBDCs? Could a monetary standard secured by open networks provide greater trust than promises from central banks and governments?"
              },
              {
                title: "Technology & Innovation",
                short: "Our digital economy largely runs on centralized platforms and intermediaries that control data, access, and payments.",
                full: "Our digital economy largely runs on centralized platforms and intermediaries that control data, access, and payments. This centralization can limit innovation, weaken privacy, and create single points of failure and censorship. Bitcoin emerged as a peer-to-peer (p2p) payment network secured by decentralized mining and robust cryptography. New layers built on top of Bitcoin explore scalability, faster payments, and enhanced privacy while preserving security. How can open, permissionless infrastructure spur new waves of financial and technological innovation? What role will Bitcoin's layered architecture play in enabling secure, global micro-transactions, machine-to-machine payments, or new digital services that do not depend on trusted third parties?"
              },
              {
                title: "Energy & Climate",
                short: "Modern energy systems are centralized and often inefficient, with stranded resources and weak incentives to integrate renewables.",
                full: "Modern energy systems are centralized and often inefficient, with stranded resources and weak incentives to integrate renewables. Climate change and carbon constraints increase pressure on grids, regulators, and investors to transform how energy is produced, priced, and consumed. Bitcoin mining links digital finance directly to physical energy. Miners seek the cheapest, most abundant energy, including stranded gas, hydro, wind, and solar. Can flexible, location-agnostic mining support grid stability and renewable build-out by monetizing excess capacity? How should we evaluate Bitcoin's climate impact compared to other financial and digital systems? Could Bitcoin help drive a more transparent, market-driven energy transition and more effective climate change mitigation?"
              },
              {
                title: "Access & Agency",
                short: "Billions of people face limited or unstable access to financial services, suffer from currency debasement, or live under regimes that restrict the freedom to transact.",
                full: "Billions of people face limited or unstable access to financial services, suffer from currency debasement, or live under regimes that restrict the freedom to transact. Traditional banking and payment providers can exclude individuals, censor payments, or expose sensitive data, undermining financial inclusion, privacy, and basic human rights. Bitcoin enables anyone with a smartphone and internet connection to hold and transfer value without permission. What does global access to a neutral, open monetary network mean for personal and economic sovereignty? Can Bitcoin improve financial inclusion for the unbanked and underbanked, especially in fragile states or conflict zones? How might stronger privacy and censorship-resistance protect civil society, journalists, and activists while balancing legitimate concerns about misuse?"
              },
              {
                title: "Strategy & Policy",
                short: "Governments and institutions face new strategic choices as digital money, CBDCs, and cryptocurrencies evolve.",
                full: "Governments and institutions face new strategic choices as digital money, CBDCs, and cryptocurrencies evolve. National competitiveness, strategic sovereignty, and regulatory approaches are increasingly shaped by how countries respond to open monetary networks like Bitcoin. Should nations treat Bitcoin as a threat, a complement, or a strategic asset? How might holding or integrating Bitcoin affect macroeconomic resilience, reserves management, and technological leadership? What forms of co-operation and regulation can preserve innovation while managing risks? Bitcoin forces policymakers and corporate leaders to rethink monetary strategy, legal frameworks, and international collaboration in a world where money can move at internet speed, without relying solely on traditional financial centers."
              }
            ].map((domain, index) => {
              const isExpanded = expandedDomainIndex === index;
              return (
                <div key={index} className="card-general card-gradient-hover">
                  <button
                    onClick={() => setExpandedDomainIndex(isExpanded ? null : index)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-900 pr-4">
                        {domain.title}
                      </h3>
                      <div className="flex-shrink-0">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </button>
                  <div className="mt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {domain.short}
                    </p>
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed">
                          {domain.full.substring(domain.short.length).trim()}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ResQ Package */}
      <section className="swiss-section bg-white">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="swiss-blue-gradient-accent mx-auto"></div>
              </div>
              <h2>Quarterly Research Package</h2>
              <p className="text-lg text-gray-600 mb-8">
                Original, forward-looking fundamental research on Bitcoin giving a 360° view. Plus selected curated and fellow-commented Bitcoin news. Every quarter.
              </p>
            </div>

            <div className="bg-gradient-to-r from-swiss-blue/5 to-swiss-blue/10 rounded-2xl p-8 border border-swiss-blue/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Quarterly Intelligence Package</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="swiss-blue-gradient-text mr-3 mt-1">•</span>
                      <span>360° fundamental Bitcoin research</span>
                    </li>
                    <li className="flex items-start">
                      <span className="swiss-blue-gradient-text mr-3 mt-1">•</span>
                      <span>Forward-looking strategic insights</span>
                    </li>
                    <li className="flex items-start">
                      <span className="swiss-blue-gradient-text mr-3 mt-1">•</span>
                      <span>Curated Bitcoin news with expert commentary</span>
                    </li>
                    <li className="flex items-start">
                      <span className="swiss-blue-gradient-text mr-3 mt-1">•</span>
                      <span>Quarterly delivery schedule</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <CTAButton variant="primary" size="lg" href="/inquiry?service=research" className="mb-4">
                    Learn More
                  </CTAButton>
                  <p className="text-sm text-gray-500">
                    Contact us for pricing and subscription details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Reports */}
      <section className="swiss-section bg-gradient-to-b from-gray-50 to-white">
        <div className="swiss-grid">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="swiss-blue-gradient-accent mx-auto"></div>
            </div>
            <h2>Latest Intelligence Reports</h2>
            <p className="swiss-prose max-w-3xl mx-auto text-gray-600">
              Deep-dive analysis and strategic insights from our research team, published at specific 
              block heights to ensure transparency and immutability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.map((article) => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                author={getAuthorById(article.author)}
              />
            ))}
          </div>
          
          {articles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No intelligence reports available at this time.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="swiss-section bg-white">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-swiss-blue/20 shadow-xl">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-swiss-blue/20 to-swiss-blue/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl">📧</span>
                </div>
                
                <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                  Stay Ahead with Bitcoin Intelligence
                </h2>
                
                <p className="swiss-prose-lg mb-8 text-gray-600 max-w-2xl mx-auto">
                  Strategic Bitcoin insights directly to your mailbox. Twice a month. Unsubscribe anytime.
                </p>
                
                <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                  <div className="flex gap-4">
                    <Input 
                      type="email" 
                      placeholder="your.email@company.com" 
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                      required 
                      className="h-12 flex-1" 
                    />
                    <Button 
                      type="submit" 
                      className="h-12 px-8 swiss-blue-gradient swiss-blue-gradient-hover text-white whitespace-nowrap"
                    >
                      Subscribe to Intelligence Brief
                    </Button>
                  </div>
                </form>
                
                <p className="text-sm text-gray-500 mt-4">
                  Join our growing community of Bitcoin intelligence subscribers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="swiss-section bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 cta-section-bg"></div>
        <div className="swiss-grid relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-medium text-white mb-6">
              Need Custom Intelligence?
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get tailored Bitcoin intelligence and strategic analysis for your specific 
              industry, market, or organizational needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <CTAButton variant="primary" size="lg" href="/inquiry?service=research" showArrow>
                Request Custom Analysis
              </CTAButton>
              <CTAButton variant="secondary" size="lg" href="/contact" className="bg-white text-gray-900 hover:bg-gray-100">
                Discuss Your Needs
              </CTAButton>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;

