import React,{useState} from 'react';
import {Button, DivButton} from "./FloatButtonElements";
import { Link } from "react-router-dom";
// import ModalCart from '../Modal/ModalCart'
// import { CustomDialog } from 'react-st-modal';
import {Modal} from 'react-bootstrap'
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
} from "../../Components/Modal/ModalElements";

const FloatButton = ({
  cart, 
  setCart, 
  total, 
  setTotal 
  //contol z
}) => {

	const condition = true;
	const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function calculeTotal (items) {
    return items.reduce(
      (sum, i) => sum + i.contador * i.price,
      0
    );
  } 
  
  const deleteProduct = (id) => {
    
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
    setTotal(calculeTotal(newCart));
  };

  //función sumar y restar de los botones
  function sum(oldItem) {
    const newItems = cart.map(item => item.id === oldItem.id 
      ? {...item, contador: 1 + item.contador, finalPrice: item.price * (1 + item.contador) }
      : item 
    )
    setCart(newItems);
    setTotal(calculeTotal(newItems))
  }
  
  function subtraction(oldItem) {
    if (oldItem.contador === 1) {
      deleteProduct(oldItem.id)
    } else {
      const newItems = cart.map(item => item.id === oldItem.id 
        ? {...item, contador: item.contador -1, finalPrice: item.price * (item.contador -1) }
        : item 
      )
      setCart(newItems);
      setTotal(calculeTotal(newItems))
    }
  }
  
	return (
    <>
		<DivButton>
			{condition ? 
      <Button onClick={handleShow}> Ver carrito </Button> : null}
		</DivButton>	

    <ModalContainer>
    {/* <br></br>      
			<h1>Pedido</h1> */}
      <Modal show={show} onHide={handleClose}>
      <Modal.Header>
          <Modal.Title>Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ModalCartContainer>
        {cart && cart.map((elemento) => {
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
                  subtraction(elemento);
                }}
              >
                -
              </ModalCountBtn>
              <div>{elemento.contador}</div>
              <ModalCountBtn
                onClick={() => {
                  // total();
                  sum(elemento);
                }}
              >
                +
              </ModalCountBtn>
              </ModalCartCount>
              {/* <ModalCartQty>Productos: {elemento.contador}</ModalCartQty> */}
            </ModalCartProduct>
          );
        })}
        <ModalCartInput placeholder="Comentarios adicionales"></ModalCartInput>
        <ModalSubtotal>SubTotal:{total}</ModalSubtotal>
      </ModalCartContainer>
        </Modal.Body>
          <DivButtons>
      <ModalCartBtns>
        <ModalBtnCancel
           onClick={handleClose}
        >
          Cancelar
        </ModalBtnCancel>
        <Link to="/formulario-burrico">
          <ModalBtnContinue>Continuar</ModalBtnContinue>
        </Link>
      </ModalCartBtns>
			</DivButtons>	
      </Modal>
    </ModalContainer>
    
</>
	);
}

export default FloatButton;
