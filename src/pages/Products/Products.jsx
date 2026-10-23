import { useEffect, useState } from "react";
import { ProductService } from "../../services/ProductService";
import ProductList from "../../components/ProductList/ProductList";

function Products() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    ProductService()
    .then((data) => setProducts(data))
    .catch(() => setError("No se pudieron cargar los productos"))
    .finally(() => setLoading(false))
  },[])

  if(loading) return <p className="text-center py-5">Cargando productos...</p>
  if(error) return <p className="text-center py-5">{error}</p>
  

  return (
    <section className="py-2">
      <h1 className="mb-4 fw-bold">Nuestros productos</h1>
      <ProductList products = {products}/>
    </section>
  );
}

export default Products;