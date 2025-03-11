import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nouveau-mouvement',
  standalone: true,
  imports: [MatButtonModule,MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule],
  template: `<form class="container" (ngSubmit)="onSubmit()">
  <h2>Nouveau Mouvement</h2>
  <div class="fields">
  <mat-form-field appearance="fill">
      <mat-label>Produit id</mat-label>
      <input matInput [(ngModel)]="produit_id" name="Produit id" type="number" required />
    </mat-form-field>
    <mat-form-field appearance="fill">
      <mat-label>Type</mat-label>
      <mat-select [(ngModel)]="type" name="type" required>
        <mat-option value="ENTREE">ENTREE</mat-option>
        <mat-option value="SORTIE">SORTIE</mat-option>
      </mat-select>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Quantité</mat-label>
      <input matInput [(ngModel)]="quantite" name="quantite" type="number" required />
    </mat-form-field>
  </div>

  <div class="actions">
    <button mat-flat-button type="submit">Add mouvement</button>
    <button type="button" mat-raised-button routerLink="/">Cancel</button>
  </div>
</form>`,
})
export class NouveauMouvementComponent {
  apiService = inject(ApiService);
  router = inject(Router)
  type = signal<string>('');
  produit_id = signal<string>(''); 
  quantite = signal<number>(0); 

  onSubmit() {
    this.apiService.addMvt({
      id : '',
      type: this.type(),
      quantite: this.quantite(),
      produit : {
        id : this.produit_id()
      },
    });
    this.router.navigate(["/"]);
  }
}
