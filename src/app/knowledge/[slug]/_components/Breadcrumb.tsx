import Link from "next/link";

export function Breadcrumb() {
  return (
    <div
      className="mb-6 flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2 text-[11px] text-gray-400 md:text-xs
      [&::-webkit-scrollbar]:h-1
      [&::-webkit-scrollbar-track]:bg-transparent
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-slate-200
      hover:[&::-webkit-scrollbar-thumb]:bg-slate-300"
    >
      <span className="cursor-pointer hover:text-slate-600 shrink-0">
        <Link href={"/"}>Trang chủ</Link>
      </span>
      <span className="shrink-0">&gt;</span>
      <span className="cursor-pointer hover:text-slate-600 shrink-0">
        <Link href={"/knowledge"}>Kiến thức</Link>
      </span>
      <span className="shrink-0">&gt;</span>
      <span className="cursor-pointer hover:text-slate-600 shrink-0">
        Phân tích thị trường
      </span>
      <span className="shrink-0">&gt;</span>
      <span className="text-slate-600 font-medium shrink-0">
        Nhận định thị trường chứng khoán tuần 20-24/05: Cơ hội & rủi ro
      </span>
    </div>
  );
}
