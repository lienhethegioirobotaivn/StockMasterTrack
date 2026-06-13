import {
  Hero,
  ContactSection,
  Map,
  WhyChoose,
  FAQ,
} from "@/app/contact/_components";
import { createPageMetadata } from "@/lib/metadata";
import { ContactService } from "@/services/contact.service";
import { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Liên hệ",
  description:
    "Liên hệ Stock MasterTrack - Chúng tôi luôn sẵn sàng đồng hành cùng bạn",
  path: "/contact",
  ogImage: "/contact/hero.jpg",
});

export default async function ContactPage() {
  const pageData = await ContactService.getData();
  if (!pageData) return null;

  return (
    <>
      <main className="overflow-hidden">
        <Hero hero={pageData.hero} />
        <ContactSection contact_section={pageData.contact_section} />
        <Map map={pageData.map} />
        <WhyChoose why_choose={pageData.why_choose} />
        <FAQ faq={pageData.faq} />
      </main>
    </>
  );
}
