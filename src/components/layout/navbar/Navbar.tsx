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
import { CourseRegisterDialog } from "@/components/layout/dialog";

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

  const isStockMTProPage = pathname.startsWith("/courses/stock-mt-pro");
  const isCoursesActive = pathname.startsWith("/courses");

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        isStockMTProPage
          ? "border-neutral-800 bg-black"
          : "border-gray-200 bg-white"
      }`}
    >
      <div className="mx-auto flex h-20.5 max-w-295 items-center justify-between px-4">
        <Link href="/" className="flex h-fit shrink-0 items-center gap-2">
          <Image
            src={
              isStockMTProPage
                ? "/courses/stock-mt-pro/stock-mt-pro-logo2.jpg"
                : "/home/Logo3.png"
            }
            alt="Stock MasterTrack"
            width={200}
            height={200}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

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
                      isStockMTProPage
                        ? isCoursesActive
                          ? "text-[#d4b26f]"
                          : "text-gray-200 hover:text-[#d4b26f]"
                        : isActive
                          ? "text-lime-600"
                          : "text-[#1a1a1a] hover:text-lime-600"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </button>

                  {isActive && (
                    <span
                      className={`absolute left-1/2 bottom-4 h-0.5 w-[90%] -translate-x-1/2 rounded-full ${
                        isStockMTProPage ? "bg-[#d4b26f]" : "bg-lime-500"
                      }`}
                    />
                  )}

                  <div
                    className={`invisible absolute right-1/2 lg:-right-87.5 xl:-right-112.5 top-full w-[90vw] max-w-225 translate-x-0 rounded-2xl border p-6 opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-200 group-hover:visible group-hover:opacity-100 z-50 ${
                      isStockMTProPage
                        ? "border-neutral-800 bg-[#121212]"
                        : "border-gray-100 bg-white"
                    }`}
                  >
                    <div
                      className={`grid grid-cols-2 gap-8 pb-4 border-b ${
                        isStockMTProPage
                          ? "border-neutral-800"
                          : "border-gray-100"
                      }`}
                    >
                      <div className="flex gap-4">
                        <div className="relative h-full w-36 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                          <Image
                            src="/navbar/StockMasterTrack2.jpg"
                            alt="Stock MasterTrack"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div>
                            <span
                              className={`inline-block rounded px-2 py-0.5 text-[11px] font-bold ${
                                isStockMTProPage
                                  ? "bg-[#d4b26f]/10 text-[#d4b26f]"
                                  : "bg-lime-50 text-lime-600"
                              }`}
                            >
                              KHÓA HỌC NỔI BẬT
                            </span>
                            <h3
                              className={`mt-2 text-lg font-black ${
                                isStockMTProPage
                                  ? "text-[#d4b26f]"
                                  : "text-lime-600"
                              }`}
                            >
                              STOCK MASTERTRACK
                            </h3>
                            <p
                              className={`text-xs ${isStockMTProPage ? "text-gray-300" : "text-gray-600"} font-medium`}
                            >
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
                                  className={`flex items-center gap-1.5 text-xs font-semibold ${
                                    isStockMTProPage
                                      ? "text-gray-200"
                                      : "text-gray-700"
                                  }`}
                                >
                                  <CheckCircle2
                                    className={`h-3.5 w-3.5 shrink-0 ${
                                      isStockMTProPage
                                        ? "text-[#d4b26f]"
                                        : "text-lime-500"
                                    }`}
                                  />
                                  {text}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Link href="/courses/stock-mastertrack">
                            <Button
                              variant="outline"
                              className={`mt-4 h-9 w-full justify-between rounded-lg px-4 text-xs font-bold transition-colors ${
                                isStockMTProPage
                                  ? "border-[#d4b26f] bg-transparent text-[#d4b26f] hover:bg-[#d4b26f]/10 hover:text-[#d4b26f]"
                                  : "border-lime-500 text-lime-600 hover:bg-lime-50 hover:text-lime-600"
                              }`}
                            >
                              TÌM HIỂU KHÓA HỌC
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Button>
                          </Link>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="relative h-full w-36 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                          <Image
                            src="/navbar/MTPro2.jpg"
                            alt="Stock MT Pro"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div>
                            <span
                              className={`inline-block rounded px-2 py-0.5 text-[11px] font-bold ${
                                isStockMTProPage
                                  ? "bg-[#d4b26f]/10 text-[#d4b26f]"
                                  : "bg-fuchsia-50 text-fuchsia-600"
                              }`}
                            >
                              KHÓA HỌC NÂNG CAO
                            </span>
                            <h3
                              className={`mt-2 text-lg font-black ${
                                isStockMTProPage
                                  ? "text-[#d4b26f]"
                                  : "text-fuchsia-700"
                              }`}
                            >
                              STOCK MT PRO
                            </h3>
                            <p
                              className={`text-xs ${isStockMTProPage ? "text-gray-300" : "text-gray-600"} font-medium`}
                            >
                              Tối ưu danh mục & lợi thế đầu tư
                            </p>
                            <ul className="mt-3 space-y-1.5">
                              {[
                                "Nâng cao tư duy & chiến lược",
                                "Phân tích chuyên sâu",
                                "Quản trị rủi rò & tối ưu lợi nhuận",
                                "Case study thực tế",
                                "Dành cho nhà đầu tư nghiêm túc",
                              ].map((text) => (
                                <li
                                  key={text}
                                  className={`flex items-center gap-1.5 text-xs font-semibold ${
                                    isStockMTProPage
                                      ? "text-gray-200"
                                      : "text-gray-700"
                                  }`}
                                >
                                  <CheckCircle2
                                    className={`h-3.5 w-3.5 shrink-0 ${
                                      isStockMTProPage
                                        ? "text-[#d4b26f]"
                                        : "text-fuchsia-500"
                                    }`}
                                  />
                                  {text}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Link href="/courses/stock-mt-pro">
                            <Button
                              variant="outline"
                              className={`mt-4 h-9 w-full justify-between rounded-lg px-4 text-xs font-bold transition-colors ${
                                isStockMTProPage
                                  ? "border-[#d4b26f] bg-transparent text-[#d4b26f] hover:bg-[#d4b26f]/10 hover:text-[#d4b26f]"
                                  : "border-fuchsia-500 text-fuchsia-600 hover:bg-fuchsia-50 hover:text-fuchsia-600"
                              }`}
                            >
                              TÌM HIỂU KHÓA HỌC
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`mt-1 flex items-center justify-between rounded-xl px-4 py-3 ${
                        isStockMTProPage ? "bg-neutral-900" : "bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex size-8 items-center justify-center ${
                            isStockMTProPage
                              ? "text-[#d4b26f]"
                              : "text-lime-500"
                          }`}
                        >
                          <FaGraduationCap className="size-full" />
                        </div>
                        <div>
                          <p
                            className={`text-xs font-bold ${
                              isStockMTProPage
                                ? "text-gray-200"
                                : "text-gray-900"
                            }`}
                          >
                            Không biết chọn khóa nào?
                          </p>
                          <p className="text-[11px] font-medium text-gray-500">
                            Liên hệ tư vấn để được hỗ trợ lựa chọn khóa học phù
                            hợp với bạn!
                          </p>
                        </div>
                      </div>
                      <Link
                        href={"https://zalo.me/0394783239"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className={`h-9 border px-4 text-xs font-bold ${
                            isStockMTProPage
                              ? "border-[#d4b26f] bg-transparent text-[#d4b26f] hover:bg-white/2"
                              : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <MessageSquare className="mr-1.5 h-3.5 w-3.5" />
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
                  isStockMTProPage
                    ? pathname === item.href
                      ? "text-[#d4b26f]"
                      : "text-gray-200 hover:text-[#d4b26f]"
                    : pathname === item.href
                      ? "text-lime-600"
                      : "text-[#1a1a1a] hover:text-lime-600"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span
                    className={`absolute left-1/2 bottom-4 h-0.5 w-[90%] -translate-x-1/2 rounded-full ${
                      isStockMTProPage ? "bg-[#d4b26f]" : "bg-lime-500"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block shrink-0">
          <CourseRegisterDialog>
            <Button
              className={`h-11.5 rounded-md px-7 text-[13px] font-bold shadow-none transition-colors duration-300 ${
                isStockMTProPage
                  ? "border border-[#d4b26f]/50 bg-transparent text-[#d4b26f] hover:bg-[#d4b26f]/10"
                  : "bg-fuchsia-700 text-white hover:bg-fuchsia-800"
              }`}
            >
              ĐĂNG KÝ NGAY
            </Button>
          </CourseRegisterDialog>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex size-12 shrink-0 items-center justify-center rounded-md lg:hidden active:bg-gray-100 ${
            isStockMTProPage ? "text-gray-200" : "text-gray-900"
          }`}
        >
          {mobileOpen ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      <div
        className={`border-t transition-all duration-300 lg:hidden ${
          isStockMTProPage
            ? "border-neutral-800 bg-black"
            : "border-gray-100 bg-white"
        } ${
          mobileOpen
            ? "max-h-[calc(100vh-82px)] overflow-y-auto opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="space-y-1 px-5 py-4">
          {navItems.map((item) => {
            const isActive = item.isMega
              ? isCoursesActive
              : pathname === item.href;

            if (item.isMega) {
              return (
                <div
                  key={item.label}
                  className={`border-b pb-2 ${
                    isStockMTProPage ? "border-neutral-800" : "border-gray-100"
                  }`}
                >
                  <button
                    onClick={() => setCourseOpen(!courseOpen)}
                    className={`flex w-full items-center justify-between py-3 text-left text-base font-bold ${
                      isStockMTProPage
                        ? isActive
                          ? "text-[#d4b26f]"
                          : "text-gray-200"
                        : isActive
                          ? "text-lime-600"
                          : "text-gray-900"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        courseOpen
                          ? `rotate-180 ${
                              isStockMTProPage
                                ? "text-[#d4b26f]"
                                : "text-lime-600"
                            }`
                          : "text-gray-200"
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
                    <Link
                      href="/courses/stock-mastertrack"
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between rounded-xl p-3.5 transition-all border ${
                        pathname === "/courses/stock-mastertrack"
                          ? isStockMTProPage
                            ? "bg-neutral-900 border-[#d4b26f]/30"
                            : "bg-lime-50/70 border-lime-200"
                          : isStockMTProPage
                            ? "bg-neutral-950 border-transparent active:bg-neutral-900"
                            : "bg-gray-50 border-transparent active:bg-gray-100"
                      }`}
                    >
                      <div>
                        <span
                          className={`text-[11px] font-bold px-1.5 py-1 rounded ${
                            isStockMTProPage
                              ? "text-[#d4b26f] bg-[#d4b26f]/20"
                              : "text-lime-600 bg-lime-100/60"
                          }`}
                        >
                          NỔI BẬT
                        </span>
                        <h4
                          className={`mt-1 text-sm font-black ${
                            isStockMTProPage ? "text-gray-200" : "text-gray-900"
                          }`}
                        >
                          STOCK MASTERTRACK
                        </h4>
                        <p
                          className={`text-[11px] ${isStockMTProPage ? "text-gray-400" : "text-gray-700"} font-medium`}
                        >
                          Nền tảng đầu tư bài bản
                        </p>
                      </div>
                      <ArrowRight
                        className={`h-4 w-4 shrink-0 ${
                          isStockMTProPage ? "text-[#d4b26f]" : "text-lime-600"
                        }`}
                      />
                    </Link>

                    <Link
                      href="/courses/stock-mt-pro"
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between rounded-xl p-3.5 transition-all border ${
                        pathname === "/courses/stock-mt-pro"
                          ? isStockMTProPage
                            ? "bg-neutral-900 border-[#d4b26f]/30"
                            : "bg-fuchsia-50/70 border-fuchsia-200"
                          : isStockMTProPage
                            ? "bg-neutral-950 border-transparent active:bg-neutral-900"
                            : "bg-gray-50 border-transparent active:bg-gray-100"
                      }`}
                    >
                      <div>
                        <span
                          className={`text-[11px] font-bold px-1.5 py-1 rounded ${
                            isStockMTProPage
                              ? "text-[#d4b26f] bg-[#d4b26f]/20"
                              : "text-fuchsia-600 bg-fuchsia-100/60"
                          }`}
                        >
                          NÂNG CAO
                        </span>
                        <h4
                          className={`mt-1 text-sm font-black ${
                            isStockMTProPage ? "text-gray-200" : "text-gray-900"
                          }`}
                        >
                          STOCK MT PRO
                        </h4>
                        <p
                          className={`text-[11px] ${isStockMTProPage ? "text-gray-400" : "text-gray-700"} font-medium`}
                        >
                          Tối ưu danh mục & lợi thế đầu tư
                        </p>
                      </div>
                      <ArrowRight
                        className={`h-4 w-4 shrink-0 ${
                          isStockMTProPage
                            ? "text-[#d4b26f]"
                            : "text-fuchsia-600"
                        }`}
                      />
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
                className={`block py-3.5 text-base font-bold border-b last:border-0 ${
                  isStockMTProPage
                    ? "border-neutral-800 text-gray-200"
                    : "border-gray-100 text-gray-900"
                } ${
                  pathname === item.href
                    ? isStockMTProPage
                      ? "text-[#d4b26f]"
                      : "text-lime-600"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-2">
            <CourseRegisterDialog>
              <Button
                onClick={() => setMobileOpen(false)}
                className={`h-12 w-full text-base font-bold shadow-md active:scale-[0.98] transition-transform rounded-xl ${
                  isStockMTProPage
                    ? "bg-transparent border border-[#d4b26f]/50 text-[#d4b26f]"
                    : "bg-fuchsia-700 text-white hover:bg-fuchsia-800"
                }`}
              >
                ĐĂNG KÝ NGAY
              </Button>
            </CourseRegisterDialog>
          </div>
        </div>
      </div>
    </header>
  );
}
