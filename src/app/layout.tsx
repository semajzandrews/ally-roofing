import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const zodiak = localFont({
  src: [
    { path: "../../public/fonts/Zodiak-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Zodiak-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/Zodiak-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-zodiak",
  display: "swap",
});

const general = localFont({
  src: [
    { path: "../../public/fonts/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-general",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ally-roofing.vercel.app"),
  title: "Ally Roofing & Leak Repair Of Bloomfield | Bloomfield, NJ",
  description:
    "Leak repair, roof replacement, inspections, storm damage and gutters in Bloomfield, NJ. 4.2 stars on Google. Call (862) 263-2675.",
  openGraph: {
    title: "Ally Roofing & Leak Repair Of Bloomfield",
    description:
      "Leak repair, roof replacement, inspections, storm damage and gutters in Bloomfield, NJ. Call (862) 263-2675.",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#181c20",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${zodiak.variable} ${general.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
