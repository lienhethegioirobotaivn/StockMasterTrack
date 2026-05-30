import Image from "next/image";
import { Eye, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { KnowledgeArticle } from "@/features/knowledge/types";
import Link from "next/link";

interface LatestArticlesProps {
  articles: KnowledgeArticle[];
}

function getColorsFromString(str: string = "default") {
  const colors = [
    "bg-lime-50 text-lime-700 border-lime-600/30",
    "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-600/30",
    "bg-indigo-50 text-indigo-700 border-indigo-600/30",
    "bg-orange-50 text-orange-700 border-orange-600/30",
    "bg-emerald-50 text-emerald-700 border-emerald-600/30",
    "bg-cyan-50 text-cyan-700 border-cyan-600/30",
  ];

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

export function LatestArticles({ articles }: LatestArticlesProps) {
  if (!articles || articles.length === 0) return null;

  const firstArticle = articles[0];

  return (
    <section className="w-full px-6 lg:px-12 pt-6 lg:pt-4">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        <h2 className="text-[26px] sm:text-2xl lg:text-[26px] font-bold uppercase text-slate-900">
          Bài viết mới nhất
        </h2>
        <Button className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition hover:text-gray-900">
          Xem tất cả bài viết
          <ArrowRight className="size-3.5 md:size-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Link
          href={`knowledge/${firstArticle.slug}`}
          className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-xs overflow-hidden"
        >
          <div className="relative aspect-16/11 sm:aspect-video w-full overflow-hidden">
            <Image
              src={firstArticle.image?.url ?? ""}
              alt={firstArticle.image?.alt ?? ""}
              fill
              className="object-fill"
            />
          </div>

          <div className="mt-4 sm:mt-2 flex flex-1 flex-col justify-between p-4">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`rounded-md border px-2.5 py-0.5 text-[11px] font-semibold md:text-xs ${getColorsFromString(firstArticle.category?.name)}`}
                >
                  {firstArticle.category?.name}
                </span>
                <span className="text-[11px] text-gray-400 sm:text-xs">
                  {firstArticle.date}
                </span>
              </div>

              <h3 className="mt-3 text-base sm:text-lg lg:text-[22px] font-bold text-slate-900 line-clamp-2">
                {firstArticle.title}
              </h3>

              <div
                className="mt-2 line-clamp-2 lg:line-clamp-3 text-xs sm:text-[14.5px] leading-relaxed text-gray-500"
                dangerouslySetInnerHTML={{ __html: firstArticle.excerpt ?? "" }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
              <div className="flex items-center gap-2">
                <div className="size-6 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={firstArticle.author?.avatar?.url ?? ""}
                    alt={firstArticle.author?.avatar?.alt ?? ""}
                    width={16}
                    height={16}
                    className="size-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-[13px] font-medium text-gray-600">
                  {firstArticle.author?.name}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Eye className="size-3.5" /> 10.000
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="size-3.5" /> 0
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {articles.slice(1).map((article) => (
            <Link
              key={article.title}
              href={`/knowledge/${article.slug}`}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-xs overflow-hidden"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden">
                <Image
                  src={article.image?.url ?? ""}
                  alt={article.image?.alt ?? ""}
                  fill
                  className="object-fill"
                />
                <div className="absolute left-3 top-2">
                  <span
                    className={`rounded-md border px-2.5 py-0.5 text-[11px] font-bold ${getColorsFromString(article.category?.name)}`}
                  >
                    {article.category?.name}
                  </span>
                </div>
              </div>

              <div className="mt-1.5 flex flex-1 flex-col justify-between pb-4 px-4">
                <div>
                  <span className="text-[10px] text-gray-400 md:text-[11px]">
                    {article.date}
                  </span>
                  <h3 className="mt-1.5 line-clamp-2 text-base lg:text-sm font-bold leading-snug text-slate-900">
                    {article.title}
                  </h3>
                </div>

                <div className="mt-4 flex items-center gap-3 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Eye className="size-3.5" /> 10.000
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="size-3.5" /> 0
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
