import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import {
  ModalContainer,
  ModalCartProduct,
  ModalCartImage,
  ModalCartP,
  ModalCartDescripcion,
  ModalUnPrice,
  ModalCartInput,
  ModalCartBtns,
  ModalBtnCancel,
  ModalBtnContinue,
  ModalSubtotal,
  ModalCartDelete,
  ModalCartQty,
} from "./ModalElements";

function ModalCart({ cart, setCart }) {
  const dialog = useDialog();

  const calculeTotal = cart.reduce((sum, i) => sum + i.contador * i.price, 0);

  let total = 0;
 
	// let cartId = cart.map((item) => item.id)
	// console.log('cartt', cartId)
	const[elemento, setElemento] = useState(cart)


	const deleteProduct = (id) => {

		
		// let grupo = []

		// let cartId = cart.map((item) => item.id)
		// console.log('cartId', cartId)

    // let product = cart.map((item) => item)
		// let filter = product.filter((item) => item)

		// console.log('filter', filter)
		// console.log('product', product)
		// console.log('grupo', grupo)
		

		let product = cart.filter(item => { console.log(item.id); return(item.id !== id )})
		setCart([...product])
		setElemento([...product])

	

		console.log('prouct', product)
		console.log('cart', cart)
		// console.log('item', item.id)

		// let product = cart.splice(item => item.id !== cartId)
		// setCart(product)

		// console.log('product', product)
       
  }

  return (
    <ModalContainer>
        <br></br>
      <h1>Pedido</h1>
      {cart.map((elemento) => {
        // {total += item.contador * item.price}
        return (
          <ModalCartProduct key={elemento.id}>
            <ModalCartImage src={elemento.image} alt={elemento.id} />
            <ModalCartP>{elemento.product}</ModalCartP>
            <ModalCartDescripcion>Comentarios:{elemento.comments}</ModalCartDescripcion>
            <ModalUnPrice>
              $ {(total += elemento.contador * elemento.price)} MXN
            </ModalUnPrice>
            <ModalCartDelete onClick={() => deleteProduct(elemento.id)}>Borrar</ModalCartDelete>
            <ModalCartQty>Productos: {elemento.contador}</ModalCartQty>
            {/* <ModalCartCount>
              <ModalCartCountBtn onClick={restar}>-</ModalCartCountBtn>
              <div>{contador}</div>
              <ModalCartCountBtn onClick={sumar}>+</ModalCartCountBtn>
            </ModalCartCount> */}
            {/* <h3>{item.contador}  </h3> */}
            {/* <h1>{total += item.contador * item.price}</h1> */}
          </ModalCartProduct>
        );
      })}
      <ModalCartInput placeholder="Comentarios adicionales"></ModalCartInput>
      <ModalSubtotal>SubTotal:{calculeTotal.toFixed(2)}</ModalSubtotal>
      <ModalCartBtns>
        <ModalBtnCancel
          onClick={() => {
            // Сlose the dialog and return the value
            dialog.close();
          }}
        >
          Cancelar
        </ModalBtnCancel>
        <ModalBtnContinue>Continuar</ModalBtnContinue>
      </ModalCartBtns>
    </ModalContainer>
  );
}

export default ModalCart;
