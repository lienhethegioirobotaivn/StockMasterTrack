"use client";

import { useState } from "react";
import { LucideIcon } from "@/components/lucide-icon";
import { KnowledgeCategory } from "@/features/knowledge/types";

interface CategoriesProps {
  categories: (KnowledgeCategory & { views?: number })[];
  limit?: number;
}

export function Categories({ categories, limit }: CategoriesProps) {
  const [sortBy, setSortBy] = useState<"popular" | "latest">("popular");

  const topics =
    sortBy === "popular"
      ? [...categories].sort((a, b) => b.count - a.count).slice(0, limit)
      : categories.slice(0, limit);

  return (
    <section className="mx-auto px-6 lg:px-12 py-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-gray-100 pb-5">
        <div>
          <h2 className="text-2xl font-bold text-gray-950 uppercase text-center lg:text-left">
            Danh mục chủ đề
          </h2>
          <p className="mt-1 text-base text-gray-500 text-center lg:text-left">
            Chọn chủ đề để bạn quan tâm để khám phá các bài viết hữu ích
          </p>
        </div>

        <div className="mt-4 lg:mt-0 flex items-center gap-2 lg:self-auto">
          <span className="text-sm text-gray-500">Sắp xếp theo:</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "popular" | "latest")
              }
              className="appearance-none pr-8 flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 focus:outline-hidden cursor-pointer"
            >
              <option value="popular">Phổ biến</option>
              <option value="latest">Mới nhất</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5">
              <svg
                className="size-3.5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-8 grid grid-cols-2 gap-4 lg:gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {topics.map((item, index) => {
          return (
            <div
              key={index}
              className="group flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-white p-6 text-center shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-gray-200 hover:shadow-md cursor-pointer"
            >
              <div className="mb-4 flex size-14 items-center justify-center rounded-lg bg-gray-50 text-emerald-600 transition-colors group-hover:bg-emerald-50">
                <LucideIcon name={item.icon} className="size-7" />
              </div>
              <h3 className="text-[14.5px] font-semibold text-gray-900 line-clamp-2 flex items-center justify-center">
                {item.name}
              </h3>
              <span className="mt-1 text-xs text-gray-400">
                {item.countFormatted}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
