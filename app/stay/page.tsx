"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "../contexts/LocaleContext";

export default function Stay() {
  const { t, locale } = useLocale();

  return (
    <div className="font-sans min-h-screen relative" style={{ backgroundColor: 'rgb(238, 234, 228)' }}>
      {/* KOKIロゴ - 左上に配置 */}
      <div className="absolute top-12 left-16 lg:left-20 z-10">
        <Link href="/" className="transition-transform hover:scale-105">
          <Image
            src="/koki_vert_white_logo.png"
            alt="KOKI"
            width={80}
            height={120}
            priority
            className="filter invert"
          />
        </Link>
      </div>
      
      {/* タイトル - 固定位置で上中央に配置 */}
      <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-20">
                <h1 className="text-2xl md:text-4xl font-light text-black tracking-wide">{t('stay.title')}</h1>
      </div>
      
      {/* コンテンツエリア - 全体画面で中央配置 */}
      <div className="w-full flex flex-col items-center justify-center pt-48">

      {/* KINOMA 詳細セクション */}
        <div className="w-full mx-auto px-8 py-8">
          {/* KINOMAタイトルとテキスト情報 */}
          <div className="text-center mb-6">
                         <h3 className="text-3xl font-light mb-8 text-black">{t('stay.kinoma.title')}</h3>
             <p className="text-base text-black mb-3">{t('stay.kinoma.description')}</p>
             <p className="text-base text-black mb-3">{t('stay.kinoma.description.jp')}</p>
             <p className="text-base text-black mb-6">{t('stay.price')}</p>
             <p className="text-base text-black">
               <a 
                 href="https://www.tablecheck.com/ja/koki/reserve/message" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="underline hover:no-underline transition-all duration-200"
               >
                 {t('stay.reservation')}
               </a>
             </p>
          </div>
          
          {/* KINOMA画像 - 2枚を縦に配置 */}
          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-3xl">
              <div className="aspect-[4/3] overflow-hidden shadow-lg relative">
                <Image
                  src="/kinoma.JPG"
                  alt="KINOMA Room - Traditional Japanese Style"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full max-w-3xl">
              <div className="aspect-[4/3] overflow-hidden shadow-lg relative">
                <Image
                  src="/konoma_2.jpg"
                  alt="KINOMA Room - Interior View"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      {/* IRORI 詳細セクション */}
        <div className="w-full mx-auto px-8 py-4">
          {/* IROIタイトルとテキスト情報 */}
          <div className="text-center mb-6">
                         <h3 className="text-3xl font-light mb-8 text-black">{t('stay.irori.title')}</h3>
             <p className="text-base text-black mb-3">{t('stay.irori.description')}</p>
             <p className="text-base text-black mb-3">{t('stay.irori.description.jp')}</p>
             <p className="text-base text-black mb-6">{t('stay.price')}</p>
             <p className="text-base text-black">
               <a 
                 href="https://www.tablecheck.com/ja/koki/reserve/message" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="underline hover:no-underline transition-all duration-200"
               >
                 {t('stay.reservation')}
               </a>
             </p>
          </div>
          
          {/* IRORI画像 - 2枚を縦に配置 */}
          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-3xl">
              <div className="aspect-[4/3] overflow-hidden shadow-lg relative">
                <Image
                  src="/irori.JPG"
                  alt="IRORI Room - Traditional Japanese Style"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full max-w-3xl">
              <div className="aspect-[4/3] overflow-hidden shadow-lg relative">
                <Image
                  src="/irori_2.jpg"
                  alt="IRORI Room - Hearth Area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
}
