"use client";

import Image from "next/image";
import Link from "next/link";

export default function Stay() {
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
        <h1 className="text-2xl md:text-4xl font-light text-black tracking-wide">STAY</h1>
      </div>
      
      {/* コンテンツエリア - 全体画面で中央配置 */}
      <div className="w-full flex flex-col items-center justify-center pt-64">
        <div className="w-full max-w-5xl px-8">
          {/* KINOMA */}
          <div className="mb-16 flex items-center gap-12 justify-center">
            <div className="w-[500px]">
              <div className="h-80 overflow-hidden">
                <Image
                  src="/kinoma.JPG"
                  alt="KINOMA Room"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-80">
              <h3 className="text-2xl font-light mb-4 text-black">KINOMA</h3>
              <p className="text-sm text-gray-700 mb-2">00 sqm / Maximum 2 persons / 2 semi double sized bunk bed</p>
              <p className="text-sm text-gray-700 mb-4">00㎡ / 1-2名 / ベッド2台</p>
              <p className="text-sm text-black">Price: ¥00,000</p>
            </div>
          </div>
          
          {/* IRORI */}
          <div className="flex items-center gap-12 justify-center">
            <div className="w-[500px]">
              <div className="h-80 overflow-hidden">
                <Image
                  src="/irori.JPG"
                  alt="IRORI Room"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-80">
              <h3 className="text-2xl font-light mb-4 text-black">IRORI</h3>
              <p className="text-sm text-gray-700 mb-2">00 sqm / Maximum 3 persons / 2 semi double sized bunk bed</p>
              <p className="text-sm text-gray-700 mb-4">00㎡ / 1-3名 / ベッド2台</p>
              <p className="text-sm text-black">Price: ¥00,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* KINOMA 詳細セクション */}
        <div className="w-full mx-auto mt-16 px-8 py-16">
          {/* KINOMAタイトルとテキスト情報 */}
          <div className="text-center mb-6">
            <h3 className="text-3xl font-light mb-8 text-black">KINOMA</h3>
            <p className="text-base text-black mb-3">00 sqm / Maximum 3 persons / 2 semi double sized bunk bed</p>
            <p className="text-base text-black mb-3">00㎡ / 1-3名 / ベッド2台</p>
            <p className="text-base text-black mb-6">Price: ¥00,000</p>
                         <p className="text-base text-black">
               <a 
                 href="https://www.tablecheck.com/ja/koki/reserve/message" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="underline hover:no-underline transition-all duration-200"
               >
                 Reservation
               </a>
             </p>
          </div>
          
          {/* KINOMA画像 - 2枚を縦に配置 */}
          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-3xl">
              <div className="aspect-[4/3] overflow-hidden shadow-lg relative">
                <Image
                  src="/kinoma.JPG"
                  alt="KINOMA Room - Traditional Japanese Style"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full max-w-3xl">
              <div className="aspect-[4/3] overflow-hidden shadow-lg relative">
                <Image
                  src="/konoma_2.jpg"
                  alt="KINOMA Room - Interior View"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      {/* IRORI 詳細セクション */}
        <div className="w-full mx-auto px-8 py-4">
          {/* IROIタイトルとテキスト情報 */}
          <div className="text-center mb-6">
            <h3 className="text-3xl font-light mb-8 text-black">IRORI</h3>
            <p className="text-base text-black mb-3">00 sqm / Maximum 3 persons / 2 semi double sized bunk bed</p>
            <p className="text-base text-black mb-3">00㎡ / 1-3名 / ベッド2台</p>
            <p className="text-base text-black mb-6">Price: ¥00,000</p>
                         <p className="text-base text-black">
               <a 
                 href="https://www.tablecheck.com/ja/koki/reserve/message" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="underline hover:no-underline transition-all duration-200"
               >
                 Reservation
               </a>
             </p>
          </div>
          
          {/* IRORI画像 - 2枚を縦に配置 */}
          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-3xl">
              <div className="aspect-[4/3] overflow-hidden shadow-lg relative">
                <Image
                  src="/irori.JPG"
                  alt="IRORI Room - Traditional Japanese Style"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full max-w-3xl">
              <div className="aspect-[4/3] overflow-hidden shadow-lg relative">
                <Image
                  src="/irori_2.jpg"
                  alt="IRORI Room - Hearth Area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
      </div>
      
    </div>
  );
}
