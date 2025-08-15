"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";
import SimpleMenu from "./SimpleMenu";
import Menu from "./Menu";

export default function GlobalHamburgerMenu() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("");

  return (
    <>
      {/* ハンバーガーメニューボタン - 常に表示 */}
      <HamburgerMenu 
        isOpen={showNavigation} 
        isDark={showMenu}
        onClick={() => {
          if (showNavigation) {
            setShowNavigation(false);
          } else {
            setShowNavigation(true);
          }
        }} 
      />
      
      {/* シンプルメニュー */}
      <AnimatePresence>
        {showNavigation && (
          <SimpleMenu 
            onClose={() => setShowNavigation(false)}
            onMenuSelect={(item) => {
              setSelectedMenuItem(item);
              setShowNavigation(false);
              if (!showMenu) {
                setShowMenu(true);
              }
            }}
            isDark={showMenu}
          />
        )}
      </AnimatePresence>

      {/* メニュー画面 */}
      <AnimatePresence>
        {showMenu && (
          <Menu 
            onClose={() => {
              setShowMenu(false);
              setSelectedMenuItem("");
            }} 
            selectedMenuItem={selectedMenuItem}
          />
        )}
      </AnimatePresence>
    </>
  );
}
