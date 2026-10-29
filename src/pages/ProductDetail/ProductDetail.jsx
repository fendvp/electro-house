import { useParams } from "react-router-dom"
import "./ProductDetail.css"
import { useEffect, useState } from "react";
import { ProductService } from "../../services/ProductService";

function ProductDetail() {

  const {id} = useParams();

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [product, setProduct] = useState()
  const [quantity, setQuantity] = useState(1)

  useEffect(()=>{
    ProductService()
    .then((data)=> setProduct(data.find(prod => prod.id === Number(id))))
    .catch(() => setError("Error al cargar el producto"))
    .finally(() => setLoading(false))
  },[id])

  if(loading) return <p className="text-center py-5">Cargando productos...</p>
  if(error) return <p className="text-center py-5">{error}</p>

  const decreaseQuantity = () =>{
    if(quantity !== 1) setQuantity(quantity-1)
  }

  const increaseQuantity = () =>{
    if(quantity !== product.stock) setQuantity(quantity+1)
  }

  return (
  <section className="container product-detail my-4">
    <div className="product-detail-layout">

      {/* Información principal */}
      <div className="product-detail-info">
        <h1 className="product-detail-title fw-bold mb-2">
          {product.nombre}
        </h1>

        <p className="product-detail-category mb-3">
          {product.categoria}
        </p>

        <p className="product-detail-price fw-bold mb-4 d-none d-lg-block">
          $ {Number(product.precio).toLocaleString("es-AR")}
        </p>
      </div>

      {/* Imagen del producto */}
      <div className="product-detail-image-area">
        <div className="product-detail-image-container">
          <img
            src={`/images/products/${String(id).padStart(2, "0")}_main.webp`}
            alt={product.nombre}
            className="product-detail-image"
          />
        </div>

      </div>

      {/* Stock y acciones */}
      <div className="product-detail-actions-area">
        <p className="product-detail-price fw-bold mb-4 d-lg-none">
          $ {Number(product.precio).toLocaleString("es-AR")}
        </p>
        <div className="product-detail-actions">
          <p className="mb-3">
            Disponibilidad:{" "}
            <span className="fw-semibold">{product.stock} unidades</span>
          </p>

          <div className="d-flex flex-wrap align-items-center gap-3">
            <div className="product-detail-counter d-flex align-items-center">
              <button
                type="button"
                className="btn product-detail-counter-btn"
                aria-label="Restar cantidad"
                onClick={decreaseQuantity}
              >
                −
              </button>

              <span className="product-detail-counter-value">{quantity}</span>

              <button
                type="button"
                className="btn product-detail-counter-btn"
                aria-label="Sumar cantidad"
                onClick={increaseQuantity}
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
  );
}

export default ProductDetail