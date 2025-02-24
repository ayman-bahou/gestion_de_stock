import { Component, computed, inject, resource, signal } from '@angular/core';
import { ProduitService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Produit } from '../../model/produit.model';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';@Component({
  selector: 'app-liste-produits',
  imports: [CommonModule, MatProgressSpinnerModule,RouterLink,MatButtonModule,MatIconModule],
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

  async deleteProduit(id: string): Promise<void> {
    await this.apiService.deleteProduit(id);
    this.produitsRessource.reload();
  }
  async updateProduit(id: string, newProduit : Produit): Promise<void> {
    await this.apiService.updateProduit(id,newProduit);
    this.produitsRessource.reload();
  }

}
