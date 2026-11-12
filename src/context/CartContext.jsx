import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () =>{
  const context = useContext(CartContext);
  console.log(context)
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider')
  }
  return context;
}


export function CartProvider({children}){
  
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const itemInCart = cart.find(item => item.id === product.id);
    if(itemInCart) {

      if(itemInCart.quantity + quantity > itemInCart.stock){
        alert("no hay suficiente stock")
      } else{

        const updatedCart = cart.map(item =>
          item.id === product.id
            ? {...item, quantity: item.quantity + quantity}
            : item
        )

        setCart(updatedCart)
        console.log(itemInCart)

      }
    } else {
      setCart(prevCart => [...prevCart, {...product, quantity}])
    }
  }

  const clearCart = () => {
    setCart([]);
  }

  const getCartQuantity = () =>{
    return cart.reduce((acc,item) => acc + item.quantity, 0)
  }

  const getCartTotal = () =>{
    return cart.reduce((acc, item) => acc + item.precio * item.quantity,0)
  }


  return(
    <CartContext.Provider 
      value={{
        cart, 
        addToCart,
        clearCart, 
        getCartQuantity, 
        getCartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}