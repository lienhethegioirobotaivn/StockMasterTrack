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
import { createPageMetadata } from "@/lib/metadata";
import { HomeService } from "@/services/home.service";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Trang chủ",
  description: "Học đầu tư chứng khoán bài bản cùng chuyên gia thực chiến",
  path: "/",
  ogImage: "/home/hero.jpg",
});

export default async function HomePage() {
  const [pageData, knowledgeData] = await Promise.all([
    HomeService.getData(),
    getKnowledgeArticles(),
  ]);

  if (!pageData) return null;

  const rawArticles = knowledgeData?.knowledgeArticles?.nodes ?? [];
  const articles = rawArticles.slice(0, 4).map(mapKnowledgeArticleList);

  return (
    <>
      <main className="overflow-hidden">
        <Hero hero={pageData.hero} />
        <Features features={pageData.features} />
        <Courses courses={pageData.courses} />
        <Teachers teachers={pageData.teachers} />
        <Testimonials testimonials={pageData.testimonials} />
        <Community community={pageData.community} />
        <Knowledge knowledge={pageData.knowledge} articles={articles} />
      </main>
    </>
  );
}
