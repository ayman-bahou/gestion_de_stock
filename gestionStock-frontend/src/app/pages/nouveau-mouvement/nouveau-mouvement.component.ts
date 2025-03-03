import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-nouveau-mouvement',
  imports: [],
  template: '',
  styleUrl: './nouveau-mouvement.component.css',
})
export class NouveauMouvementComponent {
  apiService = inject(ApiService);
  type = signal<string>('');
  quantite = signal<number>(0);
  id = '';
  date = '';

  onSubmit() {
    this.apiService.addMvt({
      id: this.id,
      type: this.type(),
      quantite: this.quantite(),
      date: this.date,
    });
  }
}
