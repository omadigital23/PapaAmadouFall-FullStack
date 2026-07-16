import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://omadigital23.github.io/PapaAmadouFall-FullStack/sitemap.xml" };
}
