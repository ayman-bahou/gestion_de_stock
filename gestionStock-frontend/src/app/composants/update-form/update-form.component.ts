import {
  Component,
  inject,
  input,
  linkedSignal,
  output,
  signal,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Produit } from '../../model/produit.model';
@Component({
  selector: 'app-update-form',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css',
})
export class UpdateFormComponent {
  title = input<string>('');
  produit = input<Produit>();

  nom = linkedSignal(() => this.produit()?.nom ?? '');
  prixVente = linkedSignal(() => this.produit()?.prixVente ?? '');
  prixAchat = linkedSignal(() => this.produit()?.prixAchat ?? '');

  stock = linkedSignal(() => this.produit()?.stock ?? '');

  save = output<Produit>();

  onSubmit() {
    this.save.emit({
      id: this.produit()?.id ?? '',
      nom: this.nom(),
      prixVente: Number(this.prixVente()),
      prixAchat: Number(this.prixAchat()),
      stock: Number(this.stock()),
    });
  }
}
