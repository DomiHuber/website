import { getAllArticles, getAllGlossaryTerms, type Article } from './content';

export type SearchCategory = 'Page' | 'Article' | 'Glossary';

export interface SearchItem {
  id: string;
  title: string;
  description?: string;
  url: string;
  category: SearchCategory;
  tags?: string[];
}

const STATIC_PAGES: SearchItem[] = [
  { id: 'home', title: 'Home', description: 'Swiss Bitcoin Institute homepage', url: '/', category: 'Page' },
  { id: 'about', title: 'About Us', description: 'Our mission, principles, and role', url: '/about', category: 'Page' },
  { id: 'team', title: 'Team', description: 'Core team and research fellows', url: '/team', category: 'Page' },
  { id: 'research', title: 'Research', description: 'Bitcoin research and analysis', url: '/research', category: 'Page' },
  { id: 'education', title: 'Education', description: 'Executive education programs', url: '/education', category: 'Page' },
  { id: 'speaking', title: 'Strategic Speaking', description: 'Keynotes and presentations', url: '/speaking', category: 'Page' },
  { id: 'contact', title: 'Contact', description: 'Get in touch with us', url: '/contact', category: 'Page' },
  { id: 'inquiry', title: 'Get Started', description: 'Start your journey with SBI', url: '/inquiry', category: 'Page' },
  { id: 'why-bitcoin', title: 'Why Bitcoin', description: 'Understanding Bitcoin\'s unique properties and fundamental advantages', url: '/why-bitcoin', category: 'Page' },
  { id: 'fellows', title: 'Fellowship', description: 'Join Switzerland\'s leading network of Bitcoin experts', url: '/fellows', category: 'Page' },
];

export async function getSearchIndex(): Promise<SearchItem[]> {
  try {
    const [articles, glossaryTerms] = await Promise.all([
      getAllArticles(),
      getAllGlossaryTerms()
    ]);

    const articleItems: SearchItem[] = articles.map((article: Article) => ({
      id: `article-${article.id}`,
      title: article.title,
      description: article.excerpt,
      url: `/research/${article.slug}`,
      category: 'Article',
      tags: article.tags
    }));

    const glossaryItems: SearchItem[] = glossaryTerms.map((term) => ({
      id: `glossary-${term.slug}`,
      title: term.term,
      description: term.shortDefinition,
      url: `/glossary/${term.slug}`,
      category: 'Glossary',
      tags: [term.category]
    }));

    return [...STATIC_PAGES, ...articleItems, ...glossaryItems];
  } catch (error) {
    console.error('Error building search index:', error);
    return STATIC_PAGES;
  }
}

