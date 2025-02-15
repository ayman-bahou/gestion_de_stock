import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function MouvementStock() {
  const { id } = useParams();
  const [mvts, setMvts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMvt() {
      try {
        const reponse = await axios.get(
          `http://localhost:8080/produit/get/historique/${id}`
        );
        setMvts(reponse.data);
      } catch (error) {
        console.log("erreur lors du chargement des mvts");
      } finally {
        setLoading(false);
      }
    }
    fetchMvt();
  }, [id]);

  if (loading) {
    return <h2 className="text-center">Chargement en cours.....</h2>;
  }

  return (
    <div className="affichage_produits">
      {mvts.length === 0 ? (
        <div className="text-center p-8">
          <h2 className="text-xl text-gray-500 mb-4">
            Aucun mouvement enregistré pour ce produit
          </h2>
          <p className="text-sm text-gray-400">
            Les mouvements apparaîtront ici après des modifications de stock
          </p>
        </div>
      ) : (
        <table className="custom-table">
          <thead>
            <tr>
              <th style={{ width: "10%" }}>ID</th>
              <th style={{ width: "30%" }}>DATE_MVT</th>
              <th style={{ width: "20%" }}>TYPE</th>
              <th style={{ width: "20%" }}>QUANTITE</th>
            </tr>
          </thead>
          <tbody>
            {mvts.map((mvt) => (
              <tr key={mvt.id}>
                <td>{mvt.id}</td>
                <td>{new Date(mvt.date).toLocaleDateString()}</td>
                <td>{mvt.type}</td>
                <td>{mvt.quantite}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MouvementStock;
