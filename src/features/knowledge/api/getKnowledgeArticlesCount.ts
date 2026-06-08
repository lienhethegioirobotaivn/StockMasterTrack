import { graphqlFetch } from "@/lib/graphql-client";

import { GetKnowledgeArticlesCountDocument } from "@/graphql/__generated__/graphql";

export async function getKnowledgeArticlesCount() {
  const data = await graphqlFetch(GetKnowledgeArticlesCountDocument);

  return data.knowledgeArticlesCount;
}
