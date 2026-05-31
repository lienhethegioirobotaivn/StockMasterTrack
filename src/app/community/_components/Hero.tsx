import Image from "next/image";
import { Users, MessageSquare, CheckCircle2, BookOpen } from "lucide-react";

const features = [
  {
    text: "Cập nhật thị trường & cơ hội đầu tư mỗi ngày",
  },
  {
    text: "Hỏi đáp, trao đổi trực tiếp cùng chuyên gia & mentor",
  },
  {
    text: "Chia sẻ kinh nghiệm, chiến lược đầu tư thực tế",
  },
  {
    text: "Thông báo sự kiện, khóa học và ưu đãi độc quyền",
  },
];

const stats = [
  {
    value: "2.800+",
    label: "Thành viên",
    icon: Users,
  },
  {
    value: "500+",
    label: "Bài viết mỗi tuần",
    icon: BookOpen,
  },
  {
    value: "50+",
    label: "Chủ đề thảo luận",
    icon: MessageSquare,
  },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-6 lg:py-10 flex items-center">
      <div className="lg:left-140 absolute inset-0 z-0 hidden lg:block">
        <Image
          src="/community/hero.jpg"
          alt="Community Background"
          fill
          priority
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white to-transparent w-[15%]" />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col lg:col-span-7 justify-center">
            <span className="text-[14px] lg:text-[13px] font-bold text-lime-600 uppercase mb-2">
              CỘNG ĐỒNG STOCK MASTERTRACK
            </span>

            <h1 className="text-[30px] sm:text-[42px] lg:text-[42px] font-black text-slate-900 leading-[1.3] sm:leading-[1.2]">
              Kết nối – Chia sẻ –
              <br />
              Cùng nhau <span className="text-fuchsia-700">phát triển</span>
            </h1>

            <p className="mt-4 lg:max-w-120 text-[15px] lg:text-base font-medium text-gray-600">
              Cộng đồng dành cho nhà đầu tư Việt Nam muốn học hỏi mỗi ngày, cập
              nhật kiến thức thực chiến và đồng hành cùng nhau trên hành trình
              đầu tư bền vững.
            </p>

            <ul className="mt-6 space-y-3">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 lg:size-4 shrink-0 text-lime-600 mt-0.5" />
                  <span className="text-[15px] lg:text-[15px] font-medium text-gray-700">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row sm:justify-between lg:justify-start gap-8 lg:gap-12 border border-gray-300 rounded-xl p-6 lg:p-0 lg:border-none">
              {stats.map((item, index) => (
                <div key={index} className="flex items-center gap-4 lg:gap-2">
                  <item.icon className="size-10 lg:size-7 shrink-0 text-lime-600" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xl sm:text-lg lg:text-[15px] font-bold text-gray-900 leading-tight">
                      {item.value}
                    </span>
                    <span className="text-lg sm:text-base lg:text-[13px] font-medium text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full lg:col-span-5 flex flex-col gap-4 lg:pl-4">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-100 lg:hidden">
              <Image
                src="/community/hero.jpg"
                alt="Stock MasterTrack Community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
