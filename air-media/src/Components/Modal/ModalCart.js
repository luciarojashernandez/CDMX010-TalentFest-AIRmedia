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

//   const [contador, setContador] = useState(0);

//   function sumar() {
//     setContador(contador + 1);
//   }
//   function restar() {
//     setContador(contador !== 0 ? contador - 1 : contador);
//   }



// const deleteProduct = (id) => {
//     let product = cart.filter(item => item.id !== id)
//     setCart(product)
//     console.log('cart', id)
//     console.log('eliminado')
//     console.log('product', product)     
//   }

  return (
    <ModalContainer>
        <br></br>
      <h1>Pedido</h1>
      {cart.map((item) => {
        // {total += item.contador * item.price}
        return (
          <ModalCartProduct key={item.id}>
            <ModalCartImage src={item.image} alt={item.id} />
            <ModalCartP>{item.product}</ModalCartP>
            <ModalCartDescripcion>Comentarios:{item.comments}</ModalCartDescripcion>
            <ModalUnPrice>
              $ {(total += item.contador * item.price)} MXN
            </ModalUnPrice>
            <ModalCartDelete>Borrar</ModalCartDelete>
            <ModalCartQty>Productos: {item.contador}</ModalCartQty>
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
