import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  ModalCartContainer,
  ModalCartQty,
  IconDelete,
  ModalCartCount,
	DivButtons,
  ModalCountBtn
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

  //Contador de carrito
  let counterItem = updatableCart.map((el) => el.contador);
  const [counterCart, setCounterCart] = useState(counterItem);

  //función sumar y restar de los botones
  function sum() {
    setCounterCart(Number(counterCart) + 1);
  }
  function subtraction() {
    setCounterCart(
      Number(counterCart) !== 0 ? Number(counterCart) - 1 : Number(counterCart)
    );
  }


  return (
    <ModalContainer>
      <br></br>      
			<h1>Pedido</h1>		
      <ModalCartContainer>
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
              {/* <ModalCartDelete onClick={() => deleteProduct(elemento.id)}>
              Borrar
            </ModalCartDelete> */}
              <IconDelete onClick={() => deleteProduct(elemento.id)}>
                Borrar
              </IconDelete>
              <ModalCartCount>
              <ModalCountBtn
                onClick={() => {
                  // total();
                  subtraction();
                }}
              >
                -
              </ModalCountBtn>
              <div>{counterCart}</div>
              <ModalCountBtn
                onClick={() => {
                  // total();
                  sum();
                }}
              >
                +
              </ModalCountBtn>
              </ModalCartCount>
              <ModalCartQty>Productos: {elemento.contador}</ModalCartQty>
            </ModalCartProduct>
          );
        })}
        <ModalCartInput placeholder="Comentarios adicionales"></ModalCartInput>
        <ModalSubtotal>SubTotal:{calculeTotal.toFixed(2)}</ModalSubtotal>
      </ModalCartContainer>
			<DivButtons>
      <ModalCartBtns>
        <ModalBtnCancel
          onClick={() => {
            // Сlose the dialog and return the value
            dialog.close();
          }}
        >
          Cancelar
        </ModalBtnCancel>
        {/* <Link to="/formulario-burrico"> */}
          <ModalBtnContinue to='/formulario-burrico'>Continuar</ModalBtnContinue>
        {/* </Link> */}
      </ModalCartBtns>
			</DivButtons>	
    </ModalContainer>
  );
}
export default ModalCart;