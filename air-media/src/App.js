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
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showProduct, setShowProduct] = useState([]);
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
  const productsData = data.filter((item) => item.type === "product");
  const [listProducts, setListProducts] = useState(productsData);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      {/* <div>
        <h1>Navbar</h1>
        <div>
          El link enlaza Paths o secciones que son muy útiles para botones o links en el Navbar
          <Link to="/">
            <Slider />
            Sucursales de Burrico
          </Link>
          <Link to="/menu-burrico">Menu de Burrico</Link>
          Navlink con la clase "active" sirve como referencia al usuario para que sepa donde esta
          <Link to="/formulario-burrico">Formulario Burrico</Link>
        </div>
      </div> */}

      {/* <hr /> */}

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
              data={data}
              key={item.id}
              item={item}
              setShowModal={setShowModal}
              showModal={showModal}
              listProducts={listProducts}
              setListProducts={setListProducts}
              cart={cart}
              setCart={setCart}
            />
          ))}
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
