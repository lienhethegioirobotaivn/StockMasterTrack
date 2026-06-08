import {
  Hero,
  Categories,
  LearningPath,
  Articles,
  Community,
} from "@/app/knowledge/topic/_components";
import {
  getKnowledgeArticlesByIds,
  getKnowledgeCategories,
  getPopularKnowledgeArticleIds,
  getKnowledgeArticles,
} from "@/features/knowledge/api";
import { mapKnowledgeArticleList } from "@/features/knowledge/utils/mapKnowledgeArticle";
import { mapKnowledgeCategory } from "@/features/knowledge/utils/mapKnowledgeCategory";

export default async function KnowledgeTopicPage() {
  const [popularIdsData, categoriesData, allArticlesData] = await Promise.all([
    getPopularKnowledgeArticleIds(),
    getKnowledgeCategories(100),
    getKnowledgeArticles(100),
  ]);

  const popularIds = (popularIdsData.popularKnowledgeArticles ?? []).slice(
    0,
    3,
  );
  const popularData = await getKnowledgeArticlesByIds(popularIds);

  const popularArticles = (popularData.knowledgeArticles?.nodes ?? []).map(
    mapKnowledgeArticleList,
  );

  const allArticles = (allArticlesData.knowledgeArticles?.nodes ?? []).map(
    mapKnowledgeArticleList,
  );

  const categoryViewsMap = allArticles.reduce<Record<string, number>>(
    (acc, article) => {
      const slug = article.category?.slug;
      if (slug) {
        acc[slug] = (acc[slug] || 0) + (article.views ?? 0);
      }
      return acc;
    },
    {},
  );

  const categories = (categoriesData?.knowledgeCategories?.nodes ?? [])
    .filter((cat) => cat.slug !== "uncategorized")
    .map((cat) => {
      const mapped = mapKnowledgeCategory(cat);
      return {
        ...mapped,
        views: categoryViewsMap[mapped.slug] || 0,
      };
    });

  return (
    <main>
      <Hero />
      <Categories categories={categories} limit={20} />
      <LearningPath />
      <Articles
        articles={popularArticles}
        categories={categories}
        categoryLimit={6}
      />
      <Community />
    </main>
  );
}
