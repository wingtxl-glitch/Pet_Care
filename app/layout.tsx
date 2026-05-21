import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "毛茸茸宠物洗护",
  description: "温柔、干净、可预约的社区宠物护理空间",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
