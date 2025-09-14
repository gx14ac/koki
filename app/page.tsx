"use client";

import Image from "next/image";
import SectionBar from "./components/SectionBar";

export default function Home() {
  return (
    <div className="font-sans min-h-screen relative">
      {/* PC/Tablet: これまでのフルスクリーン背景＋中央ロゴ */}
      <div className="hidden md:block">
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
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen home-center-logo">
            <Image
              src="/koki-white.png"
              alt="KOKI"
              width={150}
              height={50}
              priority
              className="drop-shadow-2xl w-32 h-auto md:w-[150px] md:h-auto"
            />
        </div>
      </div>

      {/* Mobile: スクショ準拠のレイアウト */}
      <div className="block md:hidden relative z-10">
        {/* ヘッダー行（左にテキストロゴ、右はグローバルのハンバーガー） */}
        <div className="px-6 pt-10 pb-6">
          <div className="text-[28px] tracking-wide">KOKI</div>
        </div>

        {/* 上段画像 */}
        <div className="px-6">
          <Image
            src="/home_left.jpg"
            alt="home visual 1"
            width={1200}
            height={800}
            priority
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 下段：画像の左に縦書きキャプションを重ねる */}
        <div className="px-6 pt-8 pb-6">
          <div className="relative w-full">
            <div
              className="absolute top-1/2 -translate-y-1/2 -left-2 text-black text-[12px] leading-[1.6] tracking-wide"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              {`山を扱く、なにもないようでなんでもある。\n二十四節気の記憶を耕す。`}
            </div>
            <Image
              src="/home_right.jpg"
              alt="home visual 2"
              width={1200}
              height={800}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* セクションバー - モバイルのみ表示（PCは従来どおり非表示） */}
      <div className="block md:hidden">
        <SectionBar variant="mobile-large" />
      </div>
    </div>
  );
}
