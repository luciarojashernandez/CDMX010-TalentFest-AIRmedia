//formulario de envio
import React, { Fragment, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
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
  FormSubtotal,
  FormEnv,
} from "../../../Pages/Form/FormElements";

const DeliveryForm = (cart, setCart, item) => {

 const [updateFinalCart, setUpdateFinalCart ] = useState(cart);


//DATE & HOUR FUNCTION
  const [value, onChange] = useState('10:00');
  const [selectedDate, setSelectedDate] = useState(null);  

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
  const sendData = (e) => {
    //evitar el envío automático
    e.preventDefault();
    console.log(dataClient.name +
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

  const updateInfoCart = ()=>{
    const dataForm = setDataClient;
    setCart({...cart, dataForm})
  }
  console.log(updateInfoCart, 'funciona');
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
      <form onSubmit={sendData}>
      <FormDiv>
        <FormName type="text" name="name" placeholder="Nombre" onChange={handleInputChange}/>
        <FormAdress type="text" name="adress" placeholder="Domicilio" onChange={handleInputChange}/>
        {/* <FormDate> Día y hora para recibir </FormDate>
        <SelectDate type="datetime-local" /> */}
        <DatePicker
         name="date"
         selected={selectedDate}
         onChange={date => setSelectedDate(date)}
         placeholderText='dd/mm/aaaa'
         minDate={new Date()}
         filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
         isClearable
         dateFormat="dd/MM/yyyy"     
         />
         <TimePicker
        name="hour"
         onChange={onChange}
         value={value}
         minutePlaceholder="h:mm"
        />
        <FormPay> Forma de pago </FormPay>
        <FormRadio>
          <FormInput type="radio" value="Efectivo" name="pagoEfectivo" onChange={handleInputChange} />
          <label for="huey">Efectivo</label>
          <FormInput type="radio" value="PagoLinea" name="pagoLinea" onChange={handleInputChange} />
          <label for="huey">Pago en línea</label>
        </FormRadio>
        <FormPhone type="text" name="phone" placeholder="Teléfono" onChange={handleInputChange} />
        <FormComments type="text" name="commments" placeholder="Comentarios" onChange={handleInputChange}/>
        <FormSubtotal type="number" name="subtotal">
            Subtotal ${0}MXN
          </FormSubtotal>
          <FormEnv type="number" name="envio">
            Costo de envío ${30}MXN
          </FormEnv>
          {/* <h2 type="number" name="total">Total: ${0}</h2> */}
      </FormDiv>
      <FormBtnDelivery type="submit" >Confirmar pedido</FormBtnDelivery>
      </form>
    </Fragment>
  );
};

export default DeliveryForm;
