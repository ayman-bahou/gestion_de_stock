import React from "react";
import { useState, useEffect } from "react";
import { fetchProduits } from "../services/api";
function Liste_produits() {
  const [produits, setProduits] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduits = async () => {
      try {
        const data = await fetchProduits();
        setProduits(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getProduits();
  }, []);

  return(
  <div className="affichage_produits">
    
    {loading ? (
      <div className="loading">Loading...</div>
    ) : (
      <div>
        <h1 className="text-centertext-4xl font-bold text-center mb-6 text-gray-800">Liste des Produits</h1>
        {error && <div style={{ color: "red" }}>Erreur : {error}</div>}
        <table className="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Quantité</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {produits.map((produit) => (
              <tr key={produit.id}>
                <td>{produit.id}</td>
                <td>{produit.nom}</td>
                <td>{produit.stock}</td>
                <td>{produit.prixVente}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>);
}

export default Liste_produits;
