"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";
import SimpleMenu from "./SimpleMenu";
import Menu from "./Menu";

export default function GlobalHamburgerMenu() {
  const pathname = usePathname();
  const [showNavigation, setShowNavigation] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("");

  // ホームページ以外では常にダークモード（黒）にする
  const isLightBackground = pathname !== '/';
  const shouldBeDark = showMenu || isLightBackground;

  // 対象ページでメニューを開いた時にブラーを当てる
  const blurEligiblePaths = ["/reservation", "/stay", "/contact", "/about"];
  const shouldShowBackdrop = showNavigation && blurEligiblePaths.some((p) => pathname.startsWith(p));

  return (
    <>
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

      {/* 背景ブラー用オーバーレイ（メニューの背面に表示） */}
      {shouldShowBackdrop && (
        <div
          className="fixed inset-0 z-[180] bg-black/10 backdrop-blur-[2px] md:backdrop-blur-[3px] transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
      
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
