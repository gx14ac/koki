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
  const iroriImages = ["/irori.JPG", "/irori_2.jpg"];
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
      {/* KOKIロゴ - 左上に配置 */}
      <div className="absolute top-12 left-16 lg:left-20 z-10">
        <Link href="/" className="transition-transform hover:scale-105">
          <Image
            src="/koki_logo_basic_white.png"
            alt="KOKI"
            width={120}
            height={160}
            priority
            className="filter invert"
          />
        </Link>
      </div>
      
      {/* コンテンツエリア - 全体画面で中央配置 */}
      <div className="w-full flex flex-col items-center justify-center pt-30 flex-1">

      {/* KINOMA 詳細セクション */}
        <div className="w-full mx-auto px-8 py-8">
          {/* KINOMAタイトルとテキスト情報 */}
          <div className="text-center mb-6">
                        <h3 className="text-3xl font-light mb-8 text-black">{t('stay.kinoma.title')}</h3>
            <p className="text-base text-black">{t('stay.kinoma.concept.jp')}</p>
            <p className="text-base text-black mb-3">{t('stay.kinoma.description.jp')}</p>
          </div>
          
          {/* KINOMA画像 - フェード切替（ドット付き） */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-5xl md:max-w-6xl">
              <div className="relative aspect-[16/9] overflow-hidden shadow-lg">
                {konomaImages.map((src, idx) => (
                  <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-700 ${idx === konomaIndex ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <Image src={src} alt={`KINOMA ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
                {/* dots inside slider */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {konomaImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setKonomaIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`w-[6px] h-[6px] rounded-full transition-colors ${i === konomaIndex ? 'bg-white' : 'bg-gray-400/70'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* IRORI 詳細セクション */}
        <div className="w-full mx-auto px-8 py-4">
          {/* IROIタイトルとテキスト情報 */}
          <div className="text-center mb-6">
                        <h3 className="text-3xl font-light mb-8 text-black">{t('stay.irori.title')}</h3>
            <p className="text-base text-black">{t('stay.irori.concept.jp')}</p>
            <p className="text-base text-black mb-3">{t('stay.irori.description.jp')}</p>
          </div>
          
          {/* IRORI画像 - フェード切替（ドット付き） */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-5xl md:max-w-6xl">
              <div className="relative aspect-[16/9] overflow-hidden shadow-lg">
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
                      className={`w-[6px] h-[6px] rounded-full transition-colors ${i === iroriIndex ? 'bg-white' : 'bg-gray-400/70'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ご利用案内セクション */}
        <div className="w-full mx-auto px-8 py-80">
          <div className="w-full max-w-5xl md:max-w-6xl mx-auto text-black">
            {/* チェックイン・アウト */}
            <div className="flex items-center justify-center gap-40 mb-20 text-base md:text-lg">
              <div className="inline-block border-b border-gray-400 pb-1">チェックイン 15:00〜</div>
              <div className="inline-block border-b border-gray-400 pb-1">チェックアウト 〜11:00</div>
            </div>
            <hr className="border-gray-300 my-10" />

            {/* 設備・アメニティ */}
            <div className="grid grid-cols-[160px_1fr] gap-x-10 gap-y-6 py-8 text-base md:text-lg">
              <div className="font-medium whitespace-nowrap">設備・アメニティ</div>
              <div className="overflow-x-auto">
                <p className="whitespace-nowrap">
                  ドライヤー / ソープ類(シャンプー・リンス・ボディソープ) / タオル類 (フェイスタオル・バスタオル) / ボディタオル / 歯ブラシ / メンズ用髭剃り / コーム / ティッシュケース / ハンガー / スリッパ / 冷蔵庫 / Wi‑Fi 完備
                </p>
              </div>
            </div>
            <hr className="border-gray-300 my-8" />

            {/* 注意事項 */}
            <div className="grid grid-cols-[160px_1fr] gap-x-10 gap-y-6 py-8 text-base md:text-lg items-center">
              <div className="font-medium">注意事項</div>
              <div className="space-y-3">
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
            <div className="grid grid-cols-[160px_1fr] gap-x-10 gap-y-6 py-8 text-base md:text-lg items-center">
              <div className="font-medium">キャンセル料</div>
              <div className="space-y-1">
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
      <SectionBar variant="more-left" />
    </div>
  );
}
