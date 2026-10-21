import type { Metadata } from "next";
import type { ReactNode } from "react";

import "kanx-workflow/styles.css";
import "./globals.css";
import "./system-3d/system-3d.css";

export const metadata: Metadata = {
  title: "GEO Architecture Atlas",
  description: "GEO Agentic System 技术架构图集与交互式阅读器",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
