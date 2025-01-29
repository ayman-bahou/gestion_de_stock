package projet.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import projet.demo.entites.Produit;
import projet.demo.entites.MouvementStock;

public interface mouvementStockRepository extends JpaRepository<MouvementStock, Integer> {

    public List<MouvementStock> findByProduit(Produit produit);
    
}
