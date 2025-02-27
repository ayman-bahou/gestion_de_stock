import { Component, inject, input, linkedSignal, output, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../../services/api.service';
import { Produit } from '../../model/produit.model';
@Component({
  selector: 'app-update-form',
  imports: [FormsModule,MatInputModule,MatFormFieldModule,MatButtonModule,RouterLink],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent {
  apiService = inject(ProduitService)
  title = input<string>("")
  produit = input<Produit>()

  nom = linkedSignal(() => this.produit()?.nom ?? '');
  prixVente = linkedSignal(() => this.produit()?.prixVente ?? '');
  stock = linkedSignal(() => this.produit()?.stock ?? '');

  save = output<Produit>()

  onSubmit(){
    this.save.emit({
      id : this.produit()?.id ?? '',
      nom : this.nom(),
      prixVente : Number(this.prixVente()),
      stock : Number(this.stock())
    })

  }
}
