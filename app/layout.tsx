import type { Metadata } from "next";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "MANDARIN LAB — онлайн-курсы китайского языка",
  description: "Онлайн-курсы китайского языка для жизни, учёбы, HSK, путешествий и бизнеса.",
  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/icons/icon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" data-language="ru">
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
