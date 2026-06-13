import {
  Hero,
  FeaturedTopics,
  LatestArticles,
  PopularArticles,
  Resources,
  BottomCTA,
} from "@/app/knowledge/_components";

import {
  getKnowledgeArticles,
  getPopularKnowledgeArticleIds,
  getKnowledgeArticlesByIds,
  getKnowledgeCategories,
} from "@/features/knowledge/api";

import { mapKnowledgeArticleList } from "@/features/knowledge/utils/mapKnowledgeArticle";
import { mapKnowledgeCategory } from "@/features/knowledge/utils/mapKnowledgeCategory";
import { createPageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Kiến thức",
  description: "Kiến thức thực chiến - Cho nhà đầu tư thông minh",
  path: "/knowledge",
  ogImage: "/knowledge/hero.jpg",
});

export default async function KnowledgePage() {
  const popularIdsData = await getPopularKnowledgeArticleIds();
  const popularIds = popularIdsData.popularKnowledgeArticles ?? [];

  const [latestData, popularData, categoriesData] = await Promise.all([
    getKnowledgeArticles(),
    getKnowledgeArticlesByIds(popularIds),
    getKnowledgeCategories(100),
  ]);

  const articles = (latestData.knowledgeArticles?.nodes ?? []).map(
    mapKnowledgeArticleList,
  );
  const popularArticles = (popularData.knowledgeArticles?.nodes ?? []).map(
    mapKnowledgeArticleList,
  );

  const categories = (categoriesData?.knowledgeCategories?.nodes ?? [])
    .filter((cat) => cat.slug !== "uncategorized")
    .map(mapKnowledgeCategory);

  return (
    <main>
      <Hero />
      <div className="mx-auto flex w-full flex-col gap-12">
        <FeaturedTopics categories={categories} limit={6} />
        <LatestArticles articles={articles} />
        <div className="mx-auto grid w-full grid-cols-1 gap-8 px-6 py-6 lg:grid-cols-[1.5fr_1fr] lg:px-12 lg:py-4">
          <PopularArticles articles={popularArticles} />
          <Resources />
        </div>
        <BottomCTA />
      </div>
    </main>
  );
}
