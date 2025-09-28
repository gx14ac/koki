"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionBar from "../components/SectionBar";

export default function About() {
  // web でもスクロール可能。初回のみ最上部へスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans relative flex flex-col h-screen xl:h-auto overflow-x-hidden">
      {/* About page specific wrapper */}
      <div className="flex-1 flex flex-col">
      {/* モバイル専用ビジュアル - 上段：全幅画像 */}
      <div className="block xl:hidden w-full">
        <div className="w-full max-w-[640px] mx-auto pl-0 mt-10 pr-2">
          <div className="relative w-[85%] aspect-[16/11]">
            <Image
              src="/about_1.jpg"
              alt="about visual 1"
              fill
              className="object-cover object-left"
              priority
            />
          </div>
        </div>
      </div>

      {/* モバイル専用ビジュアル - 下段：左に縦書きテキスト、右に画像（右端吸着・上段と同幅） */}
      <div className="block xl:hidden w-full" >
        <div className="w-full max-w-[640px] mx-auto pl-4 pr-0">
          <div className="flex items-start w-full">
            {/* 左：縦書きテキスト（固定幅15%） */}
            <div className="shrink-0 w-[15%] mt-6 -ml-4 text-black text-[12px] leading-relaxed tracking-wide whitespace-pre-line break-keep" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
              {`山を扱く、なにもないようでなんでもある。\n二十四節季の記憶を耕す。`}
            </div>
            {/* 右：画像（固定幅85%） */}
            <div className="w-[85%] ml-auto mt-16">
              <div className="relative aspect-[16/12]">
                <Image
                  src="/about_2.jpg"
                  alt="about visual 2"
                  fill
                  className="object-cover object-right"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* 2枚の画像を左右に継ぎ目なく長方形で配置 */}
      <div className="hidden xl:flex w-full items-center justify-center xl:mt-24">
        <div className="w-full max-w-[1000px] lg:max-w-[1200px] md:px-6">
          <div className="relative w-full aspect-[14/9] md:aspect-[16/9]">
            {/* 左の縦書きキャプション */}
            <div
              className="absolute top-1/2 -translate-y-1/2 left-2 md:left-0 lg:-left-12 xl:-left-20 2xl:-left-40 z-10 text-black leading-relaxed tracking-wide text-[15px] md:text-[18px] whitespace-pre break-keep"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              {`山を扱く、なにもないようでなんでもある。\n二十四節季の記憶を耕す。`}
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
      </div>
      
      {/* aboutページ専用のフッター表示 */}
      <div className="block xl:hidden mt-auto">
        <SectionBar variant="mobile-large" />
      </div>
      <div className="hidden md:block mt-65">
        <SectionBar variant="centered" />
      </div>
    </div>
  );
}
