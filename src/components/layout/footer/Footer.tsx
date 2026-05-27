import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, MessageSquare } from "lucide-react";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const exploreLinks = {
  items: [
    { text: "Trang chủ", endpoint: "/" },
    { text: "Khóa học", endpoint: "/courses" },
    { text: "Cộng đồng", endpoint: "/community" },
    { text: "Sự kiện", endpoint: "/events" },
    { text: "Kiến thức", endpoint: "/knowledge" },
  ],
};

const supportLinks = {
  items: [
    { text: "Câu hỏi thường gặp", endpoint: "/" },
    { text: "Chính sách bảo mật", endpoint: "/" },
    { text: "Điều khoản sử dụng", endpoint: "/" },
    { text: "Hướng dẫn thanh toán", endpoint: "/" },
  ],
};

const contactItems = [
  { icon: Mail, text: "hello@stockmastertrack.vn" },
  { icon: Phone, text: "0586 123 456" },
  { icon: MapPin, text: "TP. Hồ Chí Minh, Việt Nam" },
];

const socialIcons = [FaFacebook, FaYoutube, MessageSquare, FaTiktok];

export function Footer() {
  return (
    <footer className="w-full bg-[#0a1625] text-white">
      <div className="mx-auto px-8 pt-10 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="space-y-4 lg:col-span-1">
            <Link href={"/"} className="flex items-center gap-2">
              <div className="relative size-10.5 shrink-0">
                <Image
                  src="/home/Logo.png"
                  alt="STOCK MASTERTRACK LOGO"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="font-black">
                <p className="text-3xl text-lime-500">STOCK</p>
                <p className="text-sm text-fuchsia-600">MASTERTRACK</p>
              </span>
            </Link>

            <p className="text-[15px] lg:text-[12px] font-medium text-gray-400 lg:w-60">
              Hệ sinh thái đào tạo và cộng đồng đầu tư thực chiến hàng đầu tại
              Việt Nam.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socialIcons.map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex size-8 items-center justify-center rounded-full border border-gray-700 bg-gray-900/40 text-gray-400 transition-colors hover:border-gray-500 hover:text-white"
                >
                  <Icon className="size-4 fill-current stroke-1" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 lg:mx-auto">
            <h3 className="text-lg lg:text-[15px] font-bold text-gray-200 uppercase">
              KHÁM PHÁ
            </h3>
            <ul className="mt-3 space-y-2">
              {exploreLinks.items.map((explore) => (
                <li key={explore.text}>
                  <Link
                    href={explore.endpoint}
                    className="text-base lg:text-[12px] font-medium text-gray-400 transition-colors hover:text-white"
                  >
                    {explore.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 lg:mx-auto">
            <h3 className="text-lg lg:text-[15px] font-bold text-gray-200 uppercase">
              HỖ TRỢ
            </h3>
            <ul className="mt-3 space-y-2">
              {supportLinks.items.map((support) => (
                <li key={support.text}>
                  <Link
                    href={support.endpoint}
                    className="text-base lg:text-[12px] font-medium text-gray-400 transition-colors hover:text-white"
                  >
                    {support.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 lg:mx-auto">
            <h3 className="text-lg lg:text-[15px] font-bold text-gray-200 uppercase">
              LIÊN HỆ
            </h3>
            <ul className="mt-3 space-y-2.5">
              {contactItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2.5 text-base lg:text-[12px] font-medium text-gray-400"
                >
                  <item.icon className="size-3.5 shrink-0 text-gray-400" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 sm:col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="text-lg lg:text-[15px] font-bold text-gray-200 uppercase">
              ĐĂNG KÝ NHẬN BẢN TIN
            </h3>

            <p className="text-[15px] lg:text-[12px] font-medium text-gray-400">
              Nhận bản tin thị trường và kiến thức đầu tư miễn phí mỗi tuần!
            </p>

            <div className="flex w-full items-center rounded-md border border-gray-800 bg-[#0e1e32]">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="w-full bg-transparent px-3 py-1.5 text-sm lg:text-[11px] font-medium text-white outline-none placeholder:text-gray-600"
              />
              <button className="flex size-8 shrink-0 items-center justify-center rounded-md bg-lime-600 text-white transition-colors hover:bg-lime-700">
                <ArrowRight className="size-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-900 text-left text-xs font-medium text-gray-600">
          © 2026 Stock MasterTrack. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
