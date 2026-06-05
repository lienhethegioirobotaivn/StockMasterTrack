import { BookOpen, Laptop, MessageSquare, Network } from "lucide-react";

const eventTypesData = [
  {
    icon: BookOpen,
    title: "Workshop Offline",
    description: "Đào sâu kiến thức thực chiến với chuyên gia",
  },
  {
    icon: Laptop,
    title: "Webinar Online",
    description: "Cập nhật nhanh xu hướng mọi lúc mọi nơi",
  },
  {
    icon: MessageSquare,
    title: "Talkshow",
    description: "Lắng nghe chia sẻ từ chuyên gia và nhà đầu tư thành công",
  },
  {
    icon: Network,
    title: "Meetup & Networking",
    description: "Mở rộng kết nối, học hỏi và chia sẻ kinh nghiệm",
  },
];

export function EventTypes() {
  return (
    <section className="py-12 px-6 lg:px-0 lg:mx-12 rounded-xl bg-green-50">
      <div className="mx-auto w-full">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-black uppercase text-lime-600">
            Các hình thức sự kiện tại Stock MasterTrack
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:py-4 lg:px-6">
          {eventTypesData.map((type, index) => {
            const Icon = type.icon;
            return (
              <div key={index} className="flex gap-3 items-center">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-lime-50 text-lime-600">
                  <Icon className="size-6" />
                </div>
                <div className="flex flex-col">
                  <h3 className="mt-4 text-base font-bold text-slate-900">
                    {type.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-gray-500 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
