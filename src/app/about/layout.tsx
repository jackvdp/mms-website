import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Simone | MMS Events",
  description: "Meet Simone, founder of MMS Events. With over 30 years in the entertainment industry, Simone offers a personal service to help you create the perfect event — from DJs and live bands to full event production.",
  openGraph: {
    title: "About Simone | MMS Events",
    description: "Meet Simone, founder of MMS Events. With over 30 years in the entertainment industry, Simone offers a personal service to help you create the perfect event.",
    url: "https://mmsdjs.com/about",
  },
  alternates: {
    canonical: "https://mmsdjs.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
