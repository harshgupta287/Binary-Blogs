import "../globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/home/header/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ByteCode",
  description: "Learn, Build, Share.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
