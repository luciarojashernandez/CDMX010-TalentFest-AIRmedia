import React, {useState} from "react";
import {
  MenuContent,
  MenuProduct,
  MenuImage,
  MenuP,
  MenuDescripcion,
  MenuPrice,
} from "./MenuElements";
//import ModalC from "../../Components/Modal/Modal";
// import { CustomDialog } from 'react-st-modal';
import { ProductButton } from "./MenuElements";
import {Modal, Button} from 'react-bootstrap'
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
} from "../../Components/Modal/ModalElements";

const Menu = ({
  item,
  cart,
  setCart,
  //hasta aqui control z
  setTotal
}) => {
  //constante que guarda las propiedades del estado de los items
  const { product, price, description, image, id } = item;
  
  const [show, setShow] = useState(false);
  const [contador, setContador] = useState(1);
  const [comments, setComments] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function calculeTotal (items) {
    return items.reduce(
      (sum, i) => sum + i.contador * i.price,
      0
    );
  }
    // Precio final del pedido
    // function cartItems() {
    //   // console.log(`new`, finalPrice)
    //   let productElement = item;
    //   if (!cart.find((el) => el.product === productElement.product)) {
    //     setCart([...cart, { ...productElement, contador, comments, finalPrice }]);
    //   }
    // }

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


    // function sumar() {
    //   setContador(contador + 1);
    // }
    // function restar() {
    //   setContador(contador !== 0 ? contador - 1 : contador);
    // }
    // // Agregar comentarios
    // const handleComments = (event) => {
    //   setComments(event.target.value);
    // };
    // const addComments = () => {
    //   setComments("");
    // };
    // // // Precio final del pedido
    // function total() {
    //   setFinalPrice(item.price * (contador + 1));
    // }
    // console.log("finalprice", finalPrice);
    // console.log("precio final", item.price * contador);

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

// const [value, setValue] = useState();

  return (
    <MenuContent>
      {/* <ProductButton onClick={async () => {
      const result = await CustomDialog(
        <Modal item={item} cart={cart} setCart={setCart}/>,
        {
          title: '',
          showCloseIcon: true,
        }
      );
      // console.log("result",result);
    }}> */}
    <ProductButton onClick={handleShow}>
        <MenuProduct key={id}>
          <MenuImage src={image} alt="imagen" />
          <MenuP>{product}</MenuP>
          <MenuDescripcion>{description}</MenuDescripcion>
          <MenuPrice>$ {price} MXN</MenuPrice>
        </MenuProduct>
      </ProductButton>

      <ModalContainer>

        <Modal show={show} onHide={handleClose} animation={true}>

        <Modal.Body sty>
        <ModalImgContainer src={image} alt="img"></ModalImgContainer>
      <ModalH2>{product}</ModalH2>
      <ModalP>{description}</ModalP>
      <ModalH4>${contador * price}MXN</ModalH4>
      <ModalInput
        placeholder="Topping/Comentarios adicionales"
        id="comments"
        onChange={handleComments}
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
        
        </Modal.Body>
        
        <Modal.Footer>
          <ModalButton variant="secondary" onClick={() => {
            handleClose();
            cartItems();
          addComments();
          }}>
             Agregar producto
          </ModalButton>
        </Modal.Footer>
        
      </Modal>
      </ModalContainer>
      
    </MenuContent>
    
  );
};

export default Menu;
