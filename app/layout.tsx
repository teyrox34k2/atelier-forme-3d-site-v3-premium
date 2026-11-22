import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/site";
import { MotionLayer } from "@/components/motion-layer";
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: "Atelier Forme 3D — Imaginez. Concevez. Créez.",
  description: "Des ressources numériques pour apprendre la conception 3D et découvrir SolidWorks.",
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="fr"><body><MotionLayer /><Header />{children}<Footer /><Analytics /></body></html>;
}
