function Nouveau_produit() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Ajouter un Nouveau Produit</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nom" className="block text-gray-700">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={produit.nom}
            onChange={handleChange}
            placeholder="Nom du produit"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="prixAchat" className="block text-gray-700">Prix d'achat :</label>
          <input
            type="number"
            id="prixAchat"
            name="prixAchat"
            value={produit.prixAchat}
            onChange={handleChange}
            placeholder="Prix d'achat"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="prixVente" className="block text-gray-700">Prix de vente :</label>
          <input
            type="number"
            id="prixVente"
            name="prixVente"
            value={produit.prixVente}
            onChange={handleChange}
            placeholder="Prix de vente"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="stock" className="block text-gray-700">Stock :</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={produit.stock}
            onChange={handleChange}
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
