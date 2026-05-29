import Image from "next/image";
import { Eye, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

type Article = {
  title: string;
  category: string;
  image: string;
  date: string;
  views: string;
  comments: number;
  catColor: string;
  catBg: string;
};

const featuredArticle: Article = {
  title: "Nhận định thị trường chứng khoán tuần 20–24/05: Cơ hội & rủi ro",
  category: "Phân tích thị trường",
  image: "/knowledge/post-1.jpg",
  date: "20/05/2024",
  views: "1.2K",
  comments: 12,
  catColor: "text-emerald-700 border-emerald-600/30",
  catBg: "bg-white",
};

const sideArticles: Article[] = [
  {
    title: "5 chỉ số tài chính quan trọng nhà đầu tư cần biết",
    category: "Phân tích cơ bản",
    image: "/knowledge/post-2.jpg",
    date: "18/05/2024",
    views: "892",
    comments: 8,
    catColor: "text-lime-700",
    catBg: "bg-lime-50",
  },
  {
    title: "Hướng dẫm đọc biểu đồ nến cho người mới bắt đầu",
    category: "Phân tích kỹ thuật",
    image: "/knowledge/post-3.jpg",
    date: "16/05/2024",
    views: "1.1K",
    comments: 15,
    catColor: "text-fuchsia-700",
    catBg: "bg-fuchsia-50",
  },
  {
    title: "Nguyên tắc cắt lỗ: Bảo vệ vốn để tồn tại trên thị trường",
    category: "Quản trị rủi ro",
    image: "/knowledge/post-4.jpg",
    date: "14/05/2024",
    views: "732",
    comments: 6,
    catColor: "text-indigo-700",
    catBg: "bg-indigo-50",
  },
  {
    title: "3 sai lầm tâm lý khiến nhà đầu tư thua lỗ liên tục",
    category: "Tâm lý đầu tư",
    image: "/knowledge/post-5.jpg",
    date: "12/05/2024",
    views: "854",
    comments: 9,
    catColor: "text-orange-700",
    catBg: "bg-orange-50",
  },
];

export function LatestArticles() {
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
        <div className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-xs">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src={featuredArticle.image}
              alt={featuredArticle.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-4 flex flex-1 flex-col justify-between p-4">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`rounded-md border px-2.5 py-0.5 text-[11px] font-semibold md:text-xs ${featuredArticle.catColor}`}
                >
                  {featuredArticle.category}
                </span>
                <span className="text-[11px] text-gray-400 md:text-xs">
                  {featuredArticle.date}
                </span>
              </div>

              <h3 className="mt-3 text-base sm:text-lg lg:text-xl font-bold text-slate-900 line-clamp-2">
                {featuredArticle.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-500 md:text-sm">
                Thị trường bước vào giai đoạn tích lũy sau nhịp tăng mạnh. NĐT
                cần lưu ý các vùng hỗ trợ quan trọng và chiến lược giao dịch...
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
              <div className="flex gap-2">
                <div className="relative size-4 overflow-hidden">
                  <Image
                    src={"/home/Logo.png"}
                    alt="Stock MasterTrack Team"
                    width={25}
                    height={25}
                    className="size-full"
                  />
                </div>
                <span className="text-xs font-medium text-gray-600">
                  Stock MasterTrack Team
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Eye className="size-3.5" />
                  {featuredArticle.views}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="size-3.5" />
                  {featuredArticle.comments}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sideArticles.map((article) => (
            <div
              key={article.title}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-xs"
            >
              <div className="relative aspect-16/7 w-full overflow-hidden rounded-xl">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute left-3 top-3">
                  <span
                    className={`rounded-md px-2.5 py-0.5 text-[11px] font-bold ${article.catBg} ${article.catColor}`}
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="mt-3 flex flex-1 flex-col justify-between p-4">
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
                    <Eye className="size-3.5" />
                    {article.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="size-3.5" />
                    {article.comments}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
