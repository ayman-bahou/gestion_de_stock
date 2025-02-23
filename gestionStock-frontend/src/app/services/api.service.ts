import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Produit } from '../model/produit.model';

@Injectable({ providedIn: 'root' })
export class ProduitService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/produit';

  async getProduits() : Promise<Produit[]> {
    return lastValueFrom(this.http.get<Produit[]>(this.apiUrl+"/get/all"));
  }

  async deleteProduit(id : number) : Promise<void> {
    await lastValueFrom(this.http.delete<void>(`${this.apiUrl}/delete/${id}`));

  }
  async updateProduit(id : number, newProduit : Produit) : Promise<void>{
    await lastValueFrom(this.http.put<void>(`${this.apiUrl}/update/${id}`,newProduit))
  }
  
}