import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button, Input } from "@/components/ui";

export function BottomCTA() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-linear-to-r from-emerald-50/40 via-emerald-50/60 to-emerald-50/20 px-5 py-8 md:px-10 md:py-10">
      <div className="absolute -bottom-4 left-1/3 hidden size-32 opacity-20 lg:block">
        <div className="size-full bg-[radial-gradient(#10b981_1.5px,transparent_1.5px)] bg-size-[12px_12px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-md">
          <h2 className="text-[22px] sm:text-[26px] font-bold text-slate-900">
            Cập nhật kiến thức mới nhất
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Nhận ngay bài viết hữu ích mỗi tuần
          </p>
        </div>

        <div className="w-full lg:w-140 lg:shrink-0">
          <div className="flex items-center gap-2 overflow-hidden rounded-xl border border-gray-200/60 bg-white shadow-xs">
            <Input
              type="email"
              placeholder="Nhập email của bạn"
              className="h-9 sm:h-11 border-0 bg-transparent px-3 text-xs focus-visible:ring-0 focus-visible:ring-offset-0 md:text-sm flex-1"
            />
            <Button className="h-9 sm:h-11 rounded-lg bg-fuchsia-700 sm:px-6 text-xs font-bold text-white transition">
              <span className="hidden sm:block">ĐĂNG KÝ NHẬN TIN</span>
              <span className="block sm:hidden">
                <ArrowRight className="size-4" />
              </span>
            </Button>
          </div>

          <div className="mt-3 flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-500">
            <ShieldCheck className="size-3.5 text-emerald-600 shrink-0" />
            <span>
              Chúng tôi cam kết không spam. Bạn có thể hủy đăng ký bất kỳ lúc
              nào.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
