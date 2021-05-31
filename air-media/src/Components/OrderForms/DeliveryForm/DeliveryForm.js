//formulario de envio
import React, { Fragment } from "react";
// import FormNav from "../../FormNav/FormNav";
import {
    FormDiv,
    FormName,
    FormAdress,
    FormDate,
    SelectDate,
    FormPay,
    FormRadio,
    FormInput,
    FormPhone,
    FormComments
  } from "../../../Pages/Form/FormElements";

const DeliveryForm = () => {
  return (
    <Fragment>
      {/* <FormNav /> */}
      <FormDiv>
        <FormName type="text" name="name" placeholder="Nombre" />
        <FormAdress type="text" name="name" placeholder="Domicilio" />
        <FormDate> Día y hora para recibir </FormDate>
        <SelectDate type="datetime-local" />
        <FormPay> Forma de pago </FormPay>
        <FormRadio>
          <FormInput type="radio" value="Efectivo" />
          <label for="huey">Efectivo</label>
          <FormInput type="radio" value="PagoLinea" />
          <label for="huey">Pago en línea</label>
        </FormRadio>
        <FormPhone type="text" name="phone" placeholder="Teléfono" />
        <FormComments type="text" name="commments" placeholder="Comentarios" />
      </FormDiv>
      <button>Confirmar pedido</button>
    </Fragment>
  );
};

export default DeliveryForm;
