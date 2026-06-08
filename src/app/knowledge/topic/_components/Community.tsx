import { Button } from "@/components/ui";
import { MessageSquareText, BarChart4, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Community() {
  return (
    <section className="mx-auto px-6 lg:px-12 py-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 rounded-lg bg-[#091a15] p-6 text-white relative overflow-hidden">
        <div className="max-w-xs">
          <h2 className="text-xl font-bold text-white">
            Cộng đồng nhà đầu tư tinh hoa
          </h2>
          <p className="mt-2 text-xs text-gray-400 leading-relaxed">
            Tham gia cộng đồng Stock MasterTrack để học hỏi, chia sẻ và nhận
            định thị trường cùng các nhà đầu tư khác.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 lg:py-5 flex-1">
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-950/50 text-emerald-500 border border-emerald-500/20">
              <MessageSquareText className="size-4" />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-white leading-none">
                Chia sẻ kiến thức
              </h4>
              <p className="mt-1.5 text-[11px] text-gray-400 leading-none">
                Học hỏi từ cộng đồng
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-950/50 text-emerald-500 border border-emerald-500/20">
              <BarChart4 className="size-4" />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-white leading-none">
                Nhận định thị trường
              </h4>
              <p className="mt-1.5 text-[11px] text-gray-400 leading-none">
                Cập nhật mỗi ngày
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-950/50 text-emerald-500 border border-emerald-500/20">
              <Award className="size-4" />
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-white leading-none">
                Sự kiện độc quyền
              </h4>
              <p className="mt-1.5 text-[11px] text-gray-400 leading-none">
                Dành riêng thành viên
              </p>
            </div>
          </div>
        </div>

        <Button className="bg-fuchsia-700 py-5 px-2 text-sm font-bold text-white">
          <Link
            href={"https://zalo.me/g/tmf9comkbyxqsqiv2ler"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-fit flex items-center justify-center gap-2 "
          >
            Tham gia cộng đồng ngay
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
