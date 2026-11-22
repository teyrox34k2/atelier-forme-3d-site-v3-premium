// Catalogue de démonstration. Remplacez ces exemples par vos produits validés.
// L'adaptateur d'un catalogue externe sera ajouté une fois le fournisseur choisi.
export type Product = {
  slug: string; name: string; category: string; priceLabel: string;
  description: string; formats: string[]; level: string; accent: string;
  status: "demo" | "published"; checkoutUrl?: string; imageLabel: string;
};
export const products: Product[] = [
  {slug:"starter-pack-volume-01",name:"3D Starter Pack — Volume 01",category:"Bibliothèques",priceLabel:"À définir",description:"Une première collection de modèles simples pour découvrir les bases de la conception 3D.",formats:["SLDPRT","STL","PDF"],level:"Débutant",accent:"blue",status:"demo",imageLabel:"Collection de formes"},
  {slug:"support-telephone",name:"Support de téléphone",category:"Objets pratiques",priceLabel:"À définir",description:"Un modèle de support de téléphone à étudier, personnaliser et préparer pour l'impression 3D.",formats:["SLDPRT","STL"],level:"Facile",accent:"sage",status:"demo",imageLabel:"Support de téléphone"},
  {slug:"organiseur-bureau",name:"Organiseur de bureau",category:"Objets pratiques",priceLabel:"À définir",description:"Un objet de rangement à concevoir autour de volumes simples et de dimensions utiles.",formats:["SLDPRT","STL"],level:"Intermédiaire",accent:"lavender",status:"demo",imageLabel:"Organiseur"},
  {slug:"guide-premiers-pas",name:"Guide — Premiers pas en 3D",category:"Guides",priceLabel:"À définir",description:"Un guide pédagogique pour comprendre les étapes d'un projet de modélisation.",formats:["PDF"],level:"Débutant",accent:"sand",status:"demo",imageLabel:"Guide pédagogique"}
];
export function getProduct(slug: string) { return products.find(p => p.slug === slug); }
