import { useDialog } from "react-st-modal";
import React, { useState } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import Form from "../../Pages/Form/Form";

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

  let total = 0;

  const [updatableCart, setUpdatableCart] = useState(cart);

  const calculeTotal = updatableCart.reduce(
    (sum, i) => sum + i.contador * i.price,
    0
  );

  const deleteProduct = (id) => {
    const product = updatableCart.filter((item) => {
      return item.id !== id;
    });

    setCart(product);
    setUpdatableCart(product);

    // console.log('item', item.id)

    // let product = cart.splice(item => item.id !== cartId)
    // setCart(product)

    // console.log('product', product)
  };

  return (
    <ModalContainer>
      <br></br>
      <h1>Pedido</h1>

      {updatableCart.map((elemento) => {
        // {total += item.contador * item.price}
        return (
          <ModalCartProduct key={elemento.id}>
            <ModalCartImage src={elemento.image} alt={elemento.id} />
            <ModalCartP>{elemento.product}</ModalCartP>
            <ModalCartDescripcion>
              Comentarios:{elemento.comments}
            </ModalCartDescripcion>
            <ModalUnPrice>
              $ {elemento.contador * elemento.price} MXN
            </ModalUnPrice>
            <ModalCartDelete onClick={() => deleteProduct(elemento.id)}>
              Borrar
            </ModalCartDelete>
            <ModalCartQty>Productos: {elemento.contador}</ModalCartQty>
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
        <a href="/formulario-burrico">
          <ModalBtnContinue>Continuar</ModalBtnContinue>
        </a>
      </ModalCartBtns>
    </ModalContainer>
  );
}

export default ModalCart;
