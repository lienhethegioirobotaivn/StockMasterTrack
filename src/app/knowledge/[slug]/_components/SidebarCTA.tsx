import { ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui";

export function SidebarCTA() {
  return (
    <section className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-xs">
      <h2 className="text-[17px] sm:text-lg font-bold uppercase text-slate-900">
        Cập nhật kiến thức mới nhất
      </h2>
      <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">
        Nhận ngay bài viết hữu ích mỗi tuần từ Stock MasterTrack.
      </p>

      <div className="mt-4 flex flex-col gap-3">
        <Input
          type="email"
          placeholder="Nhập email của bạn"
          className="h-10 text-xs rounded-lg border-gray-200"
        />
        <button className="h-10 w-full rounded-lg bg-lime-600 text-[13px] sm:text-sm font-bold text-white transition-all duration-200 hover:scale-103 active:scale-97 cursor-pointer">
          ĐĂNG KÝ NHẬN TIN
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-1.5 text-[11px] leading-relaxed text-gray-400">
        <div className="flex items-start gap-1">
          <ShieldCheck className="size-3.5 text-lime-600 shrink-0 mt-0.5" />
          <span>Chúng tôi cam kết không spam.</span>
        </div>
        <div className="flex items-start gap-1">
          <ShieldCheck className="size-3.5 text-lime-600 shrink-0 mt-0.5" />
          <span>Bạn có thể hủy đăng ký bất kỳ lúc nào.</span>
        </div>
      </div>
    </section>
  );
}
