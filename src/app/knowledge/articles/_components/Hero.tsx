import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-8 lg:py-0">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src="/knowledge/articles/hero.jpg"
          alt="Stock MasterTrack Articles"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white to-transparent w-[30%]" />
      </div>

      <div className="relative mx-auto flex flex-col px-6 lg:px-12 lg:flex-row lg:items-center">
        <div className="z-10 w-full lg:w-1/2 lg:py-6 lg:pb-14">
          <nav className="flex items-center gap-1.5 text-xs font-medium text-gray-500 sm:text-sm lg:mb-16">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="size-3.5 text-gray-400" />
            <Link
              href="/knowledge"
              className="hover:text-gray-900 transition-colors"
            >
              Kiến thức
            </Link>
            <ChevronRight className="size-3.5 text-gray-400" />
            <span className="font-semibold text-gray-900">Bài viết</span>
          </nav>

          <h1 className="mt-6 text-[46px] sm:text-6xl lg:text-[56px] font-extrabold leading-none text-gray-950">
            Bài viết
          </h1>

          <p className="mt-2 lg:max-w-xl text-base leading-relaxed text-gray-600">
            Cập nhật kiến thức thực chiến, phương pháp đầu tư và góc nhìn thị
            trường từ Stock MasterTrack.
          </p>
        </div>

        <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-xl lg:hidden">
          <Image
            src="/knowledge/articles/hero.jpg"
            alt="Stock MasterTrack Articles"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
