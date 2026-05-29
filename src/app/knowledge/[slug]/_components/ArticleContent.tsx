"use client";

import Image from "next/image";
import { Link2, ThumbsDown, ThumbsUp } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui";
import { SiZalo } from "react-icons/si";

export type PostDetail = {
  title: string;
  category: string;
  date: string;
  readTime: string;
  views: string;
  summary: string;
  toc: string[];
  authorImage: string;
  featuredImage: string;
  chartImage: string;
};

const postData: PostDetail = {
  title: "Nhận định thị trường chứng khoán tuần 20-24/05: Cơ hội & rủi ro",
  category: "PHÂN TÍCH THỊ TRƯỜNG",
  date: "20/05/2024",
  readTime: "8 phút đọc",
  views: "1.2K lượt xem",
  summary:
    "Thị trường bước vào giai đoạn tích lũy sau nhịp tăng mạnh. NĐT cần lưu ý các vùng hỗ trợ quan trọng và chiến lược giao dịch phù hợp trong bối cảnh dòng tiền có dấu hiệu phân hóa.",
  toc: [
    "Tổng quan thị trường tuần qua",
    "Phân tích kỹ thuật",
    "Phân tích vĩ mô & dòng tiền",
    "Kịch bản thị trường tuần 20-24/05",
    "Chiến lược giao dịch đề xuất",
    "Danh mục cổ phiếu theo dõi",
  ],
  authorImage: "/images/avatar-team.jpg",
  featuredImage: "/images/featured-market.jpg",
  chartImage: "/images/chart-technical.jpg",
};

const convertToId = (text: string) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
};

export function ArticleContent() {
  const handleScroll = (title: string) => {
    const targetId = convertToId(title);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <article className="w-full">
      <div className="flex flex-col items-start gap-3">
        <span className="rounded-full bg-lime-50 px-2 py-2 text-xs font-semibold text-lime-600">
          {postData.category}
        </span>
        <h1 className="text-2xl lg:text-3xl font-bold leading-tight text-slate-900">
          {postData.title}
        </h1>
      </div>

      <div className="mt-4 flex flex-col gap-4 border-b border-gray-100 pb-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="relative size-9 shrink-0 overflow-hidden rounded-full">
            <Image
              src={postData.authorImage}
              alt="Stock MasterTrack Team"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-900 md:text-sm">
              Stock MasterTrack Team
            </p>
            <div className="mt-0.5 flex items-center gap-2 text-[11px] text-gray-400 md:text-xs">
              <span>{postData.date}</span>
              <span>•</span>
              <span>{postData.readTime}</span>
              <span>•</span>
              <span>{postData.views}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-800">Chia sẻ:</span>
          <Button className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200">
            <FaFacebook className="size-3.5 fill-current" />
          </Button>
          <Button className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200">
            <SiZalo className="size-4 fill-current" />
          </Button>
          <Button className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200">
            <Link2 className="size-3.5" />
          </Button>
        </div>
      </div>

      <div className="relative mt-6 aspect-21/9 w-full overflow-hidden rounded-xl">
        <Image
          src={postData.featuredImage}
          alt={postData.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <blockquote className="mt-6 border-l-4 border-lime-600 bg-lime-50/30 p-4 text-[13px] md:text-sm font-medium leading-relaxed text-slate-800">
        {postData.summary}
      </blockquote>

      <div className="mt-6 rounded-xl bg-slate-50 p-4 md:p-6">
        <h2 className="text-[13px] sm:text-sm font-bold uppercase text-slate-900">
          Nội dung bài viết
        </h2>
        <ol className="mt-3 space-y-2 text-[13px] sm:text-sm text-slate-600">
          {postData.toc.map((item, idx) => (
            <li key={idx} className="flex gap-1">
              <span>{idx + 1}.</span>
              <button
                onClick={() => handleScroll(item)}
                className="text-left cursor-pointer hover:text-lime-600 hover:underline"
              >
                {item}
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8 space-y-8 border-b border-gray-100 pb-8 text-[13px] sm:text-sm leading-relaxed text-slate-800">
        <div id={convertToId("Tổng quan thị trường tuần qua")}>
          <h3 className="text-[15px] sm:text-base font-bold text-slate-900">
            1. Tổng quan thị trường tuần qua
          </h3>
          <p className="mt-2 text-slate-600">
            VN-Index kết thúc tuần ở mức 1.275,14 điểm, tăng 0,8% so với tuần
            trước. Thanh khoản giảm nhẹ với giá trị khớp lệnh bình quân đạt
            18.500 tỷ đồng/phiên. Dòng tiền có dấu hiệu phân hóa giữa các nhóm
            ngành.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-lg bg-slate-50 p-3 text-center">
              <div className="text-sm font-bold text-lime-600 md:text-base">
                1.275,14
              </div>
              <div className="mt-0.5 text-[10px] text-gray-400">
                VN-Index (+0,8%)
              </div>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 text-center">
              <div className="text-sm font-bold text-lime-600 md:text-base">
                18.500 tỷ
              </div>
              <div className="mt-0.5 text-[10px] text-gray-400">
                GTGD TB/phiên (-4,2%)
              </div>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 text-center">
              <div className="text-sm font-bold text-lime-600 md:text-base">
                245 mã
              </div>
              <div className="mt-0.5 text-[10px] text-gray-400">Tăng điểm</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 text-center">
              <div className="text-sm font-bold text-rose-600 md:text-base">
                187 mã
              </div>
              <div className="mt-0.5 text-[10px] text-gray-400">Giảm điểm</div>
            </div>
          </div>
        </div>

        <div id={convertToId("Phân tích kỹ thuật")}>
          <h3 className="text-[15px] sm:text-base font-bold text-slate-900">
            2. Phân tích kỹ thuật
          </h3>
          <p className="mt-2 text-slate-600">
            VN-Index đang vận động trong vùng tích lũy quanh MA20. Chỉ số cần
            vượt qua vùng kháng cự 1.285 – 1.295 để xác nhận xu hướng tăng tiếp
            diễn.
          </p>
          <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={postData.chartImage}
              alt="Biểu đồ phân tích kỹ thuật"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

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
          <Button className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200">
            <FaFacebook className="size-3.5 fill-current" />
          </Button>
          <Button className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200">
            <SiZalo className="size-4 fill-current" />
          </Button>
          <Button className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200">
            <Link2 className="size-3.5" />
          </Button>
        </div>
      </div>
    </article>
  );
}
