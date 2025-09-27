"use client";

import { useEffect } from "react";
import Link from "next/link";
import SectionBar from "../components/SectionBar";

export default function Reservation() {
  // ページ読み込み時に最上部へスクロール
  useEffect(() => {
    // 即座に実行
    window.scrollTo(0, 0);
    // 少し遅延して再実行（確実性のため）
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {/* モバイル版（スクショ準拠） */}
      <div className="block 2xl:hidden pt-10">

      {/* 左上ロゴは共通コンポーネントで固定表示されるため削除 */}

        {/* 本文 */}
        <section className="w-full">
          <div className="w-full max-w-[640px] mx-auto px-10 pb-6">
            {/* RESERVATION */}
            <h2 className="pt-2 text-[18px] tracking-wide font-medium underline underline-offset-[6px] decoration-gray-500">RESERVATION</h2>
            <div className="mt-8 space-y-4 text-[14px]">
              <div>
                <p className="mb-1">お電話でのご予約</p>
                <a href="tel:0554522781" >0554-52-2781</a>
              </div>
              <div>
                <a
                  href="https://www.tablecheck.com/ja/shops/koki/reserve?fbclid=PARlRTSAMyJAtleHRuA2FlbQIxMQABp-AmKhUpCPKtRZyduRntuUCn-tBNhQTTz53HNAcEdG8zr7iuStEJ-3E3OBou_aem_Cwsx_39V0CAJwx-WIB_AYg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TableCheckでのご予約
                </a>
            <p className="text-[10px] mt-6">
              ご宿泊をご希望のお客様は、5日までにご予約くださいますようお願い申し上げます。
            </p>
            <p className="text-[11px] mt-1">
              お食事のみをご希望のお客様は、3日までにご予約をお願いいたします。
            </p>
              </div>
            </div>

            <div className="w-16 h-px bg-gray-400 my-9" />

            <div className="text-[14px] space-y-2">
              <div>
                <p className="mb-1">定休日</p>
                <p>日曜日 / 月曜日</p>
              </div>
              <div>
                <p>ディナー 19:00〜 / 朝食 9:00 〜</p>
                <p>チェックイン 15:00〜 / チェックアウト 〜11:00</p>
              </div>
            </div>

            <div className="w-16 h-px bg-gray-400 my-9" />

            <div className="text-[14px] space-y-2">
              <p className="mb-1">キャンセル料</p>
              <p>5日前〜 ご予約料金の50%</p>
              <p>3日前（72時間前）〜 ご予約料金の100%</p>
            </div>

            {/* DINNER */}
            <div className="mt-12">
              <h3 className="text-[18px] tracking-wide font-medium">DINNER</h3>
              <p className="text-[12px]">お食事のみのプラン</p>

              <div className="mt-6">
                <h4 className="text-[16px] font-medium mb-2">Course</h4>
                <div className="border-b border-gray-300">
                </div>
                <ul className="text-[14px]">
                  <li className="flex items-center justify-between py-6 border-b border-gray-300">
                    <span>Tasting Course</span>
                    <span className="tracking-wide">¥19,800/名</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>Tasting Course <br></br> -Alchol Pairing</span>
                    <span className="tracking-wide">¥33,000/名</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>Tasting Course <br></br>-Non Alchol Pairing</span>
                    <span className="tracking-wide">¥30,800/名</span>
                  </li>
                </ul>
                <p className="text-[12px] mt-3">※ 価格表記は全て税込価格、サービス料は別になります。</p>
              </div>
            </div>

            {/* DINNER & STAY */}
            <div>
              <h3 className="text-[18px] tracking-wide font-medium pt-16">DINNER & STAY</h3>
              <p className="text-[12px] mt-1">お食事＋ご宿泊のプラン</p>

              {/* KONOMA */}
              <div className="mt-8">
                <h4 className="text-[16px] tracking-wide">KONOMA</h4>
                <div className="border-b border-gray-300">
                  <p className="text-[10px] mb-3 whitespace-nowrap">ワンルームの広々としたお部屋（1〜3名）</p>
                </div>
                <ul className="text-[14px]">
                <li className="flex items-center justify-between py-6 border-b border-gray-300">
                    <span>Tasting Course</span>
                    <span className="tracking-wide">¥19,800/名</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>Tasting Course <br></br>-Alchol Pairing</span>
                    <span className="tracking-wide">¥52,800/名</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>Tasting Course <br></br>-Non Alchol Pairing</span>
                    <span className="tracking-wide">¥50,600/名</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>朝食（オプション）</span>
                    <span className="tracking-wide">¥3,300/名</span>
                  </li>
                </ul>
                <p className="text-[11.5px] mt-3">※ 3名宿泊の場合は、お部屋のご料金を¥55,000（税込）にて<br></br>ご案内させて頂きます。</p>
              </div>

              {/* IRORI */}
              <div className="mt-10">
                <h4 className="text-[16px] tracking-wide">IRORI</h4>
                <div className="border-b border-gray-300">
                  <p className="text-[10px] mb-3 whitespace-nowrap">囲炉裏、ウッドデッキ付きのお部屋（1〜2名）</p>
                </div>
                <ul className="text-[14px]">
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>Tasting Course</span>
                    <span className="tracking-wide">¥44,000/名</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>Tasting Course <br></br>-Alchol Pairing</span>
                    <span className="tracking-wide">¥57,200/名</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>Tasting Course <br></br>-Non Alchol Pairing</span>
                    <span className="tracking-wide">¥55,000/名</span>
                  </li>
                  <li className="flex items-center justify-between py-4 border-b border-gray-300">
                    <span>朝食（オプション）</span>
                    <span className="tracking-wide">¥3,300/名</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 text-center">
                <Link href="/stay" className="text-[13px] underline underline-offset-[6px]">お部屋の詳細はこちら</Link>
              </div>
            </div>

            {/* モバイルのコピーライトは SectionBar に任せるため、ここでは表示しない */}
          </div>
        </section>
        
        {/* モバイル版でのコンテンツ下部スペース */}
        <div className="mb-4"></div>
      </div>

      {/* タブレット/PC版（従来レイアウト） */}
      <div className="hidden 2xl:block -mt-20">
        <section className="w-full text-black">
          {/* 左上ロゴは共通コンポーネントで固定表示されるため削除 */}

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-14 xl:gap-18">
              {/* 左カラム：左レール見出し（DINNER）＋ コンテンツ */}
              <div className="w-full" style={{ marginLeft: '-80px' }}>
                <div className="flex items-start gap-2">
                  <div className="w-[200px] shrink-0 text-left leading-tight">
                    <h2 className="text-[28px] tracking-wide">DINNER</h2>
                    <p className="text-[14px] text-black mt-1">お食事のみのプラン</p>
                  </div>
                  <div className="flex-1 text-[16px] space-x-30">
                    <h3 className="text-[20px] font-light mb-2">Course</h3>
                    <div className="border-b border-gray-400 mb-6 overflow-x-auto">
                    </div>
                    <div className="space-y-7">
                      <div className="border-b border-gray-400 pb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[16px]">Tasting Course</span>
                          <span className="text-[16px] tracking-wide">¥19,800/名</span>
                        </div>
                      </div>
                      <div className="border-b border-gray-400 pb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[16px]">Tasting Course<br className="hidden md:block" />-Alcohol Pairing</span>
                          <span className="text-[16px] tracking-wide">¥33,000/名</span>
                        </div>
                      </div>
                      <div className="border-b border-gray-400 pb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[16px]">Tasting Course<br className="hidden md:block" />-Non Alcohol Pairing</span>
                          <span className="text-[16px] tracking-wide">¥30,800/名</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[14px] md:text-[14px] text-black mt-4">※ 価格表記は全て税込価格、サービス料は別になります。</p>

                    <h2 className="text-[24px] tracking-wide mt-20 mb-2 inline-block border-b border-gray-500 pb-2">RESERVATION</h2>
                    <div className="space-y-6">
                      <div className="mt-4">
                        <p>お電話でのご予約</p>
                        <p>
                          <a href="tel:0554522781" className="hover:no-underline">0554-52-2781</a>
                        </p>
                      </div>
                      <div>
                        <p>
                          <a
                            href="https://www.tablecheck.com/ja/shops/koki/reserve?fbclid=PARlRTSAMyJAtleHRuA2FlbQIxMQABp-AmKhUpCPKtRZyduRntuUCn-tBNhQTTz53HNAcEdG8zr7iuStEJ-3E3OBou_aem_Cwsx_39V0CAJwx-WIB_AYg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:no-underline"
                          >
                            TableCheckでのご予約
                          </a>
                        </p>
                    <p className="text-[12px] leading-relaxed whitespace-nowrap mt-4">
                      ご宿泊をご希望のお客様は、5日までにご予約くださいますようお願い申し上げます。
                    </p>
                    <p className="text-[12px] leading-relaxed mb-8 whitespace-nowrap">
                      お食事のみをご希望のお客様は、3日までにご予約をお願いいたします。
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
              <div className="w-full">
                <div className="flex items-start gap-18">
                  <div className="w-[200px] shrink-0 text-left leading-tight">
                    <h2 className="text-[28px] tracking-wide whitespace-nowrap">DINNER＆STAY</h2>
                    <p className="text-[14px] text-black mt-1">お食事+ご宿泊のプラン</p>
                  </div>
                  <div className="flex-1 text-[16px]">
                    <h3 className="text-[20px] tracking-wide mb-2">KONOMA</h3>
                    <div className="border-b border-gray-400 mb-6 overflow-x-auto">
                      <p className="text-[15px] text-black mb-2 whitespace-nowrap">ワンルームの広々としたお部屋（1〜3名）</p>
                    </div>
                    <div className="space-y-7">
                      <div className="border-b border-gray-400 pb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[16px]">Tasting Course</span>
                          <span className="text-[16px] tracking-wide">¥39,600/名</span>
                        </div>
                      </div>
                      <div className="border-b border-gray-400 pb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[16px]">Tasting Course<br className="hidden md:block" />-Alcohol Pairing</span>
                          <span className="text-[16px] tracking-wide">¥57,200/名</span>
                        </div>
                      </div>
                      <div className="border-b border-gray-400 pb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[16px]">Tasting Course<br className="hidden md:block" />-Non Alcohol Pairing</span>
                          <span className="text-[16px] tracking-wide">¥55,000/名</span>
                        </div>
                      </div>
                      <div className="border-b border-gray-400 pb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[16px]">朝食（オプション）</span>
                          <span className="text-[16px] tracking-wide">¥3,300/名</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[14px] md:text-[14px] text-black mt-4">※ 3名宿泊の場合は、お部屋のご料金を¥55,000（税込）にてご案内させて頂きます。</p>

                    <h3 className="text-[20px] tracking-wide mt-20 mb-2">IRORI</h3>
                    <div className="border-b border-gray-400 mb-6 overflow-x-auto">
                      <p className="text-[15px] text-black mb-2 whitespace-nowrap">囲炉裏、ウッドデッキ付きのお部屋（1〜2名）</p>
                    </div>
                    <div className="space-y-7">
                      <div className="border-b border-gray-400 pb-6">
                        <div className="flex items-baseline justify-between">
                          <span className="text-[16px]">Tasting Course<br className="hidden md:block" />-Alcohol Pairing</span>
                          <span className="text-[16px] tracking-wide">¥57,200/名</span>
                        </div>
                      </div>
                      <div className="border-b border-gray-400 pb-6">
                        <div className="flex items-baseline justify-between">
                          <span className="text-[16px]">Tasting Course<br className="hidden md:block" />-Non Alcohol Pairing</span>
                          <span className="text-[16px] tracking-wide">¥55,000/名</span>
                        </div>
                      </div>
                      <div className="border-b border-gray-400 pb-6">
                        <div className="flex items-baseline justify-between">
                          <span className="text-[16px]">朝食（オプション）</span>
                          <span className="text-[16px] tracking-wide">¥3,300/名</span>
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

      {/* フッターは共通レイアウトで表示 */}
    </div>
  );
}
