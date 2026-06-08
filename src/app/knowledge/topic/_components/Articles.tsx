import Image from "next/image";
import { Eye, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import Link from "next/link";
import {
  KnowledgeArticle,
  KnowledgeCategory,
} from "@/features/knowledge/types";
import { LucideIcon } from "@/components/lucide-icon";

interface ArticlesProps {
  articles: KnowledgeArticle[];
  categories: (KnowledgeCategory & { views?: number })[];
  categoryLimit?: number;
}

export function Articles({
  articles,
  categories,
  categoryLimit,
}: ArticlesProps) {
  const topics = [...categories]
    .sort((a, b) => b.count - a.count)
    .slice(0, categoryLimit);

  const viewFormatter = new Intl.NumberFormat("vi-VN");

  return (
    <section className="mx-auto px-6 lg:px-12 py-12">
      <div className="grid grid-cols-1 gap-12 sm:gap-18 lg:gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-xl sm:text-2xl lg:text-xl font-bold text-gray-950 uppercase text-center lg:text-left">
                Chủ đề nổi bật tuần này
              </h2>
              <p className="mt-0.5 text-sm text-gray-500 text-center lg:text-left">
                Cập nhật những chủ đề được quan tâm nhất
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-12 sm:gap-6">
              {articles.map((item, index) => (
                <Link
                  key={index}
                  href={`/knowledge/${item.slug}`}
                  className="group flex flex-col sm:flex-row gap-4 overflow-hidden cursor-pointer bg-white sm:bg-transparent rounded-xl border border-gray-200 sm:border-none"
                >
                  <div className="relative aspect-16/10 w-full sm:w-50 lg:w-40 shrink-0 overflow-hidden sm:rounded-lg bg-gray-100">
                    <Image
                      src={item.image?.url ?? ""}
                      alt={item.image?.alt ?? ""}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute left-3 top-2 sm:hidden">
                      <span className="inline-block text-[10px] font-bold text-green-800 bg-green-50 px-1.5 py-0.5 rounded w-fit">
                        {item.category?.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center px-4 sm:px-0 pb-4 sm:pb-0">
                    <span className="hidden sm:block text-[10px] font-bold text-green-800 bg-green-50 px-1.5 py-0.5 rounded w-fit">
                      {item.category?.name}
                    </span>
                    <span className="text-[11px] text-gray-400 sm:hidden">
                      {item.date}
                    </span>
                    <h3 className="mt-1.5 text-lg sm:text-base font-bold text-gray-950 line-clamp-2 group-hover:text-green-800 transition-all">
                      {item.title}
                    </h3>
                    <div
                      className="mt-1 hidden sm:line-clamp-2 text-xs text-gray-500 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: item.excerpt ?? "",
                      }}
                    />

                    <div className="mt-2 flex items-center gap-3 text-xs sm:text-xs text-gray-400 font-medium">
                      <div className="flex items-center gap-1.5">
                        <div className="size-3.5 shrink-0 overflow-hidden rounded-full">
                          <Image
                            src={item.author?.avatar?.url ?? ""}
                            alt={item.author?.avatar?.alt ?? ""}
                            width={16}
                            height={16}
                            className="size-full object-contain"
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-600">
                          {item.author?.name}
                        </span>
                      </div>
                      <span className="hidden sm:flex items-center gap-1">
                        <Calendar className="size-3" />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="size-3.5" />
                        {item.viewsFormatted}
                      </span>
                      <span className="flex sm:hidden items-center gap-1">
                        <LucideIcon name="MessageCircle" className="size-3.5" />{" "}
                        0
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Button className="mt-6 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-xs w-full sm:w-fit mx-auto">
            <Link
              href={"/knowledge"}
              className="flex items-center justify-center gap-1.5"
            >
              Xem tất cả chủ đề nổi bật
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-xl sm:text-2xl lg:text-xl font-bold text-gray-950 uppercase text-center lg:text-left">
                Chủ đề được quan tâm nhiều nhất
              </h2>
              <p className="mt-0.5 text-sm text-gray-500 text-center lg:text-left">
                Dựa trên lượt xem trong 30 ngày qua
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              {topics.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl border border-transparent bg-transparent px-3 py-2.5 transition-colors hover:bg-emerald-50/50 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:flex size-5 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <div className="text-green-700 bg-gray-100 rounded-lg p-2 shrink-0">
                      <LucideIcon name={item.icon} className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-gray-400">
                        {item.count} bài viết
                      </p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-sm">
                    {viewFormatter.format(item.views ?? 0)}
                    <Eye className="size-3.5" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Button className="mt-6 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-xs w-full sm:w-fit mx-auto">
            <Link
              href={"/knowledge"}
              className="flex items-center justify-center gap-1.5 "
            >
              Xem tất cả danh mục
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
