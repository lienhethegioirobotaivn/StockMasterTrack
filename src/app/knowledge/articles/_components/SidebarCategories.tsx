import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getKnowledgeCategories } from "@/features/knowledge/api";
import { mapKnowledgeCategory } from "@/features/knowledge/utils/mapKnowledgeCategory";
import { LucideIcon } from "@/components/lucide-icon";

interface SidebarCategoriesProps {
  limit?: number;
}

export async function SidebarCategories({ limit }: SidebarCategoriesProps) {
  const res = await getKnowledgeCategories(100);
  const wpCategories = res?.knowledgeCategories?.nodes || [];

  const topics = wpCategories
    .filter((cat) => cat.slug !== "uncategorized")
    .map(mapKnowledgeCategory)
    .sort((a, b) => b.count - a.count)
    .map((category) => {
      return {
        ...category,
      };
    })
    .slice(0, limit);

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5">
      <h3 className="text-xl sm:text-2xl lg:text-base font-extrabold uppercase text-gray-950 text-center lg:text-left">
        Danh mục bài viết
      </h3>
      <div className="mt-4 space-y-1.5">
        {topics.map((cat) => {
          return (
            <Link
              key={cat.name}
              href="#"
              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-emerald-50/50 transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <LucideIcon
                  name={cat.icon}
                  className="size-4 text-gray-400 group-hover:text-emerald-700"
                />
                <span className="group-hover:text-emerald-700">{cat.name}</span>
              </div>
              <span className="text-xs font-medium text-gray-400 group-hover:text-emerald-700 bg-gray-50 px-2 py-0.5 rounded-md">
                {cat.countFormatted}
              </span>
            </Link>
          );
        })}
      </div>
      <Link
        href="#"
        className="mt-4 flex items-center justify-center gap-1 text-sm font-semibold text-lime-600 hover:text-lime-700 pt-3 border-t border-gray-50"
      >
        Xem tất cả danh mục <ArrowRight className="size-3.5" />
      </Link>
    </div>
  );
}
