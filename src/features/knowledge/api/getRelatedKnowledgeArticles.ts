import { graphqlFetch } from "@/lib/graphql-client";
import { GetRelatedKnowledgeArticlesDocument } from "@/graphql/__generated__/graphql";

export async function getRelatedKnowledgeArticles(
  categorySlugs: string[],
  currentArticleId: string | number,
) {
  return graphqlFetch(GetRelatedKnowledgeArticlesDocument, {
    categorySlugs,
    excludeIds: [String(currentArticleId)],
    first: 5,
  });
}
