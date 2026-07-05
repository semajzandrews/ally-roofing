import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const panchang = localFont({
  src: [
    { path: "../../public/fonts/Panchang-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Panchang-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Panchang-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Panchang-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-panchang",
  display: "swap",
});

const supreme = localFont({
  src: [
    { path: "../../public/fonts/Supreme-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Supreme-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Supreme-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-supreme",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ally-roofing.vercel.app"),
  title: "Ally Roofing & Leak Repair Of Bloomfield · Bloomfield, NJ",
  description:
    "Leak repair, roof replacement, inspections, storm damage and gutters in Bloomfield, NJ. Open daily 8–8. Call (862) 263-2675.",
  openGraph: {
    title: "Ally Roofing & Leak Repair — The storm ends at your roofline.",
    description:
      "Leak repair, roof replacement, inspections, storm damage and gutters in Bloomfield, NJ. Call (862) 263-2675.",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1116",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${panchang.variable} ${supreme.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
