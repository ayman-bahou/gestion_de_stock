import { Component, inject, input, resource } from '@angular/core';
import { UpdateFormComponent } from '../../composants/update-form/update-form.component';
import { ProduitService } from '../../services/api.service';
import { Produit } from '../../model/produit.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifierproduit',
  imports: [UpdateFormComponent],
  template: '<app-update-form title="Modifier Produit" [produit]="produitRessource.value()" (save)=updateProduit($event) />',
  styleUrl: './modifierproduit.component.css',
})
export class ModifierproduitComponent {
  id = input.required<string>();
  apiservice = inject(ProduitService);
  router = inject(Router)

  produitRessource = resource({
    request: this.id,
    loader: ({ request: id }) => this.apiservice.getProduitByid(id),
  });

  updateProduit(newProduit : Produit){
    this.apiservice.updateProduit(this.id(),newProduit)
    this.router.navigate(['/'])
  }
}
