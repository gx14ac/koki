import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import LocaleButton from "./LocaleButton";

interface SimpleMenuProps {
  onClose: () => void;
  onMenuSelect: (item: string) => void;
  isDark?: boolean;
}

export default function SimpleMenu({ onClose, onMenuSelect, isDark = false }: SimpleMenuProps) {
  const router = useRouter();
  
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
      x: "100%",
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 120,
        duration: 0.2,
        staggerChildren: 0.1
      }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring" as const,
        damping: 30,
        stiffness: 150,
        duration: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100
      }
    }
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
      <div className="flex h-full">
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
        
        {/* メニューアイテム - 右側に配置 */}
        <div className="flex flex-col justify-center pr-16 lg:pr-20">
          <motion.nav 
            className="space-y-6 lg:space-y-8"
            variants={containerVariants}
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
                  className={`block text-right text-xl lg:text-2xl font-light tracking-wide transition-all duration-300 hover:scale-105 ${
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
        <div className="pt-16">
            <LocaleButton isDark={isDark} variant="menu" />
            </div>
          </motion.nav>
        </div>
      </div>
    </motion.div>
  );
}
