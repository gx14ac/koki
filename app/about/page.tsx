"use client";

import Image from "next/image";
import Link from "next/link";
import SectionBar from "../components/SectionBar";

export default function About() {

  return (
    <div className="font-sans min-h-screen relative flex flex-col">
      {/* 戻るロゴ（PC:画像ロゴ / Mobile:テキストロゴ） */}
      <div className="absolute top-12 left-16 lg:left-20 z-10 hidden md:block">
        <Link href="/" className="transition-transform hover:scale-105">
          <Image
            src="/koki_logo_basic_white.png"
            alt="KOKI"
            width={80}
            height={120}
            priority
            className="filter invert"
          />
        </Link>
      </div>
      <div className="block md:hidden w-full max-w-[640px] mx-auto px-5 pt-10 pb-6">
        <Link href="/" className="text-2xl tracking-wide">KOKI</Link>
      </div>

      {/* 2枚の画像を左右に継ぎ目なく長方形で配置 */}
      <div className="w-full flex items-center justify-center flex-1">
        <div className="w-full max-w-[1480px] px-2 md:px-4">
          <div className="relative w-full aspect-[16/9]">
            {/* 左の縦書きキャプション */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -left-14 md:-left-64 text-black leading-relaxed tracking-wide text-[18px] whitespace-pre break-keep"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              {`山を扱く、なにもないようでなんでもある。\n二十四節気の記憶を耕す。`}
            </div>
            {/* 左半分 */}
            <div className="absolute inset-y-0 left-0 right-1/2">
              <Image
                src="/about_1.jpg"
                alt="about left"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* 右半分 */}
            <div className="absolute inset-y-0 right-0 left-1/2">
              <Image
                src="/about_2.jpg"
                alt="about right"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <SectionBar variant="more-left" />
    </div>
  );
}
