"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Stay() {
  const [showReservation, setShowReservation] = useState(false);

  // ページ読み込み後、少し遅れて予約フォームを表示
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowReservation(true);
    }, 2000); // 2秒後に表示

    return () => clearTimeout(timer);
  }, []);
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
      <div className="w-full flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-5xl px-8">
          {/* KINOMA */}
          <div className="mb-16 flex items-center gap-12 justify-center">
            <div className="w-96">
              <div className="h-64 rounded-lg overflow-hidden">
                <Image
                  src="/kinoma.JPG"
                  alt="KINOMA Room"
                  width={384}
                  height={256}
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
            <div className="w-96">
              <div className="h-64 rounded-lg overflow-hidden">
                <Image
                  src="/irori.JPG"
                  alt="IRORI Room"
                  width={384}
                  height={256}
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

      {/* TableCheck予約フォーム - 右下からアニメーション */}
      <AnimatePresence>
        {showReservation && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ 
              x: 400, 
              y: 300, 
              opacity: 0,
              scale: 0.8
            }}
            animate={{ 
              x: 0, 
              y: 0, 
              opacity: 1,
              scale: 1
            }}
            exit={{ 
              x: 400, 
              y: 300, 
              opacity: 0,
              scale: 0.8
            }}
            transition={{
              type: "spring" as const,
              damping: 25,
              stiffness: 120,
              duration: 0.8
            }}
          >
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
              {/* ヘッダー */}
              <div className="bg-black text-white px-4 py-3 flex justify-between items-center">
                <h3 className="text-sm font-medium">RESERVATION</h3>
                <button
                  onClick={() => setShowReservation(false)}
                  className="text-white hover:text-gray-300 text-lg"
                  aria-label="予約フォームを閉じる"
                >
                  ×
                </button>
              </div>
              
              {/* iframe埋め込み */}
              <div className="w-80 h-96">
                <iframe
                  src="https://www.tablecheck.com/ja/koki/reserve/message"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="KOKI Restaurant Reservation"
                  className="border-0"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
