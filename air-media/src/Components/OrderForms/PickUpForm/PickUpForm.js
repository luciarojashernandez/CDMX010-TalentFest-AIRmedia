//formulario para recoger
import React, { Fragment } from 'react';
// import FormNav from "../../FormNav/FormNav";
import {
    FormDiv,
    FormName,
    FormDate,
    SelectDate,
    FormPhone,
    FormComments
  } from "../../../Pages/Form/FormElements";

const PickUpForm = () => {
    return (
        <Fragment>
            {/* <FormNav /> */}
      <FormDiv>
        <FormName type="text" name="name" placeholder="Nombre" />
        <FormDate> Día y hora para recibir </FormDate>
        <SelectDate type="datetime-local" />
        <FormPhone type="text" name="phone" placeholder="Teléfono" />
        <FormComments type="text" name="commments" placeholder="Comentarios" />
      </FormDiv>
      <button>Confirmar pedido</button>
        </Fragment>
    );
}

export default PickUpForm;