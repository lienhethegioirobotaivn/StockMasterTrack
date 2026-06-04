import Image from "next/image";
import { Eye } from "lucide-react";
import { KnowledgeArticle } from "@/features/knowledge/types";
import Link from "next/link";

interface PopularArticlesProps {
  articles: KnowledgeArticle[];
}

const CATEGORY_COLORS = [
  "text-slate-500",
  "text-lime-600",
  "text-fuchsia-700",
  "text-slate-600",
  "text-blue-600",
];

export function PopularArticles({ articles }: PopularArticlesProps) {
  return (
    <section className="w-full lg:py-5">
      <h2 className="mb-6 text-2xl font-bold uppercase text-slate-900">
        Bài viết được quan tâm
      </h2>

      <div className="relative flex flex-col">
        <div className="absolute top-7 bottom-7 left-2.5 w-px sm:left-3.5 sm:bg-gray-200 lg:top-8 lg:bottom-8" />

        {articles.map((article, index) => (
          <Link
            key={article.slug}
            href={`/knowledge/${article.slug}`}
            className="relative flex items-center gap-3 py-3.5 md:gap-4"
          >
            <div className="z-10 hidden size-5 shrink-0 items-center justify-center rounded-full bg-lime-600 text-xs font-bold text-white ring-4 ring-white sm:flex sm:size-7">
              {index + 1}
            </div>

            <div className="relative aspect-16/10 w-20 shrink-0 overflow-hidden rounded-lg md:w-28">
              <Image
                src={article.image?.url ?? ""}
                alt={article.image?.alt ?? ""}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="line-clamp-2 text-[13px] font-bold leading-snug text-slate-900 sm:text-base lg:text-base">
                  {article.title}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] md:text-[11px]">
                  <span
                    className={`font-bold ${
                      CATEGORY_COLORS[index % CATEGORY_COLORS.length]
                    }`}
                  >
                    {article.category?.name}
                  </span>

                  <span className="text-gray-300">|</span>

                  <span className="text-gray-400">{article.date}</span>
                </div>

                <div className="mt-1 flex items-center gap-1 text-xs text-gray-400 sm:hidden">
                  <Eye className="size-3" />
                  {article.viewsFormatted}
                  <span>lượt xem</span>
                </div>
              </div>

              <div className="hidden shrink-0 items-center gap-1 text-[11px] text-gray-400 sm:flex md:text-xs">
                <Eye className="size-3.5" />
                {article.viewsFormatted}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
