import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

const teachers = [
  {
    image: "/home/Toan.jpg",
    name: "THS. NGUYỄN ANH TOÀN",
    role: "Chuyên gia Kinh tế – Cố vấn Tài chính Doanh nghiệp",
    experiences: [
      "Hơn 15 năm kinh nghiệm tại VinaCapital, Maybank, Citibank, ANZ",
      "Chuyên gia cố vấn cho nhiều doanh nghiệp trong lĩnh vực tài chính, sản xuất và phân phối",
      "Giảng viên tại IBM Institute, Brainmark, BGS Global, xuất hiện trên VTV1, Dân Trí, HAWEE với vai trò chuyên gia tài chính doanh nghiệp",
    ],
  },
  {
    image: "/home/Bao.jpg",
    name: "ÔNG LƯƠNG CAO HOÀNG BẢO",
    role: "Giám đốc Khu vực Công ty Cổ phần Chứng khoán Việt Nam Thịnh Vượng",
    experiences: [
      "Hơn 16 năm kinh nghiệm tại các công ty Chứng khoán như CTCP Chứng khoán Á Châu (ACBS); CTCP Chứng khoán Hồ Chí Minh (HSC); Chứng khoán Bảo Việt(BVSC); Giám đốc Công ty TNHH Chứng khoán NH Việt Nam (NHSV)",
      "Nhiều năm kinh nghiệm Quản lý cấp cao tại các doanh nghiệp như: Phó Tổng GĐ Công ty Kiểm toán Quốc tế Á Châu; Phó Giám đốc XNK PouYuen Việt Nam; Giám đốc Marketing TROPICDANE Việt Nam;... ",
    ],
  },
  {
    image: "/home/Danh.jpg",
    name: "Ông MÃ THANH DANH",
    role: "Phó TGĐ Tập đoàn KIDO",
    experiences: [
      "Chủ tịch HĐQT Công Ty Cổ Phần Tư Vấn Quốc Tế ICC",
      "Chủ tịch Công ty Tư vấn Quản lý Tài sản Quốc tế IWMC",
      "Cố vấn Hiệp hội PR Việt Nam VNPR",
      "Mentor Shark Tank Việt Nam và Blueventure",
      "Strategy Advitor HR1Vietnam",
    ],
  },
];

export function Teachers() {
  return (
    <section className="w-full bg-[#fcfdfd] py-12 md:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 lg:gap-4 sm:flex-row sm:justify-between border-b border-gray-100 pb-5">
          <h2 className="text-[26px] sm:text-3xl font-extrabold text-gray-900 uppercase text-center lg:text-left">
            GIẢNG VIÊN <span className="text-fuchsia-700">ĐỒNG HÀNH</span>
          </h2>

          <Button className="inline-flex gap-1 text-sm font-black text-gray-800 uppercase transition-all">
            XEM TẤT CẢ GIẢNG VIÊN
            <ArrowRight className="size-3.5" />
          </Button>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="flex items-start gap-5 rounded-2xl border border-gray-100/80 bg-white p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]"
            >
              <div className="relative size-24 shrink-0 overflow-hidden rounded-full bg-gray-50 md:size-28">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  sizes="(max-w-768px) 96px, 112px"
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0 space-y-1">
                <h3 className="text-base font-extrabold text-gray-950 uppercase">
                  {teacher.name}
                </h3>

                <p className="text-sm font-semibold text-gray-600">
                  {teacher.role}
                </p>

                <ul className="pt-2 space-y-1.5">
                  {teacher.experiences.map((item, index) => (
                    <li
                      key={index}
                      className="relative pl-3 text-xs font-medium text-gray-700 before:absolute before:left-0 before:top-1.75 before:size-1 before:rounded-full before:bg-gray-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
