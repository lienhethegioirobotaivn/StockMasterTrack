import Image from "next/image";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Community() {
  return (
    <section className="w-full bg-[#fcfdfd] py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-4">
            <p className="text-2xl lg:text-xl font-black text-lime-600 uppercase">
              CỘNG ĐỒNG
            </p>

            <h2 className="mt-2 text-3xl lg:text-2xl font-black text-gray-900">
              Kết nối – Chia sẻ –
              <br />
              Cùng nhau phát triển
            </h2>

            <p className="mt-3 text-base lg:text-sm font-medium text-gray-500">
              Tham gia cộng đồng Stock MasterTrack để cập nhật kiến thức mỗi
              ngày, trao đổi cơ hội đầu tư và đồng hành cùng hơn 2500+ nhà đầu
              tư trên hành trình thành công.
            </p>

            <div className="mt-6 flex">
              <Link
                href={"https://zalo.me/g/tmf9comkbyxqsqiv2ler"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full lg:w-fit h-11 lg:h-9 rounded-lg bg-lime-600 px-4 text-base lg:text-sm font-bold text-white hover:bg-lime-700 gap-2">
                  <MessageSquare className="size-3.5 fill-current" />
                  THAM GIA CỘNG ĐỒNG ZALO
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-8">
            <div className="relative aspect-7/8 w-full overflow-hidden rounded-xl border border-gray-100/60 bg-white shadow-sm">
              <Image
                src="/home/community1.jpg"
                alt="Community feature 1"
                fill
                sizes="(max-w-1024px) 100vw, 25vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="relative aspect-7/8 w-full overflow-hidden rounded-xl border border-gray-100/60 bg-white shadow-sm">
              <Image
                src="/home/community2.jpg"
                alt="Community feature 2"
                fill
                sizes="(max-w-1024px) 100vw, 25vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="relative aspect-7/8 w-full overflow-hidden rounded-xl border border-gray-100/60 bg-white shadow-sm sm:col-span-1">
              <Image
                src="/home/community3.1.jpg"
                alt="Community event"
                fill
                sizes="(max-w-1024px) 100vw, 25vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
