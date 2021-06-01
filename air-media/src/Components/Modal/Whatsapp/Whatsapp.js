// // Ejemplo
// // https://wa.me/5531345330?text=Pedio%20del%20d%C3%ADa

// let url = "https://wa.me/{number}?text={pedido}"
// let restaurantNumber = 5531345330

// // Obtener los datos del formualrio
// let cart = "1-hamburgesa-100,2-malteadas-500"
// let clientName = "Alejandra García"
// let direccion = "Paseo de la reforma"

// // Concatenamos la informacion

// let concatenar = cart + clientName + direccion;

// // Remplazamos los caracteres esoeciales

// let remplazandoEspacios = concatenar.replace('%20', ' ')
// let remplazandoInformación = url.replace('{number}', 'restaurantNumber')
// let remplazamosOrden = url.replace('{pedido}', '{direccion}')

// // Referenciamos esta variable en un botón

// <button href={url}>Solicitar pedido con whatsapp</button>