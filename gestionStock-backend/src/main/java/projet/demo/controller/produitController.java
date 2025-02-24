package projet.demo.controller;

import projet.demo.entites.Produit;
import projet.demo.service.produitService;
import java.util.stream.Stream;

import projet.demo.dto.MouvementStockDTO;
import projet.demo.dto.ProduitDTO;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;





@RestController
@RequestMapping(path="produit")
@CrossOrigin(origins = "http://localhost:4200")
public class produitController {
    
    private final produitService produitService;

    public produitController(produitService produitService) {
        this.produitService = produitService;
    }
    
    @Operation(summary = "Créer un produit")
    @ResponseStatus(value=HttpStatus.CREATED)
    @PostMapping(path="create", consumes = APPLICATION_JSON_VALUE)
    public void creerProduit(@RequestBody Produit produit){
        this.produitService.creerProduit(produit);
    }

    @Operation(summary = "Lister les produits")
    @ResponseStatus(value=HttpStatus.OK)
    @GetMapping(path="get/all",produces = APPLICATION_JSON_VALUE)
    public Stream<ProduitDTO> listerProduits(){
        return this.produitService.listerProduits();
    }

    @Operation(summary = "Chercher un produit")
    @ResponseStatus(value=HttpStatus.OK)
    @GetMapping(path="get/{id}",produces = APPLICATION_JSON_VALUE)
    public ProduitDTO chercherProduit(@PathVariable int id) {
        return this.produitService.chercherProduit(id);
    }

    @Operation(summary = "Supprimer un produit")
    @ResponseStatus(value=HttpStatus.NO_CONTENT)
    @DeleteMapping(path="delete/{id}")
    public void supprimerProduit(@PathVariable int id ){
        this.produitService.supprimerProduit(id);
    }


    @Operation(summary = "Mettre à jour un produit")
    @ResponseStatus(value=HttpStatus.OK)
    @PutMapping(path="update/{id}",consumes= APPLICATION_JSON_VALUE)
    public void updateProduit(@PathVariable int id,@RequestBody Produit newproduit){
        this.produitService.updateProduit(id,newproduit);
    }

    @Operation(summary = "Chercher l'historique des mouvements de stock d'un produit")
    @ResponseStatus(value=HttpStatus.OK)
    @GetMapping(path="get/historique/{id}",produces=APPLICATION_JSON_VALUE)
    public Stream<MouvementStockDTO> chercherMouvementStock(@PathVariable int id){
        return this.produitService.chercherMouvementStock(id);
    }
}
