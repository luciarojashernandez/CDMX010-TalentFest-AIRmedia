import React, {Fragment} from 'react';

function HomeRestaurante ({data}) {

	let dataFilter = data.filter ((element) => element.type === "product")
	console.log('data', dataFilter)
	
	return(
		<Fragment>
			<h1>Menu de burrico</h1>
				{
				dataFilter.map((item) => (
					<div key={item.id}>
						<img src={item.img} alt={item.id}></img>	
					</div>

				))
				}

			
			{/* {data.map((element)=> (
          <div key={element.id}>                      
            <img src={element.image} alt={element.id}></img>						
						<p>{element.product}</p>
						<p>{element.description}</p>		
						<p>{element.price}</p>
				
          </div>
        ))} */}
		</Fragment>
	);
}

export default HomeRestaurante;
