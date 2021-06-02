//formulario para recoger
import React, { Fragment, useState } from "react";
// import FormNav from "../../FormNav/FormNav";
import { BrowserRouter as Router, Switch, Route,  Link } from "react-router-dom";
import {
  PickP,
  IconReturn,
  FormDiv,
  FormName,
  PickUpInfo,
  FormPhonePick,
  FormCommentsPick,
  FormBtnPick,
  FormSubtotal,
  FormEnv,
  PickUpCost,
  FormTotal,
  Date,
  Hour
} from "./PickUpElements";

const PickUpForm = ({cart, setCart, total, setTotal}) => {
  console.log('cartpickup', cart)
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

  //WA FUNCTION
  function Whatsapp(e) {
    e.preventDefault();
    let restaurantNumber = 525531345330;
    let product = cart.map ((product) => product.product )
    let contador = cart.map ((product) => product.contador)
    let subTotal = total;
    let message = "¡Hola Burri.Co! mi pedido es el siguiente:";
    let destinatary = ". Es a nombre de:";
    let phone = ". Mi número de contacto es:" ; 
    let time = ". Quiero recogerlo a las:";
    let date = ", del:";
    let comentario = ". Comentarios extra:";
    let numProduct = ". Número de productos";
    let subtotal = ". Subtotal:";
    let totalCart = ". Total:";
    let concatenar = message + ' ' 
        + product + ' ' + destinatary + ' ' +
        dataClient.name +
        " " + time + ' ' +
        dataClient.hour +
        " " + date + ' ' +
        dataClient.date +
        " " + phone + ' ' +
        dataClient.phone +
        " " +comentario + ' '+
        dataClient.commments +
        " " + numProduct + ' '+
        contador+
        " " +subtotal+' '+
        subTotal +
        // " " + totalCart +
        // subTotal
      console.log(concatenar, 'conca');
        console.log(concatenar.replace(/\s/gi, "%20"))
    // Modificando espacios en blanco
    let remplazandoEspacios = concatenar.replace(/\s/gi, "%20");
    console.log("remplazarEspaciosURL", remplazandoEspacios);
    let url = `https://wa.me/${restaurantNumber}?text=${remplazandoEspacios}`;
    console.log("url final", url);
  }

  return (
    <Fragment>
      <Link to="/" style={{textDecoration: 'none'}}>
					<IconReturn />
					<PickP>Menú principal</PickP>
				</Link>
      <form onSubmit={Whatsapp}>
        <FormDiv>
          <FormName type="text" name="name" placeholder="Nombre" onChange={handleInputChange} />
          <PickUpInfo>
            <Date name="date" type="date" min="2021-06-02" max="2021-12-31" step="1" onChange={handleInputChange}></Date>
            <Hour name="hour" type="time" min="10:00" max="21:00" step="3600" onChange={handleInputChange}></Hour>
          </PickUpInfo>
          
          <FormPhonePick type="text" name="phone" placeholder="Teléfono" onChange={handleInputChange}  />
          <FormCommentsPick
            type="text"
            name="commments"
            placeholder="Comentarios"
          />
          <PickUpCost>
            <FormSubtotal type="number" name="subtotal" onChange={handleInputChange}>Subtotal: ${total}MXN</FormSubtotal>
            <FormEnv type="number" name="subtotal" onChange={handleInputChange}>Costo de envío: ${0}MXN</FormEnv>
            <FormTotal>Total: ${total}MXN</FormTotal>
          </PickUpCost>
          
        </FormDiv>
        {/* <h2 type="number" name="total">Total: ${0}</h2> */}
        <FormBtnPick type="submit" >Confirmar pedido</FormBtnPick>
      </form>
    </Fragment>
  );
};
export default PickUpForm;
