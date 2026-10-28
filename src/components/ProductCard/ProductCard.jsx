import { Link } from "react-router-dom"
import "./ProductCard.css"

function ProductCard( {id, nombre, precio, categoria, stock}){
    
  return(
    <Link to={`/productos/${id}`} className="product-card-link">
      <article className="product-card card h-100">
        <img
          src={`/images/products/${id<10 ? "0" : ""}${id}_main.webp`}
          alt={nombre}
          className="product-card-img card-img-top"/>
        <div className="card-body d-flex flex-column">
          <p className="product-card-title card-title">{nombre}</p>
          <p className="text-secondary mb-2">{categoria}</p>
          <data className="product-card-price fw-bold mb-2" value={precio}>$ {Number(precio).toLocaleString('es-AR')}</data>
          <p className="small mb-0">Stock: {stock}</p>
        </div>
      </article>
    </Link>
  )
}

export default ProductCard