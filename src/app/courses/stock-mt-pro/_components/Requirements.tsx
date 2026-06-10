import { Award, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const REQUIREMENTS_DATA = {
  title: "ĐIỀU KIỆN ĐĂNG KÝ",
  items: [
    {
      icon: Award,
      content: (
        <>
          Đã hoàn thành khóa học{" "}
          <strong className="font-bold text-white">Stock MasterTrack</strong>{" "}
          hoặc được xét duyệt đầu vào tương đương.
        </>
      ),
    },
    {
      icon: Clock,
      content: (
        <>
          Đang đầu tư với quy mô vốn từ{" "}
          <strong className="font-bold text-white">200 triệu đồng</strong> trở
          lên.
        </>
      ),
    },
    {
      icon: Users,
      content: <>Cam kết tham gia đầy đủ khóa học và thực hành nghiêm túc.</>,
    },
  ],
};

export function Requirements() {
  return (
    <section className="bg-[#060606] py-12 font-sans">
      <div className="mx-auto px-6 sm:px-12 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase relative pb-3">
            {REQUIREMENTS_DATA.title}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#C3944E]" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch mb-6 lg:mb-10">
          {REQUIREMENTS_DATA.items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-white/15 hover:border-[#C3944E]/80 bg-[#0e0e11] p-6"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#141419]">
                  <IconComponent className="size-8 text-[#C3944E] stroke-[1.5]" />
                </div>

                <p className="text-sm sm:text-base lg:text-sm leading-relaxed text-neutral-400 font-medium">
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button className="inline-flex h-10 sm:h-12 items-center justify-center rounded-lg border border-[#C3944E]/40 bg-transparent px-8 text-sm sm:text-base lg:text-sm font-bold text-white uppercase transition-all hover:bg-[#C3944E]/10">
            Kiểm tra điều kiện & đăng ký
          </Button>
        </div>
      </div>
    </section>
  );
}
