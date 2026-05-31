"use client";

import { Button } from "@/components/ui";
import Link from "next/link";

export function JoinForm() {
  // const handleSubmit = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  // };

  return (
    <section className="w-full bg-white px-6 py-6 lg:px-12 lg:py-10">
      <div className="mx-auto rounded-2xl bg-emerald-50/50 p-6 lg:p-8 border border-emerald-100/50">
        <h2 className="text-[21px] sm:text-3xl lg:text-2xl font-bold text-lime-600">
          Tham gia cộng đồng ngay
        </h2>
        <p className="mt-2 text-sm sm:text-base lg:text-base text-gray-600">
          Điền thông tin bên dưới, Admin sẽ liên hệ và mời bạn vào nhóm Zalo
          cộng đồng. Chúng tôi có backup trên Telegram & WhatsApp để đảm bảo kết
          nối liên tục.
        </p>

        {/* <form
          onSubmit={handleSubmit}
          className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-end"
        > */}
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-end">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm sm:text-base lg:text-sm font-bold text-gray-700">
              Họ và tên
            </label>
            <input
              type="text"
              placeholder="Nhập họ và tên"
              className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm font-medium text-gray-900 outline-none transition-all focus:border-emerald-600"
              // required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm sm:text-base lg:text-sm font-bold text-gray-700">
              Số điện thoại
            </label>
            <input
              type="tel"
              placeholder="Nhập số điện thoại"
              className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm font-medium text-gray-900 outline-none transition-all focus:border-emerald-600"
              // required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm sm:text-base lg:text-sm font-bold text-gray-700">
              Email (không bắt buộc)
            </label>
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm font-medium text-gray-900 outline-none transition-all focus:border-lime-600"
            />
          </div>

          <Link
            href={"https://zalo.me/g/tmf9comkbyxqsqiv2ler"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              // type="submit"
              className="h-11 w-full rounded-xl bg-lime-600 text-xs sm:text-base lg:text-sm font-bold text-white transition-all"
            >
              THAM GIA CỘNG ĐỒNG NGAY
            </Button>
          </Link>
        </div>
        {/* </form> */}

        <p className="mt-4 text-xs font-medium text-gray-400">
          Cam kết bảo mật thông tin. Chúng tôi không chia sẻ thông tin của bạn
          cho bên thứ ba.
        </p>
      </div>
    </section>
  );
}
