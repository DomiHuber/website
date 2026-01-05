import { Article, Author } from '@/lib/content';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
import ArticleWithGlossary from './ArticleWithGlossary';
import ReadingControls from './ReadingControls';
import TableOfContents from './TableOfContents';

interface ArticleContentProps {
  article: Article;
  author?: Author;
}

const ArticleContent = ({ article, author }: ArticleContentProps) => {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Article Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        
        <div className="flex items-center gap-4 text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{author?.name || article.author}</span>
          </div>
          <span>Block {article.blockHeight}</span>
        </div>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          {article.excerpt}
        </p>
      </header>
      
      {/* Table of Contents */}
      <TableOfContents content={article.content} />
      
      {/* Article Content with Glossary */}
      <div className="article-content transition-all duration-200">
        <ArticleWithGlossary content={article.content} />
      </div>
    </article>
  );
};

export { ReadingControls };

export default ArticleContent;