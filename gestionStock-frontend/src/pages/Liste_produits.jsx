import React from "react";
import { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { useProduitcontext } from "../Contexts/Contexteproduit";
import Formulaire from "../composants/Formulaire";
import { Link } from "react-router-dom";
import {
  PencilIcon,
  TrashIcon,
} from "../../node_modules/@heroicons/react/24/solid";

function Liste_produits() {
  const { produits, supprimerProduit, modifierProduit, error, loading } =
    useProduitcontext();
  const [prevProduit, setPrevProduit] = useState(null);

  const handleUpdate = (idProduit, newProduit) => {
    modifierProduit(idProduit, newProduit);
    setPrevProduit(null);
  };

  return (
    <div className="affichage_produits">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <h1 className="text-center text-4xl font-bold text-center mb-6 text-gray-800">
            Liste des Produits
          </h1>

          {prevProduit && (
            <Formulaire
              produit={prevProduit}
              onUpdate={handleUpdate}
              onCancel={() => setPrevProduit(null)}
            />
          )}
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
                    <td>
                      <button
                        className="flex items-center px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                        onClick={() => setPrevProduit(produit)}
                      >
                        <PencilIcon className="h-5 w-5 mr-1" />
                      </button>
                      <button
                        className="flex items-center px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                        onClick={() => supprimerProduit(produit.id)}
                      >
                        <TrashIcon className="h-5 w-5 mr-1" />
                      </button>
                      <Link
                        to={`/mouvement/${produit.id}`}
                        className="flex items-center px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
                      >
                        <EyeIcon className="h-5 w-5 mr-1" />
                        Mouvements
                      </Link>
                    </td>
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
