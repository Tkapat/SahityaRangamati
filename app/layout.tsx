import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansBengali = Noto_Sans_Bengali({ 
  subsets: ["bengali"],
  variable: "--font-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sahitya Rangamati - সাহিত্য রাঙামাটি",
  description: "A literary magazine celebrating Bengali literature and culture",
  keywords: "Bengali literature, magazine, Sahitya Rangamati, সাহিত্য রাঙামাটি",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansBengali.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
