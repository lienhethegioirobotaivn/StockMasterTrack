import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { KnowledgeArticle } from "@/features/knowledge/types";

interface SidebarTrendingProps {
  articles: KnowledgeArticle[];
}

export function SidebarTrending({ articles }: SidebarTrendingProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5">
      <h3 className="text-xl sm:text-2xl lg:text-base font-extrabold uppercase text-gray-950 text-center lg:text-left">
        Bài viết được quan tâm
      </h3>
      <div className="mt-4 space-y-4">
        {articles.map((article, index) => (
          <div key={article.id} className="flex items-center gap-3">
            <div className="hidden sm:flex size-5 shrink-0 items-center justify-center rounded-full bg-lime-600 text-[11px] font-bold text-white">
              {index + 1}
            </div>
            <div className="relative w-20 sm:w-38 lg:w-20 aspect-21/14 shrink-0 overflow-hidden rounded-md bg-gray-50">
              <Image
                src={article.image?.url ?? ""}
                alt={article.image?.alt ?? ""}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <Link
                href={`/knowledge/${article.slug}`}
                className="hover:text-lime-600 line-clamp-2 sm:line-clamp-3 lg:line-clamp-2 text-sm sm:text-base lg:text-sm font-bold text-gray-900 leading-tight"
              >
                {article.title}
              </Link>
              <span className="mt-1 text-xs sm:text-[13px] lg:text-xs text-gray-400">
                {article.viewsFormatted} lượt xem
              </span>
            </div>
          </div>
        ))}
      </div>
      <Link
        href={"/knowledge"}
        className="mt-4 flex items-center justify-center gap-1 text-sm font-semibold text-lime-600 hover:text-lime-700 pt-3 border-t border-gray-50"
      >
        Xem tất cả <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
