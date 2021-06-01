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
  FormComments,
  FormBtnDelivery,
} from "../../../Pages/Form/FormElements";

const DeliveryForm = () => {
  function Whatsapp() {
    let restaurantNumber = 525531345330;

    // Info del cliente
    let cart = "1-hamburgesa-100,2-malteadas-500";
    let clientName = "Alejandra Garcia";
    let direccion = "San Miguel De Allende";
    let message = "¡Bienvenido a DARKITCHENS! Tu pedido actual es:";
		let destinatary = " A nombre de:";
		let address = "Con punto de entrega en:"

    // Concatenación
    let concatenar = message + '' + cart + ';' + destinatary + ' ' + clientName + ';' + ' ' + address + ' ' + direccion;

    // Modificando espacios en blanco
    let remplazandoEspacios = concatenar.replace(/\s/gi, "%20");
    console.log("remplazarEspaciosURL", remplazandoEspacios);
    let url = `https://wa.me/${restaurantNumber}?text=${remplazandoEspacios}`;
    console.log("url final", url);
  }
  Whatsapp();

  return (
    <Fragment>
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
      <FormBtnDelivery>Confirmar pedido</FormBtnDelivery>
    </Fragment>
  );
};

export default DeliveryForm;
