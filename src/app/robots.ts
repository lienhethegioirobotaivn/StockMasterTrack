// src/app/robots.ts
import { env } from "@/lib/env";
import { MetadataRoute } from "next";

const BASE_URL =
  env.NEXT_PUBLIC_SITE_URL || "https://www.stockmastertrack.edu.vn";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/", "/dashboard/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
