import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Slider from "../../Components/Carousel";
import { SucHeader, SucContainer, SucPromo, SucTitle, SucStore, SucTextLocation, SucFooter, } from "./SucursalesElements";

function Home({ data }) {
  const stores = data.filter((item) => item.type === "sucursal");

  return (
    <Fragment>
      <SucContainer>
          <SucHeader>
            {/* aQUÍ VA EL LOGO */}
          </SucHeader>
          <SucPromo>
            <Slider />
          </SucPromo>
          <SucTitle>Conoce nuestras sucursales</SucTitle>
          <SucStore>
            {stores.map((store) => (
              <div key={data.id}>
                 <Link to="/menu-burrico" >
                   <img src={store.background} alt="imagen" />
                </Link>
                <SucTextLocation>{store.store}</SucTextLocation>
                <p>{store.food}</p>
              </div>
            ))}
          </SucStore>
        <SucFooter></SucFooter>
      </SucContainer>
    </Fragment>
  );
}

export default Home;
