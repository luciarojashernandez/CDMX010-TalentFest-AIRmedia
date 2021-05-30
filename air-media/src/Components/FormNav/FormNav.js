import React from "react";
import {
  MenuContent,  
	InfoDiv,
  MenuBurrico,
  InfoRestaurant,
  InfoSuc,
  InfoDirection,
  Insta,
  InstaRef,
} from "./FormNavElements";
import Burrico from "../../Assets/Images/burrico.png";
import Instagram from "../../Assets/Images/insta.png";
const FormNav = () => {
  return (
    <MenuContent>      
      <InfoDiv>
        <MenuBurrico src={Burrico} alt="logo burrico" />
        <InfoRestaurant> Burri.Co </InfoRestaurant>
        <InfoSuc> (Suc. Xochimilco) </InfoSuc>
        <InfoDirection>
          {" "}
          Prol. Canal de Miramontes 2053, Tlalpan, CDMX.{" "}
        </InfoDirection>
        <InstaRef href="https://www.instagram.com/burrico.mx/">
          <Insta
            src={Instagram}
            alt="instagram"
            href="https://www.instagram.com/burrico.mx/"
          />
        </InstaRef>
      </InfoDiv>
    </MenuContent>
  );
};
export default FormNav;