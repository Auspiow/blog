import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "../article.css";

// ✅ 定义 props 类型：params 是一个 Promise<{ slug: string }>
interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  // ✅ 等待 Promise 解析出 slug
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const githubRawUrl = `https://raw.githubusercontent.com/Auspiow/home/main/blog-frontend/src/content/articles/${decodedSlug}.md`;

  const res = await fetch(githubRawUrl);
  if (!res.ok) {
    return (
      <main className="article-page">
        <div className="article-container">
          <h1>404 Not Found</h1>
          <p>文章不存在。</p>
        </div>
      </main>
    );
  }

  const fileContent = await res.text();
  const { content, data } = matter(fileContent);

  return (
    <main className="article-page">
      <div className="article-container">
        <h1>{data.title}</h1>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </main>
  );
}
