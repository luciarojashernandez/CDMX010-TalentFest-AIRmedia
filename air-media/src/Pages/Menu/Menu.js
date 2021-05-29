import React, {Fragment} from 'react';

function HomeRestaurante ({data}) {
	
	return(
		<Fragment>
			<h1>Menu de burrico</h1>
			<p>
				{
					data.map((item) => (
						<div key={item.id}>
							<img src={item.image} alt="imagen" />
        			<h3>{item.product}</h3>
        			<p>{item.description}</p>
        			<p>${item.price}</p>
						</div>
					))
				}
			</p>
		</Fragment>
	);
}

export default HomeRestaurante;
