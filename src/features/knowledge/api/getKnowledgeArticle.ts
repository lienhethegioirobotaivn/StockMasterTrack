import { graphqlFetch } from "@/lib/graphql-client";

import { GetKnowledgeArticleDocument } from "@/graphql/__generated__/graphql";

export async function getKnowledgeArticle(slug: string) {
  return graphqlFetch(GetKnowledgeArticleDocument, {
    slug,
  });
}
