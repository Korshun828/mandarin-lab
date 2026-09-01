const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export function getSiteUrl(): URL | undefined {
  if (!configuredSiteUrl) return undefined;

  try {
    const url = new URL(configuredSiteUrl);
    if (url.protocol !== "https:" && url.protocol !== "http:") return undefined;

    url.search = "";
    url.hash = "";
    if (!url.pathname.endsWith("/")) url.pathname += "/";
    return url;
  } catch {
    return undefined;
  }
}

export function getAbsoluteUrl(pathname: string): string | undefined {
  const siteUrl = getSiteUrl();
  return siteUrl ? new URL(pathname.replace(/^\//, ""), siteUrl).toString() : undefined;
}
