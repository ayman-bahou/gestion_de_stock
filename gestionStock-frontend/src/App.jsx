import Liste_produits from "./pages/Liste_produits";
import Nouveau_produit from "./pages/Nouveau_produit";
import { ProduitProvider } from "./Contexts/Contexteproduit";
import { Routes, Route } from "react-router-dom";
import NavBar from "./composants/NavBar";
import MouvementStock from "./pages/MouvementStock";
function App() {
  return (
    <ProduitProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Liste_produits />} />
          <Route path="/nouveauproduit" element={<Nouveau_produit />} />
          <Route path="/mouvement/:id" element={<MouvementStock />} />
        </Routes>
      </main>
    </ProduitProvider>
  );
}

export default App;
