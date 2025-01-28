package projet.demo.service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import projet.demo.dto.ProduitDTO;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import projet.demo.entites.Produit;
import projet.demo.repository.produitRepository;

@Service
public class produitService {

    @SuppressWarnings("FieldMayBeFinal")
    private produitRepository produitRepository;

    public produitService(produitRepository produitRepository){
        this.produitRepository = produitRepository;
    }

    public void creerProduit(Produit produit){
        List<Produit> liste_produit = this.produitRepository.findByNom(produit.getNom());
        if (liste_produit.isEmpty()){
            this.produitRepository.save(produit);
        }else{
            throw new DataIntegrityViolationException("il existe déjà un produit avec ce nom");
        }
        
    }

    public Stream<ProduitDTO> listerProduits(){
        return this.produitRepository.findAll().stream().map(produit -> new ProduitDTO(produit.getId(),produit.getNom(), produit.getPrixAchat(), produit.getStock()));
    }

    public ProduitDTO chercherProduit(int id){
        Optional<Produit> optionalproduit = this.produitRepository.findById(id);
        if (optionalproduit.isPresent()){
            return new ProduitDTO(id, optionalproduit.get().getNom(), optionalproduit.get().getPrixVente(), optionalproduit.get().getStock());
        }else{
            throw new EntityNotFoundException("Aucun produit n'existe avec cet id");
        }
    }

    public void supprimerProduit(int id){
        this.produitRepository.deleteById(id);
    }

    public void updateProduit(int id, Produit newproduit){
        @SuppressWarnings("unused")
        ProduitDTO produitBdd = this.chercherProduit(id);
        this.creerProduit(new Produit(id,newproduit.getNom(),newproduit.getPrixAchat(), newproduit.getPrixVente(), newproduit.getStock()));
    }
    }

