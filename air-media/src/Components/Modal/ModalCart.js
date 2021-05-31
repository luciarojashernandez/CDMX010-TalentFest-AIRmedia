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
		// console.log('cart del modal', cart.length)

		// for(let i=0; cart.length; i++){
		// 	let products = cart[i].comments;
		// 	console.log('products', products)		
		// }
		// let i =
		// console.log(cart[i].comments)

        // const [totalP, setTotalP ] = useState(0)
        
        // function multiply(){
        //     cart.map((item) => 
        //         setTotalP({item.contador * item.price})
        //     )
        // }

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
                        <ModalUnPrice>$ {total += item.contador * item.price} MXN</ModalUnPrice>
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
