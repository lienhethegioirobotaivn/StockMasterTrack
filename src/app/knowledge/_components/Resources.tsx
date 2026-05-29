import { Button } from "@/components/ui";
import { FileText, FileSpreadsheet, ArrowRight } from "lucide-react";

type Resource = {
  title: string;
  type: string;
  size: string;
  icon: React.ElementType;
  iconColor: string;
  bgColor: string;
};

const resources: Resource[] = [
  {
    title: "Ebook: 10 nguyên tắc đầu tư thành công",
    type: "PDF",
    size: "2.4MB",
    icon: FileText,
    iconColor: "text-fuchsia-700",
    bgColor: "bg-fuchsia-50",
  },
  {
    title: "Hướng dẫn đọc báo cáo tài chính",
    type: "PDF",
    size: "1.8MB",
    icon: FileText,
    iconColor: "text-fuchsia-700",
    bgColor: "bg-fuchsia-50",
  },
  {
    title: "Checklist phân tích doanh nghiệp",
    type: "PDF",
    size: "1.2MB",
    icon: FileText,
    iconColor: "text-lime-600",
    bgColor: "bg-lime-50",
  },
  {
    title: "Mẫu Excel quản lý danh mục đầu tư",
    type: "XLSX",
    size: "892KB",
    icon: FileSpreadsheet,
    iconColor: "text-lime-600",
    bgColor: "bg-lime-50",
  },
  {
    title: "Từ điển thuật ngữ chứng khoán A-Z",
    type: "PDF",
    size: "3.1MB",
    icon: FileText,
    iconColor: "text-fuchsia-700",
    bgColor: "bg-fuchsia-50",
  },
];

export function Resources() {
  return (
    <section className="w-full h-fit rounded-2xl bg-gray-100/45 p-4 sm:p-6">
      <h2 className="mb-6 text-[25px] sm:text-2xl font-bold uppercase text-slate-900 text-center lg:text-left">
        Tài liệu & hướng dẫn
      </h2>

      <div className="flex flex-col gap-4">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`flex size-11 sm:size-9 shrink-0 items-center justify-center rounded-lg ${resource.bgColor} ${resource.iconColor}`}
              >
                <resource.icon className="size-6.5 sm:size-4.5" />
              </div>

              <div className="min-w-0">
                <h3 className="line-clamp-2 lg:line-clamp-1 text-[14px] sm:text-base lg:text-sm font-bold leading-tight text-slate-800">
                  {resource.title}
                </h3>
                <p className="mt-0.5 sm:mt-1 lg:mt-0.5 text-[10px] sm:text-xs lg:text-[11px] text-gray-400 uppercase">
                  {resource.type} <span className="lowercase">·</span>{" "}
                  {resource.size}
                </p>
                <button className="mt-1 flex sm:hidden items-center gap-1 shrink-0 text-xs font-semibold text-lime-600 transition hover:text-lime-700">
                  Tải về
                  <ArrowRight className="size-3" />
                </button>
              </div>
            </div>

            <Button className="hidden sm:flex items-center gap-1 shrink-0 text-xs font-bold text-lime-600 transition hover:text-lime-700">
              Tải về
              <ArrowRight className="size-3" />
            </Button>
          </div>
        ))}
      </div>

      <Button className="mt-6 flex w-full items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white py-4 sm:py-4.5 lg:py-4 text-[15px] font-semibold text-slate-700 shadow-xs transition hover:bg-gray-50">
        Xem tất cả tài liệu
        <ArrowRight className="size-3.5" />
      </Button>
    </section>
  );
}
