import {
  Hero,
  ContactSection,
  Map,
  WhyChoose,
  FAQ,
} from "@/app/contact/_components";
import { ContactService } from "@/services/contact.service";

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
