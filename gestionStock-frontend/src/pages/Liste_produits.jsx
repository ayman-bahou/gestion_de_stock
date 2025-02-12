import React from "react";
import { useState, useEffect } from "react";
import { useProduitcontext } from "../Contexts/Contexteproduit";
import {
  PencilIcon,
  TrashIcon,
} from "../../node_modules/@heroicons/react/24/solid";

function Liste_produits() {
  const { produits, addProduit, supprimerProduit, modifierProduit, error, loading } =
    useProduitcontext();

  return (
    <div className="affichage_produits">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <h1 className="text-centertext-4xl font-bold text-center mb-6 text-gray-800">
            Liste des Produits
          </h1>
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
                  <div>
                    <button className="flex items-center px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={() => modifierProduit(produit.id)}>
                      
                      <PencilIcon className="h-5 w-5 mr-1" />
                    </button>
                    <button className="flex items-center px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none" onClick={() => supprimerProduit(produit.id)}>
                      <TrashIcon className="h-5 w-5 mr-1" />
                    </button>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Liste_produits;
