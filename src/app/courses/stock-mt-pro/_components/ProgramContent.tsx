import { LucideIcon } from "@/components/lucide-icon";
import { StockMTProData } from "@/services/courses/stockmtpro.service";

type ProgramContentProps = Pick<StockMTProData, "program_content">;

export function ProgramContent({ program_content }: ProgramContentProps) {
  return (
    <section className="bg-[#060606] py-12 font-sans">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase relative pb-3">
            {program_content.title}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#C3944E]" />
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mb-4 sm:mb-6 lg:mb-4">
          {program_content.top.stats.map((item, index) => {
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between rounded-xl border border-white/15 bg-[#131312] p-6 transition-all hover:border-[#C3944E]/80"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-[#141419] shrink-0">
                      <LucideIcon
                        name={item.icon}
                        className="size-5 text-[#C3944E] stroke-[1.5]"
                      />
                    </div>

                    <h3 className="text-sm sm:text-base lg:text-sm font-bold uppercase text-[#E1BB70] leading-snug pt-1">
                      {item.title}
                    </h3>
                  </div>

                  <ul className="mt-4 space-y-3">
                    {item.content &&
                      item.content
                        .split("\n")
                        .filter((item) => item.trim() !== "")
                        .map((bullet, bIndex) => (
                          <li
                            key={bIndex}
                            className="flex items-start gap-2 text-xs sm:text-sm lg:text-xs text-neutral-400 font-medium leading-relaxed"
                          >
                            <span className="text-[#C3944E] mt-1 shrink-0 text-xs">
                              •
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border border-white/15 hover:border-[#C3944E]/80 rounded-xl bg-[#131312] p-6 lg:p-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {program_content.bottom.stats.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-4 px-2">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#141419]">
                  <LucideIcon
                    name={item.icon}
                    className="size-5 text-[#C3944E] stroke-[1.5]"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm sm:text-base lg:text-sm font-bold text-[#C3944E] uppercase">
                    {item.title}
                  </span>
                  <div className="flex flex-col mt-0.5">
                    <span className="text-xs sm:text-sm lg:text-xs font-bold text-white/80 leading-snug">
                      {item.description}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
