import type { Metadata } from "next";
import { Geist_Mono, Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MMS Events | DJs, Weddings & Unforgettable Experiences",
  description: "Professional DJ services and event entertainment for weddings, parties, and corporate events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-background" style={{ backgroundColor: '#1a1625' }}>
      <body
        className={`${inter.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased bg-background`}
        style={{ backgroundColor: '#1a1625' }}
      >
        {children}
      </body>
    </html>
  );
}
