package projet.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import projet.demo.entites.Produit;

public interface produitRepository extends JpaRepository<Produit, Integer> {

    public List<Produit> findByNom(String nom);
    
}
