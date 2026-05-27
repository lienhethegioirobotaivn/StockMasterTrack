import { Users, Target, LineChart, User } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "LỘ TRÌNH BÀI BẢN",
    description:
      "8 buổi học được thiết kế logic, dễ hiểu, từ nền tảng đến thực chiến.",
  },
  {
    icon: User,
    title: "GIẢNG VIÊN THỰC CHIẾN",
    description:
      "Đội ngũ giảng viên có nhiều năm kinh nghiệm đầu tư và đào tạo.",
  },
  {
    icon: LineChart,
    title: "NỘI DUNG CẬP NHẬT",
    description:
      "Bám sát thị trường, cập nhật liên tục các xu hướng và cơ hội đầu tư.",
  },
  {
    icon: Users,
    title: "CỘNG ĐỒNG HỖ TRỢ",
    description: "Kết nối, trao đổi và đồng hành cùng cộng đồng nhà đầu tư.",
  },
] as const;

export function Features() {
  return (
    <section className="w-full bg-[#fcfdfd] py-12 md:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-black text-gray-900 uppercase">
          VÌ SAO CHỌN <span className="text-lime-600">STOCK MASTER</span>
          <span className="text-fuchsia-700">TRACK?</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-xl bg-white border border-gray-100/60 p-6 text-center shadow-sm"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-fuchsia-100/80">
                <item.icon className="size-8 text-fuchsia-700 stroke-[1.5]" />
              </div>

              <h3 className="mt-4 text-base font-extrabold text-gray-900 uppercase">
                {item.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
