"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import SimpleMenu from "./SimpleMenu";
import Menu from "./Menu";

export default function GlobalHamburgerMenu() {
  const pathname = usePathname();
  const [showNavigation, setShowNavigation] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("");

  // ページごとの色分岐
  // - 既存: ホーム以外は黒
  // - 追加: ホームでもハンバーガーだけ黒にする（メニュー類の色分岐は現状維持）
  const isLightBackground = pathname !== '/';
  const shouldBeDark = showMenu || isLightBackground; // 既存の全体ルール（SimpleMenuに渡す）
  const shouldBeDarkForHamburger = pathname === '/' ? false : shouldBeDark; // ホームでは白

  // 対象ページでメニューを開いた時にブラーを当てる
  const blurEligiblePaths = ["/reservation", "/stay", "/contact", "/about"];
  const shouldShowBackdrop = showNavigation && blurEligiblePaths.some((p) => pathname.startsWith(p));

  // メニュー開閉に応じて <html> にフラグクラスを付与（モバイルでホーム中央ロゴを隠すため）
  useEffect(() => {
    if (typeof document === "undefined") return;
    const htmlEl = document.documentElement;
    const shouldOpen = showNavigation || showMenu;
    if (shouldOpen) {
      htmlEl.classList.add("menu-open");
    } else {
      htmlEl.classList.remove("menu-open");
    }
    return () => {
      htmlEl.classList.remove("menu-open");
    };
  }, [showNavigation, showMenu]);

  return (
    <>
      {pathname !== '/' && (
        <div aria-hidden className="h-[90px] md:h-[220px]" />
      )}
      {/* 左上固定ロゴ（ホーム以外で表示、PC/タブレットではメニュー全画面表示中は非表示、モバイルでは常に表示） */}
      {pathname !== '/' && (
      <div className="fixed top-7 left-3 md:top-12 md:left-8 z-[200]">
          {/* PC/Tablet サイズ（メニュー表示時は非表示） */}
          <div className={`hidden md:block ${showMenu ? 'md:hidden' : ''}`}>
            <Link href="/" className="transition-transform hover:scale-105">
              <Image
                src="/koki_vert_white_logo.png"
                alt="KOKI"
                width={100}
                height={100}
                priority
                className="filter invert"
              />
            </Link>
          </div>
          {/* モバイルサイズ */}
          <div className="block md:hidden">
            <Link href="/" className="transition-transform hover:scale-105 inline-block">
              <Image
                src="/koki_vert_logo_black.png"
                alt="KOKI"
                width={80}
                height={54}
                priority
              />
            </Link>
          </div>
        </div>
      )}
      {/* ハンバーガーメニューボタン - 常に表示 */}
      <HamburgerMenu 
        isOpen={showNavigation} 
        isDark={shouldBeDarkForHamburger}
        onClick={() => {
          if (showNavigation) {
            setShowNavigation(false);
          } else {
            setShowNavigation(true);
          }
        }} 
      />

      {/* 背景オーバーレイ（メニューの背面に表示） */}
      {shouldShowBackdrop && (
        <div
          className="fixed inset-0 z-[180] transition-opacity duration-300"
          style={{ backgroundColor: 'rgba(245, 245, 245, 0.6)' }}
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
