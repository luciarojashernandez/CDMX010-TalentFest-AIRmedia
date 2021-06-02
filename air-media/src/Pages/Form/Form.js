import React, { Fragment, useState } from "react";
import FormNav from "../../Components/FormNav/FormNav";
import { FormBtns, FormRequestBtn, FormPickUpBtn } from "./FormElements";
import DeliveryForm from "../../Components/OrderForms/DeliveryForm/DeliveryForm.js";
import PickUpForm from "../../Components/OrderForms/PickUpForm/PickUpForm.js";

function Form({cart, setCart, item}) {

  const [deliveryForm, setDeliveryForm] = useState(true);

  const handleSetDelivery = () => setDeliveryForm(true);
  const handleSetPickUp = () => setDeliveryForm(false);

  return (
    <Fragment>
      <FormNav />
      <FormBtns>
        <FormRequestBtn >
          Solicitar envío
        </FormRequestBtn>
        <FormPickUpBtn >Recoger pedido</FormPickUpBtn>
      </FormBtns>
      {deliveryForm ? <DeliveryForm item={item} cart={cart} setCart={setCart} onClick={handleSetDelivery}/> : <PickUpForm item={item} cart={cart} setCart={setCart} onClick={handleSetPickUp}/>}
    </Fragment>
  );
}
export default Form;
