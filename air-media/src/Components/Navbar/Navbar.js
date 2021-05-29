import React from "react";
import Logo from "../../Assets/Images/logo.png";
import {
  MenuLogo,
  MenuContent,
  LogoDiv,
  InfoDiv,
  MenuBurrico,
  InfoRestaurant,
  InfoSuc,
  InfoDirection,
  Insta,
  InstaRef,
} from "./NavbarElements";
import Burrico from "../../Assets/Images/burrico.png";
import Instagram from "../../Assets/Images/insta.png";

const Navbar = () => {
  return (
    <MenuContent>
      <LogoDiv>
        <MenuLogo src={Logo} alt="logo" />
      </LogoDiv>
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

export default Navbar;
