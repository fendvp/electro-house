import { createContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () =>{
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider')
  }
}


export function CartProvider({children}){
  
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const itemInCart = cart.find(item => item.id === product.id);
    // prueba
    console.log(itemInCart)

    if(itemInCard) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? {...item, quantity: item.quantity + quantity}
          : item
      )
      setCart(updatedCart)
    } else {
      setCart(prevCart => [...prevCart, {...product, quantity}])
    }
  }

  const clearCart = () => {
    setCart([]);
  }

  const getCartQuantity = () =>{
    return cart.reduce((acc,item) => acc + item.precio * item.quantity, 0)
  }

  const getCartTotal = () =>{
    return cart.reduce((acc, item) => acc + item.precio * item.quantity)
  }


  return(
    <CartContext.Provider value={{cart, addToCart, clearCart, getCartQuantity, getCartTotal}}>
      {children}
    </CartContext.Provider>
  )
}