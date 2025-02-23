import { Component, computed, inject, resource, signal } from '@angular/core';
import { ProduitService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Produit } from '../../model/produit.model';

@Component({
  selector: 'app-liste-produits',
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './liste-produits.component.html',
  styleUrl: './liste-produits.component.css',
})
export class ListeProduitsComponent {
  apiService = inject(ProduitService);
  produitsRessource = resource({ loader: () => this.apiService.getProduits() });
  deleting = signal(false);

  loading = computed(
    () => this.deleting() || this.produitsRessource.isLoading()
  );

  async deleteProduit(id: number): Promise<void> {
    await this.apiService.deleteProduit(id);
    this.produitsRessource.reload();
  }
  async updateProduit(id: number, newProduit : Produit): Promise<void> {
    await this.apiService.updateProduit(id,newProduit);
    this.produitsRessource.reload();
  }

}
