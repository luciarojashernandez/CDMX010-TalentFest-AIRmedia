//formulario para recoger
import React, { Fragment } from "react";
// import FormNav from "../../FormNav/FormNav";
import {
  FormDiv,
  FormName,
  FormDatePick,
  SelectDatePick,
  FormPhonePick,
  FormCommentsPick,
  FormBtnPick,
  FormSubtotal,
  FormEnv,
} from "../../../Pages/Form/FormElements";
const PickUpForm = () => {
  return (
    <Fragment>
      {/* <FormNav /> */}
      <FormDiv>
        <FormName type="text" name="name" placeholder="Nombre" />
        <FormDatePick> Día y hora para recibir </FormDatePick>
        <SelectDatePick type="datetime-local" />
        <FormPhonePick type="text" name="phone" placeholder="Teléfono" />
        <FormCommentsPick
          type="text"
          name="commments"
          placeholder="Comentarios"
        />
        <FormSubtotal>Subtotal $200MXN</FormSubtotal>
        <FormEnv>Costo de envio $0MXN</FormEnv>
      </FormDiv>
      <FormBtnPick>Confirmar pedido</FormBtnPick>
    </Fragment>
  );
};
export default PickUpForm;
