import { LucideIcon } from "@/components/lucide-icon";
import { Button } from "@/components/ui";
import { KnowledgeCategory } from "@/features/knowledge/types";
import { ArrowRight } from "lucide-react";

const colorPalette = [
  { iconColor: "text-lime-600", bgColor: "bg-lime-50" },
  { iconColor: "text-fuchsia-700", bgColor: "bg-fuchsia-50" },
  { iconColor: "text-violet-600", bgColor: "bg-violet-50" },
  { iconColor: "text-blue-600", bgColor: "bg-blue-50" },
  { iconColor: "text-amber-600", bgColor: "bg-amber-50" },
  { iconColor: "text-sky-600", bgColor: "bg-sky-50" },
  { iconColor: "text-indigo-600", bgColor: "bg-indigo-50" },
  { iconColor: "text-emerald-600", bgColor: "bg-emerald-50" },
];

interface FeaturedTopicsProps {
  categories: KnowledgeCategory[];
  limit?: number;
}

export function FeaturedTopics({ categories, limit }: FeaturedTopicsProps) {
  const topics = [...categories]
    .sort((a, b) => b.count - a.count)
    .map((category, index) => {
      const color = colorPalette[index % colorPalette.length];

      return {
        ...category,
        iconColor: color.iconColor,
        bgColor: color.bgColor,
      };
    })
    .slice(0, limit);

  return (
    <section className="w-full px-6 lg:px-12 pt-6 lg:pt-12">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 md:mb-8">
        <h2 className="text-[26px] sm:text-2xl lg:text-[26px] font-bold uppercase text-gray-950">
          Chủ đề nổi bật
        </h2>

        {limit && (
          <Button className="flex items-center gap-1.5 sm:gap-2 lg:gap-1.5 rounded-lg border border-lime-600/30 px-4 py-2 text-sm font-medium text-lime-700 transition hover:bg-lime-50">
            Xem tất cả chủ đề
            <ArrowRight className="size-3.5 md:size-4" />
          </Button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
        {topics.map((topic) => (
          <div
            key={topic.slug}
            className="flex flex-col items-center justify-center rounded-xl border border-gray-100/80 bg-white p-5 text-center shadow-xs transition hover:shadow-md"
          >
            <div
              className={`flex size-12 lg:size-11 items-center justify-center rounded-full ${topic.bgColor}`}
            >
              <LucideIcon
                name={topic.icon}
                className={`size-6 lg:size-5 ${topic.iconColor}`}
              />
            </div>

            <h3 className="mt-4 text-sm font-bold text-slate-900 line-clamp-2 flex items-center justify-center">
              {topic.name}
            </h3>

            <p className="mt-2 text-xs text-gray-400">{topic.countFormatted}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
