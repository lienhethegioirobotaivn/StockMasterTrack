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
  getKnowledgeArticlesPaginated,
  getPopularKnowledgeArticleIds,
} from "@/features/knowledge/api";

import { KNOWLEDGE_ARTICLES_PER_PAGE } from "@/features/knowledge/constants";

import { mapKnowledgeArticleList } from "@/features/knowledge/utils/mapKnowledgeArticle";

interface KnowledgePageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function KnowledgePage({
  searchParams,
}: KnowledgePageProps) {
  const params = await searchParams;

  const currentPage = Number(params.page ?? "1");

  const popularIdsData = await getPopularKnowledgeArticleIds();

  const popularIds = popularIdsData.popularKnowledgeArticles ?? [];

  const [articlesData, popularData] = await Promise.all([
    getKnowledgeArticlesPaginated(100),
    getKnowledgeArticlesByIds(popularIds),
  ]);

  const allArticles = (articlesData.knowledgeArticles?.nodes ?? []).map(
    mapKnowledgeArticleList,
  );

  const popularArticles = (popularData.knowledgeArticles?.nodes ?? []).map(
    mapKnowledgeArticleList,
  );

  const totalPages = Math.ceil(
    allArticles.length / KNOWLEDGE_ARTICLES_PER_PAGE,
  );

  const safePage = Math.min(Math.max(currentPage, 1), Math.max(totalPages, 1));

  const start = (safePage - 1) * KNOWLEDGE_ARTICLES_PER_PAGE;

  const articles = allArticles.slice(
    start,
    start + KNOWLEDGE_ARTICLES_PER_PAGE,
  );

  return (
    <main>
      <Hero />
      <div className="mx-auto px-6 py-8 lg:px-8">
        <FilterBar />
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="space-y-4">
              <ArticleCard articles={articles} />
            </div>
            <Pagination currentPage={safePage} totalPages={totalPages} />
          </div>
          <aside className="space-y-6">
            <SidebarCategories limit={6} />
            <SidebarTrending articles={popularArticles} />
            <SidebarNewsletter />
          </aside>
        </div>
      </div>
    </main>
  );
}
