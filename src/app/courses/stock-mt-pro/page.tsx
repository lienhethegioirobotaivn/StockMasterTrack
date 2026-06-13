import {
  Elite,
  ForWho,
  ProgramContent,
  Hero,
  Requirements,
  WhyChoose,
} from "@/app/courses/stock-mt-pro/_components";
import { createPageMetadata } from "@/lib/metadata";
import { StockMTProService } from "@/services/courses/stockmtpro.service";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Khóa học Stock MT Pro",
  description:
    "Stock MT Pro - Tư duy tinh hoa – Quản trị vốn chuyên sâu - Tối ưu lợi nhuận bền vững",
  path: "/courses/stock-mt-pro",
  ogImage: "/courses/stock-mt-pro/hero.jpg",
});

export default async function StockMTProPage() {
  const pageData = await StockMTProService.getData();
  if (!pageData) return null;

  return (
    <main className="bg-[#060606]">
      <Hero hero={pageData.hero} />
      <WhyChoose why_choose={pageData.why_choose} />
      <ForWho for_who={pageData.for_who} />
      <ProgramContent program_content={pageData.program_content} />
      <Requirements requirements={pageData.requirements} />
      <Elite elite={pageData.elite} />
    </main>
  );
}
