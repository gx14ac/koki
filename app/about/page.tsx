"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {

  return (
    <div className="font-sans min-h-screen relative" style={{ backgroundColor: 'rgb(238, 234, 228)' }}>
      {/* KOKIロゴ - 左上に配置 */}
      <div className="absolute top-12 left-16 lg:left-20 z-10">
        <Link href="/" className="transition-transform hover:scale-105">
          <Image
            src="/koki_vert_white_logo.png"
            alt="KOKI"
            width={80}
            height={120}
            priority
            className="filter invert"
          />
        </Link>
      </div>
      
      {/* タイトル - 固定位置で上中央に配置 */}
      <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-20">
        <h1 className="text-2xl md:text-4xl font-light text-black tracking-wide">ABOUT</h1>
      </div>
      
      {/* コンテンツエリア - 全体画面で中央配置 */}
      <div className="w-full flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-6xl px-8">
          <div className="flex justify-center items-center gap-24">
            {/* 左側 - Auberge KOKI情報 */}
            <div className="flex flex-col space-y-8">
              <div className="mb-8">
                <Image
                  src="/about_logo.png"
                  alt="Auberge KOKI"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-sm text-black font-medium w-20 mr-8">MAIL</span>
                  <span className="text-sm text-black">aubergekoki@gmail.com</span>
                </div>
                
                <div className="flex items-start">
                  <span className="text-sm text-black font-medium w-20 mr-8">TEL</span>
                  <span className="text-sm text-black">0554 52 2781</span>
                </div>
                
                <div className="flex items-start">
                  <span className="text-sm text-black font-medium w-20 mr-8">Instagram</span>
                  <span className="text-sm text-black">@aubergekoki</span>
                </div>
                
                <div className="flex items-start">
                  <span className="text-sm text-black font-medium w-20 mr-8">Address</span>
                  <div className="text-sm text-black">
                    <div>7383-2 Yaso, Doshi Village, Minamitsuru</div>
                    <div>Yamanashi, 402-0213, Japan</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 右側 - 縦書き日本語テキスト */}
            <div className="relative">
              <div 
                className="text-black text-sm leading-loose tracking-wider"
                style={{ 
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  height: '300px',
                  lineHeight: '1.8'
                }}
              >
                山を扱く、なにもないようでなんでもある<br/>
                二十四節気の記憶を耕す
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
