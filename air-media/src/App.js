import React, {Fragment, useState, useEffect }from 'react';
import firebase from './Firebase';

function App() {

	const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection('Burrico');
  console.log(ref);

  function getData(){
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoading(false);
    })
  }

  useEffect(() => {
    getData();
  }, [])

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
		<Fragment>
			<div>
        <h1>pruebas</h1>
        {data.map((element)=> (
          <div key={element.id}>                      
            <img src={element.background} alt={element.id}></img>						
						<p>{element.category}</p>
						<p>{element.sucursal}</p>						
          </div>
        ))}
      </div>
		</Fragment>    
  );
}

export default App;
