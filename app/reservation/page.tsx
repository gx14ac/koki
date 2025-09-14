"use client";

import Image from "next/image";
import Link from "next/link";
import SectionBar from "../components/SectionBar";

export default function Reservation() {
  return (
    <div className="font-sans min-h-screen relative flex flex-col text-black">
      {/* モバイル版（スクショ準拠） */}
      <div className="block md:hidden">
        {/* ヘッダー（左: KOKI テキスト） */}
        <div className="w-full max-w-[640px] mx-auto px-5 pt-10 pb-6">
          <Link href="/" className="text-2xl tracking-wide">KOKI</Link>
        </div>

        {/* 本文 */}
        <section className="w-full">
          <div className="w-full max-w-[640px] mx-auto px-5 pb-20">
            {/* RESERVATION */}
            <h2 className="pt-10 text-[18px] tracking-wide font-medium underline underline-offset-[6px] decoration-gray-500">RESERVATION</h2>
            <div className="mt-8 space-y-7 text-[14px]">
              <div>
                <p className="mb-1">お電話でのご予約</p>
                <a href="tel:0554522781" className="underline">0554-52-2781</a>
              </div>
              <div>
                <a
                  href="https://www.tablecheck.com/ja/shops/koki/reserve?fbclid=PARlRTSAMyJAtleHRuA2FlbQIxMQABp-AmKhUpCPKtRZyduRntuUCn-tBNhQTTz53HNAcEdG8zr7iuStEJ-3E3OBou_aem_Cwsx_39V0CAJwx-WIB_AYg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  TableCheckでのご予約
                </a>
              </div>
            </div>

            <div className="h-px bg-gray-300 my-9" />

            <div className="text-[14px] space-y-2">
              <div>
                <p className="mb-1">定休日</p>
                <p>日曜日 / 月曜日</p>
              </div>
              <div>
                <p>ディナー 19:00〜</p>
                <p>チェックイン 15:00〜 / チェックアウト 〜11:00</p>
              </div>
            </div>

            <div className="h-px bg-gray-300 my-9" />

            <div className="text-[14px] space-y-2">
              <p className="mb-1">キャンセル料</p>
              <p>5日前〜 ご予約料金の50%</p>
              <p>3日前（72時間前）〜 ご予約料金の100%</p>
            </div>

            {/* DINNER */}
            <div className="mt-12">
              <h3 className="text-[18px] tracking-wide font-medium">DINNER</h3>
              <p className="text-[12px] mt-1">お食事のみのプラン</p>

              <div className="mt-6">
                <h4 className="text-[16px] font-medium mb-2">Course</h4>
                <div className="border-b border-gray-300 mb-4">
                  <p className="text-[14px] leading-relaxed mb-3 whitespace-nowrap">野菜や果実、山々に自生する野草を13品程のコース料理に</p>
                </div>
                <ul className="text-[14px]">
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>Tasting Course</span>
                    <span className="tracking-wide">¥19,800/名</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>Tasting Course -Alchol Pairing</span>
                    <span className="tracking-wide">¥33,000/名</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>Tasting Course -Non Alchol Pairing</span>
                    <span className="tracking-wide">¥30,800/名</span>
                  </li>
                </ul>
                <p className="text-[12px] mt-3">※ 価格表記は全て税込価格、サービス料は別になります。</p>
              </div>
            </div>

            {/* DINNER & STAY */}
            <div className="mt-12">
              <h3 className="text-[18px] tracking-wide font-medium">DINNER & STAY</h3>
              <p className="text-[12px] mt-1">お食事＋ご宿泊のプラン</p>

              {/* KONOMA */}
              <div className="mt-8">
                <h4 className="text-[16px] tracking-wide mb-2">KONOMA</h4>
                <div className="border-b border-gray-300 mb-4">
                  <p className="text-[14px] mb-3 whitespace-nowrap">ワンルームの広々としたお部屋（1〜3名）</p>
                </div>
                <ul className="text-[14px]">
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>Tasting Course</span>
                    <span className="tracking-wide">¥39,600/名</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>Tasting Course -Alchol Pairing</span>
                    <span className="tracking-wide">¥52,800/名</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>Tasting Course -Non Alchol Pairing</span>
                    <span className="tracking-wide">¥50,600/名</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>朝食（オプション）</span>
                    <span className="tracking-wide">¥3,300/名</span>
                  </li>
                </ul>
                <p className="text-[12px] mt-3">※ 3名宿泊の場合は、お部屋のご料金を¥55,000（税込）にてご案内させて頂きます。</p>
              </div>

              {/* IRORI */}
              <div className="mt-10">
                <h4 className="text-[16px] tracking-wide mb-2">IRORI</h4>
                <div className="border-b border-gray-300 mb-4">
                  <p className="text-[14px] mb-3 whitespace-nowrap">囲炉裏、ウッドデッキ付きのお部屋（1〜2名）</p>
                </div>
                <ul className="text-[14px]">
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>Tasting Course</span>
                    <span className="tracking-wide">¥44,000/名</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>Tasting Course -Alchol Pairing</span>
                    <span className="tracking-wide">¥57,200/名</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>Tasting Course -Non Alchol Pairing</span>
                    <span className="tracking-wide">¥55,000/名</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>朝食（オプション）</span>
                    <span className="tracking-wide">¥3,300/名</span>
                  </li>
                </ul>
              </div>

              <div className="mt-16 text-center">
                <Link href="/stay" className="text-[13px] underline">お部屋の詳細はこちら</Link>
              </div>
            </div>

            {/* モバイルのコピーライトは SectionBar に任せるため、ここでは表示しない */}
          </div>
        </section>
      </div>

      {/* タブレット/PC版（従来レイアウト） */}
      <div className="hidden md:block">
        <section className="w-full text-black pt-32 md:pt-36 flex-1">
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

          <div className="max-w-[1600px] mx-auto pr-6 md:pr-10 pl-0 md:pl-1 lg:pl-2 pb-10 md:pb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 lg:gap-48 xl:gap-64 -ml-2 lg:-ml-26">
              {/* 左カラム：左レール見出し（DINNER）＋ コンテンツ */}
              <div>
                <div className="flex items-start gap-8">
                  <div className="w-[200px] shrink-0 text-left leading-tight">
                    <h2 className="text-[32px] tracking-wide">DINNER</h2>
                    <p className="text-[15px] text-black mt-1">お食事のみのプラン</p>
                  </div>
                  <div className="flex-1 text-[17px]">
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

              {/* 右カラム：DINNER＆STAY＋コンテンツ */}
              <div>
                <div className="flex items-start gap-16 md:gap-20 lg:gap-24">
                  <div className="w-[200px] shrink-0 text-left leading-tight">
                    <h2 className="text-[32px] tracking-wide whitespace-nowrap">DINNER＆STAY</h2>
                    <p className="text-[15px] text-black mt-1">お食事+ご宿泊のプラン</p>
                  </div>
                  <div className="flex-1 text-[17px]">
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
      </div>

      {/* モバイルは大きめのセクションバー、PCは従来 */}
      <div className="block md:hidden">
        <SectionBar variant="mobile-large" />
      </div>
      <div className="hidden md:block">
        <SectionBar variant="more-left" />
      </div>
    </div>
  );
}
