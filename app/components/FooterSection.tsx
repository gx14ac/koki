"use client";

import { usePathname } from "next/navigation";
import SectionBar from "./SectionBar";

export default function FooterSection() {
  const pathname = usePathname();
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";
  const isReservation = pathname === "/reservation";
  const isStay = pathname === "/stay";

  // aboutページとcontactページの場合は何も表示しない（page.tsxで直接SectionBarを表示）
  if (isAbout || isContact) {
    return null;
  }

  return (
    <>
      <div className="block md:hidden" style={{ marginTop: 0 }}>
        <SectionBar variant="mobile-large" />
      </div>
      <div className={`hidden md:block ${(isReservation || isStay) ? 'mt-2' : 'mt-10'}`}>
        <SectionBar variant={(isReservation || isStay) ? "centered" : "more-left"} />
      </div>
    </>
  );
}
