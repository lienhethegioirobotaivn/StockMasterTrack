import { LucideIcon } from "@/components/lucide-icon";
import { StockMTProData } from "@/services/courses/stockmtpro.service";

type WhyChooseProps = Pick<StockMTProData, "why_choose">;

export function WhyChoose({ why_choose }: WhyChooseProps) {
  return (
    <section className="bg-[#060606] py-16 font-sans border-t border-white/5">
      <div className="mx-auto px-6 sm:px-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase">
            {why_choose.title}
          </h2>
          <div className="mt-2.5 h-1 w-10 bg-[#C3944E]" />
        </div>

        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {why_choose.stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg border border-white/15 bg-[#131312] backdrop-blur-md transition-all duration-300 hover:border-[#C3944E]/75"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-inner">
                  <LucideIcon
                    name={item.icon}
                    className="size-6 text-[#C3944E] stroke-[1.5]"
                  />
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
