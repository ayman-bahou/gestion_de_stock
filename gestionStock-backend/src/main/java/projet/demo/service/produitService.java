package projet.demo.service;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import projet.demo.dto.MouvementStockDTO;
import projet.demo.dto.ProduitDTO;
import projet.demo.entites.Produit;
import projet.demo.exceptions.ProduitInexistantException;
import projet.demo.mapper.MouvementStockDTOMapper;
import projet.demo.mapper.ProduitDTOMapper;
import projet.demo.repository.mouvementStockRepository;
import projet.demo.repository.produitRepository;

@Service
public class produitService {

    private final produitRepository produitRepository;
    private final mouvementStockRepository mouvementStockRepository;
    private final ProduitDTOMapper produitDTOMapper;
    private final MouvementStockDTOMapper mouvementStockDTOMapper;

    public produitService(MouvementStockDTOMapper mouvementStockDTOMapper, mouvementStockRepository mouvementStockRepository, ProduitDTOMapper produitDTOMapper, produitRepository produitRepository) {
        this.mouvementStockDTOMapper = mouvementStockDTOMapper;
        this.mouvementStockRepository = mouvementStockRepository;
        this.produitDTOMapper = produitDTOMapper;
        this.produitRepository = produitRepository;
    }

    public void creerProduit(Produit produit){
        List<Produit> liste_produit = this.produitRepository.findByNom(produit.getNom());
        if (liste_produit.isEmpty()){
            if (produit.getStock()<0 || produit.getPrixAchat()<0 || produit.getPrixVente()<0){
                throw new IllegalArgumentException("les valeurs de stock, prix d'achat et prix de vente doivent être positifs");}
                else{
                    this.produitRepository.save(produit);
                }
        }else{
            throw new DataIntegrityViolationException("il existe déjà un produit avec ce nom");
        }
        
    }

    public Stream<ProduitDTO> listerProduits(){
        return this.produitRepository.findAll().stream().map(this.produitDTOMapper);
    }

    public ProduitDTO chercherProduit(int id){
        Produit optionalproduit = this.produitRepository.findById(id).orElseThrow(()->new ProduitInexistantException("Aucun produit n'existe avec cet id"));
        return this.produitDTOMapper.apply(optionalproduit);
        }
    

    public void supprimerProduit(int id){
        this.produitRepository.deleteById(id);
    }

    public void updateProduit(int id, Produit newproduit){
        this.produitRepository.save(new Produit(id,newproduit.getNom(),newproduit.getPrixAchat(), newproduit.getPrixVente(), newproduit.getStock()));
    }

    public Stream<MouvementStockDTO> chercherMouvementStock(int id){
        Produit produit = this.produitRepository.findById(id).orElseThrow(() -> new ProduitInexistantException("Aucun produit n'existe avec cet id"));
        return this.mouvementStockRepository.findByProduit(produit).stream().map(mouvementStockDTOMapper);
    }
}

