import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import ThemeSwitch from "@/components/ThemeSwitch";


export const metadata: Metadata = {
  title: "kathe-dev",
  description: "Hi! I'm Katherine, a  web developer, with a degree in Computer  Science. I am interested in UX/UI design, art, and video games.",
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
