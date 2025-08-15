import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuProps {
  onClose: () => void;
  selectedMenuItem?: string;
}

export default function Menu({ onClose, selectedMenuItem }: MenuProps) {
  // アニメーションバリアント
  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 60,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 120,
        duration: 0.8,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 60,
      filter: "blur(10px)",
      transition: {
        type: "spring" as const,
        damping: 30,
        stiffness: 150,
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[100]"
      style={{
        backgroundColor: 'rgb(238, 234, 228)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex h-full">
        {/* KOKIロゴ - 絶対配置 */}
        <motion.div 
          className="absolute top-12 left-16 lg:left-20 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", damping: 20 }}
        >
          <button onClick={onClose} className="transition-transform hover:scale-105">
            <Image
              src="/koki_vert_white_logo.png"
              alt="KOKI"
              width={80}
              height={120}
              priority
              className="filter invert"
            />
          </button>
        </motion.div>
        
        {/* 動的タイトル - 上中央に配置 */}
        {selectedMenuItem && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
            <h2 className="text-4xl font-light text-black tracking-wide">{selectedMenuItem}</h2>
          </div>
        )}
        
        {/* コンテンツエリア - 全体画面で中央配置 */}
        <div className="w-full flex flex-col items-center justify-center">
          {selectedMenuItem && (
            <div className="w-full max-w-5xl px-8">
              
              {/* STAYの場合のコンテンツ */}
              {selectedMenuItem === "STAY" && (
                <>
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
                </>
              )}
              
              {/* ABOUTの場合のコンテンツ */}
              {selectedMenuItem === "ABOUT" && (
                <div className="text-center">
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    AUBERGE KOKIについての情報がここに表示されます。
                  </p>
                </div>
              )}
              
              {/* CONTACTの場合のコンテンツ */}
              {selectedMenuItem === "CONTACT" && (
                <div className="text-center">
                  <div className="max-w-2xl mx-auto">
                    <p className="text-lg text-gray-700 mb-8">お問い合わせ情報</p>
                    <div className="space-y-4 text-black">
                      <p>Tel: 0554-52-2781</p>
                      <p>Mail: aubergekoki@gmail.com</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}