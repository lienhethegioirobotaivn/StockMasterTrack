import {
  Hero,
  JoinForm,
  CommunityContent,
  BackupChannels,
  Testimonials,
} from "@/app/community/_components";
import { createPageMetadata } from "@/lib/metadata";
import { CommunityService } from "@/services/community.service";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Cộng đồng",
  description: "Kết nối – Chia sẻ – Cùng nhau phát triển",
  path: "/community",
  ogImage: "/community/hero.jpg",
});

export default async function CommunityPage() {
  const pageData = await CommunityService.getData();
  if (!pageData) return null;

  return (
    <>
      <main className="overflow-hidden">
        <Hero hero={pageData.hero} />
        <JoinForm />
        <CommunityContent community_content={pageData.community_content} />
        <BackupChannels backup_channels={pageData.backup_channels} />
        <Testimonials testimonials={pageData.testimonials} />
      </main>
    </>
  );
}
