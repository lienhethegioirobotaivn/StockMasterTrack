import {
  Hero,
  FeaturedTopics,
  LatestArticles,
  PopularArticles,
  Resources,
  BottomCTA,
} from "@/app/knowledge/_components";

export default function KnowledgePage() {
  return (
    <main>
      <Hero />
      <div className="mx-auto flex w-full flex-col gap-12">
        <FeaturedTopics />
        <LatestArticles />
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-6 px-6 lg:px-12 lg:py-4 lg:grid-cols-[1.5fr_1fr]">
          <PopularArticles />
          <Resources />
        </div>
        <BottomCTA />
      </div>
    </main>
  );
}
