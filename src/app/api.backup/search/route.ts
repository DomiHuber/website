import { NextResponse } from 'next/server';
import { getSearchIndex } from '@/lib/search';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    
    const allItems = await getSearchIndex();
    
    if (!query) {
      return NextResponse.json(allItems);
    }
    
    // Simple search: filter by title, description, or tags
    const queryLower = query.toLowerCase();
    const filtered = allItems.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(queryLower);
      const descMatch = item.description?.toLowerCase().includes(queryLower);
      const tagMatch = item.tags?.some(tag => tag.toLowerCase().includes(queryLower));
      
      return titleMatch || descMatch || tagMatch;
    });
    
    return NextResponse.json(filtered);
  } catch (error) {
    console.error('Error in search API:', error);
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}

