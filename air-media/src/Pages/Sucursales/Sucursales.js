import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Slider from "../../Components/Carousel";
import {
  SucContent,
  SucHeader,
  SucLogo,
  SucSearch,
  SucPromo,
  SucTitle,
  SucStores,
  SucStore,
  SucText,
  SucPstore,
  SucPfood,
  SucFooter,
  IconHome,
  IconLike,
  IconUser,
  IconSearch
} from "./SucursalesElements";
import Logo from "../../Assets/Images/logo.png";
// import { FaSearch, FaHome, FaHeart, FaUserCircle } from "react-icons/fa";
function Home({ data }) {
  const stores = data.filter((item) => item.type === "sucursal");
  // let iconStyles = { color: "#E85D17", fontSize: "1.5em" };
  return (
    <Fragment>
      <SucContent>
        <SucHeader>
          {/* <SucFooter/> */}
          <SucLogo src={Logo} alt="logo" />
          <IconSearch/>
          <SucSearch type="text" name="name">
          </SucSearch>
        </SucHeader>
        <SucPromo>
          <Slider />
        </SucPromo>
        <SucTitle>¡Conoce nuestras sucursales!</SucTitle>
        <SucStores>
          {stores.map((store) => (
            <SucStore key={data.id}>
              <Link to="/menu-burrico">
                <img src={store.background} alt="imagen" />
              </Link>
              <SucText>
                <SucPstore>{store.store}</SucPstore>
                <SucPfood>{store.food}</SucPfood>
              </SucText>
            </SucStore>
          ))}
        </SucStores>
        <SucFooter>
          <IconHome/>
          <IconLike/>
          <IconUser/>
        </SucFooter>
      </SucContent>
    </Fragment>
  );
}
export default Home;
