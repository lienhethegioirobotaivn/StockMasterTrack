import {
  Compass,
  FileSpreadsheet,
  ShieldAlert,
  Award,
  PlayCircle,
  Clock,
  Monitor,
  CalendarDays,
  UserCheck,
} from "lucide-react";

const PROGRAM_CONTENT_DATA = {
  title: "NỘI DUNG CHƯƠNG TRÌNH",
  mainItems: [
    {
      icon: Compass,
      title: "TƯ DUY & CHIẾN LƯỢC NÂNG CAO",
      bullets: [
        "Tư duy đầu tư cấp độ cao",
        "Xây dựng lợi thế cạnh tranh trên thị trường",
        "Đọc vị dòng tiền & tâm lý nhà đầu tư",
      ],
    },
    {
      icon: FileSpreadsheet,
      title: "PHÂN TÍCH CHUYÊN SÂU",
      bullets: [
        "Phân tích kỹ thuật nâng cao",
        "Phân tích định lượng",
        "Phân tích ngành & doanh nghiệp chuyên sâu",
      ],
    },
    {
      icon: ShieldAlert,
      title: "QUẢN TRỊ VỐN VÀ RỦI RO",
      bullets: [
        "Mô hình phân bổ vốn tối ưu",
        "Quản trị rủi ro danh mục lớn",
        "Tối ưu lợi nhuận trên từng đơn vị vốn",
      ],
    },
    {
      icon: Award,
      title: "CHIẾN LƯỢC GIAO DỊCH THỰC CHIẾN",
      bullets: [
        "Chiến lược theo xu hướng",
        "Chiến lược đảo chiều nâng cao",
        "Xây dựng hệ thống giao dịch cá nhân hóa",
      ],
    },
    {
      icon: PlayCircle,
      title: "THỰC HÀNH & LIVE TRADING",
      bullets: [
        "Live Trading hàng tuần",
        "Phân tích danh mục thực tế",
        "Q&A cùng chuyên gia",
      ],
    },
  ],
  metaItems: [
    {
      icon: Clock,
      label: "Thời lượng",
      value: "1 tháng",
      subValue: "(4 tuần)",
    },
    {
      icon: Monitor,
      label: "Hình thức học",
      value: "Online Live + Video độc quyền",
    },
    {
      icon: CalendarDays,
      label: "Lịch học Live",
      value: "Tối 3 – 5 – 7 hàng tuần",
    },
    {
      icon: UserCheck,
      label: "Sỉ số giới hạn",
      value: "30 học viên / lớp",
    },
  ],
};

export function ProgramContent() {
  return (
    <section className="bg-[#060606] py-12 font-sans">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase relative pb-3">
            {PROGRAM_CONTENT_DATA.title}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#C3944E]" />
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mb-4 sm:mb-6 lg:mb-4">
          {PROGRAM_CONTENT_DATA.mainItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col justify-between rounded-xl border border-white/15 bg-[#131312] p-6 transition-all hover:border-[#C3944E]/80"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-[#141419] shrink-0">
                      <IconComponent className="size-5 text-[#C3944E] stroke-[1.5]" />
                    </div>

                    <h3 className="text-sm sm:text-base lg:text-sm font-bold uppercase text-[#E1BB70] leading-snug pt-1">
                      {item.title}
                    </h3>
                  </div>

                  <ul className="mt-4 space-y-3">
                    {item.bullets.map((bullet, bIndex) => (
                      <li
                        key={bIndex}
                        className="flex items-start gap-2 text-xs sm:text-sm lg:text-xs text-neutral-400 font-medium leading-relaxed"
                      >
                        <span className="text-[#C3944E] mt-1 shrink-0 text-xs">
                          •
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border border-white/15 hover:border-[#C3944E]/80 rounded-xl bg-[#131312] p-6 lg:p-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAM_CONTENT_DATA.metaItems.map((meta, index) => {
            const MetaIcon = meta.icon;
            return (
              <div key={index} className="flex items-center gap-4 px-2">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#141419]">
                  <MetaIcon className="size-5 text-[#C3944E] stroke-[1.5]" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm sm:text-base lg:text-sm font-bold text-[#C3944E] uppercase">
                    {meta.label}
                  </span>
                  <div className="flex flex-col mt-0.5">
                    <span className="text-xs sm:text-sm lg:text-xs font-bold text-white/80 leading-snug">
                      {meta.value}
                    </span>
                    {meta.subValue && (
                      <span className="text-[11px] sm:text-[13px] lg:text-[11px] font-medium text-neutral-400">
                        {meta.subValue}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
