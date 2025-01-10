import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export default async function Post({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`);
  const markdown = fs.readFileSync(filePath, 'utf-8');
  const content = marked.parse(markdown);

  return (
    <div className="post-content" dangerouslySetInnerHTML={{ __html: content }} />
  );
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);
  return filenames.map((filename) => ({ slug: filename.replace('.md', '') }));
}
