import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Event, Your Way | Entertainment Services",
  description: "From casino nights and live bands to photo booths and Father Christmas - we craft bespoke entertainment experiences. With 30+ years in the industry, tell us your vision and we'll make it happen.",
  keywords: [
    "event entertainment London",
    "casino night hire",
    "live band hire",
    "photo booth hire",
    "wedding entertainment",
    "corporate event entertainment",
    "Father Christmas hire",
    "karaoke hire",
    "oompah band hire",
    "event lighting hire",
    "folk band hire",
    "wedding singer hire",
  ],
  openGraph: {
    title: "Your Event, Your Way | MMS Events",
    description: "From casino nights and live bands to photo booths and Father Christmas - we craft bespoke entertainment experiences. With 30+ years in the industry, tell us your vision and we'll make it happen.",
    url: "https://mmsdjs.com/services",
  },
  alternates: {
    canonical: "https://mmsdjs.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
