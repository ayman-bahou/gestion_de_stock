import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Produit } from '../model/produit.model';
import { Mouvement } from '../model/mouvement.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private apiUrlProduit = 'http://localhost:8080/produit';
  private apiUrlMvt = 'http://localhost:8080/produit';

  async getProduits(): Promise<Produit[]> {
    return lastValueFrom(
      this.http.get<Produit[]>(this.apiUrlProduit + '/get/all')
    );
  }

  async getProduitByid(id: string): Promise<Produit> {
    return lastValueFrom(
      this.http.get<Produit>(this.apiUrlProduit + `/get/${id}`)
    );
  }

  async deleteProduit(id: string): Promise<void> {
    await lastValueFrom(
      this.http.delete<void>(`${this.apiUrlProduit}/delete/${id}`)
    );
  }
  async updateProduit(id: string, newProduit: Produit): Promise<void> {
    await lastValueFrom(
      this.http.put<void>(`${this.apiUrlProduit}/update/${id}`, newProduit)
    );
  }

  async addProduit(newProduit: Produit): Promise<void> {
    await lastValueFrom(
      this.http.post<void>(`${this.apiUrlProduit}/create`, newProduit)
    );
  }

  async addMvt(newMvt: Mouvement) {
    await lastValueFrom(
      this.http.post<void>(`${this.apiUrlMvt}/create`, newMvt)
    );
  }
}
