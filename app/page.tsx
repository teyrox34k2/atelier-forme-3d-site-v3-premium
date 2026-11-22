import Link from "next/link";
import { ArrowUpRight, Box, Cuboid, GraduationCap, Sparkles } from "lucide-react";
import { products } from "@/lib/catalog";
import { ProductCard } from "@/components/product-card";
export default function Home() {
  return <>
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={15}/> LA CONCEPTION 3D, PLUS ACCESSIBLE</span>
          <h1>Imaginez.<br/><em>Concevez.</em><br/>Donnez forme à vos idées.</h1>
          <p className="lead">Des modèles 3D, fichiers STL et ressources pédagogiques pour progresser à votre rythme.</p>
          <div className="actions"><Link className="button primary" href="/boutique">Découvrir la boutique <ArrowUpRight size={17}/></Link><Link className="button secondary" href="/a-propos">Découvrir l'atelier</Link></div>
          <div className="hero-note"><span className="dot"/> Des ressources pensées pour les curieux et les débutants</div>
        </div>
        <div className="hero-art" aria-label="Illustration abstraite de formes géométriques 3D">
          <div className="orb orb-one"/><div className="orb orb-two"/><div className="cube"><div className="cube-face front">3D</div><div className="cube-face side"/><div className="cube-face top"/></div>
          <div className="art-label"><Cuboid size={17}/> Atelier de création</div>
        </div>
      </section>
      <section className="trust-strip"><div className="shell trust-inner"><span><Box/> Fichiers numériques</span><span><GraduationCap/> Pensé pour apprendre</span><span><Sparkles/> Créations originales</span></div></section>
      <section className="section shell">
        <div className="section-heading"><div><span className="eyebrow">À DÉCOUVRIR</span><h2>La sélection de l'atelier</h2><p>Des ressources pour passer de l'idée au modèle 3D.</p></div><Link className="text-link" href="/boutique">Toute la boutique <ArrowUpRight size={16}/></Link></div>
        <div className="product-grid">{products.slice(0,3).map(p=><ProductCard key={p.slug} product={p}/>)}</div>
      </section>
      <section className="feature-band"><div className="shell feature-content"><div><span className="eyebrow">APPRENDRE EN FAISANT</span><h2>Chaque modèle est une occasion de progresser.</h2><p>Explorez les formes, comprenez les fonctions de conception et découvrez comment préparer vos créations pour l'impression 3D.</p><Link className="button primary" href="/apprendre">Explorer les ressources <ArrowUpRight size={17}/></Link></div><div className="feature-visual"><div className="ring"/><div className="mini-cube">AF3D</div><span>CRÉER • TESTER • APPRENDRE</span></div></div></section>
      <section className="section shell cta"><span className="eyebrow">BIENVENUE À L'ATELIER</span><h2>Une idée en tête ?<br/><em>Commençons à la concevoir.</em></h2><Link className="button primary" href="/boutique">Voir les créations <ArrowUpRight size={17}/></Link></section>
    </main>
  </>;
}
