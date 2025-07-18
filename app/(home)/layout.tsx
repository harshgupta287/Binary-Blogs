import "../globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/home/header/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BinaryBlogs",
  description: "Learn, Build, Share.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <div className={inter.className}>
        <Navbar />
        {children}
      </div>
    </ClerkProvider>
  );
}
