"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans h-screen relative overflow-hidden pt-6 md:pt-10">
      {/* 背景画像（全端末共通） */}
      <div 
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url(/koki_top.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* KOKI ロゴを中央に配置（全端末共通） */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full home-center-logo">
          <Image
            src="/koki-white.png"
            alt="KOKI"
            width={120}
            height={40}
            priority
            className="drop-shadow-2xl w-28 h-auto md:w-[120px] md:h-auto"
          />
      </div>
    </div>
  );
}
