import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get In Touch | Contact Us",
  description: "Get in touch with MMS Events for professional DJs, live bands, photo booths, and event entertainment across London, Essex & South East UK. We'll get back to you within 24 hours.",
  openGraph: {
    title: "Get In Touch | MMS Events",
    description: "Get in touch with MMS Events for professional DJs, live bands, photo booths, and event entertainment across London, Essex & South East UK.",
    url: "https://mmsdjs.com/contact",
  },
  alternates: {
    canonical: "https://mmsdjs.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
