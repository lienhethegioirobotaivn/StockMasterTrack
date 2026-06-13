import { Metadata } from "next";
import { env } from "./env";

const BASE_URL =
  env.NEXT_PUBLIC_SITE_URL || "https://www.stockmastertrack.edu.vn";

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function createPageMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
}: PageMetaOptions): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${BASE_URL}${cleanPath}`;

  const image = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${BASE_URL}${ogImage}`
    : `${BASE_URL}/home/hero.jpg`;

  const fullTitle = `Stock MasterTrack - ${title}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
