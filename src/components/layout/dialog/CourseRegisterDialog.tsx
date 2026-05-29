"use client";

import Image from "next/image";
import {
  BookOpen,
  ShieldCheck,
  Users,
  GraduationCap,
  CheckCircle2,
  X,
  LockKeyhole,
} from "lucide-react";
import {
  Button,
  Input,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui";
import { ReactNode } from "react";

interface CourseRegisterDialogProps {
  children: ReactNode;
}

export function CourseRegisterDialog({ children }: CourseRegisterDialogProps) {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-[calc(100%-2rem)] border-0 p-0 shadow-2xl sm:max-w-[80%] rounded-3xl bg-white md:max-h-[90vh] overflow-hidden [&>button]:hidden">
        <div className="relative max-h-[85vh] md:max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 transition-colors">
          <DialogClose className="absolute right-4 top-4 z-50 flex size-8 items-center justify-center rounded-full bg-slate-100/80 text-slate-500 backdrop-blur-xs transition-all hover:bg-slate-200 hover:text-slate-800 active:scale-95 border border-slate-200 focus:outline-none lg:right-6 lg:top-6 cursor-pointer">
            <X className="size-4" />
          </DialogClose>

          <div className="grid lg:grid-cols-2">
            {/* LEFT */}
            <div className="bg-white p-5 sm:p-6 lg:p-8">
              <div className="inline-flex rounded-lg bg-lime-50 px-2 py-1.5 text-xs font-extrabold uppercase text-lime-700">
                Đăng ký khóa học
              </div>

              <h2 className="mt-3 text-[26px] sm:text-[36px] lg:text-[32px] font-black text-slate-900">
                Stock MasterTrack
              </h2>

              <p className="mt-2 text-sm sm:text-base font-medium text-gray-600">
                8 buổi thực chiến - Xây nền tảng đầu tư vững chắc
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Học trực tiếp cùng chuyên gia giàu kinh nghiệm",
                  "Case study thực tế, dễ hiểu, áp dụng ngay",
                  "Tham gia cộng đồng hỗ trợ trọn đời",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-lime-600" />
                    <p className="text-sm font-medium text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100 bg-linear-to-br from-white to-lime-50 shadow-sm">
                <div className="relative aspect-18/12 w-full min-h-45">
                  <Image
                    src="/dialog/course-register-dialog/banner.png"
                    alt="Stock MasterTrack"
                    fill
                    priority
                    className="hidden sm:block object-cover"
                  />

                  <div className="absolute inset-0 p-5 flex flex-col">
                    <div className="flex h-8 sm:h-10 lg:h-8 shrink-0 items-center gap-1">
                      <Image
                        src="/home/Logo.png"
                        alt="Stock MasterTrack"
                        width={200}
                        height={200}
                        className="h-full w-auto object-contain"
                        priority
                      />
                      <div className="flex flex-col justify-center leading-none">
                        <p className="text-[22px] sm:text-[29px] lg:text-[22px] font-black text-lime-500">
                          STOCK
                        </p>
                        <p className="-mt-0.5 text-[10px] sm:text-[14px] lg:text-[10px] font-black text-fuchsia-700">
                          MASTERTRACK
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-8 lg:mt-4 sm:max-w-100 lg:max-w-60">
                      <h3 className="text-xl sm:text-2xl lg:text-[20px] font-black leading-tight text-slate-900">
                        KHÓA HỌC
                        <br />
                        <span className="text-lime-500">STOCK</span>{" "}
                        <span className="text-fuchsia-700">MASTERTRACK</span>
                      </h3>

                      <p className="mt-2 text-xs sm:text-[14px] lg:text-xs font-medium leading-relaxed text-gray-600">
                        Tư duy đúng - Phương pháp chuẩn
                        <br />
                        Kỷ luật thép - Lợi nhuận bền vững
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-t border-gray-100 bg-white p-4">
                  <div className="flex items-center gap-3 lg:gap-1 sm:items-start">
                    <div className="flex size-9 lg:size-8 shrink-0 items-center justify-center rounded-full bg-fuchsia-50">
                      <BookOpen className="size-4 text-fuchsia-700" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm lg:text-[12px] font-bold text-slate-900">
                        8 buổi học
                      </p>
                      <p className="text-[11px] sm:text-[10px] font-medium text-gray-500">
                        Lộ trình bài bản
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 lg:gap-1 sm:items-start">
                    <div className="flex size-9 lg:size-8 shrink-0 items-center justify-center rounded-full bg-lime-50">
                      <GraduationCap className="size-4 text-lime-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm lg:text-[12px] font-bold text-slate-900">
                        Học trực tiếp
                      </p>
                      <p className="text-[11px] sm:text-[10px] font-medium text-gray-500">
                        Q&A cùng giảng viên
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 lg:gap-1 sm:items-start">
                    <div className="flex size-9 lg:size-8 shrink-0 items-center justify-center rounded-full bg-sky-50">
                      <Users className="size-4 text-sky-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm lg:text-[12px] font-bold text-slate-900">
                        Cộng đồng
                      </p>
                      <p className="text-[11px] sm:text-[10px] font-medium text-gray-500">
                        Hỗ trợ trọn đời
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-extrabold uppercase text-gray-700">
                  Học phí
                </p>

                <div className="mt-2 flex flex-wrap items-baseline gap-2 sm:gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-fuchsia-700">
                    4.000.000đ
                  </span>

                  <span className="text-base sm:text-lg font-semibold text-gray-400 line-through">
                    5.000.000đ
                  </span>

                  <div className="rounded-full bg-lime-100 px-2.5 py-1 text-xs font-bold text-lime-700">
                    Tiết kiệm 1.000.000đ
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-gray-500">
                  <LockKeyhole className="size-3 shrink-0 text-gray-400" />
                  Thanh toán an toàn và bảo mật thông tin
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-white p-5 sm:p-6 lg:border-l lg:border-gray-100 lg:p-8">
              <DialogHeader className="space-y-0 text-left lg:pr-10">
                <DialogTitle className="text-2xl sm:text-3xl lg:text-2xl font-black text-slate-900 text-center lg:text-left">
                  THÔNG TIN ĐĂNG KÝ
                </DialogTitle>
              </DialogHeader>

              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1.5 shrink-0">
                  <label className="text-base font-bold text-slate-800">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Nhập họ và tên của bạn"
                    className="h-11 rounded-xl border-gray-200 bg-white shadow-none focus-visible:ring-lime-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5 shrink-0">
                  <label className="text-base font-bold text-slate-800">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Nhập số điện thoại"
                    className="h-11 rounded-xl border-gray-200 bg-white shadow-none focus-visible:ring-lime-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5 shrink-0">
                  <label className="text-base font-bold text-slate-800">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Nhập email của bạn"
                    className="h-11 rounded-xl border-gray-200 bg-white shadow-none focus-visible:ring-lime-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5 shrink-0">
                  <label className="text-base font-bold text-slate-800">
                    Nghề nghiệp
                  </label>
                  <select className="h-11 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 outline-none transition focus:border-lime-500">
                    <option value="">Chọn nghề nghiệp</option>
                    {[
                      "Sinh viên",
                      "Nhân viên văn phòng",
                      "Kinh doanh",
                      "Freelancer",
                      "Khác",
                    ].map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2 shrink-0">
                  <label className="text-base font-bold text-slate-800">
                    Bạn là nhà đầu tư? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {["Mới bắt đầu", "Đã có kinh nghiệm", "Chuyên nghiệp"].map(
                      (item, index) => (
                        <label
                          key={index}
                          className="flex cursor-pointer items-center gap-2"
                        >
                          <input
                            type="radio"
                            name="investor"
                            className="size-4 accent-lime-600"
                            defaultChecked={index === 0}
                          />
                          <span className="text-xs sm:text-sm font-medium text-gray-700">
                            {item}
                          </span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 shrink-0">
                  <label className="text-base font-bold text-slate-800">
                    Bạn biết đến Stock MasterTrack từ đâu?
                  </label>
                  <select className="h-11 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 outline-none transition focus:border-lime-500">
                    <option value="">Chọn nguồn</option>
                    {[
                      "Facebook",
                      "TikTok",
                      "YouTube",
                      "Bạn bè giới thiệu",
                      "Khác",
                    ].map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-3 rounded-xl border border-lime-100 bg-lime-50/70 p-3.5 shrink-0">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white">
                    <ShieldCheck className="size-4.5 text-lime-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-lime-700">
                      Cam kết bảo mật thông tin
                    </p>
                    <p className="mt-0.5 text-xs font-medium leading-relaxed text-gray-600">
                      Chúng tôi cam kết không chia sẻ thông tin của bạn với bên
                      thứ ba.
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-lime-600 text-sm sm:text-base font-black text-white shadow-md shadow-lime-100 transition-all hover:bg-lime-700 shrink-0"
                >
                  ĐĂNG KÝ NGAY
                </Button>

                <div className="mx-auto flex items-center gap-2 text-xs font-medium text-gray-500">
                  <ShieldCheck className="size-3 shrink-0 text-gray-400" />
                  Đội ngũ tư vấn sẽ liên hệ xác nhận trong 24h
                </div>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
