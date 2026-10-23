import ProductCard from "../ProductCard/ProductCard"

function ProductList({products}) {
  return(
    <ul className="row g-4 p-0 list-unstyled">
      {products.map(product =>
        <li className="col-12 col-sm-6 col-lg-4 col-xl-3" key={product.id}>
          <ProductCard {...product}/>
        </li>
      )}
    </ul>
  )
}


export default ProductList