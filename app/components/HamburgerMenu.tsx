import { motion } from "framer-motion";
import { useState } from "react";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
  isDark?: boolean;
}

export default function HamburgerMenu({ isOpen, onClick, isDark = false }: HamburgerMenuProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-4 right-4 md:top-10 md:right-10 z-[250] w-20 h-20 md:w-24 md:h-24 flex flex-col justify-center items-center hover:scale-102 transition-transform duration-500"
      aria-label="メニューを開く"
    >
      <div className="relative w-20 h-12 md:w-24 md:h-14 flex flex-col justify-center items-center">
        <motion.span
          className="absolute block w-10"
          style={{ height: '1px' }}
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 0 : (isHovered ? -14 : -11),
            width: isOpen ? "3.0rem" : (isHovered ? "3.5rem" : "3.0rem"),
            backgroundColor: isDark ? "#000000" : "#ffffff",
          }}
          transition={{ 
            rotate: { duration: 0.4, ease: "easeInOut" },
            y: { duration: 0.3, ease: "easeInOut" },
            width: { duration: 0.3, ease: "easeInOut" },
            backgroundColor: { duration: 0.4, ease: "easeInOut" }
          }}
        />
        <motion.span
          className="absolute block w-10"
          style={{ height: '1px' }}
          animate={{
            opacity: isOpen ? 0 : 1,
            scaleX: isOpen ? 0 : 1,
            width: isOpen ? "3.0rem" : (isHovered ? "3.5rem" : "3.0rem"),
            backgroundColor: isDark ? "#000000" : "#ffffff",
          }}
          transition={{ 
            opacity: { duration: 0.2, ease: "easeInOut" },
            scaleX: { duration: 0.2, ease: "easeInOut" },
            width: { duration: 0.2, ease: "easeInOut" },
            backgroundColor: { duration: 0.3, ease: "easeInOut" }
          }}
        />
        <motion.span
          className="absolute block w-10"
          style={{ height: '1px' }}
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 0 : (isHovered ? 14 : 11),
            width: isOpen ? "3.0rem" : (isHovered ? "3.5rem" : "3.0rem"),
            backgroundColor: isDark ? "#000000" : "#ffffff",
          }}
          transition={{ 
            rotate: { duration: 0.4, ease: "easeInOut" },
            y: { duration: 0.3, ease: "easeInOut" },
            width: { duration: 0.3, ease: "easeInOut" },
            backgroundColor: { duration: 0.4, ease: "easeInOut" }
          }}
        />
      </div>
    </button>
  );
}