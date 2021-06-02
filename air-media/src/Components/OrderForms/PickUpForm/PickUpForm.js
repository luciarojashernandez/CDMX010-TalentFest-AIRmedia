//formulario para recoger
import React, { Fragment, useState } from "react";
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

const PickUpForm = (cart, setCart, item) => {

  console.log(cart, 'cart en form');
  //FORM STATE
  //Se crea un estado vacío para ir llenando
  const [dataClient, setDataClient] = useState({
    name: "",
    adress: "",
    date: "",
    pagoEfectivo: "",
    pagoLinea: "",
    phone: 0,
    commments: "",
    subtotal: 0,
    envio:0,
    total: 0,
  });

  //Se obtienen la relación de datos desde el evento (onChange)
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setDataClient({
      ...dataClient,
      [e.target.name]: e.target.value,
      [e.target.adress]: e.target.value,
      [e.target.date]: e.target.value,
      [e.target.pagoEfectivo]: e.target.value,
      [e.target.pagoLinea]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.commments]: e.target.value,
      [e.target.subtotal]: e.target.value,
      [e.target.envio]: e.target.value,
      [e.target.total]: e.target.value,
    });
  };

  const sendData = (e) => {
    //evitar el envío automático
    e.preventDefault();
    console.log(
      dataClient.name +
        "_" +
        dataClient.adress +
        "_" +
        dataClient.date +
        "_" +
        dataClient.pagoEfectivo +
        "_" +
        dataClient.pagoLinea +
        "_" +
        dataClient.phone +
        "_" +
        dataClient.commments +
        "_" +
        dataClient.subtotal +
        "_" +
        dataClient.total
    );
  };

  return (
    <Fragment>
      <form onSubmit={sendData}>
        <FormDiv>
          <FormName type="text" name="name" placeholder="Nombre" onChange={handleInputChange} />
          <FormDatePick> Día y hora para recibir </FormDatePick>
          <SelectDatePick type="datetime-local" name="date" onChange={handleInputChange} />
          <FormPhonePick type="text" name="phone" placeholder="Teléfono" onChange={handleInputChange}  />
          <FormCommentsPick
            type="text"
            name="commments"
            placeholder="Comentarios"
          />
          <FormSubtotal type="number" name="subtotal" onChange={handleInputChange}>Subtotal ${0}MXN</FormSubtotal>
          <FormEnv type="number" name="subtotal" onChange={handleInputChange}>Costo de envío ${0}MXN</FormEnv>
        </FormDiv>
        {/* <h2 type="number" name="total">Total: ${0}</h2> */}
        <FormBtnPick type="submit" >Confirmar pedido</FormBtnPick>
      </form>
    </Fragment>
  );
};
export default PickUpForm;
