import {
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Globe,
  FileText,
  Search,
  PieChart,
  ShieldCheck,
  CandlestickChart,
  Briefcase,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { CourseRegisterDialog } from "@/components/dialog";

const modules = [
  {
    title: "TƯ DUY ĐẦU TƯ & ĐẦU CƠ",
    description:
      "Phân biệt nhà đầu tư và đầu cơ, tư duy đúng để thắng trên thị trường.",
    icon: Lightbulb,
  },
  {
    title: "PHÂN TÍCH VĨ MÔ & NGÀNH",
    description:
      "Hiểu bức tranh kinh tế và tác động đến thị trường chứng khoán.",
    icon: Globe,
  },
  {
    title: "ĐỌC BÁO CÁO TÀI CHÍNH",
    description: "Nắm vững 3 báo cáo tài chính và cách đọc hiệu quả.",
    icon: FileText,
  },
  {
    title: "PHÂN TÍCH DOANH NGHIỆP",
    description:
      "Đánh giá sức khỏe doanh nghiệp và lợi thế cạnh tranh bền vững.",
    icon: Search,
  },
  {
    title: "ĐỊNH GIÁ DOANH NGHIỆP",
    description: "Các phương pháp định giá phổ biến và cách áp dụng thực tế.",
    icon: PieChart,
  },
  {
    title: "QUẢN TRỊ DANH MỤC & QUẢN TRỊ RỦI RO",
    description:
      "Xây danh mục hiệu quả và kiểm soát rủi ro để tồn tại lâu dài.",
    icon: ShieldCheck,
  },
  {
    title: "PHÂN TÍCH KỸ THUẬT CƠ BẢN",
    description:
      "Hiểu đồ thị, xu hướng và các chỉ báo quan trọng trong đầu tư.",
    icon: CandlestickChart,
  },
  {
    title: "THỰC HÀNH & CASE STUDY",
    description:
      "Thực hành phân tích cổ phiếu thực tế và xây dựng kế hoạch đầu tư cá nhân.",
    icon: Briefcase,
  },
] as const;

export function Courses() {
  return (
    <section className="w-full bg-[#f4fbf7] py-12 lg:mb-4">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 xl:grid-cols-12">
          <div className="flex flex-col justify-between h-full xl:col-span-4 xl:sticky xl:top-6">
            <div>
              <p className="text-[11px] font-bold tracking-wider text-lime-600 uppercase">
                KHÓA HỌC NỔI BẬT
              </p>

              <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-gray-900">
                Stock MasterTrack
                <br />
                Level 1 – Nền tảng đầu tư
              </h2>

              <p className="mt-4 text-sm font-medium text-gray-500">
                Dành cho người mới bắt đầu hoặc nhà đầu tư muốn xây nền tảng
                vững chắc.
              </p>

              <ul className="mt-6 space-y-2.5">
                {[
                  "8 buổi học – 2.5 giờ/buổi",
                  "Học offline, tương tác trực tiếp",
                  "Tài liệu độc quyền",
                  "Hỗ trợ sau khóa học",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-lime-600" />
                    <span className="text-sm font-medium text-gray-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <p className="text-[12px] font-bold text-gray-900 tracking-wider">
                HỌC PHÍ
              </p>
              <div className="mt-1 flex items-center justify-between gap-4">
                <p className="text-xl font-black tracking-tight text-fuchsia-700">
                  4.000.000đ
                </p>
                <CourseRegisterDialog>
                  <Button className="h-9 rounded-lg bg-lime-600 px-4 text-xs font-bold text-white hover:bg-lime-700 gap-1.5">
                    ĐĂNG KÝ NGAY
                    <ArrowRight className="size-3.5" />
                  </Button>
                </CourseRegisterDialog>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 xl:col-span-8 xl:grid-cols-4">
            {modules.map((item, index) => {
              const moduleNumber = String(index + 1).padStart(2, "0");
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-xl bg-white p-5 shadow-sm relative overflow-hidden"
                >
                  <div>
                    <p className="text-xl font-black text-lime-500 leading-none">
                      {moduleNumber}
                    </p>

                    <h3 className="mt-3.5 text-base lg:text-[13px] font-extrabold text-gray-900 leading-snug uppercase">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm lg:text-[11.5px] font-medium text-gray-400 line-clamp-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <item.icon className="size-5 text-lime-600 stroke-[1.5]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
