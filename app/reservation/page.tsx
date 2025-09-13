"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "../contexts/LocaleContext";
import SectionBar from "../components/SectionBar";

export default function Reservation() {
  const { t, locale } = useLocale();

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
      
      {/* 料金・プランセクション（画像のレイアウトを再現） */}
      <section className="w-full text-black pt-32 md:pt-36 flex-1">
        <div className="max-w-[1600px] mx-auto pr-6 md:pr-10 pl-0 md:pl-1 lg:pl-2 pb-10 md:pb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 lg:gap-48 xl:gap-64 -ml-2 lg:-ml-26">
            {/* 左カラム：左レール見出し（DINNER）＋ コンテンツ */}
            <div>
              <div className="flex items-start gap-8">
                {/* 左レール（セクション見出し） */}
                <div className="w-[200px] shrink-0 text-left leading-tight">
                  <h2 className="text-[32px] tracking-wide">DINNER</h2>
                  <p className="text-[15px] text-black mt-1">お食事のみのプラン</p>
                </div>
                {/* コンテンツ（Course と説明を左レールと同じ高さで開始） */}
                <div className="flex-1 text-[17px]">
                  {/* Course */}
                  <h3 className="text-[22px] font-light mb-1">Course</h3>
                  <div className="border-b border-gray-400 mb-6 overflow-x-auto">
                      <p className="text-[16px] text-black leading-relaxed mb-2 whitespace-nowrap">野菜や果実、山々に自生する野草を13品程のコース料理に</p>
                  </div>
                  <div className="space-y-7">
                    <div className="border-b border-gray-400 pb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[17px]">Tasting Course</span>
                        <span className="text-[17px] tracking-wide">¥19,800/名</span>
                      </div>
                    </div>
                    <div className="border-b border-gray-400 pb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[17px]">Tasting Course<br className="hidden md:block" />-Alcohol Pairing</span>
                        <span className="text-[17px] tracking-wide">¥33,000/名</span>
                      </div>
                    </div>
                    <div className="border-b border-gray-400 pb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[17px]">Tasting Course<br className="hidden md:block" />-Non Alcohol Pairing</span>
                        <span className="text-[17px] tracking-wide">¥30,800/名</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[14px] md:text-[15px] text-black mt-4">※ 価格表記は全て税込価格、サービス料は別になります。</p>

                  {/* RESERVATION */}
                  <h2 className="text-[26px] tracking-wide mt-24 mb-10 inline-block border-b border-gray-500 pb-2">RESERVATION</h2>
                  <div className="space-y-6">
                    <div>
                      <p>お電話でのご予約</p>
                      <p>
                        <a href="tel:0554522781" className="underline hover:no-underline">0554-52-2781</a>
                      </p>
                    </div>
                    <div>
                      <p>
                        <a
                          href="https://www.tablecheck.com/ja/shops/koki/reserve?fbclid=PARlRTSAMyJAtleHRuA2FlbQIxMQABp-AmKhUpCPKtRZyduRntuUCn-tBNhQTTz53HNAcEdG8zr7iuStEJ-3E3OBou_aem_Cwsx_39V0CAJwx-WIB_AYg"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:no-underline"
                        >
                          TableCheckでのご予約
                        </a>
                      </p>
                      <div className="w-10 h-px bg-gray-500 my-8" />
                    </div>
                    <div className="space-y-">
                      <p>定休日</p>
                      <p>日曜日 / 月曜日</p>
                    </div>
                    <div className="space-y-1">
                      <p>ディナー 19:00〜</p>
                      <p>チェックイン 15:00〜 / チェックアウト 〜11:00</p>
                    </div>
                    <div className="space-y-1">
                      <div className="w-10 h-px bg-gray-500 my-8" />
                      <p>キャンセル料</p>
                      <p>5日前〜ご予約料金の50%</p>
                      <p>3日前（72時間前）〜ご予約料金の100%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右カラム：左レール見出し（DINNER ＆ STAY）＋ コンテンツ */}
            <div>
              <div className="flex items-start gap-16 md:gap-20 lg:gap-24">
                {/* 左レール（セクション見出し） */}
                <div className="w-[200px] shrink-0 text-left leading-tight">
                  <h2 className="text-[32px] tracking-wide whitespace-nowrap">DINNER＆STAY</h2>
                  <p className="text-[15px] text-black mt-1">お食事+ご宿泊のプラン</p>
                </div>
                {/* コンテンツ */}
                <div className="flex-1 text-[17px]">
                  {/* KONOMA */}
                  <h3 className="text-[22px] tracking-wide mb-2">KONOMA</h3>
                  <div className="border-b border-gray-400 mb-6 overflow-x-auto">
                    <p className="text-[16px] text-black mb-2 whitespace-nowrap">ワンルームの広々としたお部屋（1〜3名）</p>
                  </div>
                  <div className="space-y-7">
                    <div className="border-b border-gray-400 pb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[17px]">Tasting Course</span>
                        <span className="text-[17px] tracking-wide">¥39,600/名</span>
                      </div>
                    </div>
                    <div className="border-b border-gray-400 pb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[17px]">Tasting Course<br className="hidden md:block" />-Alcohol Pairing</span>
                        <span className="text-[17px] tracking-wide">¥57,200/名</span>
                      </div>
                    </div>
                    <div className="border-b border-gray-400 pb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[17px]">Tasting Course<br className="hidden md:block" />-Non Alcohol Pairing</span>
                        <span className="text-[17px] tracking-wide">¥55,000/名</span>
                      </div>
                    </div>
                    <div className="border-b border-gray-400 pb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[17px]">朝食（オプション）</span>
                        <span className="text-[17px] tracking-wide">¥3,300/名</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[14px] md:text-[15px] text-black mt-4">※ 3名宿泊の場合は、お部屋のご料金を¥55,000（税込）にてご案内させて頂きます。</p>

                  {/* IRORI */}
                  <h3 className="text-[22px] tracking-wide mt-8 mb-2">IRORI</h3>
                  <div className="border-b border-gray-400 mb-6 overflow-x-auto">
                    <p className="text-[16px] text-black mb-2 whitespace-nowrap">囲炉裏、ウッドデッキ付きのお部屋（1〜2名）</p>
                  </div>
                  <div className="space-y-7">
                    <div className="border-b border-gray-400 pb-6">
                      <div className="flex items-baseline justify-between">
                        <span className="text-[17px]">Tasting Course<br className="hidden md:block" />-Alcohol Pairing</span>
                        <span className="text-[17px] tracking-wide">¥57,200/名</span>
                      </div>
                    </div>
                    <div className="border-b border-gray-400 pb-6">
                      <div className="flex items-baseline justify-between">
                        <span className="text-[17px]">Tasting Course<br className="hidden md:block" />-Non Alcohol Pairing</span>
                        <span className="text-[17px] tracking-wide">¥55,000/名</span>
                      </div>
                    </div>
                    <div className="border-b border-gray-400 pb-6">
                      <div className="flex items-baseline justify-between">
                        <span className="text-[17px]">朝食（オプション）</span>
                        <span className="text-[17px] tracking-wide">¥3,300/名</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link href="/stay" className="text-[15px] underline hover:no-underline">お部屋の詳細はこちら</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionBar variant="more-left" />
      </div>
  );
}
