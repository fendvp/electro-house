
import { useCart } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, clearCart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <section className="container cart-page my-4">
        <div className="cart-empty text-center">
          <h1 className="cart-title fw-bold mb-3">
            Tu carrito está vacío
          </h1>

          <p className="mb-0">
            Agregá productos para continuar con tu compra.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="container cart-page my-4">
      <h1 className="cart-title fw-bold mb-4">
        Carrito de compras
      </h1>

      <div className="cart-layout">
        {/* Lista de productos */}
        <div className="cart-products">
          {cart.map((item) => (
            <article key={item.id} className="cart-item">
              <div className="cart-item-image-container">
                <img
                  src={`/images/products/${String(item.id).padStart(2, "0")}_main.webp`}
                  alt={item.nombre}
                  className="cart-item-image"
                />
              </div>

              <div className="cart-item-info">
                <h2 className="cart-item-title fw-semibold">
                  {item.nombre}
                </h2>

                <p className="cart-item-detail mb-1">
                  Cantidad: <span>{item.quantity}</span>
                </p>

                <p className="cart-item-detail mb-1">
                  Precio unitario:{" "}
                  <span>
                    $ {Number(item.precio).toLocaleString("es-AR")}
                  </span>
                </p>

                <p className="cart-item-subtotal fw-bold mb-0">
                  Subtotal:{" "}
                  $ {(item.precio * item.quantity).toLocaleString("es-AR")}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Resumen de compra */}
        <aside className="cart-summary">
          <h2 className="cart-summary-title fw-bold mb-4">
            Resumen de compra
          </h2>

          <div className="cart-summary-total">
            <span>Total a pagar</span>
            <strong>
              $ {getCartTotal().toLocaleString("es-AR")}
            </strong>
          </div>

          <button
            type="button"
            className="btn cart-clear-btn w-100 mt-4"
            onClick={clearCart}
          >
            Vaciar carrito
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Cart;