import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, DM_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { MobileGate } from "@/components/layout/MobileGate";
import { GridOverlay } from "@/components/layout/GridOverlay";
import { CustomCursor } from "@/components/cursor/CustomCursor";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rutuja Kalane — Portfolio",
  description:
    "Rutuja Kalane — Designer & developer crafting thoughtful digital experiences.",
  keywords: ["portfolio", "design", "development", "Rutuja Kalane"],
  authors: [{ name: "Rutuja Kalane" }],
  creator: "Rutuja Kalane",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rutuja Kalane — Portfolio",
    description:
      "Rutuja Kalane — Designer & developer crafting thoughtful digital experiences.",
    siteName: "Rutuja Kalane",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rutuja Kalane — Portfolio",
    description:
      "Rutuja Kalane — Designer & developer crafting thoughtful digital experiences.",
    creator: "@rutujakalane",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <MobileGate />
        <div className="desktop-only">
          <LenisProvider>
            <CustomCursor />
            {children}
          </LenisProvider>
        </div>
      </body>
    </html>
  );
}