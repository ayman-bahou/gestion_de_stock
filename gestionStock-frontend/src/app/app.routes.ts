import { Routes } from '@angular/router';
import { ListeProduitsComponent } from './pages/liste-produits/liste-produits.component';
import { NouveauProduitComponent } from './pages/nouveau-produit/nouveau-produit.component';
import { NouveauMouvementComponent } from './pages/nouveau-mouvement/nouveau-mouvement.component';
import { ModifierproduitComponent } from './pages/modifierproduit/modifierproduit.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListeProduitsComponent,
  },
  {
    path: 'nouveauproduit',
    component: NouveauProduitComponent,
  },
  {
    path: 'nouveaumouvement',
    component: NouveauMouvementComponent,
  },
  {
    path: 'modifier/:id',
    component: ModifierproduitComponent,
  },
];
