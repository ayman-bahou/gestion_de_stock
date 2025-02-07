package projet.demo.mapper;

import java.util.function.Function;

import org.springframework.stereotype.Component;

import projet.demo.dto.ProduitDTO;
import projet.demo.entites.Produit;

@Component
public class ProduitDTOMapper implements Function<Produit,ProduitDTO>{
    @Override
    public ProduitDTO apply(Produit produit){
        return new ProduitDTO(produit.getId(),produit.getNom() , produit.getPrixVente(),produit.getStock());
    }
    
}
