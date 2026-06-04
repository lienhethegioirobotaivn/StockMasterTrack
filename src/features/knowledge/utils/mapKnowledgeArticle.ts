import {
  GetKnowledgeArticlesQuery,
  GetKnowledgeArticleQuery,
} from "@/graphql/__generated__/graphql";
import { KnowledgeArticle } from "@/features/knowledge/types";

type RawArticleList = NonNullable<
  NonNullable<GetKnowledgeArticlesQuery["knowledgeArticles"]>["nodes"]
>[number];
type RawArticleDetail = NonNullable<
  GetKnowledgeArticleQuery["knowledgeArticle"]
>;

function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return "";

  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "";

    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  } catch (error) {
    console.error(`Date format error for "${dateString}": `, error);
    return "";
  }
}

function formatViews(viewsCount: number): string {
  return new Intl.NumberFormat("vi-VN").format(viewsCount);
}

function mapSharedFields(article: RawArticleList | RawArticleDetail) {
  const author = article.knowledgeArticleFields?.author?.nodes?.[0];
  const category = article.knowledgeCategories?.nodes?.[0];
  const rawViews = 10000 + (article.views ?? 0);

  return {
    id: article.id,
    databaseId: article.databaseId,
    title: article.title ?? "",
    date: formatDate(article.date),
    slug: article.slug ?? "",
    excerpt: article.excerpt ?? "",
    readingTime: article.knowledgeArticleFields?.readingTime ?? null,
    category: category
      ? {
          name: category.name ?? "",
          slug: category.slug ?? "",
        }
      : null,
    image: article.featuredImage?.node
      ? {
          url: article.featuredImage.node.sourceUrl ?? "",
          alt: article.featuredImage.node.altText ?? "",
        }
      : null,
    author: author
      ? {
          name: author.title ?? "",
          role: author.authorFields?.role ?? null,
          avatar: author.authorFields?.avatar?.node
            ? {
                url: author.authorFields.avatar.node.sourceUrl ?? "",
                alt: author.authorFields.avatar.node.altText ?? "",
              }
            : null,
        }
      : null,
    views: rawViews,
    viewsFormatted: formatViews(rawViews),
  };
}

export function mapKnowledgeArticleList(
  article: RawArticleList,
): KnowledgeArticle {
  return {
    ...mapSharedFields(article),
    content: "",
  };
}

export function mapKnowledgeArticleDetail(
  article: RawArticleDetail,
): KnowledgeArticle {
  return {
    ...mapSharedFields(article),
    content: article.content ?? "",
  };
}
