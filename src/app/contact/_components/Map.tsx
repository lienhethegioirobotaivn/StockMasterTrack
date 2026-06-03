"use client";

import { ContactData } from "@/services/contact.service";

type MapProps = Pick<ContactData, "map">;

export function Map({ map }: MapProps) {
  const mapLink = map;

  return (
    <section className="w-full relative h-60 sm:h-75 bg-slate-100 overflow-hidden">
      <iframe
        src={mapLink}
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
