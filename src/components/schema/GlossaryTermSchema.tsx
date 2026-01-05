import { GlossaryTerm } from '@/lib/content'

interface GlossaryTermSchemaProps {
  term: GlossaryTerm
}

export default function GlossaryTermSchema({ term }: GlossaryTermSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.term,
    description: term.shortDefinition,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Bitcoin Glossary',
      description: 'Comprehensive glossary of Bitcoin and cryptocurrency terms',
      publisher: {
        '@type': 'Organization',
        name: 'Swiss Bitcoin Institute',
      },
    },
    url: `https://bitcoininstitute.ch/glossary/${term.slug}`,
  }

  // Add FAQ schema for the full definition
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: {
      '@type': 'Question',
      name: `What is ${term.term}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: term.shortDefinition,
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}

