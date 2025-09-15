"use client";

import Image from "next/image";
import Link from "next/link";
import SectionBar from "../components/SectionBar";

export default function Contact() {

  return (
    <div className="font-sans min-h-screen relative flex flex-col">
      {/* KOKIロゴ - 左上（PCは画像 / Mobileはテキスト） */}
      <div className="absolute top-12 left-16 lg:left-20 z-10 hidden md:block">
        <Link href="/" className="transition-transform hover:scale-105">
          <Image
            src="/koki_logo_basic_white.png"
            alt="KOKI"
            width={120}
            height={160}
            priority
            className="filter invert"
          />
        </Link>
      </div>
      <div className="block md:hidden w-full max-w-[640px] mx-auto px-5 mt-5 pb-4">
        <Link href="/" className="transition-transform hover:scale-105 inline-block">
          <Image
            src="/koki_logo_basic_white.png"
            alt="KOKI"
            width={80}
            height={54}
            priority
            className="filter invert"
          />
        </Link>
      </div>
      
      {/* コンテンツエリア */}
      <div className="w-full flex items-center justify-center flex-1 md:pt-48">
        <div className="w-full max-w-6xl pl-8 pr-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start pl-2 md:pl-0">
            {/* 左側 - タイトル（画像） */}
            <div className="flex items-start md:justify-start justify-center">
              <Image
                src="/auberge_koki.png"
                alt="Auberge KOKI"
                width={280}
                height={120}
                className="object-contain block w-40 h-auto md:w-[280px] md:h-[120px]"
                priority
              />
            </div>
            
            {/* 右側 - 連絡先情報 */}
            <div className="text-black self-start pl-6 pt-2 md:pt-4">
              <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-y-4 md:gap-y-6 md:gap-x-8 text-sm md:text-xl mx-auto max-w-[440px] md:max-w-none">
                <span className="font-medium">MAIL</span>
                <a href="mailto:aubergekoki@gmail.com" className="underline hover:no-underline">aubergekoki@gmail.com</a>

                <span className="font-medium">TEL</span>
                <a href="tel:0554522781" className="underline hover:no-underline">0554-52-2781</a>

                <span className="font-medium">Instagram</span>
                <a href="https://www.instagram.com/aubergekoki/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">@aubergekoki</a>

                <span className="font-medium">Address</span>
                <div>
                  <div>〒402-0213</div>
                  <div>山梨県南都留郡道志村谷相7383-2</div>
                  <div className="mt-3">
                    <a href="https://maps.app.goo.gl/wzpyAXsDesZ4mmiq9?g_st=ic" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Google Map</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <SectionBar variant="mobile-large" />
      </div>
      <div className="hidden md:block">
        <SectionBar variant="more-left" />
      </div>
    </div>
  );
}
