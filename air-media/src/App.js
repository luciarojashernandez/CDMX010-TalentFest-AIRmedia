import React, { useState, useEffect } from "react";
import firebase from "./Firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Pages/Menu/Menu";
import Form from "./Pages/Form/Form";
import Sucursales from "./Pages/Sucursales/Sucursales";
import Slider from "./Components/Carousel";
import Navbar from "./Components/Navbar/Navbar";
import { SucPromo, MenuSearch } from "./Components/Navbar/NavbarElements";
import FloatButton from "./Components/FloatButton/FloatButton";

function App() {
  // Obtener la data de las colecciones en Firebase
  const [data, setData] = useState([]);
  // constante con estado inicial=Listado de productos del menu
  const [listProducts, setListProducts] = useState([]);
  //cargo de data
  const [loading, setLoading] = useState(false);
  //muestra el espacio vacío del modal
  const [showModal, setShowModal] = useState(false);
  //muestra productos en carrito
  const [cart, setCart] = useState([]);

  console.log("cartMenu", cart);

  const ref = firebase.firestore().collection("Burrico");

  function getData() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoading(false);
      setListProducts(items.filter((element) => element.type === "product"));
    });
  }

  useEffect(() => {
    getData();
  }, []);

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
          <MenuSearch type="text" name="name" />
          {listProducts.map((item) => (
            <Menu
              key={item.id}
              item={item}
              listProducts={listProducts}
              showModal={showModal}
              setShowModal={setShowModal}
              cart={cart}
              setCart={setCart}
            />
          ))}
          {cart.length === 0 ? <p></p> : <FloatButton />}
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
