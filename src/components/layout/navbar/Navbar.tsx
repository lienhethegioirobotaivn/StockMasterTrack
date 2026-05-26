"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { FaGraduationCap } from "react-icons/fa";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const navItems = [
  {
    label: "TRANG CHỦ",
    href: "/",
  },
  {
    label: "KHÓA HỌC",
    href: "/courses",
    isMega: true,
  },
  {
    label: "CỘNG ĐỒNG",
    href: "/community",
  },
  {
    label: "SỰ KIỆN",
    href: "/events",
  },
  {
    label: "KIẾN THỨC",
    href: "/knowledge",
  },
  {
    label: "LIÊN HỆ",
    href: "/contact",
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const pathname = usePathname();

  const isCoursesActive = pathname.startsWith("/courses");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20.5 max-w-295 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex h-11.5 shrink-0 items-center gap-2">
          <Image
            src="/home/logo.png"
            alt="Stock MasterTrack"
            width={200}
            height={200}
            className="h-full w-auto object-contain"
            priority
          />
          <div className="flex flex-col justify-center leading-none">
            <p className="text-[33px] font-black text-lime-500">STOCK</p>
            <p className="-mt-0.5 text-[16px] font-black text-fuchsia-700">
              MASTERTRACK
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-4 xl:gap-9 lg:flex h-full">
          {navItems.map((item) => {
            const isActive = item.isMega
              ? isCoursesActive
              : pathname === item.href;

            if (item.isMega) {
              return (
                <div
                  key={item.label}
                  className="group relative flex h-full items-center"
                >
                  <button
                    className={`flex items-center gap-1 text-base font-bold transition whitespace-nowrap ${
                      isActive
                        ? "text-lime-600"
                        : "text-[#1a1a1a] hover:text-lime-600"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </button>

                  {isActive && (
                    <span className="absolute left-1/2 bottom-4 h-0.5 w-[90%] -translate-x-1/2 rounded-full bg-lime-500" />
                  )}

                  {/* MEGA DROPDOWN MENU */}
                  <div className="invisible absolute right-1/2 lg:-right-87.5 xl:-right-112.5 top-full w-[90vw] max-w-225 translate-x-0 rounded-2xl border border-gray-100 bg-white p-6 opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-200 group-hover:visible group-hover:opacity-100 z-50">
                    <div className="grid grid-cols-2 gap-8 pb-4 border-b border-gray-100">
                      {/* Course 1 */}
                      <div className="flex gap-4">
                        <div className="relative h-full w-36 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                          <Image
                            src="/home/course1.png"
                            alt="Stock MasterTrack"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div>
                            <span className="inline-block rounded bg-lime-50 px-2 py-0.5 text-[11px] font-bold text-lime-600">
                              KHÓA HỌC NỔI BẬT
                            </span>
                            <h3 className="mt-2 text-lg font-black text-lime-600">
                              STOCK MASTERTRACK
                            </h3>
                            <p className="text-xs text-gray-500 font-medium">
                              Nền tảng đầu tư bài bản
                            </p>
                            <ul className="mt-3 space-y-1.5">
                              {[
                                "8 buổi học thực chiến",
                                "Dành cho người mới bắt đầu",
                                "Kiến thức nền tảng vững chắc",
                                "Phân tích doanh nghiệp",
                                "Quản trị danh mục hiệu quả",
                              ].map((text) => (
                                <li
                                  key={text}
                                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-700"
                                >
                                  <CheckCircle2 className="h-3.5 w-3.5 text-lime-500 shrink-0" />
                                  {text}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Link href="/courses/mastertrack">
                            <Button
                              variant="outline"
                              className="mt-4 h-9 w-full justify-between rounded-lg border-lime-500 px-4 text-xs font-bold text-lime-600 hover:bg-lime-50 hover:text-lime-600"
                            >
                              TÌM HIỂU KHÓA HỌC
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Button>
                          </Link>
                        </div>
                      </div>

                      {/* Course 2 */}
                      <div className="flex gap-4">
                        <div className="relative h-full w-36 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                          <Image
                            src="/home/course2.png"
                            alt="Stock MT Pro"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div>
                            <span className="inline-block rounded bg-fuchsia-50 px-2 py-0.5 text-[11px] font-bold text-fuchsia-600">
                              KHÓA HỌC NÂNG CAO
                            </span>
                            <h3 className="mt-2 text-lg font-black text-fuchsia-700">
                              STOCK MT PRO
                            </h3>
                            <p className="text-xs text-gray-500 font-medium">
                              Tối ưu danh mục & lợi thế đầu tư
                            </p>
                            <ul className="mt-3 space-y-1.5">
                              {[
                                "Nâng cao tư duy & chiến lược",
                                "Phân tích chuyên sâu",
                                "Quản trị rủi ro & tối ưu lợi nhuận",
                                "Case study thực tế",
                                "Dành cho nhà đầu tư nghiêm túc",
                              ].map((text) => (
                                <li
                                  key={text}
                                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-700"
                                >
                                  <CheckCircle2 className="h-3.5 w-3.5 text-fuchsia-500 shrink-0" />
                                  {text}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Link href="/courses/mt-pro">
                            <Button
                              variant="outline"
                              className="mt-4 h-9 w-full justify-between rounded-lg border-fuchsia-500 px-4 text-xs font-bold text-fuchsia-600 hover:bg-fuchsia-50 hover:text-fuchsia-600"
                            >
                              TÌM HIỂU KHÓA HỌC
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-1 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center text-lime-500">
                          <FaGraduationCap className="size-full" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-900">
                            Không biết chọn khóa nào?
                          </p>
                          <p className="text-[11px] font-medium text-gray-500">
                            Liên hệ tư vấn để được hỗ trợ lựa chọn khóa học phù
                            hợp với bạn!
                          </p>
                        </div>
                      </div>
                      <Link href="/contact">
                        <Button
                          variant="outline"
                          className="h-9 rounded-lg border-gray-200 bg-white px-4 text-xs font-bold text-gray-700 hover:bg-gray-50"
                        >
                          <MessageSquare className="mr-1.5 h-3.5 w-3.5 text-gray-500" />
                          LIÊN HỆ TƯ VẤN
                          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex h-full items-center text-base font-bold transition whitespace-nowrap ${
                  isActive
                    ? "text-lime-600"
                    : "text-[#1a1a1a] hover:text-lime-600"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-1/2 bottom-4 h-0.5 w-[90%] -translate-x-1/2 rounded-full bg-lime-500" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block shrink-0">
          <Button className="h-11.5 rounded-md bg-fuchsia-700 px-7 text-[13px] font-bold text-white shadow-none hover:bg-fuchsia-800">
            ĐĂNG KÝ NGAY
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex size-12 items-center justify-center rounded-md lg:hidden"
        >
          {mobileOpen ? <X className="size-8" /> : <Menu className="size-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-screen overflow-y-auto" : "max-h-0"
        }`}
      >
        <div className="space-y-1 px-5 py-4">
          {navItems.map((item) => {
            const isActive = item.isMega
              ? isCoursesActive
              : pathname === item.href;

            if (item.isMega) {
              return (
                <div key={item.label} className="border-b border-gray-100 pb-2">
                  <button
                    onClick={() => setCourseOpen(!courseOpen)}
                    className={`flex w-full items-center justify-between py-3 text-left text-base font-bold ${
                      isActive ? "text-lime-600" : "text-gray-900"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        courseOpen
                          ? "rotate-180 text-lime-600"
                          : "text-gray-400"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      courseOpen
                        ? "max-h-100 opacity-100 mt-2 space-y-3 pb-3"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {/* Course 1 */}
                    <Link
                      href="/courses/mastertrack"
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between rounded-xl p-3.5 transition-all border ${
                        pathname === "/courses/mastertrack"
                          ? "bg-lime-50/70 border-lime-200"
                          : "bg-gray-50 border-transparent active:bg-gray-100"
                      }`}
                    >
                      <div>
                        <span className="text-[11px] font-bold text-lime-600 bg-lime-100/60 px-1.5 py-1 rounded">
                          NỔI BẬT
                        </span>
                        <h4 className="mt-1 text-sm font-black text-gray-900">
                          STOCK MASTERTRACK
                        </h4>
                        <p className="text-[11px] text-gray-500 font-medium">
                          Nền tảng đầu tư bài bản
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-lime-600 shrink-0" />
                    </Link>

                    {/* Course 2 */}
                    <Link
                      href="/courses/mt-pro"
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between rounded-xl p-3.5 transition-all border ${
                        pathname === "/courses/mt-pro"
                          ? "bg-fuchsia-50/70 border-fuchsia-200"
                          : "bg-gray-50 border-transparent active:bg-gray-100"
                      }`}
                    >
                      <div>
                        <span className="text-[11px] font-bold text-fuchsia-600 bg-fuchsia-100/60 px-1.5 py-1 rounded">
                          NÂNG CAO
                        </span>
                        <h4 className="mt-1 text-sm font-black text-gray-900">
                          STOCK MT PRO
                        </h4>
                        <p className="text-[11px] text-gray-500 font-medium">
                          Tối ưu danh mục & lợi thế đầu tư
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-fuchsia-600 shrink-0" />
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3.5 text-base font-bold border-b border-gray-100 last:border-0 ${
                  isActive ? "text-lime-600" : "text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-4">
            <Button className="h-12 w-full text-white rounded-xl bg-fuchsia-700 text-base font-bold shadow-md hover:bg-fuchsia-800 active:scale-[0.98] transition-transform">
              ĐĂNG KÝ NGAY
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
