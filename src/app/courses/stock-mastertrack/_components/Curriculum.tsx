import Image from "next/image";
import {
  Lightbulb,
  Globe,
  LineChart,
  Search,
  PieChart,
  ShieldAlert,
  CandlestickChart,
  Briefcase,
  Gift,
} from "lucide-react";

type CurriculumItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const curriculumItems: CurriculumItem[] = [
  {
    title: "TƯ DUY ĐẦU TƯ & ĐẦU CƠ",
    description:
      "Phân biệt đầu tư và đầu cơ, hiểu bản chất thị trường và tâm lý đám đông.",
    icon: Lightbulb,
  },
  {
    title: "PHÂN TÍCH VĨ MÔ & NGÀNH",
    description:
      "Hiểu bức tranh kinh tế vĩ mô và tác động đến thị trường chứng khoán.",
    icon: Globe,
  },
  {
    title: "ĐỌC BÁO CÁO TÀI CHÍNH",
    description:
      "Nắm vững 3 báo cáo tài chính và cách đọc các chỉ số quan trọng.",
    icon: LineChart,
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
      "Xây dựng danh mục hiệu quả và kiểm soát rủi ro để tồn tại lâu dài.",
    icon: ShieldAlert,
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
];

const bonusItems = [
  "Tài liệu độc quyền",
  "Mẫu Excel phân tích doanh nghiệp",
  "Tham gia cộng đồng nhà đầu tư Stock MasterTrack",
];

export function Curriculum() {
  return (
    <section className="bg-gray-50/50 py-12 lg:py-16 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[28px] lg:text-4xl font-extrabold text-gray-900">
            NỘI DUNG <span className="text-fuchsia-700">8 BUỔI HỌC</span>
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-12 bg-lime-600" />
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-600">
            Lộ trình học bài bản – Dễ hiểu – Ứng dụng ngay
          </p>
        </div>

        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {curriculumItems.map((item, index) => {
            const displayId = String(index + 1).padStart(2, "0");
            return (
              <div
                key={index}
                className="relative rounded-2xl border border-gray-100 bg-white p-6 pt-5 text-center shadow-xs transition-all duration-200 hover:scale-104"
              >
                <div className="absolute left-5 top-4">
                  <span className="text-sm font-bold text-lime-600 bg-lime-50 p-2 rounded-full">
                    {displayId}
                  </span>
                </div>

                <div className="mx-auto mt-8 flex size-16 lg:size-14 items-center justify-center rounded-full bg-fuchsia-50">
                  <item.icon className="size-10 lg:size-8 text-fuchsia-700" />
                </div>

                <h3 className="mt-4 text-[16px] sm:text-lg lg:text-[18px] font-extrabold uppercase leading-snug text-gray-900 px-2 flex items-center justify-center">
                  {item.title}
                </h3>

                <p className="mt-2 text-[13px] sm:text-sm leading-relaxed text-gray-500 px-1">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-gray-100 bg-[#f4f9f1] p-6 lg:p-0">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 lg:gap-6 sm:flex-row items-center lg:py-8 lg:pl-8">
              <div className="flex size-17 lg:size-16 shrink-0 items-center justify-center rounded-full border border-lime-200 bg-lime-100 shadow-xs">
                <Gift className="size-11 lg:size-10 text-lime-600" />
              </div>

              <div>
                <h4 className="text-lg font-bold uppercase text-lime-600">
                  BONUS DÀNH CHO HỌC VIÊN
                </h4>

                <ul className="mt-3 space-y-3">
                  {bonusItems.map((bonus, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-base lg:text-sm text-gray-700 font-medium"
                    >
                      <span className="mt-1.5 size-2 shrink-0 rotate-45 bg-lime-600" />
                      <span>{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative flex justify-center lg:h-48 lg:w-1/2 lg:justify-end lg:self-end">
              <div className="relative h-40 w-full max-w-md lg:h-full lg:w-full">
                <Image
                  src="/courses/stock-mastertrack/bonus.png"
                  alt="Stock MasterTrack Bonus Image"
                  fill
                  priority
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
