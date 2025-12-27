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
  metadataBase: new URL('https://mmsdjs.com'),
  title: {
    default: "MMS Events | Professional DJs & Bands for Weddings & Events in London, Essex & South East UK",
    template: "%s | MMS Events"
  },
  description: "Professional DJ hire, live bands, photo booths & event entertainment for weddings, corporate events & parties across London, Essex & South East UK. 30 years experience. Get a free quote today.",
  keywords: [
    "wedding DJ London",
    "wedding DJ Essex",
    "DJ hire London",
    "DJ hire Essex",
    "wedding band London",
    "wedding band Essex",
    "event DJ South East UK",
    "wedding entertainment UK",
    "corporate DJ London",
    "party DJ Essex",
    "photo booth hire London",
    "event lighting Essex",
    "live band hire UK",
    "wedding disco London",
    "professional DJ services"
  ],
  authors: [{ name: "MMS Events" }],
  creator: "MMS Events",
  publisher: "MMS Events",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://mmsdjs.com",
    siteName: "MMS Events",
    title: "MMS Events | Professional DJs & Bands for Weddings & Events",
    description: "Professional DJ hire, live bands & event entertainment for weddings, corporate events & parties across London, Essex & South East UK. 30 years experience.",
    images: [
      {
        url: "/media/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MMS Events - Professional DJs & Bands for Weddings & Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MMS Events | Professional DJs & Bands for Weddings & Events",
    description: "Professional DJ hire, live bands & event entertainment for weddings, corporate events & parties across London, Essex & South East UK.",
    images: ["/media/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mmsdjs.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#FF1493",
      },
    ],
  },
  manifest: "/site.webmanifest",
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
