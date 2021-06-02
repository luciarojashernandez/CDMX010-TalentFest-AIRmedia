import { useDialog } from "react-st-modal";
import React from "react";
import {  useHistory } from "react-router-dom";
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


function ModalCart({ cart, setCart, total, setTotal, history }) {
  const dialog = useDialog();

  function calculeTotal (items) {
    return items.reduce(
      (sum, i) => sum + i.contador * i.price,
      0
    );
  } 

  const deleteProduct = (id) => {
    console.log('deelteProduct', id)
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
    setTotal(calculeTotal(newCart))
    
    // console.log('item', item.id)
    // let product = cart.splice(item => item.id !== cartId)
    // setCart(product)
    // console.log('product', product)
  };

  //Contador de carrito

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
    <ModalContainer>
      <br></br>      
			<h1>Pedido</h1>		
      <ModalCartContainer>
        {console.log('items', cart) || cart.map((elemento) => {
          // {total += item.contador * item.price}
          return (
            <ModalCartProduct key={elemento.product}>
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
            </ModalCartProduct>
          );
        })}
        <ModalCartInput placeholder="Comentarios adicionales"></ModalCartInput>
        <ModalSubtotal>SubTotal:{total}</ModalSubtotal>
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
          <ModalBtnContinue onClick={() => history.push('/formulario-burrico')}>Continuar</ModalBtnContinue>
      </ModalCartBtns>
			</DivButtons>	
    </ModalContainer>
  );
}
export default ModalCart;