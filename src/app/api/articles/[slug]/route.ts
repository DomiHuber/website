import { NextResponse } from 'next/server';
import { getArticleBySlug } from '@/lib/content';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const article = await getArticleBySlug(params.slug);
    
    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
    
    return NextResponse.json(article);
  } catch (error) {
    console.error(`Error fetching article ${params.slug}:`, error);
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 });
  }
}
