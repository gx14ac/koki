"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen relative">
      {/* 左半分の背景 */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-full z-0"
        style={{
          backgroundImage: 'url(/home_left.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* 右半分の背景 */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full z-0"
        style={{
          backgroundImage: 'url(/home_right.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* KOKI ロゴを中央に配置 */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <Link href="/about" className="transition-transform hover:scale-105">
          <Image
            src="/koki-white.png"
            alt="KOKI"
            width={150}
            height={50}
            priority
            className="drop-shadow-2xl"
          />
        </Link>
      </div>

    </div>
  );
}
