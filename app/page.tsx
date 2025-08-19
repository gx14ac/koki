"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen relative">
      {/* 背景画像 */}
      <div 
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url(/koki_top.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* KOKI ロゴを中央に配置 */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen">
        <Link href="/about" className="transition-transform">
          <Image
            src="/koki-white.png"
            alt="KOKI"
            width={150}
            height={50}
            priority
            className="drop-shadow-2xl w-32 h-auto md:w-[150px] md:h-auto"
          />
        </Link>
      </div>

    </div>
  );
}
