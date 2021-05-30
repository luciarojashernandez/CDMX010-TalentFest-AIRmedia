import React, { Fragment } from "react";
import FormNav from "../../Components/FormNav/FormNav";
import {
  FormBtns,
  FormRequestBtn,
  FormPickUpBtn,
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
} from "./FormElements";

function Form() {
  return (
    <Fragment>
      <FormNav />
      <FormBtns>
        <FormRequestBtn>Solicitar envio</FormRequestBtn>
        <FormPickUpBtn>Recoger pedido</FormPickUpBtn>
      </FormBtns>
      <FormDiv>
        <FormName type="text" name="name" placeholder="Nombre" />
        <FormAdress type="text" name="name" placeholder="Dirección" />
        <FormDate> Día y hora para recibir </FormDate>
        <SelectDate type="datetime-local" />
        <FormPay> Forma de pago </FormPay>
		<FormRadio>
			<FormInput type="radio" value='Efectivo'/>
			<label for="huey">Efectivo</label>
			<FormInput type="radio" value='pagoLinea'/>
			<label for="huey">Pago en línea</label>
		</FormRadio>
		<FormPhone type="text" name="phone" placeholder="Teléfono"/>
		<FormComments type="text" name="commments" placeholder="comentarios"/>
	  </FormDiv>
    </Fragment>
  );
}
export default Form;
