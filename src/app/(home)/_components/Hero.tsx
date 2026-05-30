import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Target,
  TrendingUp,
  BadgeCheck,
  GraduationCap,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui";
import Link from "next/link";

const highlights = [
  {
    icon: BookOpen,
    title: "Kiến thức dễ hiểu",
    description: "Hệ thống hóa từ cơ bản đến nâng cao, dễ áp dụng.",
  },
  {
    icon: Target,
    title: "Tư duy đúng",
    description: "Xây nền tảng tư duy đầu tư bài bản, kỷ luật và dài hạn.",
  },
  {
    icon: TrendingUp,
    title: "Thực chiến",
    description: "Case study thực tế, bám sát thị trường Việt Nam.",
  },
];

const stats = [
  {
    value: "2500+",
    label: "Học viên",
    icon: Users,
  },
  {
    value: "8",
    label: "Buổi học thực chiến",
    icon: GraduationCap,
  },
  {
    value: "50+",
    label: "Sự kiện & Talkshow",
    icon: BookOpen,
  },
  {
    value: "100%",
    label: "Thực chiến",
    icon: BadgeCheck,
  },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-6 lg:py-10 flex items-center">
      <div className="lg:left-160 absolute inset-0 z-0 hidden lg:block">
        <Image
          src="/home/hero.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white to-transparent w-[25%]" />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col lg:col-span-7 justify-center">
            <h1 className="text-[38px] lg:text-[34px] font-black text-slate-900 leading-[1.3] lg:leading-[1.4]">
              HỌC ĐẦU TƯ CHỨNG KHOÁN
              <br />
              BÀI BẢN CÙNG
              <br />
              <span className="text-lime-500">CHUYÊN GIA</span>{" "}
              <span className="text-fuchsia-700">THỰC CHIẾN</span>
            </h1>

            <p className="mt-2 lg:max-w-120 text-base lg:text-[14px] font-medium text-gray-600">
              Stock MasterTrack giúp bạn xây dựng tư duy đúng đắn, hiểu thị
              trường và quản trị rủi ro để đầu tư hiệu quả, bền vững.
            </p>

            <div className="mt-5 flex flex-wrap gap-4">
              <Link href={"/courses/stock-mastertrack"}>
                <Button className="w-full lg:w-fit inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-fuchsia-700 px-6 text-sm font-bold text-white transition-all hover:bg-fuchsia-800">
                  KHÁM PHÁ KHÓA HỌC
                  <ArrowRight className="size-4" />
                </Button>
              </Link>

              <Link
                href={"https://zalo.me/g/tmf9comkbyxqsqiv2ler"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full lg:w-fit inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 text-sm font-bold text-gray-700 transition-all hover:bg-gray-50">
                  THAM GIA CỘNG ĐỒNG
                  <Users className="size-4 text-lime-600" />
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-col lg:flex-row gap-6 border border-gray-300 rounded-xl p-6 lg:p-0 lg:border-none">
              {stats.map((item, index) => (
                <div key={index} className="flex items-center gap-4 lg:gap-2">
                  <item.icon className="size-10 lg:size-7 shrink-0 text-lime-600" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xl lg:text-[14px] font-bold text-gray-900 leading-tight">
                      {item.value}
                    </span>
                    <span className="text-lg lg:text-xs font-medium text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full lg:col-span-5 flex flex-col gap-4 lg:pl-4">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-100 lg:hidden">
              <Image
                src="/home/hero.jpg"
                alt="Stock MasterTrack Classroom"
                fill
                className="object-cover"
              />
            </div>

            {highlights.map((item, index) => (
              <div
                key={index}
                className="lg:w-70 flex items-start gap-4 rounded-xl border border-gray-100 bg-white/95 p-4 shadow-lg backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 lg:ml-auto"
              >
                <div className="flex size-12 lg:size-10 shrink-0 items-center justify-center rounded-full bg-lime-50">
                  <item.icon className="size-7 lg:size-5 text-lime-600" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-lg lg:text-sm font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-base lg:text-xs font-medium text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
