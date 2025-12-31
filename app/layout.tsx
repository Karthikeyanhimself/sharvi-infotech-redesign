import type { Metadata } from "next";
import {
  Outfit,
  Italianno
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/app/components/ui/SmoothScroll";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["400", "500", "600", "700", "800"] });
const italianno = Italianno({ subsets: ["latin"], variable: "--font-italianno", weight: "400" });

export const metadata: Metadata = {
  title: "Sharvi Infotech | Global SAP Services",
  description: "Accelerating SAP S/4HANA transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        outfit.variable, italianno.variable,
        "font-sans min-h-screen antialiased selection:bg-rose-500/30 selection:text-rose-200 overflow-x-hidden"
      )}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}