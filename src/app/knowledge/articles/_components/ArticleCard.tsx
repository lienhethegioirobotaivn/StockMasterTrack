import Image from "next/image";
import Link from "next/link";
import { Eye, MessageSquare } from "lucide-react";
import { KnowledgeArticle } from "@/features/knowledge/types";

// interface ArticleCardProps {
//   articles: KnowledgeArticle;
// }

const articlesData = [
  {
    category: "PHÂN TÍCH THỊ TRƯỜNG",
    title: "Nhận định thị trường chứng khoán tuần 20-24/05: Cơ hội & rủi ro",
    description:
      "Thị trường bước vào giai đoạn tích lũy quanh vùng kháng cự mạnh. NĐT cần lưu ý các vùng hỗ trợ quan trọng và chiến lược giao dịch...",
    image: "/knowledge/article-1.jpg",
    author: "Stock MasterTrack Team",
    date: "19/05/2024",
    views: "1.8K",
    comments: "23",
  },
  {
    category: "PHƯƠNG PHÁP ĐẦU TƯ",
    title: "5 chỉ số tài chính quan trọng nhà đầu tư cần biết",
    description:
      "Nắm vững 5 chỉ số tài chính giúp bạn đánh giá sức khỏe doanh nghiệp một cách chính xác hơn và đưa ra quyết định đầu tư hiệu quả.",
    image: "/knowledge/article-2.jpg",
    author: "Stock MasterTrack Team",
    date: "17/05/2024",
    views: "982",
    comments: "12",
  },
  {
    category: "QUẢN TRỊ RỦI RO",
    title: "3 sai lầm tâm lý khiến nhà đầu tư thua lỗ liên tục",
    description:
      "Tâm lý là yếu tố quyết định đến hơn 70% kết quả đầu tư. Cùng điểm qua 3 sai lầm phổ biến và cách khắc phục.",
    image: "/knowledge/article-3.jpg",
    author: "Stock MasterTrack Team",
    date: "15/05/2024",
    views: "1.2K",
    comments: "18",
  },
  {
    category: "QUẢN TRỊ DANH MỤC",
    title: "Nguyên tắc cắt lỗ: Bảo vệ vốn để tồn tại trên thị trường",
    description:
      "Cắt lỗ đúng cách giúp bạn bảo toàn vốn và giữ tâm lý vững vàng để tìm kiếm cơ hội mới.",
    image: "/knowledge/article-4.jpg",
    author: "Stock MasterTrack Team",
    date: "13/05/2024",
    views: "756",
    comments: "9",
  },
  {
    category: "PHÂN TÍCH KỸ THUẬT",
    title: "Hướng dẫn đọc biểu đồ nến cho người mới bắt đầu",
    description:
      "Hiểu đúng mô hình nến Nhật và cách ứng dụng vào giao dịch thực tế để tăng xác suất thắng.",
    image: "/knowledge/article-5.jpg",
    author: "Stock MasterTrack Team",
    date: "11/05/2024",
    views: "1.6K",
    comments: "21",
  },
  {
    category: "KIẾN THỨC NỀN TẢNG",
    title:
      "Lãi kép là gì? Cách tận dụng sức mạnh của lãi kép để đầu tư hiệu quả",
    description:
      'Lãi kép là "kỳ quan thứ 8 của thế giới". Bài viết giúp bạn hiểu rõ bản chất và cách tận dụng tối đa.',
    image: "/knowledge/article-6.jpg",
    author: "Stock MasterTrack Team",
    date: "09/05/2024",
    views: "1.1K",
    comments: "14",
  },
];

const CATEGORY_COLORS = [
  "text-lime-600",
  "text-lime-600",
  "text-slate-800",
  "text-slate-800",
  "text-lime-600",
  "text-lime-600",
];

export function ArticleCard() {
  return articlesData.map((article, index) => {
    return (
      <article
        key={index}
        className="flex flex-col gap-4 overflow-hidden rounded-xl border border-gray-100 bg-white p-4 sm:flex-row sm:gap-6"
      >
        <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg sm:w-48 md:w-56">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
          <span
            className={`absolute top-2 left-2 rounded bg-white px-2 py-0.5 text-xs font-bold uppercase ${
              CATEGORY_COLORS[index % CATEGORY_COLORS.length]
            }`}
          >
            {article.category}
          </span>
        </div>

        <div className="flex flex-col justify-between py-0.5 flex-1">
          <div>
            <Link href={`/knowledge/articles`} className="group">
              <h3 className="text-lg font-bold text-gray-950 line-clamp-2 group-hover:text-lime-600 transition-colors leading-snug">
                {article.title}
              </h3>
            </Link>
            <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">
              {article.description}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400">
            <span className="font-medium text-gray-600">{article.author}</span>
            <span className="block size-1 rounded-full bg-gray-300" />
            <span>{article.date}</span>
            <span className="block size-1 rounded-full bg-gray-300" />
            <div className="flex items-center gap-1">
              <Eye className="size-3.5" />
              <span>{article.views}</span>
            </div>
            <span className="block size-1 rounded-full bg-gray-300" />
            <div className="flex items-center gap-1">
              <MessageSquare className="size-3.5" />
              <span>{article.comments}</span>
            </div>
          </div>
        </div>
      </article>
    );
  });
}
