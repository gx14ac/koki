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
      
      {/* タイトル - 上中央に配置 */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
        <h1 className="text-4xl font-light text-black tracking-wide">STAY</h1>
      </div>
      
      {/* コンテンツエリア - 全体画面で中央配置 */}
      <div className="w-full flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-5xl px-8">
          {/* KINOMA */}
          <div className="mb-16 flex items-center gap-12 justify-center">
            <div className="w-96">
              <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">KINOMA Room Image</span>
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
            <div className="w-96">
              <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">IRORI Room Image</span>
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
    </div>
  );
}
