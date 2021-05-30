// import React from "react";
// import { ModalContainer } from "./ModalElements";

// const Modal = ({ showModal, setShowModal, getProduct }) => {
//   // console.log('item?', getProduct[0].image)
//   console.log('item?', getProduct)
//   return <>{showModal ? <ModalContainer>{getProduct}</ModalContainer> : null}</>;
// };

// export default Modal;


import { useDialog } from "react-st-modal";
import React from "react";


function Modal({item}) {
  console.log('item modal', item);
  const dialog = useDialog();
 
  // const [value, setValue] = useState();
 
  return (
    <div>
      <img src={item.image} alt='img'></img>
      <h1>{item.product}</h1>
      <p>{item.description}</p>
      <input placeholder='Topping/Comentarios adicionales'></input>
      <button>Agregar producto</button>
      <button
        onClick={() => {
          // Сlose the dialog and return the value
          dialog.close();
        }}
      >Cerrar
      </button>
    </div>
  );
}

export default Modal;

