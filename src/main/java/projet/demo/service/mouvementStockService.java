package projet.demo.service;
import projet.demo.repository.mouvementStockRepository;
import projet.demo.entites.MouvementStock;
import projet.demo.repository.produitRepository;
import projet.demo.entites.Produit;
import projet.demo.enums.TypeMouvement;
import projet.demo.exceptions.StockInsuffisantException;

import java.util.Optional;

import org.springframework.stereotype.Service;

import projet.demo.exceptions.ProduitInexistantException;
@Service
public class mouvementStockService {
    @SuppressWarnings("FieldMayBeFinal")
    private mouvementStockRepository mouvementStockRepository;
    @SuppressWarnings("FieldMayBeFinal")
    private produitRepository produitRepository;
    public mouvementStockService(mouvementStockRepository mouvementStockRepository, produitRepository produitRepository){
        this.mouvementStockRepository = mouvementStockRepository;
        this.produitRepository = produitRepository;
    }

    public void creerMouvementStock(MouvementStock mouvementStock){
        Optional<Produit> optionalProduit = this.produitRepository.findById(mouvementStock.getProduit().getId());
        if (mouvementStock.getType()==TypeMouvement.SORTIE && mouvementStock.getQuantite()>mouvementStock.getProduit().getStock()){
            throw new StockInsuffisantException("stock insuffisant");
        }else if (mouvementStock.getQuantite()<0){
            throw new IllegalArgumentException("la quantité doit être positive");
        }else{
            Produit produit = optionalProduit.orElseThrow(() -> new ProduitInexistantException("le produit référencé dans le mouvement stock n'existe pas"));
            mouvementStock.setProduit(produit);
            if (mouvementStock.getType()==TypeMouvement.SORTIE){
                produit.setStock(produit.getStock()-mouvementStock.getQuantite());
                this.produitRepository.save(produit);
            }else if (mouvementStock.getType()==TypeMouvement.ENTREE){
                produit.setStock(produit.getStock()+mouvementStock.getQuantite());
                this.produitRepository.save(produit);
            }
            this.mouvementStockRepository.save(mouvementStock);
        }
    }
    
}
