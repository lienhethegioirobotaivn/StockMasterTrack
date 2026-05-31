"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anh Đoàn Thanh Sơn",
    role: "Founder DNS Solutions",
    avatar: "/home/DoanThanhSon.jpg",
    content:
      "Học được cách đầu tư không theo cảm xúc và fomo, biết được các phong cách đầu tư: phân tích cơ bản và phân tích kỹ thuật, tránh được các khoản đầu tư sai lầm",
  },
  {
    name: "Phạm Thị Bảo Trân",
    role: "Giám đốc Trazenic Global",
    avatar: "/home/Tran.jpg",
    content:
      "Chị cảm thấy lớp học rất thực chiến, thiết thực. Ban đầu chị chưa có nhiều nền tảng, chưa biết nhiều về thị trường chứng khoán, nhưng bây giờ chị rất thích và học đến khóa thứ 5 luôn rồi.",
  },
  {
    name: "Tăng Thị Thuỳ Dung",
    role: "Phó phòng kinh doanh",
    avatar: "/courses/stock-mastertrack/avatar-2.jpg",
    content:
      "Vui vẻ, giá trị kiến thức thực tế, thông tin bài bản, nhanh nhạy, 70% có thể áp dụng",
  },
  {
    name: "Trần Bỉnh Tường",
    role: "",
    avatar: "/courses/stock-mastertrack/avatar-3.jpg",
    content:
      "Anh cảm thấy khoá Stock MasterTrack phải nói là quá OK, đáng học, nên học với anh thì xứng đáng với những gì anh bỏ ra. Tham gia khoá học có thể nói như được rút ngắn thời gian về kiến thức so vs mình tự học.",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenType, setScreenType] = useState<"mobile" | "tablet" | "desktop">(
    "mobile",
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftState = useRef(0);

  const totalDotsDesktop = Math.ceil(testimonials.length / 3);
  const totalDotsTablet = Math.ceil(testimonials.length / 2);

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreenType("desktop");
      } else if (width >= 640) {
        setScreenType("tablet");
      } else {
        setScreenType("mobile");
      }
    };
    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;

      if (window.innerWidth >= 1024) {
        const pageIndex = Math.round(scrollLeft / containerWidth);
        if (pageIndex >= 0 && pageIndex < totalDotsDesktop) {
          setActiveIndex(pageIndex);
        }
      } else if (window.innerWidth >= 640) {
        const pageIndex = Math.round(scrollLeft / containerWidth);
        if (pageIndex >= 0 && pageIndex < totalDotsTablet) {
          setActiveIndex(pageIndex);
        }
      } else {
        const itemIndex = Math.round(scrollLeft / containerWidth);
        if (itemIndex >= 0 && itemIndex < testimonials.length) {
          setActiveIndex(itemIndex);
        }
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [totalDotsDesktop, totalDotsTablet]);

  const scrollToPage = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    container.scrollTo({
      left: index * containerWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDown.current = true;
    container.style.scrollSnapType = "none";
    container.style.cursor = "grabbing";
    startX.current = e.pageX - container.offsetLeft;
    scrollLeftState.current = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    if (!isDown.current) return;
    isDown.current = false;
    const container = scrollContainerRef.current;
    if (!container) return;
    container.style.scrollSnapType = "x mandatory";
    container.style.cursor = "grab";

    const containerWidth = container.clientWidth;
    const currentScroll = container.scrollLeft;
    const targetIndex = Math.round(currentScroll / containerWidth);
    scrollToPage(targetIndex);
  };

  const handleMouseUp = () => {
    if (!isDown.current) return;
    isDown.current = false;
    const container = scrollContainerRef.current;
    if (!container) return;
    container.style.scrollSnapType = "x mandatory";
    container.style.cursor = "grab";

    const containerWidth = container.clientWidth;
    const currentScroll = container.scrollLeft;
    const targetIndex = Math.round(currentScroll / containerWidth);
    scrollToPage(targetIndex);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown.current) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    container.scrollLeft = scrollLeftState.current - walk;
  };

  return (
    <section className="w-full bg-slate-50/50 px-6 py-12 lg:px-12 lg:py-20 border-t border-gray-100 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-wide text-center pointer-events-none">
          THÀNH VIÊN NÓI GÌ VỀ CỘNG ĐỒNG?
        </h2>

        <div className="relative mt-10">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 sm:flex-nowrap sm:overflow-x-auto sm:snap-x sm:snap-mandatory cursor-grab active:cursor-grabbing"
            style={{ WebkitUserSelect: "none", userSelect: "none" }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="w-full shrink-0 snap-center rounded-2xl border border-gray-100 bg-white p-6 shadow-sm flex flex-col justify-between sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] pointer-events-none"
              >
                <div className="flex flex-col">
                  <Quote className="size-6 text-emerald-600/20 rotate-180 fill-current mb-3" />
                  <p className="text-sm lg:text-[15px] font-medium text-gray-600 leading-relaxed">
                    {item.content}
                  </p>
                </div>

                <div className="mt-2 lg:mt-4 flex items-center gap-3 border-t border-gray-100">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-full bg-slate-100 border border-gray-100">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      draggable={false}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold text-gray-900 truncate">
                      {item.name}
                    </span>
                    <span className="text-xs font-medium text-gray-400 truncate">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-1.5">
          {screenType === "desktop" &&
            Array.from({ length: totalDotsDesktop }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToPage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-4 bg-emerald-600"
                    : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}

          {screenType === "tablet" &&
            Array.from({ length: totalDotsTablet }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToPage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-4 bg-emerald-600"
                    : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}

          {screenType === "mobile" &&
            testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToPage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-4 bg-emerald-600"
                    : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
