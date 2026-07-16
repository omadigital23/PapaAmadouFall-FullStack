import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://omadigital23.github.io/PapaAmadouFall-FullStack/", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
