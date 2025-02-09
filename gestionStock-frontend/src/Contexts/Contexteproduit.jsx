import {
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
const produitContext = createContext();
export const useProduitcontext = () => useContext(produitContext);

export const ProduitProvider = ({ children }) => {
  const [ produits, setProduits ] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    
        async function recupProduitsbdd()
        {
      const reponse = await fetch("http://localhost:8080/produit/get/all");
      const data = await reponse.json();
      console.log(data)
      setProduits(data);
      }
      try {
        recupProduitsbdd();
    } catch (error) {
      setError("Erreur pendant la récupération des produits");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const addProduit = (newproduit) => {
    setProduits((prev) => [...prev, newproduit]);
  };

  const supprimerProduit = (produit) => {};

  const value = {
    produits,
    addProduit,
    supprimerProduit,
    loading,
    error
  };

  return <produitContext.Provider value={value}>
    {children}
  </produitContext.Provider>
};
