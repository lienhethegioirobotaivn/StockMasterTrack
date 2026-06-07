import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SidebarNewsletter() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-5 text-center">
      <h3 className="mt-3 text-lg sm:text-2xl lg:text-lg font-extrabold text-gray-950">
        CẬP NHẬT KIẾN THỨC MỚI NHẤT
      </h3>
      <p className="mt-1.5 text-sm sm:text-base lg:text-sm text-gray-500">
        Nhận ngay bài viết hữu ích mỗi tuần.
      </p>

      <div className="mt-4 space-y-2">
        <Input
          type="email"
          placeholder="Nhập email của bạn"
          className="h-10 border-gray-200 bg-white text-sm focus-visible:ring-gray-300 rounded-lg"
        />
        <Button className="h-10 w-full rounded-lg bg-fuchsia-700 text-sm font-bold text-white hover:bg-fuchsia-800 cursor-pointer">
          ĐĂNG KÝ NHẬN TIN
        </Button>
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-400">
        <CheckCircle2 className="size-3.5 text-lime-600 shrink-0" />
        <span className="text-left leading-snug">
          Chúng tôi cam kết không spam. Bạn có thể hủy đăng ký bất kỳ lúc nào.
        </span>
      </div>
    </div>
  );
}
