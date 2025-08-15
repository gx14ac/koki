import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuProps {
  onClose: () => void;
}

export default function Menu({ onClose }: MenuProps) {
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
        {/* 左側のメニュー */}
        <div className="flex-1 flex flex-col justify-center pl-16 lg:pl-20">
          {/* KOKIロゴ */}
          <motion.div 
            className="absolute top-12 left-16 lg:left-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", damping: 20 }}
          >
            <button onClick={onClose} className="transition-transform hover:scale-105">
              <Image
                src="/koki_vert_white_logo.png"
                alt="KOKI"
                width={80}
                height={30}
                priority
                className="filter invert"
              />
            </button>
          </motion.div>
        </div>
        
        {/* 右側のエリア */}
        <div className="flex-1 flex items-center justify-center">
        </div>
      </div>
    </motion.div>
  );
}