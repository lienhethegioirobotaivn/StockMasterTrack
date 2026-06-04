import { graphqlFetch } from "@/lib/graphql-client";

import { GetKnowledgeArticlesByIdsDocument } from "@/graphql/__generated__/graphql";

export async function getKnowledgeArticlesByIds(ids: (string | number)[]) {
  return graphqlFetch(GetKnowledgeArticlesByIdsDocument, {
    ids: ids.map(String),
  });
}
