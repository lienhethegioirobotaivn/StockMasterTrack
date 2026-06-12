import { Button } from "@/components/ui/button";
import { StockMTProRegisterDialog } from "@/components/layout/dialog";
import { StockMTProData } from "@/services/courses/stockmtpro.service";
import { LucideIcon } from "@/components/lucide-icon";

type RequirementsProps = Pick<StockMTProData, "requirements">;

export function Requirements({ requirements }: RequirementsProps) {
  return (
    <section className="bg-[#060606] py-12 font-sans">
      <div className="mx-auto px-6 sm:px-12 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase relative pb-3">
            {requirements.title}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#C3944E]" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch mb-6 lg:mb-10">
          {requirements.stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-white/15 hover:border-[#C3944E]/80 bg-[#0e0e11] p-6"
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#141419]">
                  <LucideIcon
                    name={item.icon}
                    className="size-8 text-[#C3944E] stroke-[1.5]"
                  />
                </div>

                <p className="text-sm sm:text-base lg:text-sm leading-relaxed text-neutral-400 font-medium">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <StockMTProRegisterDialog>
            <Button className="inline-flex h-10 sm:h-12 items-center justify-center rounded-lg border border-[#C3944E]/40 bg-transparent px-8 text-sm sm:text-base lg:text-sm font-bold text-white uppercase transition-all hover:bg-[#C3944E]/10">
              Kiểm tra điều kiện & đăng ký
            </Button>
          </StockMTProRegisterDialog>
        </div>
      </div>
    </section>
  );
}
