import Liste_produits from "./pages/Liste_produits";
import { ProduitProvider } from "./Contexts/Contexteproduit";
function App() {
  return (
    <ProduitProvider>
      <Liste_produits />
    </ProduitProvider>
  );
}

export default App;
