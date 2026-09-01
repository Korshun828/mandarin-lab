import type { MetadataRoute } from "next";
import { getAbsoluteUrl } from "@/lib/site-url";

const publicRoutes = [
  "/",
  "/courses/beginner",
  "/courses/hsk",
  "/courses/business",
  "/courses/travel",
  "/courses/kids",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.flatMap((route) => {
    const url = getAbsoluteUrl(route);
    return url ? [{ url }] : [];
  });
}
