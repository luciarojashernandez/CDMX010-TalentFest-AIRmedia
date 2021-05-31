import React from 'react';
import {Button, DivButton} from "./FloatButtonElements";
import ModalCart from '../Modal/ModalCart'
import { CustomDialog } from 'react-st-modal';

const FloatButton = () => {

	const condition = true;
	
	return (
		<DivButton>
			{condition ? <Button onClick={async () => {
      const result = await CustomDialog(
        <ModalCart/>,
        {
          title: '',
          showCloseIcon: true,
        }
      );
      // console.log("result",result);
    }}> Ver carrito </Button> : null}
		</DivButton>	
	);
}

export default FloatButton;
