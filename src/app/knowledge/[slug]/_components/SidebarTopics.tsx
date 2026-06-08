import { getKnowledgeCategories } from "@/features/knowledge/api";
import { mapKnowledgeCategory } from "@/features/knowledge/utils/mapKnowledgeCategory";
import { ArrowRight } from "lucide-react";

interface SidebarTopicsProps {
  limit?: number;
}

export async function SidebarTopics({ limit }: SidebarTopicsProps) {
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
    <section className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-xs">
      <h2 className="text-[17px] sm:text-lg font-bold uppercase text-slate-900">
        Chủ đề nổi bật
      </h2>
      <div className="mt-4 flex flex-col gap-2">
        {topics.map((topic, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-lg border border-gray-50 bg-slate-50/40 px-3 py-2.5 transition cursor-pointer hover:bg-emerald-50/50 group"
          >
            <span className="text-[13px] sm:text-sm font-semibold text-slate-700 transition group-hover:text-emerald-700">
              {topic.name}
            </span>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-400">
              <span>{topic.countFormatted}</span>
              <ArrowRight className="size-3 transition group-hover:translate-x-0.5 group-hover:text-emerald-600" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
