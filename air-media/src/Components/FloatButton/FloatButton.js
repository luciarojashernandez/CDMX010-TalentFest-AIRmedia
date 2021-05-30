import React from 'react';
import {Button, DivButton} from "./FloatButtonElements";

const FloatButton = () => {

	const condition = true;
	
	return (
		<DivButton>
			{condition ? <Button> Ver carrito </Button> : null}
		</DivButton>	
	);
}

export default FloatButton;
