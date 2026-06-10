import { BarChart3, Rocket, Shield, Users } from "lucide-react";

const WHY_CHOOSE_DATA = {
  title: "VÌ SAO LÀ MT PRO?",
  items: [
    {
      icon: BarChart3,
      title: "NÂNG CẤP TƯ DUY",
      description:
        "Hệ thống tư duy và chiến lược ở cấp độ cao hơn, giúp bạn nhìn thị trường đa chiều và sắc bén.",
    },
    {
      icon: Rocket,
      title: "QUẢN TRỊ VỐN TINH VI",
      description:
        "Quản trị rủi ro và tối ưu hóa lợi nhuận với các mô hình phân bổ vốn chuyên nghiệp.",
    },
    {
      icon: Shield,
      title: "CHIẾN LƯỢC THỰC CHIẾN",
      description:
        "Học các chiến lược đầu tư nâng cao, phù hợp với mọi chu kỳ thị trường và danh mục lớn.",
    },
    {
      icon: Users,
      title: "CỘNG ĐỒNG TINH HOA",
      description:
        "Kết nối cùng những nhà đầu tư chuyên nghiệp, chia sẻ cơ hội đầu tư chất lượng.",
    },
  ],
};

export function WhyChoose() {
  return (
    <section className="bg-[#060606] py-16 font-sans border-t border-white/5">
      <div className="mx-auto px-6 sm:px-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase">
            {WHY_CHOOSE_DATA.title}
          </h2>
          <div className="mt-2.5 h-1 w-10 bg-[#C3944E]" />
        </div>

        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_DATA.items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg border border-white/15 bg-[#131312] backdrop-blur-md transition-all duration-300 hover:border-[#C3944E]/75"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-inner">
                  <IconComponent className="size-6 text-[#C3944E] stroke-[1.5]" />
                </div>

                <div className="flex flex-col space-y-2.5 pt-1">
                  <h3 className="text-sm sm:text-base lg:text-[15px] font-bold uppercase text-[#E1BB70]">
                    {item.title}
                  </h3>
                  <p className="text-[12px] sm:text-sm lg:text-[13px] leading-relaxed text-neutral-400 font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
