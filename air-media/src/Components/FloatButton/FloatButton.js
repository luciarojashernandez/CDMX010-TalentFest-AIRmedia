import React from 'react';
import {Button, DivButton} from "./FloatButtonElements";
import ModalCart from '../Modal/ModalCart'
import { CustomDialog } from 'react-st-modal';
import { useHistory } from 'react-router';

const FloatButton = ({cart, setCart, total, setTotal}) => {
  const history = useHistory();
  console.log({history})
	const condition = true;
	
	return (
		<DivButton>
			{condition ? <Button onClick={async () => {
      const result = await CustomDialog(
        <ModalCart 
          cart={cart} 
          setCart={setCart} 
          total={total}
          history={history}
           setTotal={setTotal} />,
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
