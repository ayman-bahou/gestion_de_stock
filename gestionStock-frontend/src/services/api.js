export const fetchProduits = async()=>{
    const reponse = await fetch("http://localhost:8080/produit/get/all");
    const data = await reponse.json();
    return data;
}
