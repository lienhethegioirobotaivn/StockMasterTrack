import {
  Community,
  Courses,
  Features,
  Hero,
  Knowledge,
  Teachers,
  Testimonials,
} from "@/app/(home)/_components";
import { getKnowledgeArticles } from "@/features/knowledge/api";
import { mapKnowledgeArticleList } from "@/features/knowledge/utils/mapKnowledgeArticle";

export default async function HomePage() {
  const knowledgeData = await getKnowledgeArticles();
  const rawArticles = knowledgeData.knowledgeArticles?.nodes ?? [];
  const articles = rawArticles.slice(0, 4).map(mapKnowledgeArticleList);

  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Courses />
        <Teachers />
        <Testimonials />
        <Community />
        <Knowledge articles={articles} />
      </main>
    </>
  );
}
