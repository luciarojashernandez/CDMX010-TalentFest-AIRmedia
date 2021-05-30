import React, { useState, useEffect } from "react";
import firebase from "./Firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Pages/Menu/Menu";
import Form from "./Pages/Form/Form";
import Sucursales from "./Pages/Sucursales/Sucursales";
import Slider from "./Components/Carousel";
import Navbar from "./Components/Navbar/Navbar";
import { SucPromo, MenuSearch } from "./Components/Navbar/NavbarElements";

function App() {
  // Obtener la data de las colecciones en Firebase
  const [data, setData] = useState([]);
  //cargo de data
  const [loading, setLoading] = useState(false);
  //muestra el espacio vacío del modal
  const [showModal, setShowModal] = useState(false);
  //estado para mostrar datos por producto
  const [showProduct, setShowProduct] = useState([]);
  //muestra productos en carrito
  const [cart, setCart] = useState([]);

  const ref = firebase.firestore().collection("Burrico");
  console.log(ref);

  function getData() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  // const getProducts=(data)=>{
  //   let products=[];
  //   data.forEach((item)=>{
  //     if(item.type === "product"){
  //       return products.push()
        
  //     }
      
  //   })
  //   console.log(products);
  // }
  // getProducts();

  const productsData = data.filter((item) => item.type === "product");
  console.log(productsData);
  //constante con estado inicial=Listado de productos
  const [listProducts, setListProducts] = useState([productsData]);
  console.log(listProducts);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      {/* Aqui se mete un Switch porque es lo que se va a renderizar segun el Path "Route" en el que nos encontremos */}
      <Switch>
        <Route path="/menu-burrico">
          <Navbar />
          <SucPromo>
            <Slider />
          </SucPromo>
					<MenuSearch type="text" name="name"/>					
          {productsData.map((item) => (
            <Menu
              // data={data}
              key={item.id}
              item={item}
              setShowProduct={setShowProduct}
              showProduct={showProduct}
              listProducts={listProducts}
              setListProducts={setListProducts}
              cart={cart}
              setCart={setCart}
            />
          ))}
          <showProduct
          showProduct={showProduct}/>
        </Route>
        <Route path="/formulario-burrico">
          <Form />
        </Route>
        <Route path="/">
          <Sucursales data={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
