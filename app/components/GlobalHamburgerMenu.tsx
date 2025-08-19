"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";
import SimpleMenu from "./SimpleMenu";
import Menu from "./Menu";
import LocaleButton from "./LocaleButton";

export default function GlobalHamburgerMenu() {
  const pathname = usePathname();
  const [showNavigation, setShowNavigation] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("");

  // ホームページ以外では常にダークモード（黒）にする
  const isLightBackground = pathname !== '/';
  const shouldBeDark = showMenu || isLightBackground;

  return (
    <>
      {/* ローカライズボタン */}
      <LocaleButton isDark={shouldBeDark} />
      
      {/* ハンバーガーメニューボタン - 常に表示 */}
      <HamburgerMenu 
        isOpen={showNavigation} 
        isDark={shouldBeDark}
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
            isDark={shouldBeDark}
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
