import { LineChart, MessageSquare, Share2, Calendar } from "lucide-react";

const contentItems = [
  {
    icon: LineChart,
    title: "Bản tin & phân tích thị trường",
    description:
      "Cập nhật hàng ngày về thị trường, nhận định xu hướng và cơ hội đầu tư.",
    color: "text-lime-600",
    bgColor: "bg-lime-50",
  },
  {
    icon: MessageSquare,
    title: "Hỏi đáp & trao đổi",
    description:
      "Đặt câu hỏi, thảo luận và nhận giải đáp từ chuyên gia và cộng đồng.",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: Share2,
    title: "Chia sẻ kinh nghiệm",
    description:
      "Học hỏi từ kinh nghiệm thực chiến của các thành viên trong cộng đồng.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: Calendar,
    title: "Sự kiện & ưu đãi độc quyền",
    description:
      "Thông tin sự kiện, webinar, khóa học và ưu đãi dành riêng cho thành viên.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
];

export function CommunityContent() {
  return (
    <section className="w-full bg-white px-6 py-10 lg:px-12 lg:py-8">
      <div className="mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-black text-slate-900 uppercase tracking-wide text-center lg:text-left">
          NỘI DUNG CỘNG ĐỒNG
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg text-center"
            >
              <div
                className={`flex size-13 shrink-0 items-center justify-center rounded-full mx-auto ${item.bgColor}`}
              >
                <item.icon className={`size-7 ${item.color}`} />
              </div>
              <h3 className="mt-4 text-base lg:text-[15px] font-bold text-gray-900 leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-sm lg:text-[12px] font-medium text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
