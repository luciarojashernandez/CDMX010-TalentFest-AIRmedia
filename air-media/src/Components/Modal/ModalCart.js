import { useDialog } from "react-st-modal";
import React from 'react'

export default function ModalCart({cart}) {
    const dialog = useDialog();
		
		// console.log('cart del modal', cart.length)

		// for(let i=0; cart.length; i++){
		// 	let products = cart[i].comments;
		// 	console.log('products', products)		
		// }
		// let i =
		// console.log(cart[i].comments)

    return (
        <div>
            <h1>Hola</h1>						
            <button onClick={() => {
          // Сlose the dialog and return the value
          dialog.close();
          
        }}>
            </button>
        </div>
    )
}
