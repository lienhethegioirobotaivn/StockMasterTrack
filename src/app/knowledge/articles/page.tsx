import {
  Hero,
  FilterBar,
  ArticleCard,
  Pagination,
  SidebarCategories,
  SidebarTrending,
  SidebarNewsletter,
} from "@/app/knowledge/articles/_components";
import {
  getKnowledgeArticlesByIds,
  getPopularKnowledgeArticleIds,
} from "@/features/knowledge/api";
import { mapKnowledgeArticleList } from "@/features/knowledge/utils/mapKnowledgeArticle";

export default async function KnowledgePage() {
  const popularIdsData = await getPopularKnowledgeArticleIds();
  const popularIds = popularIdsData.popularKnowledgeArticles ?? [];

  const [popularData] = await Promise.all([
    getKnowledgeArticlesByIds(popularIds),
  ]);

  const popularArticles = (popularData.knowledgeArticles?.nodes ?? []).map(
    mapKnowledgeArticleList,
  );

  return (
    <main>
      <Hero />
      <div className="mx-auto py-8 px-6 lg:px-8">
        <FilterBar />
        <div className="mt-8 grid grid-cols-1 gap-12 lg:gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <ArticleCard />
            </div>
            <Pagination />
          </div>
          <aside className="space-y-6">
            <SidebarCategories />
            <SidebarTrending articles={popularArticles} />
            <SidebarNewsletter />
          </aside>
        </div>
      </div>
    </main>
  );
}
