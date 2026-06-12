import { Check } from "lucide-react";
import { Button } from "@/components/ui";
import { StockMTProRegisterDialog } from "@/components/layout/dialog";
import { StockMTProData } from "@/services/courses/stockmtpro.service";
import { LucideIcon } from "@/components/lucide-icon";

type ForWhoProps = Pick<StockMTProData, "for_who">;

export function ForWho({ for_who }: ForWhoProps) {
  return (
    <section className="bg-[#060606] py-12 font-sans">
      <div className="mx-auto px-6 sm:px-12">
        <div className="border border-[#C3944E]/50 rounded-2xl p-6 lg:p-12 bg-[#0a0a0c]/20 grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 flex flex-col justify-between h-full py-2">
            <div>
              <h2 className="text-3xl lg:text-3xl font-bold text-white uppercase mb-8 text-center lg:text-left">
                {for_who.left.title}
              </h2>

              <div className="space-y-6">
                {for_who.left.content &&
                  for_who.left.content
                    .split("\n")
                    .filter((item) => item.trim() !== "")
                    .map((item, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="flex size-5 shrink-0 items-center justify-center rounded-full border border-[#C3944E] bg-[#C3944E]/10 mt-0.5">
                          <Check className="size-3 text-[#E1BB70] stroke-3" />
                        </div>
                        <p className="text-[13px] sm:text-base lg:text-[14px] text-neutral-300 font-medium leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
              </div>
            </div>

            <div className="mt-12 hidden lg:block opacity-30 max-w-95">
              <div className="w-full h-24 bg-linear-to-r from-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#C3944E]/80 bg-[#0f0f12] p-6 lg:p-8 flex flex-col items-center">
              <div className="text-center w-full">
                <span className="text-xl sm:text-2xl lg:text-base font-bold text-white uppercase">
                  {for_who.right.title}
                </span>
                <div className="mt-1 flex items-baseline justify-center">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#E1BB70]">
                    {for_who.right.pricing.price}
                  </span>
                  <span className="text-xs sm:text-base lg:text-sm font-medium text-white ml-1">
                    {for_who.right.pricing.period}
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-sm lg:text-xs text-neutral-400 font-medium">
                  {for_who.right.note}
                </p>
              </div>

              <div className="w-full h-px bg-white/5 my-3 lg:my-6" />

              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-6 w-full mb-8">
                {for_who.right.stats.map((item, index) => {
                  return (
                    <div key={index} className="flex gap-3 items-center">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/2 shadow-inner">
                        <LucideIcon
                          name={item.icon}
                          className="size-4.5 text-[#C3944E] stroke-[1.5]"
                        />
                      </div>
                      <p className="text-sm lg:text-[12px] text-neutral-300 font-semibold leading-tight whitespace-pre-line">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="w-full text-center">
                <StockMTProRegisterDialog>
                  <Button className="w-full h-14 bg-linear-to-r from-[#E1BB70] via-[#F4E3C1] to-[#C3944E] text-black font-bold text-sm sm:text-base lg:text-smhover:opacity-95 flex flex-col justify-center leading-none shadow-md">
                    <span className="font-extrabold">
                      {for_who.right.register_button.text_1}
                    </span>
                    <span className="text-xs text-black/70 font-semibold">
                      {for_who.right.register_button.text_2}
                    </span>
                  </Button>
                </StockMTProRegisterDialog>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-xs sm:text-sm lg:text-xs text-neutral-500 font-medium">
                  <LucideIcon
                    name={for_who.right.note_2.icon}
                    className="size-3 text-[#C3944E]"
                  />
                  <span>{for_who.right.note_2.text}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
