import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import ThemeSwitch from "@/components/ThemeSwitch";


export const metadata: Metadata = {
  title: "kathe-dev",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className="overflow-x-hidden"
      >
        <Providers >
        {children}
        </Providers>
      </body>
    </html>
  );
}
