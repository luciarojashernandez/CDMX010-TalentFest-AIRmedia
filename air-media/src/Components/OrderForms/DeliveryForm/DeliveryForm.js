//formulario de envio
import React, { Fragment, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import { BrowserRouter as Router, Switch, Route,  Link } from "react-router-dom";
import {
  IconReturn,
  DeliveryP,
  DeliveryDiv,
  DeliveryName,
  DeliveryAdress,
  SelectDate,
  DeliveryInfo,
  DeliveryPay,
  DeliveryRadio,
  DeliveryInput,
  DeliveryPhone,
  DeliveryComments,
  FormBtnDelivery,
  DeliverySubtotal,
  DeliveryEnv,
  DeliveryCost,
  DeliveryTotal,
  Date,
  Hour
} from "./DeliveryElements";

const DeliveryForm = ({cart, setCart, total, setTotal}) => {
 console.log('cartdelivery', cart)
	console.log('cart', cart)
	//FORM STATE
   //Se crea un estado vacío para ir llenando
   const [dataClient, setDataClient] = useState({
    name: "",
    adress: "",
    date: "",
    hour: "",
    pagoEfectivo: "",
    pagoLinea: "",
    phone: 0,
    commments: "",
    subtotal: 0,
    envio: 30,
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
      [e.target.hour]: e.target.value,
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
    let address = ". La dirección de entrega es:";
    let pay = ". Mi tipo de pago es:";
    let phone = ". Mi número de contacto es:" ; 
    let time = ". Quiero recibirlo a las:";
    let date = ", del:";
    let comentario = ". Comentarios extra:";
    let numProduct = ". Número de productos";
    let subtotal = ". Subtotal:";
    let totalCart = ". Total:";
    let concatenar = message + ' ' 
        + product + ' ' + destinatary + ' ' +
        dataClient.name +
        " " + address + ' ' +
        dataClient.adress +
        " " + time + ' ' +
        dataClient.hour +
        " " + date + ' ' +
        dataClient.date +
        " " + pay + ' ' +
        dataClient.pagoEfectivo +
        " " +
        dataClient.pagoLinea +
        " " + phone + ' ' +
        dataClient.phone +
        " " +comentario + ' '+
        dataClient.commments +
        " " + numProduct + ' '+
        contador+
        " " +subtotal+' '+
        subTotal +
        " " + totalCart +
        subTotal + 30
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
					<DeliveryP>Menú principal</DeliveryP>
				</Link>
		<form onSubmit={Whatsapp}>
		<DeliveryDiv>
			<DeliveryName type="text" name="name" placeholder="Nombre" onChange={handleInputChange}/>
			<DeliveryAdress type="text" name="adress" placeholder="Domicilio" onChange={handleInputChange}/>
        <DeliveryInfo>
          <Date name="date" type="date" min="2021-06-02" max="2021-12-31" step="1" onChange={handleInputChange}></Date>
			    <Hour name="hour" type="time" min="10:00" max="21:00" step="3600" onChange={handleInputChange}></Hour>
        </DeliveryInfo>
        <DeliveryPay> Forma de pago </DeliveryPay>
			<DeliveryRadio>
				<DeliveryInput type="radio" value="Efectivo" name="pagoEfectivo" onChange={handleInputChange} />
				<label for="huey">Efectivo</label>
				<DeliveryInput type="radio" value="PagoLinea" name="pagoLinea" onChange={handleInputChange} />
				<label for="huey">Pago en línea</label>
			</DeliveryRadio>
			<DeliveryPhone type="text" name="phone" placeholder="Teléfono" onChange={handleInputChange} />
			<DeliveryComments type="text" name="commments" placeholder="Comentarios" onChange={handleInputChange}/>
			<DeliveryCost>
        <DeliverySubtotal type="number" name="subtotal">
					Subtotal: ${total}MXN
				</DeliverySubtotal>
				<DeliveryEnv type="number" name="envio">
					Costo de envío: ${30}MXN
				</DeliveryEnv>
       <DeliveryTotal type="number" name="total">Total: ${total+30}MXN</DeliveryTotal>
      </DeliveryCost>
      
				{/* <h2 type="number" name="total">Total: ${0}</h2> */}
		</DeliveryDiv>
		<FormBtnDelivery type="submit" >Confirmar pedido</FormBtnDelivery>
		</form>
	</Fragment>
  );
};

export default DeliveryForm;
