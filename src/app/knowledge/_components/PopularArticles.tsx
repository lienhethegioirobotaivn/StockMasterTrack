import Image from "next/image";
import { Eye } from "lucide-react";

type PopularArticle = {
  title: string;
  category: string;
  image: string;
  date: string;
  views: string;
  catColor: string;
};

const articles: PopularArticle[] = [
  {
    title: "Danh mục đầu tư là gì? Cách xây dựng danh mục hiệu quả",
    category: "KIẾN THỨC NỀN TẢNG",
    image: "/knowledge/popular-1.jpg",
    date: "10/05/2024",
    views: "1.5K",
    catColor: "text-slate-500",
  },
  {
    title: "Phân tích ngành ngân hàng: Triển vọng và cơ hội đầu tư 2024",
    category: "PHÂN TÍCH CƠ BẢN",
    image: "/knowledge/popular-2.jpg",
    date: "08/05/2024",
    views: "1.1K",
    catColor: "text-lime-600",
  },
  {
    title: "Breakout là gì? Cách giao dịch breakout hiệu quả",
    category: "PHÂN TÍCH KỸ THUẬT",
    image: "/knowledge/popular-3.jpg",
    date: "06/05/2024",
    views: "986",
    catColor: "text-fuchsia-700",
  },
  {
    title: "Dòng tiền thông minh là gì? Cách nhận biết trên thị trường",
    category: "PHÂN TÍCH THỊ TRƯỜNG",
    image: "/knowledge/popular-4.jpg",
    date: "04/05/2024",
    views: "1.3K",
    catColor: "text-slate-600",
  },
  {
    title: "Đầu tư giá trị là gì? Triết lý của Warren Buffett",
    category: "KIẾN THỨC NỀN TẢNG",
    image: "/knowledge/popular-5.jpg",
    date: "02/05/2024",
    views: "1.7K",
    catColor: "text-slate-500",
  },
];

export function PopularArticles() {
  return (
    <section className="w-full lg:py-5">
      <h2 className="mb-6 text-2xl font-bold uppercase text-slate-900">
        Bài viết được quan tâm
      </h2>

      <div className="relative flex flex-col">
        <div className="absolute left-2.5 sm:left-3.5 top-7 lg:top-8 bottom-7 lg:bottom-8 w-px sm:bg-gray-200" />

        {articles.map((article, index) => (
          <div
            key={article.title}
            className="relative flex items-center gap-3 py-3.5 md:gap-4"
          >
            <div className="z-10 hidden sm:flex size-5 sm:size-7 shrink-0 items-center justify-center rounded-full bg-lime-600 text-xs font-bold text-white ring-4 ring-white">
              {index + 1}
            </div>

            <div className="relative aspect-16/10 w-20 shrink-0 overflow-hidden rounded-lg md:w-28">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 items-start justify-between gap-4 min-w-0">
              <div className="min-w-0">
                <h3 className="line-clamp-2 text-[13px] sm:text-base lg:text-base font-bold leading-snug text-slate-900">
                  {article.title}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] md:text-[11px]">
                  <span className={`font-bold ${article.catColor}`}>
                    {article.category}
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-400">{article.date}</span>
                </div>

                <div className="mt-1 flex sm:hidden items-center gap-1 shrink-0 text-xs text-gray-400">
                  <Eye className="size-3" />
                  {article.views} <span>lượt xem</span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1 shrink-0 text-[11px] text-gray-400 md:text-xs">
                <Eye className="size-3.5" />
                {article.views}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
