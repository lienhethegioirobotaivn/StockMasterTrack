import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  Quote,
  CalendarRange,
  CircleDollarSign,
  ArrowRight,
  MessageCircleMore,
} from "lucide-react";

import { Button } from "@/components/ui";
import { CourseRegisterDialog } from "@/components/layout/dialog";
import Link from "next/link";

const mentorFeatures = [
  "Hơn 15 năm kinh nghiệm tại VinaCapital, Maybank, Citibank, ANZ",
  "Chuyên gia cố vấn cho nhiều doanh nghiệp trong lĩnh vực tài chính, sản xuất và phân phối",
  "Giảng viên tại IBM Institute, Brainmark, BGS Global, xuất hiện trên VTV1, Dân Trí, HAWEE với vai trò chuyên gia tài chính doanh nghiệp",
];

const courseInfos = [
  {
    icon: MapPin,
    title: "Hình thức học",
    value: "Offline tại TP. Hồ Chí Minh",
  },
  {
    icon: CalendarDays,
    title: "Số buổi học",
    value: "8 buổi",
  },
  {
    icon: Clock3,
    title: "Thời lượng",
    value: "2 – 2.5 giờ / buổi",
  },
  {
    icon: CalendarRange,
    title: "Lịch học",
    value: "Thứ 7 hàng tuần (chiều hoặc tối)",
  },
  {
    icon: Users,
    title: "Sĩ số lớp",
    value: "25 – 30 học viên",
  },
];

export function Mentor() {
  return (
    <section className="bg-white py-12 slg:py-16 px-6 lg:px-12 font-sans">
      <div className="mx-auto">
        <div className="grid gap-8 lg:grid-cols-11 lg:items-start">
          <div className="lg:col-span-7">
            <h2 className="text-[25px] sm:text-3xl lg:text-4xl font-black text-gray-900 text-center lg:text-left">
              GIẢNG VIÊN <span className="text-fuchsia-700">ĐỒNG HÀNH</span>
            </h2>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="relative mx-auto w-48 shrink-0 overflow-hidden sm:mx-0">
                <Image
                  src="/courses/stock-mastertrack/Toan.jpg"
                  alt="THS. NGUYỄN ANH TOÀN"
                  width={220}
                  height={260}
                  priority
                  className="w-full object-cover"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-[22px] sm:text-2xl font-extrabold text-gray-900">
                  THS. NGUYỄN ANH TOÀN
                </h3>
                <p className="mt-1 text-[16px] font-medium text-gray-600">
                  Chuyên gia Kinh tế – Cố vấn Tài chính Doanh nghiệp
                </p>

                <ul className="mt-4 space-y-3 text-left">
                  {mentorFeatures.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gray-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-[#f9fcf8] p-5 sm:p-6 border border-gray-200">
              <div className="flex gap-4 items-start">
                <Quote className="size-6 shrink-0 rotate-180 text-lime-600/60" />
                <p className="text-[15px] font-medium leading-relaxed text-gray-700">
                  Không có phương pháp nào đúng 100%, quan trọng là bạn hiểu bản
                  chất và quản trị rủi ro để tồn tại trên thị trường.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl border-[1.5px] border-gray-200 bg-white p-6 shadow-xs sm:p-8">
            <h3 className="text-xl font-bold uppercase text-lime-600">
              THÔNG TIN KHÓA HỌC
            </h3>

            <div className="mt-6 space-y-5">
              {courseInfos.map((item, index) => (
                <div key={index} className="flex gap-3.5 items-start">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-lime-50/60 text-lime-600">
                    <item.icon className="size-4.5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-sm text-gray-500 font-medium">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex gap-3.5 items-start">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-lime-50/60 text-lime-600">
                  <CircleDollarSign className="size-4.5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Học phí</h4>
                  <div className="mt-1 flex items-baseline">
                    <span className="text-2xl font-black text-fuchsia-700">
                      4.000.000đ
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 font-medium mt-0.5">
                    (Đã bao gồm tài liệu & quà tặng)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <CourseRegisterDialog>
                <Button className="h-11 w-full rounded-lg bg-fuchsia-700 text-sm font-bold text-white shadow-xs hover:bg-fuchsia-800">
                  ĐĂNG KÝ NGAY
                  <ArrowRight className="ml-1 size-3.5" />
                </Button>
              </CourseRegisterDialog>

              <Link
                href={"https://zalo.me/0394783239"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="h-11 w-full rounded-lg border border-gray-200 bg-white text-sm font-bold text-gray-700 shadow-xs hover:bg-gray-50"
                >
                  <MessageCircleMore className="mr-1 size-3.5 text-lime-600" />
                  TƯ VẤN KHÓA HỌC
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
