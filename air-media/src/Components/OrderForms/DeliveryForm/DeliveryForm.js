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
  DeliveryDate,
  SelectDate,
  DeliveryPay,
  DeliveryRadio,
  DeliveryInput,
  DeliveryPhone,
  DeliveryComments,
  FormBtnDelivery,
  DeliverySubtotal,
  DeliveryEnv,
  Date,
  Hour
} from "./DeliveryElements";

const DeliveryForm = ({cart, setCart}) => {
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

	const getProduct = (cart) => {
		let message = "¡Hola Burri.Co! quiero ordenar:";
		let num = "número de productos";


		let product = cart.map ((product) => product.product )
		let contador = cart.map ((product) => product.contador)
		let subTotal = cart.map ((product) => product.finalPrice)

		console.log('orden', product)
		console.log('orden', contador)
		// console.log('orden', finalPrice)
		
		let orden = message + ' ' + product + ' ' + num + ' ' + contador + subTotal
		console.log('ordenFinal', orden)
		// sendData(orden)
	}
	getProduct(cart)

	const sendData = (e) => {

		// const getProduct = (cart) => {
		// 	let message = "¡Hola Burri.Co! quiero ordenar:";
		// let num = "número de productos";


		// let product = cart.map ((product) => product.product )
		// let contador = cart.map ((product) => product.contador)
		// let subTotal = cart.map ((product) => product.finalPrice)

		// console.log('orden', product)
		// console.log('orden', contador)
		// // console.log('orden', finalPrice)
		
		// let orden = message + ' ' + product + ' ' + num + ' ' + contador + subTotal
		// console.log('ordenFinal', orden)
			
		// }
		// console.log('hola', getProduct)
		// console.log('orden de funcion', orden)
	
    //evitar el envío automático
    e.preventDefault();
		// let restaurantNumber = 525531345330;
		let message = "¡Hola Burri.Co! quiero ordenar:";
		let destinatary = " a nombre de:";
		let address = "con punto de entrega en:"
		let pay = "mi pago es:"
		let phone = "mi número es:"		
		let time = "a las:"
		let date = "del:"
    let urlData = message + ' ' 
				+ cart + ' ' + destinatary + ' ' +
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
        " " +
        dataClient.commments +
        " " +
        dataClient.subtotal +
        " " +
        dataClient.total
			
				console.log(urlData.replace(/\s/gi, "%20"))
    ;
  };



  //WA FUNCTION
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
		<Link to="/" style={{textDecoration: 'none'}}>
					<IconReturn />
					<DeliveryP>Menú principal</DeliveryP>
				</Link>
		<form onSubmit={sendData}>
		<DeliveryDiv>
			<DeliveryName type="text" name="name" placeholder="Nombre" onChange={handleInputChange}/>
			<DeliveryAdress type="text" name="adress" placeholder="Domicilio" onChange={handleInputChange}/>
			<DeliveryDate name="date" type="date" min="2021-06-02" max="2021-12-31" step="1" onChange={handleInputChange}></DeliveryDate>
			<Hour name="hour" type="time" min="10:00" max="21:00" step="3600" onChange={handleInputChange}></Hour>
			<DeliveryPay> Forma de pago </DeliveryPay>
			<DeliveryRadio>
				<DeliveryInput type="radio" value="Efectivo" name="pagoEfectivo" onChange={handleInputChange} />
				<label for="huey">Efectivo</label>
				<DeliveryInput type="radio" value="PagoLinea" name="pagoLinea" onChange={handleInputChange} />
				<label for="huey">Pago en línea</label>
			</DeliveryRadio>
			<DeliveryPhone type="text" name="phone" placeholder="Teléfono" onChange={handleInputChange} />
			<DeliveryComments type="text" name="commments" placeholder="Comentarios" onChange={handleInputChange}/>
			<DeliverySubtotal type="number" name="subtotal">
					Subtotal ${0}MXN
				</DeliverySubtotal>
				<DeliveryEnv type="number" name="envio">
					Costo de envío ${30}MXN
				</DeliveryEnv>
				{/* <h2 type="number" name="total">Total: ${0}</h2> */}
		</DeliveryDiv>
		<FormBtnDelivery type="submit" >Confirmar pedido</FormBtnDelivery>
		</form>
	</Fragment>
  );
};

export default DeliveryForm;

// Comentario