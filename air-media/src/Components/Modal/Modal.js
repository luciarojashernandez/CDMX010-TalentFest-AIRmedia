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
function Modal({ item, cart, setCart, setTotal }) {
  // Estado contador
  const [contador, setContador] = useState(1);
  const [comments, setComments] = useState("");
  // const [finalPrice, setFinalPrice] = useState(0);
  // Precio final del pedido

  // function totalItem(item, quantity) {
  //   return (item.price * quantity);
  // }
  function calculeTotal (items) {
    return items.reduce(
      (sum, i) => sum + i.contador * i.price,
      0
    );
  }

  function cartItems() {
    // console.log(`new`, finalPrice)
    let productElement = item;
    const foundItem = cart.find((el) => el.product === productElement.product)
    if (!foundItem) {
      const newItems = [...cart, { ...productElement, contador, comments, finalPrice: productElement.price * contador }]
      setCart(newItems);
      setTotal(calculeTotal(newItems))
    } else {
      const newItems = cart.map(item => item.product === productElement.product 
        ? {...item, contador: contador + item.contador, finalPrice: item.price * (contador + item.contador) }
        : item 
      )
      setCart(newItems);
      setTotal(calculeTotal(newItems))
    }
  }
  // Poblar el carrito
  //const cartItems = () => {   
  //};
  // Funcionalidad del contador
  function sumar() {
    setContador(contador + 1);
  }
  function restar() {
    setContador(contador !== 0 ? contador - 1 : contador);
  }
  // Agregar comentarios
  const handleComments = (event) => {
    setComments(event.target.value);
  };
  const addComments = () => {
    setComments("");
  };
  // // Precio final del pedido
  
  console.log("precio final", item.price * contador);
  const dialog = useDialog();
  // const [value, setValue] = useState();
  return (
    <ModalContainer>
      <ModalImgContainer src={item.image} alt="img"></ModalImgContainer>
      <ModalH2>{item.product}</ModalH2>
      <ModalP>{item.description}</ModalP>
      <ModalH4>${contador * item.price}MXN</ModalH4>
      <ModalInput
        placeholder="Topping/Comentarios adicionales"
        onChange={handleComments}
        id="comments"
      ></ModalInput>
      <ModalCount>
        <ModalCountBtn
          onClick={() => {
            restar();
          }}
        >
          -
        </ModalCountBtn>
        <div>{contador}</div>
        <ModalCountBtn
          onClick={() => {
            sumar();
          }}
        >
          +
        </ModalCountBtn>
      </ModalCount>
      <ModalButton
        onClick={() => {
          // Сlose the dialog and return the value
          dialog.close();
          //total ();
          cartItems();
          addComments();
        }}
      >
        Agregar producto
      </ModalButton>
    </ModalContainer>
  );
}
export default Modal;
