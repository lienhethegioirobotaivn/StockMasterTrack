"use client";

import { Lock, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui";
import { EventsData } from "@/services/events.service";

type BottomCTAProps = Pick<EventsData, "bottom_cta">;

export function BottomCTA({ bottom_cta }: BottomCTAProps) {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <section className="mt-12">
      <div className="mx-auto w-full">
        <div className="bg-emerald-500/10 border border-emerald-500/5 p-6 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 bg-[linear-gradient(to_right,#f1f9f5,#fdfcf7)]">
          <div className="flex items-start gap-4 lg:max-w-lg">
            <div className="hidden sm:flex size-14 shrink-0 items-center justify-center rounded-xl bg-white border border-emerald-100 shadow-xs">
              <Mail className="size-7 text-lime-600" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-black text-slate-900">
                {bottom_cta.text_1}
              </h3>
              <p className="text-sm font-medium text-gray-500 leading-relaxed">
                {bottom_cta.text_2}
              </p>
            </div>
          </div>

          <div className="w-full lg:max-w-lg space-y-3">
            <form
              onSubmit={handleSubmit}
              className="flex w-full overflow-hidden rounded-xl bg-white border border-gray-200 focus-within:border-emerald-500 transition-colors"
            >
              <input
                type="email"
                placeholder="Nhập email của bạn"
                required
                className="w-full px-4 text-xs font-medium text-gray-700 outline-hidden placeholder:text-gray-400"
              />
              <Button
                type="submit"
                className="shrink-0 bg-fuchsia-700 px-5 text-xs font-bold text-white hover:bg-fuchsia-800 rounded-none h-11"
              >
                <span className="hidden sm:block">ĐĂNG KÝ NHẬN TIN</span>
                <span className="block sm:hidden">
                  <Send />
                </span>
              </Button>
            </form>
            <p className="text-xs font-medium text-gray-400 flex items-center gap-1">
              <span>
                <Lock className="size-3.5" />
              </span>{" "}
              Chúng tôi cam kết không spam. Bạn có thể hủy đăng ký bất kỳ lúc
              nào.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
