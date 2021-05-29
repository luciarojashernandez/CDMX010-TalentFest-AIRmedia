import React, { Fragment } from "react";

const Menu = ({ data }) => {
  console.log(data);
  //   const { category, description, image, price, product, type } = item;

  //   if (item.type === "producto") {
  const products = data.filter((item) => item.type === "product");
  //console.log(products);
  return (
    <Fragment>
      <h1>Menu de burrico</h1>
      {products.map((product) => (
        <div key={data.id}>
          <img src={product.image} alt="imagen" />
          <h3>{product.product}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </Fragment>
  );
};

export default Menu;
