import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { FooterService } from "@/services/footer.service";
import { SiZalo } from "react-icons/si";

export async function Footer() {
  const pageData = await FooterService.getData();
  if (!pageData) return null;
  const footer = pageData;

  const socialIcons = [
    { icon: FaFacebook, link: footer.column_1.facebook },
    { icon: FaYoutube, link: footer.column_1.youtube },
    { icon: SiZalo, link: footer.column_1.zalo },
    { icon: FaTiktok, link: footer.column_1.tiktok },
  ];

  const contactItems = [
    { icon: Mail, text: footer.column_4.email },
    { icon: Phone, text: footer.column_4.phone },
    { icon: MapPin, text: footer.column_4.address },
  ];

  return (
    <footer className="w-full bg-[#0a1625] text-white">
      <div className="mx-auto px-8 pt-10 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="space-y-4 lg:col-span-1">
            <Link href={"/"} className="flex items-center gap-2">
              <div className="relative h-15 w-45 shrink-0">
                <Image
                  src={footer.column_1.image}
                  alt="STOCK MASTERTRACK LOGO"
                  fill
                  sizes="(max-width: 768px) 100px, 200px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-[15px] lg:text-[12px] font-medium text-gray-400 lg:w-60">
              {footer.column_1.text}
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socialIcons.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-8 items-center justify-center rounded-full border border-gray-700 bg-gray-900/40 text-gray-400 transition-colors hover:border-gray-500 hover:text-white"
                >
                  <item.icon className="size-4 fill-current stroke-1" />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 lg:mx-auto">
            <h3 className="text-lg lg:text-[15px] font-bold text-gray-200 uppercase">
              {footer.column_2.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {footer.column_2.links.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.endpoint}
                    className="text-base lg:text-[12px] font-medium text-gray-400 transition-colors hover:text-white"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 lg:mx-auto">
            <h3 className="text-lg lg:text-[15px] font-bold text-gray-200 uppercase">
              {footer.column_3.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {footer.column_3.links.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.endpoint}
                    className="text-base lg:text-[12px] font-medium text-gray-400 transition-colors hover:text-white"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 lg:mx-auto">
            <h3 className="text-lg lg:text-[15px] font-bold text-gray-200 uppercase">
              {footer.column_4.title}
            </h3>
            <ul className="mt-3 space-y-2.5">
              {contactItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2.5 text-base lg:text-[12px] font-medium text-gray-400"
                >
                  <item.icon className="size-3.5 shrink-0 text-gray-400" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 sm:col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="text-lg lg:text-[15px] font-bold text-gray-200 uppercase">
              {footer.column_5.title}
            </h3>

            <p className="text-[15px] lg:text-[12px] font-medium text-gray-400">
              {footer.column_5.text}
            </p>

            <div className="flex w-full items-center rounded-md border border-gray-800 bg-[#0e1e32]">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="w-full bg-transparent px-3 py-1.5 text-sm lg:text-[11px] font-medium text-white outline-none placeholder:text-gray-600"
              />
              <button className="flex size-8 shrink-0 items-center justify-center rounded-md bg-lime-600 text-white transition-colors hover:bg-lime-700">
                <ArrowRight className="size-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-900 text-left text-xs font-medium text-gray-600">
          © 2026 Stock MasterTrack. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
