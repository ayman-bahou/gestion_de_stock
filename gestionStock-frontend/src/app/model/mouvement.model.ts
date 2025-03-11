import { Produit } from './produit.model';

export interface Mouvement {
  id: string;
  produit: Produit;
  type: string;
  date : string;
  quantite: number;
}
