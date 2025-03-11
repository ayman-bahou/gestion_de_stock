import { Component, inject, input, resource } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-consulter-mouvement',
  imports: [CommonModule],
  templateUrl: './consulter-mouvement.component.html',
  styleUrl: './consulter-mouvement.component.css'
})
export class ConsulterMouvementComponent {
  apiservice = inject(ApiService)
  id=input.required<string>()
  MvtRessource = resource({ loader: () => this.apiservice.getMvt(this.id()) });
  
}
