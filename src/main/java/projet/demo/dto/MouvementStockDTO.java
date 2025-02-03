package projet.demo.dto;

import java.time.LocalDateTime;

import projet.demo.enums.TypeMouvement;

public record MouvementStockDTO(
    int id,
    TypeMouvement type,
    int quantite,
    LocalDateTime date,
    ProduitDTO produit
){}

