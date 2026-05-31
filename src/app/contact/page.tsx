import {
  Hero,
  ContactForm,
  Map,
  WhyChoose,
  FAQ,
} from "@/app/contact/_components";

export default async function ContactPage() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <ContactForm />
        <Map />
        <WhyChoose />
        <FAQ />
      </main>
    </>
  );
}
