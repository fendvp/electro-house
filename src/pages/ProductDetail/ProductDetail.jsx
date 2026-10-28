import { useParams } from "react-router-dom"
import "./ProductDetail.css"
import { useEffect, useState } from "react";
import { ProductService } from "../../services/ProductService";

function ProductDetail() {

  const {id} = useParams();

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [nombre, setNombre] = useState("")
  const [categoria, setCategoria] = useState("")
  const [stock, setStock] = useState(Number)
  const [precio, setPrecio] =useState(Number)

  useEffect(()=>{
    ProductService()
    .then((data)=>{
      setNombre(data[id].nombre)
      setCategoria(data[id].categoria)
      setStock(data[id].stock)
      setPrecio(data[id].precio)
    })
    .catch(() => setError("Error al cargar el producto"))
    .finally(() => setLoading(false))
  },[])





  if(loading) return <p className="text-center py-5">Cargando productos...</p>
  if(error) return <p className="text-center py-5">{error}</p>


  return (
    <section className="container product-detail my-4">
      <div className="row g-4 g-lg-5 align-items-center">
        {/* Información: título y categoría */}
        <div className="col-12 order-1 order-lg-2">
          <h1 className="product-detail-title fw-bold mb-2">
            {nombre}
          </h1>
          <p className="product-detail-category mb-0">
            {categoria}
          </p>
        </div>

        {/* Imagen del producto */}
        <div className="col-12 col-lg-6 order-2">
          <div className="product-detail-image-container">
            <img
              src={`/images/products/${String(id).padStart(2, "0")}_main.webp`}
              alt={nombre}
              className="product-detail-image"
            />
          </div>
          <p className="product-detail-price fw-bold mt-3 mb-0">
            $ {Number(precio).toLocaleString("es-AR")}
          </p>
        </div>




        {/* Stock y acciones */}
        <div className="col-12 col-lg-6 order-3 order-lg-2">
          <div className="product-detail-actions">
            <p className="mb-3">
              Disponibilidad:{" "}
              <span className="fw-semibold">{stock} unidades</span>
            </p>

            <div className="d-flex flex-wrap align-items-center gap-3">
              {/* Contador visual sin lógica */}
              <div className="product-detail-counter d-flex align-items-center">
                <button
                  type="button"
                  className="btn product-detail-counter-btn"
                  aria-label="Restar cantidad"
                >
                  −
                </button>

                <span className="product-detail-counter-value">0</span>

                <button
                  type="button"
                  className="btn product-detail-counter-btn"
                  aria-label="Sumar cantidad"
                >
                  +
                </button>
              </div>

              <button type="button" className="btn product-detail-add">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default ProductDetail