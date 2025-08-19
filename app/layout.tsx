import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import GlobalHamburgerMenu from "./components/GlobalHamburgerMenu";
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
  title: "Auberge Koki",
  description: "山を扱く、なにもないようでなんでもある。二十四節気の記憶を耕す。",
  keywords: ["オーベルジュ", "宿泊", "レストラン", "山梨", "自然", "料理"],
  authors: [{ name: "Auberge Koki" }],
  creator: "Auberge Koki",
  publisher: "Auberge Koki",
  openGraph: {
    title: "Auberge Koki",
    description: "山を扱く、なにもないようでなんでもある。二十四節気の記憶を耕す。",
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
    description: "山を扱く、なにもないようでなんでもある。二十四節気の記憶を耕す。",
    images: ["/ogp.png"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <LocaleProvider>
          <GlobalHamburgerMenu />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
