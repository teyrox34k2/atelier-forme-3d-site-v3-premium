
import Link from "next/link";
import { Box, ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav">
        <Link href="/" className="brand">
          <span className="brand-mark">
            <Box size={23} />
          </span>
          <span>
            FORMA
            <small>IMAGINEZ • CONCEVEZ • CRÉEZ</small>
          </span>
        </Link>

        <nav>
          <Link href="/">Accueil</Link>
          <Link href="/boutique">Boutique</Link>
          <Link href="/apprendre">Apprendre</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/faq">FAQ</Link>
        </nav>

        <Link className="nav-cta" href="/boutique">
          Découvrir la boutique <ArrowUpRight size={16} />
        </Link>

        <details className="mobile-menu">
          <summary>Menu</summary>
          <div>
            <Link href="/">Accueil</Link>
            <Link href="/boutique">Boutique</Link>
            <Link href="/apprendre">Apprendre</Link>
            <Link href="/a-propos">À propos</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Link href="/" className="brand">
            <span className="brand-mark"><Box size={22} /></span>
            <span>
              FORMA
              <small>IMAGINEZ • CONCEVEZ • CRÉEZ</small>
            </span>
          </Link>
          <p>Donnez forme à vos idées.</p>
        </div>

        <div>
          <b>Découvrir</b>
          <Link href="/boutique">Boutique</Link>
          <Link href="/apprendre">Apprendre</Link>
          <Link href="/a-propos">À propos</Link>
        </div>

        <div>
          <b>Informations</b>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <div className="shell footer-bottom">
        © {new Date().getFullYear()} FORMA. Tous droits réservés.
      </div>
    </footer>
  );
}
