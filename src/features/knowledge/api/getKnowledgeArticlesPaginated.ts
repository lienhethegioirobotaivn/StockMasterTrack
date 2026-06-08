import { graphqlFetch } from "@/lib/graphql-client";
import { GetKnowledgeArticlesPaginatedDocument } from "@/graphql/__generated__/graphql";

export async function getKnowledgeArticlesPaginated(
  first: number,
  after?: string | null,
) {
  return graphqlFetch(GetKnowledgeArticlesPaginatedDocument, {
    first,
    after,
  });
}
