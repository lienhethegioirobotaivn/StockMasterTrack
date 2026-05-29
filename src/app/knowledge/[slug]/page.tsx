import {
  ArticleContent,
  RelatedArticles,
  SidebarTopics,
  SidebarCTA,
  Breadcrumb,
} from "@/app/knowledge/[slug]/_components";

export default function KnowledgeDetailPage() {
  return (
    <main className="mx-auto w-full px-6 lg:px-12 py-4 md:py-8">
      <Breadcrumb />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr] xl:grid-cols-[1.8fr_1fr]">
        <ArticleContent />
        <aside className="flex flex-col gap-6 lg:max-w-sm xl:max-w-md">
          <RelatedArticles />
          <SidebarTopics />
          <SidebarCTA />
        </aside>
      </div>
    </main>
  );
}
