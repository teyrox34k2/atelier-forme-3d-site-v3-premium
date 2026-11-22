# Atelier Forme 3D

Site vitrine et boutique numérique en cours de préparation.

## Démarrage

Prérequis : Node.js 20 ou version compatible avec Next.js 15.

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Modifier le catalogue de démonstration

Les produits sont définis dans `lib/catalog.ts`. Modifiez les noms, descriptions, catégories, formats et visuels d'accent. Les produits sont explicitement en statut `demo` et aucun achat n'est activé.

## Catalogue externe et paiements

Le fournisseur n'a pas encore été choisi. Avant toute vente :
1. Choisir une plateforme qui gère les produits numériques, les paiements et les téléchargements.
2. Vérifier ses conditions, frais, pays acceptés et exigences de compte.
3. Créer un adaptateur dans `lib/catalog/` qui implémente le contrat `ProductProvider`.
4. Connecter les liens de paiement hébergés ou l'API officielle du prestataire.
5. Si des webhooks sont nécessaires, vérifier leurs signatures côté serveur.
6. Tester le parcours complet en environnement sandbox.

Ne jamais ajouter de clés secrètes dans le navigateur ou dans un dépôt public. Ne jamais activer un bouton d'achat tant que le paiement et la livraison ne sont pas réellement configurés.

## État actuel

- Pages et navigation : première version.
- Catalogue : données de démonstration locales.
- Fiches produits : première version.
- Paiement : non connecté.
- Livraison automatique : non connectée.
- Formulaire de contact : maquette désactivée.
- Pages légales : à compléter et faire vérifier avant publication.

## Personnalisation

Les couleurs et composants sont centralisés dans `app/globals.css` et `components/`.


## Animations et interactions

La direction visuelle conserve le fond ivoire et les couleurs pastel. Les interactions incluent des effets de profondeur, rotations douces des éléments 3D au survol, élévation des cartes, reflets animés et transitions. Les animations respectent `prefers-reduced-motion` et sont atténuées sur les appareils tactiles.


## Version 3 — direction premium

- Fond ivoire/beige plus chaleureux et légèrement plus soutenu.
- Animations d'apparition au défilement sur les sections, cartes, fiches et FAQ.
- Interactions au survol : liens soulignés, boutons avec reflet, cartes avec profondeur, visuels 3D.
- Transitions de focus et interactions tactiles adaptées.
- Respect de `prefers-reduced-motion` pour limiter les animations si l'utilisateur le demande.
- Pages existantes : Accueil, Boutique, fiches produit, À propos, Apprendre, FAQ et Contact.

Le catalogue et les moyens de paiement restent en démonstration : aucun achat réel n'est activé.
