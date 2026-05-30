import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "Học được cách đầu tư không theo cảm xúc và fomo, biết được các phong cách đầu tư: phân tích cơ bản và phân tích kỹ thuật, tránh được các khoản đầu tư sai lầm",
    avatar: "/home/DoanThanhSon.jpg",
    name: "Anh Đoàn Thanh Sơn",
    role: "Founder DNS Solutions ",
  },
  {
    content:
      "Vui vẻ, giá trị kiến thức thực tế, thông tin bài bản, nhanh nhạy, 70% có thể áp dụng",
    avatar: "/home/avatar.png",
    name: "Tăng Thị Thuỳ Dung",
    role: "Phó phòng kinh doanh",
  },
  {
    content:
      "Anh cảm thấy khoá Stock MasterTrack phải nói là quá OK, đáng học, nên học với anh thì xứng đáng với những gì anh bỏ ra. Tham gia khoá học có thể nói như được rút ngắn thời gian về kiến thức so vs mình tự học.",
    avatar: "/home/avatar.png",
    name: "Trần Bỉnh Tường",
    role: "",
  },
  {
    content:
      "Mình đã tham gia nhiều khóa học nhưng Stock MasterTrack là khóa học thực tế nhất.",
    avatar: "/home/avatar.png",
    name: "Quốc Bảo",
    role: "Nhân viên IT",
  },
] as const;

export function Testimonials() {
  return (
    <section className="w-full bg-[#fcfdfd] py-12 md:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-black text-gray-900 uppercase">
          HỌC VIÊN NÓI GÌ VỀ <span className="text-lime-600">STOCK </span>
          <span className="text-lime-600">MASTER</span>
          <span className="text-fuchsia-700">TRACK?</span>
        </h2>

        <div className="mt-8 lg:mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-xl bg-[#f8faf9]/60 p-5 border border-gray-100/50"
            >
              <div>
                <Quote className="size-5 text-lime-700 transform scale-x-[-1] fill-current stroke-[0.5]" />

                <p className="mt-3 text-base lg:text-sm font-medium leading-relaxed text-gray-600 whitespace-pre-wrap">
                  {item.content}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-gray-100/60">
                <div className="relative size-12 lg:size-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  {item.avatar && (
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="min-w-0">
                  <h4 className="text-base lg:text-sm font-bold text-gray-900 truncate">
                    {item.name}
                  </h4>
                  <p className="text-sm lg:text-xs font-medium text-gray-400 truncate">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
