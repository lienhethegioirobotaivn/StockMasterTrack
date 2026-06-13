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
  getKnowledgeCategories,
} from "@/features/knowledge/api";
import { KnowledgeArticle } from "@/features/knowledge/types";
import {
  mapKnowledgeArticleDetail,
  mapKnowledgeArticleList,
} from "@/features/knowledge/utils/mapKnowledgeArticle";
import { mapKnowledgeCategory } from "@/features/knowledge/utils/mapKnowledgeCategory";
import { env } from "@/lib/env";
import { Metadata } from "next";

interface KnowledgeDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: KnowledgeDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const data = await getKnowledgeArticle(slug);
  const article = data.knowledgeArticle;

  if (!article) {
    return {
      title: "Không tìm thấy bài viết",
      robots: { index: false },
    };
  }

  const BASE_URL = env.NEXT_PUBLIC_SITE_URL;
  const pageUrl = `${BASE_URL}/knowledge/${slug}`;
  const image = article.featuredImage?.node?.sourceUrl || "";

  const rawExcerpt = article.excerpt || article.title || "";
  const description = rawExcerpt.replace(/<[^>]*>/g, "").trim();

  const keywords =
    article.knowledgeCategories?.nodes
      ?.map((cat) => cat.name)
      .filter((name): name is string => Boolean(name)) ?? [];

  return {
    title: article.title ?? "Bài viết",
    description,
    keywords,
    alternates: { canonical: pageUrl },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    openGraph: {
      title: article.title ?? "",
      description,
      url: pageUrl,
      siteName: "Stock Master Track",
      type: "article",

      publishedTime: article.date ?? undefined,
      modifiedTime: article.date ?? undefined,

      images: image
        ? [{ url: image, width: 1200, height: 630, alt: article.title ?? "" }]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: article.title ?? "",
      description,
      images: image ? [image] : [],
    },
  };
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

  const [relatedData, categoriesData] = await Promise.all([
    categorySlugs.length > 0
      ? getRelatedKnowledgeArticles(categorySlugs, article.databaseId)
      : Promise.resolve(null),
    getKnowledgeCategories(100),
  ]);

  let relatedArticles: KnowledgeArticle[] = [];
  if (relatedData) {
    const allArticles =
      relatedData.knowledgeCategories?.nodes?.flatMap(
        (cat) => cat.knowledgeArticles?.nodes ?? [],
      ) ?? [];

    const uniqueArticles = Array.from(
      new Map(allArticles.map((item) => [item.databaseId, item])).values(),
    );

    relatedArticles = uniqueArticles.slice(0, 5).map(mapKnowledgeArticleList);
  }

  const categories = (categoriesData?.knowledgeCategories?.nodes ?? [])
    .filter((cat) => cat.slug !== "uncategorized")
    .map(mapKnowledgeCategory);

  return (
    <>
      <ViewTracker postId={article.databaseId} />

      <main className="mx-auto w-full px-6 lg:px-12 py-4 md:py-8">
        <Breadcrumb article={article} />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr] xl:grid-cols-[1.8fr_1fr]">
          <ArticleContent article={article} />
          <aside className="flex flex-col gap-6 lg:max-w-sm xl:max-w-md">
            <RelatedArticles articles={relatedArticles} />
            <SidebarTopics categories={categories} limit={6} />
            <SidebarCTA />
          </aside>
        </div>
      </main>
    </>
  );
}
