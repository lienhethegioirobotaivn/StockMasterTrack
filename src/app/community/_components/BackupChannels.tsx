import { Send, Phone, Mail } from "lucide-react";
import Link from "next/link";

const backupChannels = [
  {
    icon: Send,
    title: "Telegram Channel",
    description: "Cập nhật nhanh chóng & ổn định",
    linkText: "Tham gia ngay",
    href: "#",
    color: "text-white",
    bgColor: "bg-sky-400",
  },
  {
    icon: Phone,
    title: "WhatsApp Community",
    description: "Nhận thông báo quan trọng",
    linkText: "Tham gia ngay",
    href: "#",
    color: "text-white",
    bgColor: "bg-green-400",
  },
  {
    icon: Mail,
    title: "Email Newsletter",
    description: "Nhận bản tin & tài liệu độc quyền",
    linkText: "Đăng ký ngay",
    href: "#",
    color: "text-indigo-50",
    bgColor: "bg-indigo-600",
  },
];

export function BackupChannels() {
  return (
    <section className="w-full bg-white px-6 py-10 lg:px-12 lg:py-16 border-t border-gray-100">
      <div className="mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-black text-slate-900 uppercase tracking-wide">
          KÊNH KẾT NỐI DỰ PHÒNG
        </h2>
        <p className="mt-2 text-sm sm:text-base font-medium text-gray-500">
          Trong trường hợp Zalo gặp sự cố, chúng tôi sẽ kết nối bạn qua các kênh
          dự phòng bên dưới.
        </p>

        <div className="mt-6 lg:mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {backupChannels.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-2xl border border-gray-200/80 bg-white p-5 text-left transition-all hover:border-gray-400"
            >
              <div
                className={`flex size-12 shrink-0 items-center justify-center rounded-full ${item.bgColor}`}
              >
                <item.icon className={`size-6 ${item.color}`} />
              </div>
              <div className="flex flex-col min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                  {item.title}
                </h3>
                <span className="mt-0.5 text-xs sm:text-sm font-medium text-gray-500 truncate">
                  {item.description}
                </span>
                <Link
                  href={"https://zalo.me/g/tmf9comkbyxqsqiv2ler"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-xs sm:text-sm font-bold text-lime-600 inline-flex items-center gap-1 hover:underline"
                >
                  {item.linkText} <span className="text-[10px]">➔</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
