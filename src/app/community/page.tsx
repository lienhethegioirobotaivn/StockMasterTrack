import {
  Hero,
  JoinForm,
  CommunityContent,
  BackupChannels,
  Testimonials,
} from "@/app/community/_components";
import { CommunityService } from "@/services/community.service";

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
