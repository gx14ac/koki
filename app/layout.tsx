import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import GlobalHamburgerMenu from "./components/GlobalHamburgerMenu";
import PageContainer from "./components/PageContainer";
import FooterSection from "./components/FooterSection";
import { LocaleProvider } from "./contexts/LocaleContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aubergekoki.com"),
  title: "Auberge Koki",
  description: "山を扱く、なにもないようでなんでもある。二十四節季の記憶を耕す。",
  keywords: ["オーベルジュ", "宿泊", "レストラン", "山梨", "自然", "料理"],
  authors: [{ name: "Auberge Koki" }],
  creator: "Auberge Koki",
  publisher: "Auberge Koki",
  icons: {
    icon: [
      { url: "/ogp.png", type: "image/png" },
    ],
    apple: [
      { url: "/ogp.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Auberge Koki",
    description: "山を扱く、なにもないようでなんでもある。二十四節季の記憶を耕す。",
    url: "https://aubergekoki.com",
    siteName: "Auberge Koki",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "Auberge KOKI",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auberge KOKI",
    description: "山を扱く、なにもないようでなんでもある。二十四節季の記憶を耕す。",
    images: ["/ogp.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="preload"
          href="/A-OTF-GothicBBBPr5-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-[rgb(245,245,245)] font-sans flex flex-col`}
        suppressHydrationWarning={true}
      >
        <LocaleProvider>
          <GlobalHamburgerMenu />
          <PageContainer>
            {children}
          </PageContainer>
          <FooterSection />
        </LocaleProvider>
      </body>
    </html>
  );
}
