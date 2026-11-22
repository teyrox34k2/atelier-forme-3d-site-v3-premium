
import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/site";
import { MotionLayer } from "@/components/motion-layer";

export const metadata: Metadata = {
  title: {
    default: "FORMA — Imaginez. Concevez. Créez.",
    template: "%s | FORMA",
  },
  description:
    "FORMA : découvrez nos créations, ressources et outils de conception 3D.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <MotionLayer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
