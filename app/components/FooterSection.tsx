"use client";

import { usePathname } from "next/navigation";
import SectionBar from "./SectionBar";

export default function FooterSection() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";
  const isReservation = pathname === "/reservation";
  const isStay = pathname === "/stay";

  // TOPページ、aboutページ、contactページの場合は何も表示しない
  if (isHome || isAbout || isContact) {
    return null;
  }

  return (
    <>
      <div className="block md:hidden" style={{ marginTop: 0 }}>
        <SectionBar variant="mobile-large" />
      </div>
      {!isReservation && (
        <div className={`hidden md:block ${isStay ? 'mt-2' : 'mt-10'}`}>
          <SectionBar variant={isStay ? "centered" : "more-left"} />
        </div>
      )}
    </>
  );
}
