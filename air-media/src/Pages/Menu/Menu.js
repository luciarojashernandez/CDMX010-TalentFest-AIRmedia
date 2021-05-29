import React from "react";
import Logo from '../../Assets/Images/logo.png';
import {MenuLogo, MenuContent, MenuProduct, MenuImage, MenuP, LogoDiv, MenuDescripcion, MenuPrice, SucPromo, InfoDiv, MenuBurrico, InfoRestaurant, InfoSuc, InfoDirection, Insta, InstaRef  } from './MenuElements';
import Slider from "../../Components/Carousel";
import Burrico from '../../Assets/Images/burrico.png';
import Instagram from '../../Assets/Images/insta.png';


const Menu = ({ data }) => {
  console.log(data);
  const products = data.filter((item) => item.type === "product");
 
  return (
      <MenuContent>
			<LogoDiv>
				<MenuLogo src={Logo} alt="logo"/>
			</LogoDiv>
			<InfoDiv>
				<MenuBurrico src={Burrico} alt='logo burrico'/>					
						<InfoRestaurant> Burri.Co </InfoRestaurant>		
						<InfoSuc> (Suc. Xochimilco) </InfoSuc>
						<InfoDirection> Prol. Canal de Miramontes 2053, Tlalpan,  CDMX. </InfoDirection> 
						<InstaRef href="https://www.instagram.com/burrico.mx/">
							<Insta src={Instagram} alt='instagram' href="https://www.instagram.com/burrico.mx/"/>
						</InstaRef>					
			</InfoDiv>
			<SucPromo>
        <Slider />
      </SucPromo>
      {products.map((product) => (
				<MenuProduct key={data.id}>
					<MenuImage src={product.image} alt="imagen"/>
					 <MenuP>{product.product}</MenuP>
					 <MenuDescripcion>{product.description}</MenuDescripcion>			
						 <MenuPrice>$ {product.price} MXN</MenuPrice>  
				</MenuProduct>         
      ))}
    </MenuContent>
  );
};

export default Menu;
