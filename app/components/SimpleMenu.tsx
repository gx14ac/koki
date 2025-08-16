import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

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
    "INSTAGRAM",
    "MAP",
    "CONTACT"
  ];

  const handleMenuSelect = (item: string) => {
    if (item === "RESERVATION") {
      window.open("https://www.tablecheck.com/ja/koki/reserve/message", "_blank");
      return;
    }
    if (item === "INSTAGRAM") {
      window.open("https://www.instagram.com/aubergekoki/", "_blank");
      return;
    }
    if (item === "MAP") {
      window.open("https://www.google.com/maps?sca_esv=a7578323760d0a7e&output=search&q=%E9%81%93%E5%BF%97%E6%9D%91+KOKI&source=lnms&fbs=AIIjpHxtp9HgFjMGFRTKn1bk5JXhQKJ-qNetcQnCHbceIMLcnM2HBhIcd5cpHhHkrq7_lRzBZKuzryIDkN2W3hVC2ddlxmCDos6W15MlDfo5mYtC31qSyvI4KbVJ1APf7EDeuOESqUH578pITAGp5eMonri-Sb5boL3k_fOfHKIKMvj_9PUB_Z1i_5GLlmOmijvwNFbO1siqcSzJj1zH86gU5psEE-L1rYzRpKF-fQNqlM-9a7vBUGE&entry=mc&ved=1t:200715&ictx=111", "_blank");
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

  return (
    <motion.div 
      className="fixed inset-0 z-[200]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex h-full">
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
              <motion.button
                key={item}
                variants={itemVariants}
                className={`block text-right text-xl lg:text-2xl font-light tracking-wide transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'text-black hover:text-gray-600' 
                    : 'text-white hover:text-gray-300'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.nav>
        </div>
      </div>
    </motion.div>
  );
}
