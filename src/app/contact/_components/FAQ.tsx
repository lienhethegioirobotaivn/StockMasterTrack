"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ContactData } from "@/services/contact.service";

type FAQProps = Pick<ContactData, "faq">;

export function FAQ({ faq }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const validQNA = faq.qna.filter(
    (item) => item.question && item.question.trim() !== "",
  );

  const halfIndex = Math.ceil(validQNA.length / 2);
  const leftColumn = validQNA.slice(0, halfIndex);
  const rightColumn = validQNA.slice(halfIndex);

  return (
    <>
      <section className="w-full bg-slate-50/30 py-12 lg:py-16">
        <div className="mx-auto w-full px-6 lg:px-12 max-w-7xl">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-center text-[26px] sm:text-3xl font-black text-slate-900 uppercase">
              {faq.title}
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
                        {index + 1}. {item.question}
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
                        <p>{item.answer}</p>
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
                        {actualIndex + 1}. {item.question}
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
                        <p>{item.answer}</p>
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
