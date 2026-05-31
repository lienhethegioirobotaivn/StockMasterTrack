import { UserCheck, Zap, FileText, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: UserCheck,
    title: "Tư vấn đúng nhu cầu",
    desc: "Đưa ra giải pháp phù hợp với mục tiêu của bạn",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: Zap,
    title: "Hỗ trợ nhanh chóng",
    desc: "Đội ngũ luôn sẵn sàng hỗ trợ kịp thời",
    color: "text-lime-600 bg-lime-50",
  },
  {
    icon: FileText,
    title: "Thông tin rõ ràng",
    desc: "Minh bạch, chi tiết và dễ hiểu",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: HeartHandshake,
    title: "Đồng hành lâu dài",
    desc: "Hỗ trợ học viên trước, trong và sau khóa học",
    color: "text-fuchsia-600 bg-fuchsia-50",
  },
];

export function WhyChoose() {
  return (
    <section className="w-full bg-white py-12 lg:py-16 border-b border-gray-100">
      <div className="mx-auto w-full px-6 lg:px-12">
        <h2 className="text-center text-[22px] sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase mb-10">
          VÌ SAO HỌC VIÊN TIN TƯỞNG LIÊN HỆ VỚI CHÚNG TÔI?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div
                className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}
              >
                <item.icon className="size-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <h3 className="text-[15px] font-bold text-gray-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[13px] font-medium text-gray-500 mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
