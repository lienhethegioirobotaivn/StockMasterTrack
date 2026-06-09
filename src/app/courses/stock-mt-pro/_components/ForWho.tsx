import {
  Check,
  ShieldCheck,
  Landmark,
  Users,
  LineChart,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui";

const FOR_WHO_DATA = {
  title: "DÀNH CHO AI?",
  criteria: [
    {
      text: "Đã hoàn thành khóa học Stock MasterTrack hoặc có nền tảng đầu tư vững chắc.",
    },
    {
      text: "Đang đầu tư với quy mô vốn từ ",
      highlight: "200 triệu đồng",
      suffix: " trở lên.",
    },
    {
      text: "Mong muốn nâng cấp chiến lược, ",
      highlight: "tối ưu lợi nhuận",
      suffix: " và quản trị rủi ro chuyên nghiệp.",
    },
    {
      text: "Sẵn sàng dành thời gian và cam kết nghiêm túc để đạt kết quả đột phá.",
    },
  ],
  pricing: {
    label: "HỌC PHÍ",
    price: "9.900.000đ",
    period: " / tháng",
    note: "Học phí chưa bao gồm VAT",
    benefits: [
      { icon: ShieldCheck, text: "Hệ thống bài giảng\ncao cấp" },
      { icon: Landmark, text: "Mentor 1-1 &\nPhân tích danh mục" },
      { icon: Users, text: "Cộng đồng\nMT Pro Elite" },
      { icon: LineChart, text: "Live Trading\nhàng tuần" },
    ],
    cta: "ĐĂNG KÝ THAM GIA NGAY",
    subCta: "Số lượng học viên giới hạn mỗi khóa",
    note2: "Thanh toán an toàn và bảo mật",
  },
};

export function ForWho() {
  return (
    <section className="bg-[#060606] py-12 font-sans">
      <div className="mx-auto px-6 lg:px-12">
        <div className="border border-[#C3944E]/50 rounded-2xl p-6 lg:p-12 bg-[#0a0a0c]/20 grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 flex flex-col justify-between h-full py-2">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white uppercase mb-8">
                {FOR_WHO_DATA.title}
              </h2>

              <div className="space-y-6">
                {FOR_WHO_DATA.criteria.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full border border-[#C3944E] bg-[#C3944E]/10 mt-0.5">
                      <Check className="size-3 text-[#E1BB70] stroke-3" />
                    </div>
                    <p className="text-[13px] lg:text-[14px] text-neutral-300 font-medium leading-relaxed">
                      {item.text}
                      {item.highlight && (
                        <span className="text-[#E1BB70] font-bold">
                          {item.highlight}
                        </span>
                      )}
                      {item.suffix && <span>{item.suffix}</span>}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 hidden lg:block opacity-30 max-w-95">
              <div className="w-full h-24 bg-linear-to-r from-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#C3944E]/80 bg-[#0f0f12] p-6 lg:p-8 flex flex-col items-center">
              <div className="text-center w-full">
                <span className="text-xs font-bold text-white uppercase">
                  {FOR_WHO_DATA.pricing.label}
                </span>
                <div className="mt-1 flex items-baseline justify-center">
                  <span className="text-3xl lg:text-4xl font-black text-[#E1BB70]">
                    {FOR_WHO_DATA.pricing.price}
                  </span>
                  <span className="text-xs lg:text-sm font-medium text-white ml-1">
                    {FOR_WHO_DATA.pricing.period}
                  </span>
                </div>
                <p className="mt-2 text-[11px] text-neutral-500 font-medium">
                  {FOR_WHO_DATA.pricing.note}
                </p>
              </div>

              <div className="w-full h-px bg-white/5 my-6" />

              <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-full mb-8">
                {FOR_WHO_DATA.pricing.benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex gap-3 items-center">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/2 shadow-inner">
                        <Icon className="size-4.5 text-[#C3944E] stroke-[1.5]" />
                      </div>
                      <p className="text-[11px] lg:text-[12px] text-neutral-300 font-semibold leading-tight whitespace-pre-line">
                        {benefit.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="w-full text-center">
                <Button className="w-full h-14 bg-linear-to-r from-[#E1BB70] via-[#F4E3C1] to-[#C3944E] text-black font-bold text-sm hover:opacity-95 flex flex-col justify-center leading-none shadow-md">
                  <span className="font-extrabold">
                    {FOR_WHO_DATA.pricing.cta}
                  </span>
                  <span className="text-xs text-black/70 font-semibold">
                    {FOR_WHO_DATA.pricing.subCta}
                  </span>
                </Button>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 font-medium">
                  <Lock className="size-3 text-[#C3944E]" />
                  <span>{FOR_WHO_DATA.pricing.note2}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
