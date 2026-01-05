import { NextResponse } from 'next/server';
import { getAllForesightArticles } from '@/lib/content';

export async function GET() {
  try {
    const articles = await getAllForesightArticles();
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching foresight articles:', error);
    return NextResponse.json({ error: 'Failed to fetch foresight articles' }, { status: 500 });
  }
}
