package projet.demo.entites;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import projet.demo.enums.TypeMouvement;

@Entity
@Table(name="MOUVEMENT_STOCK")
public class MouvementStock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int quantite;
    
    @Column(name = "DATE_MVT", insertable = false, updatable = false)
    private LocalDateTime date;
    
    @Enumerated(EnumType.STRING)
    @Column(name="TYPE_MVT")
    private TypeMouvement type;
    @ManyToOne
    @JoinColumn(name="PRODUIT_ID")
    private Produit produit;

    public MouvementStock() {
    }

    public MouvementStock(int id, int quantite, LocalDateTime date, TypeMouvement type, Produit produit) {
        this.id = id;
        this.quantite = quantite;
        this.date = date;
        this.type = type;
        this.produit = produit;
    }

    public int getId() {
        return this.id;
    }

    public int getQuantite() {
        return this.quantite;
    }

    public LocalDateTime getDate() {
        return this.date;
    }

    public TypeMouvement getType() {
        return this.type;
    }

    public Produit getProduit() {
        return this.produit;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public void setType(TypeMouvement type) {
        this.type = type;
    }

    public void setProduit(Produit produit) {
        this.produit = produit;
    }
}