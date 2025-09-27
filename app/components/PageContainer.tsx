"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  const pathname = usePathname();

  const className = "flex-1 min-h-0";

  return <main className={className}>{children}</main>;
}
