import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
const produitContext = createContext();
export const useProduitcontext = () => useContext(produitContext);

export const ProduitProvider = ({ children }) => {
  const [produits, setProduits] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function recupProduitsbdd() {
      const reponse = await fetch("http://localhost:8080/produit/get/all");
      const data = await reponse.json();
      console.log(data);
      setProduits(data);
    }
    try {
      recupProduitsbdd();
    } catch (error) {
      setError("Erreur pendant la récupération des produits");
      console.log("Erreur pendant la récupération des produits");
    } finally {
      setLoading(false);
    }
  }, []);

  const addProduit = async (newproduit) => {
    setProduits((prev) => [...prev, newproduit]);
    try {
      const reponse = await axios.post(
        "http://localhost:8080/produit/create",
        newproduit
      );
    } catch (error) {
      console.log("erreur lors de la creation de produit");
    }
  };

  const modifierProduit = async (idProduit, newProduit) => {
    newProduit.id = idProduit;
    setProduits(
      produits.map((produit) =>
        produit.id == idProduit ? newProduit : produit
      )
    );
    try {
      const reponse = await axios.put(
        `http://localhost:8080/produit/update/${idProduit}`,
        newProduit
      );
    } catch (error) {
      console.log("erreur lors de la modif de produit");
    }
  };
  const supprimerProduit = async (idProduit) => {
    setProduits(produits.filter((p) => p.id != idProduit));
    try {
      const reponse = await axios.delete(
        `http://localhost:8080/produit/delete/${idProduit}`
      );
    } catch (error) {
      console.log("erreur lors de la suppr de produit");
    }
  };

  const value = {
    produits,
    addProduit,
    supprimerProduit,
    modifierProduit,
    loading,
    error,
  };

  return (
    <produitContext.Provider value={value}>{children}</produitContext.Provider>
  );
};
