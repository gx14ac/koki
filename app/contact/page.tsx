"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionBar from "../components/SectionBar";

export default function Contact() {
  // 全デバイスでスクロール制御と最上部リセット
  useEffect(() => {
    // ページ読み込み時に最上部へスクロール
    window.scrollTo(0, 0);
    
    // 初回実行前に少し待機してレイアウト安定化
    const initTimeout = setTimeout(() => {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    }, 100);
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      clearTimeout(initTimeout);
    };
  }, []);

  return (
    <div className="font-sans relative flex flex-col overflow-x-hidden h-screen">
      {/* 左上ロゴは共通コンポーネントで固定表示されるため削除 */}
      
      {/* コンテンツエリア */}
      <div className="w-full flex items-center justify-center pt-8 md:pt-0 pl-10 flex-1">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-center w-full md:gap-16 max-w-4xl mx-auto">
          {/* Auberge KOKI画像 */}
          <div className="w-full md:w-auto flex justify-start md:justify-center items-center mb-4 md:mb-0 pl-6 md:pl-0 md:mt-0 -mt-10">
            <Image
              src="/auberge_koki.png"
              alt="Auberge KOKI"
              width={280}
              height={120}
              className="object-contain block w-48 h-auto md:w-[280px] md:h-[120px] md:-mt-46"
              priority
            />
          </div>
          
          {/* 連絡先情報 */}
          <div className="layout-left md:layout-none w-full md:w-auto text-black flex flex-col justify-center items-start">
            <div className="grid grid-cols-[90px_1fr] md:grid-cols-[100px_1fr] gap-y-3 md:gap-y-4 md:gap-x-6 text-sm md:text-[16px]">
                <span className="font-light">MAIL</span>
                <a href="mailto:aubergekoki@gmail.com" className="hover:no-underline">aubergekoki@gmail.com</a>

                <span className="font-light">TEL</span>
                <a href="tel:0554522781" className="hover:no-underline">0554-52-2781</a>

                <span className="font-light">Instagram</span>
                <a href="https://www.instagram.com/aubergekoki/" target="_blank" rel="noopener noreferrer" className="hover:no-underline">@aubergekoki</a>

                <span className="font-light">Address</span>
                <div>
                  <div>〒402-0213</div>
                  <div>山梨県南都留郡道志村谷相7383-2</div>
                  <div className="mt-3">
                    <a href="https://maps.app.goo.gl/wzpyAXsDesZ4mmiq9?g_st=ic" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline text-[14px]">Google Map</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      {/* contactページ専用のフッター表示 */}
      <div className="block md:hidden mt-auto mb-46">
        <SectionBar variant="mobile-large" />
      </div>
      <div className="hidden md:block mt-auto mb-57">
        <SectionBar variant="centered" />
      </div>
    </div>
  );
}
