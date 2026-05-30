import { graphqlFetch } from "@/lib/graphql-client";

import { GetKnowledgeArticlesDocument } from "@/graphql/__generated__/graphql";

export async function getKnowledgeArticles() {
  return graphqlFetch(GetKnowledgeArticlesDocument, {
    first: 5,
  });
}
