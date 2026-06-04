import {
  ArticleContent,
  RelatedArticles,
  SidebarTopics,
  SidebarCTA,
  Breadcrumb,
  ViewTracker,
} from "@/app/knowledge/[slug]/_components";
import {
  getKnowledgeArticle,
  getRelatedKnowledgeArticles,
} from "@/features/knowledge/api";
import { KnowledgeArticle } from "@/features/knowledge/types";
import {
  mapKnowledgeArticleDetail,
  mapKnowledgeArticleList,
} from "@/features/knowledge/utils/mapKnowledgeArticle";

interface KnowledgeDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function KnowledgeDetailPage({
  params,
}: KnowledgeDetailPageProps) {
  const { slug } = await params;
  const data = await getKnowledgeArticle(slug);
  const rawArticle = data.knowledgeArticle;

  if (!rawArticle) {
    return (
      <div className="text-3xl font-bold text-center">
        Không tìm thấy bài viết
      </div>
    );
  }

  const article = mapKnowledgeArticleDetail(rawArticle);

  const categorySlugs =
    (rawArticle.knowledgeCategories?.nodes
      ?.map((cat) => cat.slug)
      .filter(Boolean) as string[]) || [];

  let relatedArticles: KnowledgeArticle[] = [];

  if (categorySlugs.length > 0) {
    const relatedData = await getRelatedKnowledgeArticles(
      categorySlugs,
      article.databaseId,
    );

    const allArticles =
      relatedData.knowledgeCategories?.nodes?.flatMap(
        (cat) => cat.knowledgeArticles?.nodes ?? [],
      ) ?? [];

    const uniqueArticles = Array.from(
      new Map(allArticles.map((item) => [item.databaseId, item])).values(),
    );

    relatedArticles = uniqueArticles.slice(0, 5).map(mapKnowledgeArticleList);
  }

  return (
    <>
      <ViewTracker postId={article.databaseId} />

      <main className="mx-auto w-full px-6 lg:px-12 py-4 md:py-8">
        <Breadcrumb article={article} />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr] xl:grid-cols-[1.8fr_1fr]">
          <ArticleContent article={article} />
          <aside className="flex flex-col gap-6 lg:max-w-sm xl:max-w-md">
            <RelatedArticles articles={relatedArticles} />
            <SidebarTopics />
            <SidebarCTA />
          </aside>
        </div>
      </main>
    </>
  );
}
