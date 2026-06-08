import { Button } from "@/components/ui";
import { ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-8 lg:py-0">
      <div className="absolute inset-y-0 right-6 hidden w-1/2 lg:block">
        <Image
          src="/knowledge/topic/hero.jpg"
          alt="Thư viện chủ đề"
          fill
          priority
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent w-[40%]" />
        <div className="absolute inset-y-0 right-0 bg-linear-to-l from-white via-white/40 to-transparent w-[10%]" />
      </div>

      <div className="relative mx-auto px-6 lg:px-12 flex flex-col lg:flex-row lg:items-center">
        <div className="z-10 w-full lg:w-1/2 lg:py-6">
          <nav className="flex items-center gap-1.5 text-xs text-gray-500 sm:text-sm lg:mb-6">
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
            <span className="font-medium text-gray-900">Thư viện chủ đề</span>
          </nav>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[40px]">
            Thư viện chủ đề
          </h1>

          <h2 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl">
            Khám phá kiến thức đầu tư{" "}
            <span className="text-fuchsia-700">theo chủ đề</span>
          </h2>

          <p className="mt-4 lg:max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base">
            Hệ thống kiến thức toàn diện từ cơ bản đến chuyên sâu, giúp bạn nâng
            cao tư duy và lợi nhuận bền vững trên thị trường.
          </p>

          <div className="mt-8 flex max-w-md items-center rounded-lg border border-gray-200 bg-white shadow-xs">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Tìm kiếm chủ đề, bài viết..."
                className="w-full bg-transparent px-3 py-2 text-sm text-gray-900 outline-hidden placeholder:text-gray-400"
              />
            </div>
            <Button className="flex items-center justify-center rounded-md bg-[#4b7c1c] text-white hover:bg-[#3d6517] px-5 py-4">
              <Search className="size-4" />
            </Button>
          </div>
        </div>

        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl lg:hidden">
          <Image
            src="/knowledge/topic/hero.jpg"
            alt="Thư viện chủ đề"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
