import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DJ Packages & Services | Professional DJ Hire",
  description: "Professional DJ hire packages for weddings, corporate events & parties. Equipment packages from £500-£650, plus Magic Mirror, uplighting & combo deals. Experienced DJs across London, Essex & South East UK.",
  keywords: [
    "DJ hire London",
    "DJ hire Essex",
    "wedding DJ packages",
    "DJ equipment hire",
    "Magic Mirror hire",
    "uplighting hire",
    "party DJ packages",
    "corporate DJ hire",
    "sound system hire London",
    "DJ booth hire",
  ],
  openGraph: {
    title: "DJ Packages & Services | MMS Events",
    description: "Professional DJ hire packages for weddings, corporate events & parties. Equipment packages from £500-£650, plus Magic Mirror, uplighting & combo deals.",
    url: "https://mmsdjs.com/djs",
  },
  alternates: {
    canonical: "https://mmsdjs.com/djs",
  },
};

export default function DJsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
