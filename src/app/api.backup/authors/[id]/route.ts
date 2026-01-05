import { NextResponse } from 'next/server';
import { getAuthorById } from '@/lib/content';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const author = await getAuthorById(params.id);
    
    if (!author) {
      return NextResponse.json({ error: 'Author not found' }, { status: 404 });
    }
    
    return NextResponse.json(author);
  } catch (error) {
    console.error(`Error fetching author ${params.id}:`, error);
    return NextResponse.json({ error: 'Failed to fetch author' }, { status: 500 });
  }
}
