"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Làm sao để được tư vấn khóa học phù hợp?",
    a: "Bạn có thể điền form liên hệ trên trang hoặc nhắn tin trực tiếp qua Zalo/Fanpage. Đội ngũ sẽ tư vấn lộ trình phù hợp với mục tiêu và kinh nghiệm của bạn.",
  },
  {
    q: "Thời gian phản hồi của Stock MasterTrack là bao lâu?",
    a: "Chúng tôi cam kết phản hồi mọi yêu cầu trong vòng 24 giờ làm việc. Với các yêu cầu khẩn cấp, bạn có thể gọi hotline để được hỗ trợ nhanh hơn.",
  },
  {
    q: "Thông tin tôi gửi có được bảo mật không?",
    a: "Có. Chúng tôi cam kết bảo mật tuyệt đối mọi thông tin cá nhân và không chia sẻ cho bên thứ ba.",
  },
  {
    q: "Tôi có thể ghé văn phòng để gặp trực tiếp không?",
    a: "Hoàn toàn có thể ạ. Bạn vui lòng liên hệ trước qua hotline hoặc fanpage để đặt lịch hẹn, chúng tôi sẽ sắp xếp thời gian phù hợp.",
  },
  {
    q: "Ngoài các kênh liên hệ trên, tôi có thể liên hệ ở đâu?",
    a: "Bạn có thể kết nối với chúng tôi qua các kênh mạng xã hội hoặc tham gia cộng đồng Zalo để được hỗ trợ nhanh chóng.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const halfIndex = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, halfIndex);
  const rightColumn = faqs.slice(halfIndex);

  return (
    <>
      <section className="w-full bg-slate-50/30 py-12 lg:py-16">
        <div className="mx-auto w-full px-6 lg:px-12 max-w-7xl">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-center text-[26px] sm:text-3xl font-black text-slate-900 uppercase">
              CÂU HỎI THƯỜNG GẶP
            </h2>
            <div className="h-0.5 w-18 lg:w-12 bg-lime-600 mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <div className="space-y-2">
              {leftColumn.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={`left-${index}`}
                    className="bg-white rounded-xl border border-gray-100 shadow-2xs overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-[15px] sm:text-base text-gray-900 leading-snug cursor-pointer"
                    >
                      <span>
                        {index + 1}. {item.q}
                      </span>
                      <span className="text-lime-600 shrink-0 ml-4">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-200 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="custom-faq-scrollbar overflow-y-auto max-h-48 px-5 pb-5 pt-2 text-[14px] sm:text-[15px] font-medium text-gray-500 leading-relaxed whitespace-pre-wrap">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-2">
              {rightColumn.map((item, index) => {
                const actualIndex = index + halfIndex;
                const isOpen = openIndex === actualIndex;
                return (
                  <div
                    key={`right-${actualIndex}`}
                    className="bg-white rounded-xl border border-gray-100 shadow-2xs overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : actualIndex)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-[15px] text-gray-900 leading-snug cursor-pointer"
                    >
                      <span>
                        {actualIndex + 1}. {item.q}
                      </span>
                      <span className="text-lime-600 shrink-0 ml-4">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-200 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="custom-faq-scrollbar overflow-y-auto max-h-48 px-5 pb-5 pt-2 text-[14px] font-medium text-gray-500 leading-relaxed whitespace-pre-wrap">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .custom-faq-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-faq-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.02);
          border-radius: 10px;
        }
        .custom-faq-scrollbar::-webkit-scrollbar-thumb {
          background: #84cc16;
          border-radius: 10px;
        }
        .custom-faq-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #65a30d;
        }
      `}</style>
    </>
  );
}
