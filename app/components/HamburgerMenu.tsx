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
      className="fixed top-10 right-10 z-[250] w-12 h-12 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300"
      aria-label="メニューを開く"
    >
      <div className="relative w-8 h-8 flex flex-col justify-center items-center">
        <motion.span
          className="absolute block w-6 h-0.5"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 0 : (isHovered ? -20 : -8),
            width: isOpen ? "2rem" : (isHovered ? "2.25rem" : "1.5rem"),
            backgroundColor: isDark ? "#000000" : "#ffffff",
          }}
          transition={{ 
            rotate: { duration: 0.3, ease: "easeInOut" },
            y: { duration: 0.2, ease: "easeInOut" },
            width: { duration: 0.2, ease: "easeInOut" },
            backgroundColor: { duration: 0.3, ease: "easeInOut" }
          }}
        />
        <motion.span
          className="absolute block w-6 h-0.5"
          animate={{
            opacity: isOpen ? 0 : 1,
            scaleX: isOpen ? 0 : 1,
            width: isOpen ? "2rem" : (isHovered ? "2.25rem" : "1.5rem"),
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
          className="absolute block w-6 h-0.5"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 0 : (isHovered ? 20 : 8),
            width: isOpen ? "2rem" : (isHovered ? "2.25rem" : "1.5rem"),
            backgroundColor: isDark ? "#000000" : "#ffffff",
          }}
          transition={{ 
            rotate: { duration: 0.3, ease: "easeInOut" },
            y: { duration: 0.2, ease: "easeInOut" },
            width: { duration: 0.2, ease: "easeInOut" },
            backgroundColor: { duration: 0.3, ease: "easeInOut" }
          }}
        />
      </div>
    </button>
  );
}