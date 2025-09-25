import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import LocaleButton from "./LocaleButton";

interface SimpleMenuProps {
  onClose: () => void;
  onMenuSelect: (item: string) => void;
  isDark?: boolean;
}

export default function SimpleMenu({ onClose, onMenuSelect, isDark = false }: SimpleMenuProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return window.matchMedia('(max-width: 767px)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia('(max-width: 767px)');
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = 'matches' in e ? e.matches : (e as MediaQueryList).matches;
      setIsMobile(matches);
    };
    // 変更イベント登録（両対応）
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', handleChange as (e: MediaQueryListEvent) => void);
    } else if (typeof (mql as any).addListener === 'function') {
      (mql as any).addListener(handleChange);
    }
    return () => {
      if (typeof mql.removeEventListener === 'function') {
        mql.removeEventListener('change', handleChange as (e: MediaQueryListEvent) => void);
      } else if (typeof (mql as any).removeListener === 'function') {
        (mql as any).removeListener(handleChange);
      }
    };
  }, []);
  
  const menuItems = [
    "RESERVATION",
    "STAY",
    "ABOUT", 
    "CONTACT", 
    "MAP",
    "INSTAGRAM",
  ];

  const handleMenuSelect = (item: string) => {
    if (item === "RESERVATION") {
      onClose();
      router.push("/reservation");
      return;
    }
    if (item === "INSTAGRAM") {
      window.open("https://www.instagram.com/aubergekoki/", "_blank");
      return;
    }
    if (item === "MAP") {
      window.open("https://maps.app.goo.gl/wzpyAXsDesZ4mmiq9?g_st=ipc", "_blank");
      return;
    }
    
    // 新しいルートにナビゲート
    if (item === "STAY") {
      onClose();
      router.push("/stay");
      return;
    }
    if (item === "ABOUT") {
      onClose();
      router.push("/about");
      return;
    }
    if (item === "CONTACT") {
      onClose();
      router.push("/contact");
      return;
    }

    // 既存のメニュー表示機能（必要に応じて）
    onMenuSelect(item);
  };

  // アニメーションバリアント
  const containerVariants = {
    hidden: { 
      x: isMobile ? "-100%" : "100%",
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 120,
        duration: 0.25
      }
    },
    exit: {
      x: isMobile ? "-100%" : "100%",
      opacity: 0,
      transition: {
        type: "spring" as const,
        damping: 30,
        stiffness: 150,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    // フェード・移動を無効化
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0 } }
  };

  const InstagramIcon = ({ className = "" }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  );

  return (
    <motion.div 
      className="fixed inset-0 z-[200]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex h-full flex-row-reverse md:flex-row">
        {/* モバイル左上ロゴ（トップページのみ表示） */}
        {pathname === '/' && (
          <div className="absolute top-8 left-4 md:hidden pointer-events-none z-[210] -translate-y-1">
            <Image
              src="/koki_vert_white_logo.png"
              alt="KOKI"
              width={80}
              height={120}
              priority
              className={isDark ? "filter invert" : ""}
            />
          </div>
        )}
        {/* モバイル時：左上ロゴは非表示（不要） */}
        {/* 左側の空いているエリア - クリックで閉じる */}
        <div 
          className="flex-1 h-full cursor-pointer"
          onClick={onClose}
        />
        
        {/* ハンバーガーメニューエリアを除外 */}
        <div 
          className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
          style={{ zIndex: 300 }}
        />
        
        {/* メニューアイテム - モバイルは左端に少し余白を持たせる */}
        <div className="flex flex-col justify-start md:justify-center pt-48 md:pt-16 pl-8 pr-8 md:pl-0 md:pr-16 lg:pr-20 items-start md:items-end">
          <motion.nav 
            className="space-y-6 lg:space-y-8"
          >
            {menuItems.map((item, index) => (
              item === 'INSTAGRAM' ? (
                <motion.a
                  key={item}
                  variants={itemVariants}
                  className={`block text-left text-xl lg:text-2xl font-light tracking-wide transition-all duration-300 hover:scale-101 ${
                    isDark 
                      ? 'text-black hover:text-gray-600' 
                      : 'text-white hover:text-gray-300'
                  }`}
                  href="https://www.instagram.com/aubergekoki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.04 }}
                  aria-label="Open Instagram"
                >
                  <span className="inline-flex items-center justify-start w-full">
                    <InstagramIcon className="w-7 h-7 lg:w-8 lg:h-8" />
                  </span>
                </motion.a>
              ) : (
                <motion.button
                  key={item}
                  variants={itemVariants}
                  className={`block text-left md:text-right text-xl lg:text-2xl font-light tracking-wide transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'text-black hover:text-gray-600' 
                      : 'text-white hover:text-gray-300'
                  }`}
                  onClick={() => handleMenuSelect(item)}
                  whileTap={{ scale: 0.1 }}
                >
                  {item}
                </motion.button>
              )
            ))}
        <div className="pt-8">
            <LocaleButton isDark={isDark} variant="menu" />
            </div>
          </motion.nav>
        </div>
      </div>
    </motion.div>
  );
}
