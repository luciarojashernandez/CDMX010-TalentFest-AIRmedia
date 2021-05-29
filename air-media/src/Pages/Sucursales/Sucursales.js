import React, { Fragment } from "react";

function Home({ data }) {
  const stores = data.filter((item) => item.type === "sucursal");

  return (
    <Fragment>
      <h1>Sucursales de Burrico</h1>

      <div>
        <h1>pruebas</h1>
        {stores.map((store) => (
          <div key={data.id}>
            <img src={store.background} alt="imagen" />
            <h3>{store.store}</h3>
            <p>{store.food}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default Home;
