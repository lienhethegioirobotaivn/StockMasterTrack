import { graphqlFetch } from "@/lib/graphql-client";

import { ReactToKnowledgeArticleDocument } from "@/graphql/__generated__/graphql";

export async function reactToKnowledgeArticle(
  postId: number,
  type: "like" | "dislike",
) {
  const result = await graphqlFetch(ReactToKnowledgeArticleDocument, {
    postId,
    type,
  });

  return result.reactToArticle;
}
