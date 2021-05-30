import { useDialog } from "react-st-modal";
import React, {useState} from "react";
import { ModalContainer, 
  ModalImgContainer, 
  ModalH2, ModalP, ModalH4, ModalInput, ModalButton } from "./ModalElements";


function Modal({item}) {	
	// Estado contador
	const [contador, setContador] = useState(0);

	function sumar() {
    setContador(contador + 1);
  };
  function restar() {
    setContador(contador !== 0 ? contador - 1 : contador);
  };

  console.log('item modal', item);
  const dialog = useDialog();
 
  // const [value, setValue] = useState();
 
  return (
		<ModalContainer>
		<ModalImgContainer src={item.image} alt="img"></ModalImgContainer>
		<ModalH2>{item.product}</ModalH2>
		<ModalP>{item.description}</ModalP>
		<ModalH4>${item.price}MXN</ModalH4>
		<ModalInput placeholder="Topping/Comentarios adicionales"></ModalInput>
		<div>
				<button onClick={restar}>-</button>
				<div>{contador}</div>
				<button onClick={sumar}>+</button>
			</div>
		<ModalButton
			onClick={() => {
				// Сlose the dialog and return the value
				dialog.close();
			}}
		>
			Agregar producto
		</ModalButton>
	</ModalContainer>
);
}

export default Modal;

