package projet.demo.entites;

import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
@Table(name="PRODUIT")
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @Column(unique=true)
    private String nom;
    private double prixAchat;
    private double prixVente;
    private int stock;

    public Produit() {
    }

    public Produit(int id, String nom, double prixAchat, double prixVente, int stock) {
        this.id = id;
        this.nom = nom;
        this.prixAchat = prixAchat;
        this.prixVente = prixVente;
        this.stock = stock;
    }

    public int getId() {
        return this.id;
    }

    public String getNom() {
        return this.nom;
    }

    public double getPrixAchat() {
        return this.prixAchat;
    }

    public double getPrixVente() {
        return this.prixVente;
    }

    public int getStock() {
        return this.stock;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setPrixAchat(double prixAchat) {
        this.prixAchat = prixAchat;
    }

    public void setPrixVente(double prixVente) {
        this.prixVente = prixVente;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }
}
