import { print } from "graphql";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { env } from "@/lib/env";

type GraphQLError = {
  message: string;
};

type GraphQLResponse<T> = {
  data: T;
  errors?: GraphQLError[];
};

export async function graphqlFetch<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables,
): Promise<TResult> {
  const response = await fetch(env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
    body: JSON.stringify({
      query: print(document),
      variables,
    }),
  });

  const json = (await response.json()) as GraphQLResponse<TResult>;

  if (json.errors?.length) {
    throw new Error(json.errors.map((error) => error.message).join(", "));
  }

  return json.data;
}
