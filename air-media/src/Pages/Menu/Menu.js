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
  showProduct,
  setShowProduct,
  //data,
  setShowModal,
  showModal,
  listProducts,
  //setListProducts,
  //cart,
  //setCart,
  item,
}) => {
  console.log(listProducts, 'ListP');
    //Guardar en una constante todos los parámetros para cada item
  const { product, price, description, image } = item;
  console.log(item, 'item');
  // console.log(data);
  //const products = data.filter((item) => item.type === "product");
  const openModal = (id) => {
    setShowModal((prev) => !prev);
    addInfoItem(id);
  };

  const addInfoItem = (id)=>{
    const item = listProducts.filter((item) => item.id === id);
    setShowProduct([...showProduct, ...item]);
  };

  

  return (
    <MenuContent>
     
      {/* {products.map((product) => ( */}     
			<ProductButton onClick={()=>openModal()} >
        <MenuProduct key={item.id}>
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
