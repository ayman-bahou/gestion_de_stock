package projet.demo.mapper;

import java.util.function.Function;

import org.springframework.stereotype.Component;

import projet.demo.dto.MouvementStockDTO;
import projet.demo.entites.MouvementStock;

@Component
public class MouvementStockDTOMapper implements Function<MouvementStock,MouvementStockDTO> {
    private final ProduitDTOMapper produitDTOMapper;

    public MouvementStockDTOMapper(ProduitDTOMapper produitDTOMapper) {
        this.produitDTOMapper = produitDTOMapper;
    }

    
    @Override
    public MouvementStockDTO apply(MouvementStock mouvementStock){
        return new MouvementStockDTO(mouvementStock.getId(), mouvementStock.getType(), mouvementStock.getQuantite(), mouvementStock.getDate() ,produitDTOMapper.apply(mouvementStock.getProduit()));
    }
}
