"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "Học được cách đầu tư không theo cảm xúc và fomo, biết được các phong cách đầu tư: phân tích cơ bản và phân tích kỹ thuật, tránh được các khoản đầu tư sai lầm",
    avatar: "/home/DoanThanhSon.jpg",
    name: "Anh Đoàn Thanh Sơn",
    role: "Founder DNS Solutions ",
  },
  {
    content:
      "Chị cảm thấy lớp học rất thực chiến, thiết thực. Ban đầu chị chưa có nhiều nền tảng, chưa biết nhiều về thị trường chứng khoán, nhưng bây giờ chị rất thích và học đến khóa thứ 5 luôn rồi.",
    avatar: "/home/Tran.jpg",
    name: "Phạm Thị Bảo Trân",
    role: "Giám đốc Trazenic Global",
  },
  {
    content:
      "Vui vẻ, giá trị kiến thức thực tế, thông tin bài bản, nhanh nhạy, 70% có thể áp dụng",
    avatar: "/home/avatar.png",
    name: "Tăng Thị Thuỳ Dung",
    role: "Phó phòng kinh doanh",
  },
  {
    content:
      "Anh cảm thấy khoá Stock MasterTrack phải nói là quá OK, đáng học, nên học với anh thì xứng đáng với những gì anh bỏ ra. Tham gia khoá học có thể nói như được rút ngắn thời gian về kiến thức so vs mình tự học.",
    avatar: "/home/avatar.png",
    name: "Trần Bỉnh Tường",
    role: "",
  },
] as const;

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMd, setIsMd] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftState = useRef(0);

  const totalDots = Math.ceil(testimonials.length / 4);

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsMd(window.innerWidth >= 768);
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

      if (window.innerWidth >= 768) {
        const pageIndex = Math.round(scrollLeft / containerWidth);
        if (pageIndex >= 0 && pageIndex < totalDots) {
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
  }, [totalDots]);

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
    <section className="w-full bg-[#fcfdfd] py-12 md:py-16 select-none overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-black text-gray-900 uppercase pointer-events-none">
          HỌC VIÊN NÓI GÌ VỀ <span className="text-lime-600">STOCK </span>
          <span className="text-lime-600">MASTER</span>
          <span className="text-fuchsia-700">TRACK?</span>
        </h2>

        <div className="relative mt-8 lg:mt-4">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 md:flex-nowrap md:overflow-x-auto md:snap-x md:snap-mandatory cursor-grab active:cursor-grabbing"
            style={{ WebkitUserSelect: "none", userSelect: "none" }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="w-full shrink-0 snap-center flex flex-col justify-between rounded-xl bg-[#f8faf9]/60 p-5 border border-gray-100/50 md:w-[calc(25%-12px)] pointer-events-none"
              >
                <div>
                  <Quote className="size-5 text-lime-700 transform scale-x-[-1] fill-current stroke-[0.5]" />

                  <p className="mt-3 text-base lg:text-sm font-medium leading-relaxed text-gray-600 whitespace-pre-wrap">
                    {item.content}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-gray-100/60">
                  <div className="relative size-12 lg:size-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                    {item.avatar && (
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        sizes="40px"
                        draggable={false}
                        className="object-cover"
                      />
                    )}
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-base lg:text-sm font-bold text-gray-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-sm lg:text-xs font-medium text-gray-400 truncate">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-1.5">
          {isMd
            ? Array.from({ length: totalDots }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToPage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-4 bg-lime-600"
                      : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))
            : testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToPage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-4 bg-lime-600"
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
