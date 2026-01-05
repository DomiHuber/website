import { NextResponse } from 'next/server';
import { getForesightArticleBySlug } from '@/lib/content';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const article = await getForesightArticleBySlug(params.slug);
    
    if (!article) {
      return NextResponse.json({ error: 'Foresight article not found' }, { status: 404 });
    }
    
    return NextResponse.json(article);
  } catch (error) {
    console.error(`Error fetching foresight article ${params.slug}:`, error);
    return NextResponse.json({ error: 'Failed to fetch foresight article' }, { status: 500 });
  }
}
