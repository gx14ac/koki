"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionBar from "../components/SectionBar";

export default function Contact() {
  // contactページでスクロールを無効化とレイアウト調整
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    // レンダリング安定化のため
    const timeout = setTimeout(() => {
      // DOMが完全に描画された後の微調整
    }, 0);
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="font-sans relative flex flex-col h-screen overflow-x-hidden min-h-screen">
      {/* 左上ロゴは共通コンポーネントで固定表示されるため削除 */}
      
      {/* コンテンツエリア */}
      <div className="w-full flex items-center justify-center pt-40 pl-10">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Auberge KOKI画像 */}
          <div className="w-full flex justify-start items-center mb-6 pl-6 d:pl-4">
            <Image
              src="/auberge_koki.png"
              alt="Auberge KOKI"
              width={280}
              height={120}
              className="object-contain block w-40 h-auto md:w-[280px] md:h-[120px]"
              priority
            />
          </div>
          
          {/* 連絡先情報 */}
          <div className="layout-left w-full text-black flex flex-col justify-center items-start">
            <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-y-2 md:gap-y-4 md:gap-x-4 text-xs md:text-lg">
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
                    <a href="https://maps.app.goo.gl/wzpyAXsDesZ4mmiq9?g_st=ic" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Google Map</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      {/* contactページ専用のフッター表示 */}
      <div className="block md:hidden mt-40">
        <SectionBar variant="mobile-large" />
      </div>
      <div className="hidden md:block mb-8">
        <SectionBar variant="more-left" />
      </div>
    </div>
  );
}
