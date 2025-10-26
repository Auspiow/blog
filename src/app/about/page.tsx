import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "./about.css";
import AboutIntro from "./AboutIntro";
import SkillsSection from "@/components/SkillCard/SkillsSection";

export default function AboutPage() {
  const filePath = path.join(process.cwd(), "src", "content", "about.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return (
    <section className="about-page">
      <main className="about-container">
        <AboutIntro />
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {fileContent}
        </ReactMarkdown>
        <SkillsSection />
      </main>
    </section>
  );
}
