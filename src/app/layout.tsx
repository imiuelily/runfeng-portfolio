import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const basePath = process.env.NODE_ENV === "production" ? "/runfeng-portfolio" : "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "李润风 - 高级产品经理 | Runfeng Li - Senior Product Manager",
  description: "专注于创造用户喜爱的产品，通过数据驱动决策和用户体验设计，推动业务增长和产品创新。Focused on creating products users love through data-driven decisions and user experience design.",
  keywords: "产品经理,Product Manager,用户体验,UX,数据分析,Data Analysis,敏捷开发,Agile Development,李润风,Runfeng Li",
  authors: [{ name: "Runfeng Li", url: "https://runfeng-li.github.io/product-manager-portfolio" }],
  openGraph: {
    title: "李润风 - 高级产品经理 | Runfeng Li - Senior Product Manager",
    description: "专注于创造用户喜爱的产品，通过数据驱动决策和用户体验设计，推动业务增长和产品创新。",
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
    siteName: "Runfeng Li Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "李润风 - 高级产品经理 | Runfeng Li - Senior Product Manager",
    description: "专注于创造用户喜爱的产品，通过数据驱动决策和用户体验设计，推动业务增长和产品创新。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/favicon-16x16.png`} />
        <link rel="manifest" href={`${basePath}/site.webmanifest`} />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
