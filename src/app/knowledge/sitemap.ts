import { MetadataRoute } from "next";
import { getKnowledgeArticles } from "@/features/knowledge/api";
import { env } from "@/lib/env";

const BASE_URL =
  env.NEXT_PUBLIC_SITE_URL || "https://www.stockmastertrack.edu.vn";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const data = await getKnowledgeArticles(1000);
    const articles = data?.knowledgeArticles?.nodes ?? [];

    return articles
      .filter((a) => a.slug)
      .map((article) => ({
        url: `${BASE_URL}/knowledge/${article.slug}`,
        lastModified: new Date(article.date ?? Date.now()),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
  } catch {
    return [];
  }
}
