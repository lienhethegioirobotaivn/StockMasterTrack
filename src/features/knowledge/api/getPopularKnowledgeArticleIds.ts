import { graphqlFetch } from "@/lib/graphql-client";

import { GetPopularKnowledgeArticleIdsDocument } from "@/graphql/__generated__/graphql";

export async function getPopularKnowledgeArticleIds() {
  return graphqlFetch(GetPopularKnowledgeArticleIdsDocument);
}
