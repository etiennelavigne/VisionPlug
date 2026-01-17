import type { Metadata } from "next";
import { Geist, Geist_Mono, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const handwritten = Mrs_Saint_Delafield({
  weight: "400",
  variable: "--font-handwritten",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vision Portfolio",
  description: "Cinematic Video & Photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${handwritten.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
