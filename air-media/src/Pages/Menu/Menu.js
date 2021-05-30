import React from "react";
import {
  MenuContent,
  MenuProduct,
  MenuImage,
  MenuP,
  MenuDescripcion,
  MenuPrice 
} from "./MenuElements";
import Modal from "../../Components/Modal/Modal";
import { ProductButton } from "./MenuElements";

const Menu = ({
	item,
	cart,
	setCart,
	setListProducts,
	setShowModal,
	setShowProduct,
	listProducts,
  showProduct,
	showModal

  // setShowProduct,
  //data,
  // setShowModal,   
  //setListProducts,
  //cart,
  //setCart,  
}) => {
  // console.log(listProducts, 'ListP');
    //Guardar en una constante todos los parámetros para cada item
  const { product, price, description, image, id } = item;
  console.log(item, 'item');
  // console.log(data);
  //const products = data.filter((item) => item.type === "product");
  const openModal = (id) => {
    setShowModal((prev) => !prev);
    addInfoItem(id);
  };

  const addInfoItem = (id) => {
    const item = listProducts.filter((item) => item.id === id);
    setShowProduct([...showModal, ...item]);
  };

  

  return (
    <MenuContent>
     
      {/* {products.map((product) => ( */}     
			<ProductButton onClick={() => openModal(id)} >
        <MenuProduct key={id}>
          <MenuImage src={image} alt="imagen" />
          <MenuP>{product}</MenuP>
          <MenuDescripcion>{description}</MenuDescripcion>
          <MenuPrice>$ {price} MXN</MenuPrice>
        </MenuProduct>
			</ProductButton>
      
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </MenuContent>
  );
};

export default Menu;
