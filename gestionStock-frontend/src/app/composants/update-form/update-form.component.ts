import { Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../../services/api.service';
@Component({
  selector: 'app-update-form',
  imports: [FormsModule,MatInputModule,MatFormFieldModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent {
  apiService = inject(ProduitService)
  nom = signal<string>("")
}
