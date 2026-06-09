import {
  Elite,
  ForWho,
  ProgramContent,
  Hero,
  Requirements,
  WhyChoose,
} from "@/app/courses/stock-mt-pro/_components";

export default async function StockMTProPage() {
  return (
    <main className="bg-[#060606]">
      <Hero />
      <WhyChoose />
      <ForWho />
      <ProgramContent />
      <Requirements />
      <Elite />
    </main>
  );
}
