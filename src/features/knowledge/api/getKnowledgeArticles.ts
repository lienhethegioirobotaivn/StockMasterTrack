import { graphqlFetch } from "@/lib/graphql-client";
import { GetKnowledgeArticlesDocument } from "@/graphql/__generated__/graphql";

export async function getKnowledgeArticles(first: number = 5) {
  return graphqlFetch(GetKnowledgeArticlesDocument, {
    first,
  });
}
