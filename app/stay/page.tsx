"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "../contexts/LocaleContext";
import { useState, useEffect } from "react";
import SectionBar from "../components/SectionBar";

export default function Stay() {
  const { t, locale } = useLocale();
  const konomaImages = ["/konoma_1.jpg", "/konoma_2.jpg"];
  const [konomaIndex, setKonomaIndex] = useState(0);
  const iroriImages = ["/irori_1.jpg", "/irori_2.jpg"];
  const [iroriIndex, setIroriIndex] = useState(0);

  // Auto slide KONOMA
  useEffect(() => {
    const id = setInterval(() => {
      setKonomaIndex((prev) => (prev + 1) % konomaImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [konomaImages.length]);

  // Auto slide IRORI
  useEffect(() => {
    const id = setInterval(() => {
      setIroriIndex((prev) => (prev + 1) % iroriImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [iroriImages.length]);

  return (
    <div className="font-sans min-h-screen relative flex flex-col">
      {/* KOKIロゴ - 左上（PC/Tabletのみ画像ロゴ） */}
      <div className="absolute top-16 left-16 lg:left-20 z-10 hidden md:block">
        <Link href="/" className="transition-transform hover:scale-105">
          <Image
            src="/koki_vert_white_logo.png"
            alt="KOKI"
            width={120}
            height={160}
            priority
            className="filter invert"
          />
        </Link>
      </div>

      {/* モバイル用ロゴ画像 */}
      <div className="block md:hidden w-full max-w-[640px] mx-auto px-5 mt-8 pb-4">
        <Link href="/" className="transition-transform hover:scale-105 inline-block">
          <Image
            src="/koki_vert_white_logo.png"
            alt="KOKI"
            width={80}
            height={54}
            priority
            className="filter invert"
          />
        </Link>
      </div>
      
      {/* コンテンツエリア - 全体画面で中央配置 */}
      <div className="w-full flex flex-col items-center justify-center pt-6 md:pt-48 flex-1">

      {/* KINOMA 詳細セクション */}
        <div className="w-full mx-auto">
          {/* KINOMAタイトルとテキスト情報 */}
          <div className="text-center mb-3">
                        <h3 className="text-xl font-light mb-2 text-black">{t('stay.kinoma.title')}</h3>
            <p className="text-light text-black text-xs md:text-sm">{t('stay.kinoma.concept.jp')}</p>
            <p className="text-light text-black mb-3 text-xs md:text-sm">{t('stay.kinoma.description.jp')}</p>
          </div>
          
          {/* KINOMA画像 - フェード切替（ドット付き） */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-5xl md:max-w-6xl px-8 md:px-6">
              <div className="relative aspect-[16/9] md:aspect-[16/9] overflow-hidden shadow-lg">
                {konomaImages.map((src, idx) => (
                  <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-700 ${idx === konomaIndex ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <Image src={src} alt={`KINOMA ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
                {/* dots inside slider */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {konomaImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setKonomaIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`w-[4px] h-[4px] rounded-full transition-colors ${i === konomaIndex ? 'bg-white' : 'bg-gray-400/70'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* IRORI 詳細セクション */}
        <div className="w-full mx-auto mt-20">
          {/* IROIタイトルとテキスト情報 */}
          <div className="text-center mb-3">
          <h3 className="text-xl font-light mb-2 text-black">{t('stay.irori.title')}</h3>
                        <p className="text-light text-black text-xs md:text-sm">{t('stay.irori.concept.jp')}</p>
            <p className="text-light text-black mb-3 text-xs md:text-sm">{t('stay.irori.description.jp')}</p>
          </div>
          
          {/* IRORI画像 - フェード切替（ドット付き） */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-5xl md:max-w-6xl px-8 md:px-6">
              <div className="relative aspect-[16/9] md:aspect-[16/9] overflow-hidden shadow-lg">
                {iroriImages.map((src, idx) => (
                  <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-700 ${idx === iroriIndex ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <Image src={src} alt={`IRORI ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
                {/* dots inside slider */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {iroriImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIroriIndex(i)}
                      aria-label={`Go to IRORI slide ${i + 1}`}
                      className={`w-[4px] h-[4px] rounded-full transition-colors ${i === iroriIndex ? 'bg-white' : 'bg-gray-400/70'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ご利用案内セクション */}
        <div className="w-full mx-auto px-8 py-12 md:py-80">
          <div className="w-full max-w-5xl md:max-w-6xl mx-auto text-black">
            {/* チェックイン・アウト */}
            {/* Mobile: 2つのラベルを横並びで、各自の下にのみ下線 */}
            <div className="block md:hidden mb-6 text-xs px-4">
              <div className="flex items-baseline justify-between flex-nowrap w-full gap-6">
                <span className="inline-block border-b border-gray-400 pb-1 whitespace-nowrap">チェックイン 15:00〜</span>
                <span className="inline-block border-b border-gray-400 pb-1 whitespace-nowrap">チェックアウト 〜11:00</span>
              </div>
            </div>
            {/* Desktop: 2つの項目を中央に配置 */}
            <div className="hidden md:flex md:items-center md:justify-center md:gap-40 mb-20 text-lg">
              <div className="inline-block border-b border-gray-400 pb-1">チェックイン 15:00〜</div>
              <div className="inline-block border-b border-gray-400 pb-1">チェックアウト 〜11:00</div>
            </div>
            <hr className="border-gray-300 my-10 hidden md:block" />

            <hr className="border-gray-300 my-8 mt-16" />
            {/* 設備・アメニティ */}
            <div className="grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr] gap-x-4 md:gap-x-10 gap-y-6 py-8 text-sm md:text-lg items-center">
              <div className="font-medium whitespace-nowrap">設備・アメニティ</div>
              <div>
                <p className="whitespace-pre-wrap leading-relaxed text-xs md:text-base">
                  ドライヤー / ソープ類(シャンプー・リンス・ボディソープ) /<br />
                  タオル類（フェイスタオル・バスタオル） / ボディタオル / 歯ブラシ /<br />
                  メンズ用髭剃り / コーム / ティッシュケース / ハンガー /<br />
                  スリッパ / 冷蔵庫 / Wi‑Fi 完備
                </p>
              </div>
            </div>
            <hr className="border-gray-300 my-8" />

            {/* 注意事項 */}
            <div className="grid grid-cols-[110px_1fr] md:grid-cols-[160px_1fr] gap-x-4 md:gap-x-10 gap-y-6 py-8 text-sm md:text-lg items-center">
              <div className="font-medium">注意事項</div>
              <div className="space-y-3 text-xs md:text-base">
                <p>・ご滞在中は終日禁煙とさせていただいております。（電子タバコ含む） </p>
                <p>ご不便をおかけいたしますが、喫煙エリアをご利用ください。</p>
                <p>・自然の静けさとともに、夜の穏やかな時間をどうぞお楽しみください。</p>
                <p>23時以降はお静かにお願いいたします。</p>
                <p>・客室内での飲酒は、適量をお守りください。</p>
                <p>万一、客室内での飲酒により客室内の汚損が発生した場合、修繕費用をご請求させていただくことがあります。</p>
              </div>
            </div>
            <hr className="border-gray-300 my-8" />

            {/* キャンセル料 */}
            <div className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-x-6 md:gap-x-10 gap-y-6 py-8 text-sm md:text-lg items-center">
              <div className="font-medium">キャンセル料</div>
              <div className="space-y-1 text-xs md:text-base">
                <p>5日前〜 ご予約料金の50%</p>
                <p>3日前（72時間前）〜 ご予約料金の100%</p>
              </div>
            </div>
            <hr className="border-gray-300 my-8" />
          </div>
        </div>

            {/* FLOOR GUIDE */}
            <div className="text-center mb-10">
              <h3 className="text-3xl font-light text-black">FLOOR GUIDE</h3>
            </div>
            <div className="flex items-center justify-center mb-10">
              <div className="w-full max-w-5xl md:max-w-6xl">
                <Image
                  src="/koki_map.png"
                  alt="Floor Guide"
                  width={1600}
                  height={1000}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            <hr className="border-gray-300 my-10" />

      </div>
      {/* セクションバー: モバイルはコンパクト版、PCは従来 */}
      <div className="block md:hidden">
        <SectionBar variant="mobile-large" />
      </div>
      <div className="hidden md:block">
        <SectionBar variant="more-left" />
      </div>
    </div>
  );
}
