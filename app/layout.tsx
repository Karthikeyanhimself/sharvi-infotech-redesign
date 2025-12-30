import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

// UPDATED METADATA
export const metadata: Metadata = {
  title: "Sharvi Infotech | Global SAP Services & Digital Transformation",
  description: "Accelerating SAP S/4HANA transformation with over 17 years of industry expertise. Specializing in Automotive, Manufacturing, and Mining sectors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        spaceGrotesk.variable,
        jetbrainsMono.variable,
        "bg-slate-950 text-slate-100 min-h-screen antialiased selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden"
      )}>
        {/* Noise overlay */}
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        {children}
      </body>
    </html>
  );
}