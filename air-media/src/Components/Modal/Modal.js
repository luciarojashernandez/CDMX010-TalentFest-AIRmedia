import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import {
  ModalContainer,
  ModalImgContainer,
  ModalH2,
  ModalP,
  ModalH4,
  ModalInput,
  ModalButton,
  ModalCount,
  ModalCountBtn,
} from "./ModalElements";

function Modal({ item, cart, setCart }) {
  // Estado contador
  const [contador, setContador] = useState(0);
  const [comments, setComments] = useState("");
	const [finalPrice, setFinalPrice] = useState(0);

  // Poblar el carrito
  const cartItems = () => {
    let productElement = item;
		
    setCart([...cart, { ...productElement, contador, comments, finalPrice }]);
  };
 
  // Funcionalidad del contador
  function sumar() {
    setContador(contador + 1);
  };
  function restar() {
    setContador(contador !== 0 ? contador - 1 : contador);
  };

	// Agregar comentarios
  const handleComments = (event) => {
    setComments(event.target.value);
  };
  const addComments = () => {
    setComments("");
  };
	
	// Precio final del pedido
	function total () {		
		setFinalPrice(item.price * contador)		
	}

	console.log('finalprice', finalPrice)
	console.log('precio final', item.price * contador)





  const dialog = useDialog();

  // const [value, setValue] = useState();

  return (
    <ModalContainer>
      <ModalImgContainer src={item.image} alt="img"></ModalImgContainer>
      <ModalH2>{item.product}</ModalH2>
      <ModalP>{item.description}</ModalP>
      <ModalH4>${item.price}MXN</ModalH4>
      <ModalInput
        placeholder="Topping/Comentarios adicionales"
        onChange={handleComments}
        id="comments"
      ></ModalInput>
      <ModalCount>
        <ModalCountBtn onClick={restar}>-</ModalCountBtn>
        <div>{contador}</div>
        <ModalCountBtn onClick={sumar}>+</ModalCountBtn>
      </ModalCount>
      <ModalButton
        onClick={() => {
          // Сlose the dialog and return the value
          dialog.close();
          cartItems();
          addComments();
					total ();
        }}
      >
        Agregar producto
      </ModalButton>
    </ModalContainer>
  );
}

export default Modal;
