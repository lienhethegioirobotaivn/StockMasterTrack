"use client";

import Image from "next/image";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui";
import { KnowledgeArticle } from "@/features/knowledge/types";
import { ShareButtons } from "./ShareButtons";

interface ArticleContentProps {
  article: KnowledgeArticle;
}

// const convertToId = (text: string) => {
//   return text
//     .toLowerCase()
//     .normalize("NFD")
//     .replace(/[\u0300-\u036f]/g, "")
//     .replace(/[đĐ]/g, "d")
//     .replace(/[^a-z0-9\s-]/g, "")
//     .trim()
//     .replace(/\s+/g, "-");
// };

export function ArticleContent({ article }: ArticleContentProps) {
  // const handleScroll = (title: string) => {
  //   const targetId = convertToId(title);
  //   const element = document.getElementById(targetId);
  //   if (element) {
  //     const headerOffset = 120;
  //     const elementPosition = element.getBoundingClientRect().top;
  //     const offsetPosition = elementPosition + window.scrollY - headerOffset;

  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <article className="w-full">
      <div className="flex flex-col items-start gap-3">
        <span className="rounded-full bg-lime-50 px-2 py-2 text-xs font-semibold text-lime-600">
          {article.category?.name}
        </span>
        <h1 className="text-2xl lg:text-3xl font-bold leading-tight text-slate-900">
          {article.title}
        </h1>
      </div>

      <div className="mt-4 flex flex-col gap-4 border-b border-gray-100 pb-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="relative size-9 shrink-0 overflow-hidden rounded-full bg-slate-100 flex items-center justify-center">
            <Image
              src={article.author?.avatar?.url ?? ""}
              alt={article.author?.avatar?.alt ?? ""}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-900 md:text-sm">
              {article.author?.name}
            </p>
            <div className="mt-0.5 flex items-center gap-2 text-[11px] text-gray-400 md:text-xs">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readingTime} đọc</span>
              <span>•</span>
              <span>{article.viewsFormatted} lượt xem</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-800">Chia sẻ:</span>
          <ShareButtons />
        </div>
      </div>

      <div className="mt-6 w-full overflow-hidden rounded-xl">
        <Image
          src={article.image?.url ?? ""}
          alt={article.image?.alt ?? ""}
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      <div
        className="mt-8 border-b border-gray-100 pb-8 
                  text-sm sm:text-base leading-relaxed text-slate-800
                  [&>h1]:font-bold [&>h1]:text-slate-900
                  [&>h2]:font-bold [&>h2]:text-slate-900
                  [&>h3]:font-bold [&>h3]:text-slate-900
                  [&>h4]:font-bold [&>h4]:text-slate-900
                  [&>h2]:text-lg sm:[&>h2]:text-xl [&>h2]:mt-6 [&>h2]:mb-2
                  [&>h3]:text-base sm:[&>h3]:text-lg [&>h3]:mt-4 [&>h3]:mb-1
                  [&>p]:mt-2 [&>p]:text-slate-600
                  [&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-blue-700
                [&_a_*]:text-blue-600 hover:[&_a_*]:text-blue-700
                  [&>img]:rounded-lg [&>img]:mt-4 [&>img]:w-full [&>img]:h-auto
                  [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&>ul]:mt-2
                  [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1 [&>ol]:mt-2
                  [&_li]:text-slate-600"
        dangerouslySetInnerHTML={{ __html: article.content ?? "" }}
      />

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-700">
            Bài viết hữu ích?
          </span>
          <Button className="flex items-center rounded-md gap-2 border border-gray-200 px-3 py-1 text-xs font-semibold text-lime-600 transition hover:bg-lime-50">
            <ThumbsUp className="size-3.5" />
            <span>23</span>
          </Button>
          <Button className="flex items-center rounded-md gap-2 border border-gray-200 px-3 py-1 text-xs font-semibold text-rose-600 transition hover:bg-rose-50">
            <ThumbsDown className="size-3.5" />
            <span>2</span>
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-900">Chia sẻ bài viết:</span>
          <ShareButtons />
        </div>
      </div>
    </article>
  );
}
