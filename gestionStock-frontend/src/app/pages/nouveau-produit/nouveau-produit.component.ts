import { Component, inject } from '@angular/core';
import { UpdateFormComponent } from '../../composants/update-form/update-form.component';
import { Produit } from '../../model/produit.model';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-produit',
  imports: [UpdateFormComponent],
  template:
    '<app-update-form title="Nouveau Produit" (save)=ajouterProduit($event)/>',
  styleUrl: './nouveau-produit.component.css',
})
export class NouveauProduitComponent {
  router = inject(Router);

  apiService = inject(ApiService);
  ajouterProduit(newProduit: Produit) {
    this.apiService.addProduit(newProduit);
    this.router.navigate(['/']);
  }
}
