#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the next article ID
function getNextArticleId() {
  const articlesDir = path.join(__dirname, '../src/content/articles');
  const files = fs.readdirSync(articlesDir);
  
  const ids = files
    .filter(file => file.startsWith('sbi-') && file.endsWith('.md'))
    .map(file => {
      const match = file.match(/sbi-(\d+)/);
      return match ? parseInt(match[1]) : 0;
    })
    .filter(id => !isNaN(id));
  
  const maxId = Math.max(0, ...ids);
  return String(maxId + 1).padStart(3, '0');
}

// Get current date in YYYY-MM-DD format
function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

// Create new article
function createNewArticle(title, author = 'unknown') {
  const articleId = getNextArticleId();
  const slug = `sbi-${articleId}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  const filename = `${slug}.md`;
  
  const template = fs.readFileSync(path.join(__dirname, '../templates/article-template.md'), 'utf8');
  
  const articleContent = template
    .replace('SBI-XXX', `SBI-${articleId}`)
    .replace('Your Article Title Here', title)
    .replace('"author-id"', `"${author}"`)
    .replace('"2024-12-22"', `"${getCurrentDate()}"`)
    .replace('# Your Article Title Here', `# ${title}`);
  
  const articlePath = path.join(__dirname, '../src/content/articles', filename);
  fs.writeFileSync(articlePath, articleContent);
  
  console.log(`✅ Created new article: ${filename}`);
  console.log(`📝 Edit it at: src/content/articles/${filename}`);
  console.log(`🔗 URL will be: /intelligence/${slug}`);
  console.log('\nRemember to:');
  console.log('- Add your content');
  console.log('- Set published: true when ready');
  console.log('- Update tags and excerpt');
}

// Command line interface
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: node scripts/new-article.js "Article Title" [author-id]');
  console.log('Example: node scripts/new-article.js "Bitcoin and Energy" marcus-dapp');
  process.exit(1);
}

const title = args[0];
const author = args[1] || 'unknown';

createNewArticle(title, author);
