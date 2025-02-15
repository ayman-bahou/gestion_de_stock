import { useState } from "react";

const Formulaire = ({ produit, onUpdate, onCancel }) => {
  const [donneesForm, setDonneesForm] = useState({
    nom: produit.nom,
    prixVente: produit.prixVente,
    stock: produit.stock,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //modifierProduit(produit.id, donneesForm);
    onUpdate(produit.id, donneesForm);
  };

  return (
    <div className="edit-form">
      <h3>Modifier Produit</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            value={donneesForm.nom}
            onChange={(e) =>
              setDonneesForm({ ...donneesForm, nom: e.target.value })
            }
          />
        </label>
        <label>
          Prix de vente:
          <input
            type="number"
            step="0.01"
            value={donneesForm.prixVente}
            onChange={(e) =>
              setDonneesForm({ ...donneesForm, prixVente: e.target.value })
            }
          />
        </label>

        <label>
          Stock:
          <input
            type="number"
            value={donneesForm.stock}
            onChange={(e) =>
              setDonneesForm({ ...donneesForm, stock: e.target.value })
            }
          />
        </label>
        <div className="form-actions">
          <button type="submit">Enregistrer</button>
          <button type="button" onClick={onCancel}>
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
};
export default Formulaire;
