import React, { useState } from "react";
import axios from "axios";
function Nouveau_mouvement() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    type: "",
    quantite: 0,
    produit: {
      id: 0,
    },
  });
  const ajout_mouvement = async () => {
    try {
      const reponse = await axios.post(
        "http://localhost:8080/mouvementStock/create",
        data
      );
    } catch (error) {
      console.log("erreur lors de la creation du mouvement stock");
    }
  };
  const handleSubmit = () => {
    ajout_mouvement();
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Ajouter un Nouveau Mouvement Stock
      </h2>
      {submitted && (
        <p className="text-center text-green-500">
          Mouvement stock ajouté avec succès
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="type" className="block text-gray-700">
            Type :
          </label>
          <select
            id="type"
            name="type"
            onChange={(e) => setData({ ...data, type: e.target.value })}
            className="w-full border border-gray-300 p-2 rounded"
            required
          >
            <option value="">Choisissez un type</option>
            <option value="ENTREE">ENTREE</option>
            <option value="SORTIE">SORTIE</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantite" className="block text-gray-700">
            Quantité :
          </label>
          <input
            type="number"
            id="quantite"
            name="quantite"
            min="0"
            step="1"
            onChange={(e) => setData({ ...data, quantite: e.target.value })}
            placeholder="Quantité"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="produit_id" className="block text-gray-700">
            Id Produit :
          </label>
          <input
            type="number"
            id="produit_id"
            min="0"
            name="produit_id"
            onChange={(e) =>
              setData({ ...data, produit: { id: e.target.value } })
            }
            placeholder="Id Produit"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Enregistrer le mouvement
        </button>
      </form>
    </div>
  );
}

export default Nouveau_mouvement;
