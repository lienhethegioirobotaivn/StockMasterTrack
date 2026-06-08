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
} from "@/features/knowledge/api";

import { mapKnowledgeArticleList } from "@/features/knowledge/utils/mapKnowledgeArticle";

export default async function KnowledgePage() {
  const popularIdsData = await getPopularKnowledgeArticleIds();
  const popularIds = popularIdsData.popularKnowledgeArticles ?? [];

  const [latestData, popularData] = await Promise.all([
    getKnowledgeArticles(),
    getKnowledgeArticlesByIds(popularIds),
  ]);

  const articles = (latestData.knowledgeArticles?.nodes ?? []).map(
    mapKnowledgeArticleList,
  );
  const popularArticles = (popularData.knowledgeArticles?.nodes ?? []).map(
    mapKnowledgeArticleList,
  );

  return (
    <main>
      <Hero />
      <div className="mx-auto flex w-full flex-col gap-12">
        <FeaturedTopics limit={6} />
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
