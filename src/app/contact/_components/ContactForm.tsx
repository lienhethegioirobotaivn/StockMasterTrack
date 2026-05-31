import { Button } from "@/components/ui";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  SendHorizontal,
} from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const contactDetails = [
  {
    icon: MapPin,
    title: "Địa chỉ",
    content: "184/1A Lê Văn Sỹ, Phú Nhuận, TPHCM",
  },
  {
    icon: Phone,
    title: "Hotline",
    content: "0394 783 239\n(Thứ 2 - Thứ 6: 8h30 - 17h30)",
  },
  {
    icon: Mail,
    title: "Email",
    content: "lienhe@thegioirobot.ai.vn",
  },
  {
    icon: FaFacebook,
    title: "Fanpage",
    content: "fb.com/stockmastertrack",
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    content: "Thứ 2 - Thứ 6: 8h30 - 17h30\nThứ 7: 8h30 - 12h00",
  },
];

const socialLinks = [
  { icon: FaFacebook, href: "#", color: "text-blue-600 bg-blue-50" },
  { icon: FaYoutube, href: "#", color: "text-red-600 bg-red-50" },
  { icon: SiZalo, href: "#", color: "text-blue-500 bg-blue-50" },
  { icon: FaTelegramPlane, href: "#", color: "text-sky-500 bg-sky-50" },
];

export function ContactForm() {
  return (
    <section className="w-full bg-slate-50/50 py-12 lg:py-16">
      <div className="mx-auto w-full px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:gap-4 lg:grid-cols-11 items-start">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-xs lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl lg:text-[24px] font-bold text-gray-900 mb-6 text-center lg:text-left">
              GỬI THÔNG TIN CHO CHÚNG TÔI
            </h2>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-base font-semibold text-gray-700">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập họ và tên của bạn"
                    className="w-full h-11 px-3 rounded-lg border-[1.5px] border-gray-200 bg-white text-[14px] text-gray-900 placeholder-gray-400 focus:border-lime-600 focus:outline-hidden transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-base font-semibold text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="w-full h-11 px-3 rounded-lg border-[1.5px] border-gray-200 bg-white text-[14px] text-gray-900 placeholder-gray-400 focus:border-lime-600 focus:outline-hidden transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-base font-semibold text-gray-700">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    className="w-full h-11 px-3 rounded-lg border-[1.5px] border-gray-200 bg-white text-[14px] text-gray-900 placeholder-gray-400 focus:border-lime-600 focus:outline-hidden transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-base font-semibold text-gray-700">
                    Chủ đề <span className="text-red-500">*</span>
                  </label>
                  <div className="relative w-full">
                    <select
                      defaultValue=""
                      className="w-full h-11 pl-3 pr-10 rounded-lg border-[1.5px] border-gray-200 bg-white text-[14px] text-gray-900 appearance-none focus:border-lime-600 focus:outline-hidden transition-colors"
                    >
                      <option value="" disabled hidden>
                        Chọn chủ đề
                      </option>
                      <option value="course">Tư vấn khóa học</option>
                      <option value="investment">Lộ trình đầu tư</option>
                      <option value="cooperate">Hợp tác kinh doanh</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                      <svg
                        className="size-4 fill-none stroke-current stroke-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-base font-semibold text-gray-700">
                  Nội dung tin nhắn <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Nhập nội dung tin nhắn của bạn..."
                  className="w-full min-h-30 p-3 rounded-lg border-[1.5px] border-gray-200 bg-white text-[14px] text-gray-900 placeholder-gray-400 focus:border-lime-600 focus:outline-hidden transition-colors resize-none"
                />
              </div>

              <div className="flex items-start gap-3 bg-emerald-50/60 border border-emerald-100 rounded-xl p-4">
                <ShieldCheck className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-emerald-900 leading-tight">
                    Thông tin của bạn được bảo vệ tuyệt đối.
                  </span>
                  <span className="text-[13px] font-medium text-emerald-700 mt-0.5">
                    Chúng tôi không chia sẻ thông tin cho bên thứ ba.
                  </span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-lime-600 text-white font-bold flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-102 text-[15px]"
              >
                <SendHorizontal className="size-4" />
                GỬI TIN NHẮN
              </Button>
            </form>
          </div>

          <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[24px] font-bold text-gray-900 mb-6 text-center lg:text-left">
                THÔNG TIN LIÊN HỆ
              </h2>

              <div className="space-y-6">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-50 text-lime-600 border border-slate-100">
                      <item.icon className="size-5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[16px] font-semibold text-gray-900 leading-tight">
                        {item.title}
                      </span>
                      <span
                        className={`text-[15px] font-semibold text-gray-500 mt-1 wrap-break-word whitespace-pre-wrap`}
                      >
                        {item.content}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-9">
              <span className="text-base lg:text-[14px] font-bold text-gray-800 block mb-4">
                KẾT NỐI VỚI CHÚNG TÔI
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    // href={social.href}
                    href={"https://zalo.me/0394783239"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`size-10 rounded-full flex items-center justify-center transition-transform hover:scale-105 border border-gray-100 ${social.color}`}
                  >
                    <social.icon className="size-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
