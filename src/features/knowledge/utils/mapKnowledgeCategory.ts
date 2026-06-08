import { GetKnowledgeCategoriesQuery } from "@/graphql/__generated__/graphql";
import { KnowledgeCategory } from "@/features/knowledge/types";

type RawCategoryNode = NonNullable<
  NonNullable<GetKnowledgeCategoriesQuery["knowledgeCategories"]>["nodes"]
>[number];

export function mapKnowledgeCategory(cat: RawCategoryNode): KnowledgeCategory {
  const countValue = cat.count ?? 0;
  return {
    name: cat.name ?? "",
    slug: cat.slug ?? "",
    icon: cat.knowledgeCategoryFields?.icon ?? "",
    count: countValue,
    countFormatted: `${countValue} bài viết`,
  };
}
