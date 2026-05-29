import Image from "next/image";
import { Search } from "lucide-react";
import { Button, Input } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-8 md:py-12 lg:py-0">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src="/knowledge/hero.jpg"
          alt="Knowledge Hero"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent" />
      </div>

      <div className="relative mx-auto flex flex-col px-6 lg:px-12 lg:flex-row lg:items-center">
        <div className="z-10 w-full lg:w-1/2 lg:py-12">
          <span className="text-xs sm:text-lg lg:text-base font-bold uppercase text-lime-600">
            Kiến thức
          </span>

          <h1 className="mt-3 text-[31px] sm:text-5xl lg:text-[40px] font-extrabold leading-tight text-gray-950">
            Kiến thức thực chiến
            <br />
            Cho nhà đầu tư <span className="text-fuchsia-700">thông minh</span>
          </h1>

          <p className="mt-4 lg:w-130 text-sm sm:text-lg lg:text-base leading-relaxed text-gray-600">
            Cập nhật kiến thức đầu tư, phân tích thị trường, kinh nghiệm thực
            chiến và góc nhìn từ đội ngũ Stock MasterTrack.
          </p>

          <div className="mt-6 flex items-center gap-2 rounded-xl border border-gray-200 shadow-xs">
            <div className="relative flex-1">
              <Search className="hidden sm:block absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Bạn muốn tìm hiểu về điều gì?"
                className="h-10 border-0 bg-transparent pl-3 sm:pl-11 lg:pl-9 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm sm:text-base! lg:text-base"
              />
            </div>
            <Button className="h-10 sm:h-11 lg:h-12 rounded-lg bg-lime-600 px-3 sm:px-6 font-medium text-white hover:bg-lime-700 text-sm sm:text-base">
              <span className="hidden sm:block">Tìm kiếm</span>
              <span className="block sm:hidden">
                <Search />
              </span>
            </Button>
          </div>
        </div>

        <div className="relative mt-8 aspect-21/9 w-full overflow-hidden rounded-xl lg:hidden">
          <Image
            src="/knowledge/hero.jpg"
            alt="Knowledge Hero"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
