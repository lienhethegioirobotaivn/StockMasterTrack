"use client";

export function Map() {
  return (
    <section className="w-full relative h-60 sm:h-75 bg-slate-100 overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.232489914305!2d106.66733707326422!3d10.79349755888221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292c876f4b01%3A0x62b02203cb972ff7!2zMTg0LzFBIMSQLiBMw6ogVsSDbiBT4bu5LCBQaMO6IE5odeG6rW4sIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1780214164686!5m2!1svi!2s"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
