import { useDialog } from "react-st-modal";
import React, { useState } from 'react'
import {
  ModalContainer,
  ModalCartProduct,
  ModalCartImage,
  ModalCartP,
  ModalCartDescripcion,
  ModalUnPrice,
} from "./ModalElements";

function ModalCart({cart, setCart}) {
    const dialog = useDialog();	
			
		const calculeTotal = cart.reduce(
        (sum, i) => sum + i.contador * i.price,
        0
    );      
    let total = 0;	



		const deleteProduct = (id) => {
			
      let product = cart.filter(item => item.id !== id)
      setCart(product)

			console.log('cart', id)
      console.log('eliminado')
			console.log('product', product)			
    }
		

    return (
        <ModalContainer>
            <h1>Pedido</h1>	
            {cart.map((item) => {
                // {total += item.contador * item.price}
                return (
                    <ModalCartProduct key={item.id}>
                        <ModalCartImage src={item.image} alt={item.id}/>
                        <ModalCartP>{item.product}</ModalCartP>
                        <ModalCartDescripcion>{item.description}</ModalCartDescripcion>
												{/* <p>{item.price}</p> */}
                        <ModalUnPrice>$ {total += item.contador * item.price} MXN</ModalUnPrice>
												<button onClick={(id) => deleteProduct(id) }>Eliminar</button>
                        {/* <h3>{item.contador}  </h3> */}
                        {/* <h1>{total += item.contador * item.price}</h1> */}
                    </ModalCartProduct>
                    
                )
            })}
            <h3>SubTotal:{calculeTotal.toFixed(2)}</h3>					
            <button onClick={() => {
          // Сlose the dialog and return the value
          dialog.close();
          
        }}>
            </button>
        </ModalContainer>
    )
}

export default ModalCart;
