import { useEffect, useState } from "react";
import { ProductService } from "../../services/ProductService";

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

  if(loading) return <p>Cargando productos...</p>
  if(error) return <p>{error}</p>
  
  console.log(products)

  return (
    <section>
      <h1 className="mb-4">Nuestros productos</h1>
      <p>Próximamente encontrarás nuestro catálogo.</p>
    </section>
  );
}

export default Products;