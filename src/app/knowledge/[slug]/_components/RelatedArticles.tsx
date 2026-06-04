import { KnowledgeArticle } from "@/features/knowledge/types";
import Image from "next/image";
import Link from "next/link";

interface RelatedArticlesProps {
  articles: KnowledgeArticle[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-xs">
      <h2 className="text-[17px] sm:text-lg font-bold uppercase text-slate-900">
        Bài viết liên quan
      </h2>
      <div className="mt-4 flex flex-col gap-3.5">
        {articles.map((item, idx) => (
          <Link
            key={idx}
            href={`/knowledge/${item.slug}`}
            className="flex items-start gap-3 cursor-pointer group"
          >
            <div className="relative aspect-8/5 w-24 shrink-0 overflow-hidden rounded-md bg-slate-100">
              <Image
                src={item.image?.url ?? ""}
                alt={item.image?.alt ?? ""}
                fill
                className="object-cover transition group-hover:scale-105"
              />
            </div>
            <div className="min-w-0">
              <h3 className="line-clamp-2 text-xs sm:text-sm font-bold leading-snug text-slate-800 transition group-hover:text-lime-500">
                {item.title}
              </h3>
              <span className="mt-1 block text-[10px] text-gray-400 md:text-[11px]">
                {item.date}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
