import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/research", "/publications", "/speaking", "/about", "/contact"].map(
    (path) => ({ url: `${siteUrl}${path}` })
  );
}
