import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import classNames from "classnames";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roshita Seelam | Portfolio",
  description: "Data analyst / Business analyst Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames("relative", inter.className)}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
