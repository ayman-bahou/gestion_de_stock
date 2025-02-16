import { useProduitcontext } from "../Contexts/Contexteproduit";
import { useState } from "react";
function Nouveau_produit() {
  const [submitted, setSubmitted] = useState(false);
  const { addProduit } = useProduitcontext();
  const [produit, setProduit] = useState({
    nom: "",
    prixAchat: 0,
    prixVente: 0,
    stock: 0,
  });

  const handleSubmit = () => {
    addProduit(produit);
    setSubmitted(true);
  };
  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Ajouter un Nouveau Produit
      </h2>
      {submitted && (
        <p className="text-center text-green-500">Produit crée avec succès</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nom" className="block text-gray-700">
            Nom :
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            onChange={(e) => setProduit({ ...produit, nom: e.target.value })}
            placeholder="Nom du produit"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="prixAchat" className="block text-gray-700">
            Prix d'achat :
          </label>
          <input
            type="number"
            id="prixAchat"
            name="prixAchat"
            min="0"
            step="any"
            onChange={(e) =>
              setProduit({ ...produit, prixAchat: e.target.value })
            }
            placeholder="Prix d'achat"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="prixVente" className="block text-gray-700">
            Prix de vente :
          </label>
          <input
            type="number"
            id="prixVente"
            name="prixVente"
            min="0"
            step="any"
            onChange={(e) =>
              setProduit({ ...produit, prixVente: e.target.value })
            }
            placeholder="Prix de vente"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="stock" className="block text-gray-700">
            Stock :
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            min="0"
            onChange={(e) => setProduit({ ...produit, stock: e.target.value })}
            placeholder="Quantité en stock"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Enregistrer le produit
        </button>
      </form>
    </div>
  );
}
export default Nouveau_produit;
