import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Outfit, // <--- NEW FONT (Replaces Cormorant)
  Pinyon_Script,
  Manrope,
  Monsieur_La_Doulaise,
  Aguafina_Script,
  Ballet,
  Mea_Culpa,
  Fleur_De_Leah,
  Lovers_Quarrel,
  Italianno
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/app/components/ui/SmoothScroll";

// 1. BRAND FONTS
// "Outfit" is excellent for modern tech headings
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["400", "500", "600", "700", "800"] });
const pinyon = Pinyon_Script({ subsets: ["latin"], variable: "--font-pinyon", weight: "400" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", weight: ["300", "400", "500", "600", "700"] });

// 2. ANIMATION FONTS
const monsieur = Monsieur_La_Doulaise({ subsets: ["latin"], variable: "--font-monsieur", weight: "400" });
const aguafina = Aguafina_Script({ subsets: ["latin"], variable: "--font-aguafina", weight: "400" });
const ballet = Ballet({ subsets: ["latin"], variable: "--font-ballet", weight: "400" });
const meaCulpa = Mea_Culpa({ subsets: ["latin"], variable: "--font-mea", weight: "400" });
const fleur = Fleur_De_Leah({ subsets: ["latin"], variable: "--font-fleur", weight: "400" });
const lovers = Lovers_Quarrel({ subsets: ["latin"], variable: "--font-lovers", weight: "400" });
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
        // Inject the new Outfit variable
        outfit.variable, pinyon.variable, manrope.variable,
        monsieur.variable, aguafina.variable, ballet.variable,
        meaCulpa.variable, fleur.variable, lovers.variable, italianno.variable,
        "font-sans min-h-screen antialiased selection:bg-rose-500/30 selection:text-rose-200 overflow-x-hidden"
      )}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}