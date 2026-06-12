import {
  Elite,
  ForWho,
  ProgramContent,
  Hero,
  Requirements,
  WhyChoose,
} from "@/app/courses/stock-mt-pro/_components";
import { StockMTProService } from "@/services/courses/stockmtpro.service";

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
      <Elite elite={pageData.elite}/>
    </main>
  );
}
