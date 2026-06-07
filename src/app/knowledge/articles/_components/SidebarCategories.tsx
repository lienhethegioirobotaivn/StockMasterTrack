import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  HeartPulse,
  ShieldAlert,
  LayoutGrid,
  FileText,
} from "lucide-react";

export function SidebarCategories() {
  const categories = [
    { name: "Phân tích thị trường", count: 28, icon: BarChart3 },
    { name: "Phân tích cơ bản", count: 24, icon: BookOpen },
    { name: "Phân tích kỹ thuật", count: 36, icon: GraduationCap },
    { name: "Quản trị rủi ro", count: 18, icon: ShieldCheck },
    { name: "Tâm lý đầu tư", count: 16, icon: HeartPulse },
    { name: "Kiến thức nền tảng", count: 22, icon: ShieldAlert },
    { name: "Quản trị danh mục", count: 14, icon: LayoutGrid },
    { name: "Câu chuyện đầu tư", count: 12, icon: FileText },
  ];

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5">
      <h3 className="text-xl sm:text-2xl lg:text-base font-extrabold uppercase text-gray-950 text-center lg:text-left">
        Danh mục bài viết
      </h3>
      <div className="mt-4 space-y-1.5">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link
              key={cat.name}
              href="#"
              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Icon className="size-4 text-gray-400 group-hover:text-lime-600" />
                <span className="group-hover:text-gray-950">{cat.name}</span>
              </div>
              <span className="text-xs font-medium text-gray-400 group-hover:text-gray-600 bg-gray-50 px-2 py-0.5 rounded-md">
                {cat.count}
              </span>
            </Link>
          );
        })}
      </div>
      <Link
        href="#"
        className="mt-4 flex items-center justify-center gap-1 text-sm font-semibold text-lime-600 hover:text-lime-700 pt-3 border-t border-gray-50"
      >
        Xem tất cả danh mục <ArrowRight className="size-3.5" />
      </Link>
    </div>
  );
}
