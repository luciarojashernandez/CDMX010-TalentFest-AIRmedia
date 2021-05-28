import React, {Fragment} from 'react';

function Home ({data}) {

	return(
		<Fragment>
			<h1>Sucursales de Burrico</h1>

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

export default Home;
