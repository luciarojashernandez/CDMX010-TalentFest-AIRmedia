import React from "react";
import {
  MenuContent,
  MenuProduct,
  MenuImage,
  MenuP,
  MenuDescripcion,
  MenuPrice,
} from "./MenuElements";
import Modal from "../../Components/Modal/Modal";
import { CustomDialog } from 'react-st-modal';
import { ProductButton } from "./MenuElements";

const Menu = ({
  item,
  listProducts,
  showModal,
  setShowModal,
  cart,
  setCart,
}) => {
  //constante que guarda las propiedades del estado de los items
  const { product, price, description, image, id } = item;

  return (
    <MenuContent>
      <ProductButton onClick={async () => {
      const result = await CustomDialog(
        <Modal item={item}/>,
        {
          title: '',
          showCloseIcon: true,
        }
      );
      console.log("result",result);
    }}>
        <MenuProduct key={id}>
          <MenuImage src={image} alt="imagen" />
          <MenuP>{product}</MenuP>
          <MenuDescripcion>{description}</MenuDescripcion>
          <MenuPrice>$ {price} MXN</MenuPrice>
        </MenuProduct>
      </ProductButton>
    </MenuContent>
  );
};

export default Menu;
