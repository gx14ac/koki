import { motion } from "framer-motion";

interface SimpleMenuProps {
  onClose: () => void;
  onMenuSelect: () => void;
  isDark?: boolean;
}

export default function SimpleMenu({ onClose, onMenuSelect, isDark = false }: SimpleMenuProps) {
  const menuItems = [
    "RESERVATION",
    "STAY", 
    "ABOUT",
    "INSTAGRAM",
    "MAP",
    "CONTACT"
  ];

  const handleMenuSelect = (item: string) => {
    onMenuSelect();
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
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 0.6,
        staggerChildren: 0.1
      }
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
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
        type: "spring",
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
                onClick={() => handleMenuSelect(item)}
                whileHover={{ 
                  scale: 1.05,
                  x: -10,
                  transition: { type: "spring", damping: 15 }
                }}
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
