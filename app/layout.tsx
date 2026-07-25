import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Papa Amadou Fall | Full Stack Engineer II";
const description = "Full Stack Engineer in British Columbia delivering reliable SaaS features across React, TypeScript, Python/Django, REST APIs, relational data and cloud deployment.";

export const metadata: Metadata = {
  metadataBase: new URL("https://omadigital23.github.io"),
  title,
  description,
  applicationName: "Papa Amadou Fall | Full Stack Engineering Portfolio",
  authors: [{ name: "Papa Amadou Fall", url: "https://github.com/omadigital23" }],
  keywords: ["Full Stack Engineer Canada", "React Developer", "Next.js Developer", "TypeScript Developer", "Python Developer", "Django Developer", "SaaS Engineer", "AWS", "Google Cloud", "REST API", "Supabase", "PostgreSQL", "MySQL", "n8n"],
  alternates: { canonical: "/PapaAmadouFall-FullStack/" },
  openGraph: { type: "website", url: "/PapaAmadouFall-FullStack/", title, description, siteName: "Papa Amadou Fall — Full Stack Engineer", locale: "en_CA" },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#133c32", colorScheme: "light dark" };

const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('theme');
      var pref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      var theme = saved || pref;
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
