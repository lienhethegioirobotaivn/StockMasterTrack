import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

const articles = [
  {
    image: "/home/blog1.png",
    date: "20.05.2024",
    category: "PHÂN TÍCH",
    title: "Triển vọng thị trường chứng khoán nửa cuối năm 2024",
  },
  {
    image: "/home/blog2.png",
    date: "18.05.2024",
    category: "KIẾN THỨC",
    title: "5 nguyên tắc vàng quản trị rủi ro cho nhà đầu tư cá nhân",
  },
  {
    image: "/home/blog3.png",
    date: "15.05.2024",
    category: "PHÂN TÍCH",
    title: "Đọc báo cáo tài chính: Những chỉ số quan trọng cần biết",
  },
  {
    image: "/home/blog4.png",
    date: "12.05.2024",
    category: "KINH NGHIỆM",
    title: "Tư duy đầu tư dài hạn: Chìa khóa của sự giàu có bền vững",
  },
];

export function Knowledge() {
  return (
    <section className="w-full bg-[#fcfdfd] py-12 md:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 lg:gap-4 sm:flex-row sm:justify-between border-b border-gray-100 pb-5">
          <h2 className="text-3xl font-black text-gray-900 uppercase text-center lg:text-left">
            KIẾN THỨC MỚI NHẤT
          </h2>

          <Button className="inline-flex items-center gap-1 text-sm font-bold text-gray-800 uppercase transition-all hover:text-gray-600">
            XEM TẤT CẢ BÀI VIẾT
            <ArrowRight className="size-3.5" />
          </Button>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex flex-col justify-between overflow-hidden rounded-xl bg-white border border-gray-100/60 shadow-sm"
            >
              <div>
                <div className="relative aspect-16/10 w-full bg-gray-50">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-w-768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <div className="px-4 pt-4">
                  <div className="flex items-center justify-between text-[11px] font-semibold">
                    <span className="text-gray-400">{article.date}</span>
                    <span className="text-emerald-600/90 bg-emerald-50/50 px-2 py-0.5 rounded-md border border-emerald-100/30">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="mt-3.5 text-base font-extrabold text-gray-900 line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </div>

              <div className="px-4 pb-4 pt-5">
                <button className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-800 uppercase transition-colors hover:text-gray-600">
                  ĐỌC THÊM
                  <ArrowRight className="size-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
