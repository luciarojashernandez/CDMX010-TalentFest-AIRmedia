import React, { Fragment } from "react";
import Logo from '../../Assets/Images/logo.png'
import {MenuLogo, MenuContent, MenuProduct, MenuImage, MenuP, MenuDescripcion} from './MenuElements'


const Menu = ({ data }) => {
  console.log(data);
  //   const { category, description, image, price, product, type } = item;

  //   if (item.type === "producto") {
  const products = data.filter((item) => item.type === "product");
  //console.log(products);
  return (
      <MenuContent>			
			<MenuLogo src={Logo} alt="logo"/>
				    

      {products.map((product) => (
				<MenuProduct key={data.id}>
					<MenuImage src={product.image} alt="imagen"/>
					 <MenuP>{product.product}</MenuP>
					 <MenuDescripcion>{product.description}</MenuDescripcion>
                  
          <p>${product.price}</p>
        
				</MenuProduct>    
         
      ))}
    </MenuContent>
  );
};

export default Menu;
