"use client";

import Image from "next/image";
import Link from "next/link";

export default function Contact() {
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
        <h1 className="text-2xl md:text-4xl font-light text-black tracking-wide">CONTACT</h1>
      </div>
      
      {/* コンテンツエリア - 全体画面で中央配置 */}
      <div className="w-full flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-5xl px-8">
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 mb-8">お問い合わせ情報</p>
              <div className="space-y-4 text-black">
                <p>Tel: 0554-52-2781</p>
                <p>Mail: aubergekoki@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
