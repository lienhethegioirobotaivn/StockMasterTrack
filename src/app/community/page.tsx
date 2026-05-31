import {
  Hero,
  JoinForm,
  CommunityContent,
  BackupChannels,
  Testimonials,
} from "@/app/community/_components";

export default async function CommunityPage() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <JoinForm />
        <CommunityContent />
        <BackupChannels />
        <Testimonials />
      </main>
    </>
  );
}
