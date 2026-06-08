import { graphqlFetch } from "@/lib/graphql-client";
import { GetKnowledgeCategoriesDocument } from "@/graphql/__generated__/graphql";

export async function getKnowledgeCategories(first?: number | null) {
  return graphqlFetch(GetKnowledgeCategoriesDocument, {
    first,
  });
}
