import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ModalImgContainer = styled.img`
  position: relative;
  width: 264px;
  height: auto;
  border-radius: 20px;
  top: 20px;
`;
export const ModalH2= styled.h2`
  position: relative;
  display: block;
  top: 30px;
`;
export const ModalH4= styled.h4`
  position: relative;
  display: block;
 background-color: #E85D17;
 border-radius: 20px;
 color: white;
 font-size: 15px;
 padding: 5px;
`;
export const ModalP = styled.p`
width: 264px;
margin-top: 32px;
`;
export const ModalInput = styled.input`
position: relative;
width: 259px;
height: 96px;
border: 2px solid #E85D17;
box-sizing: border-box;
border-radius: 10px;
::placeholder{
  padding: 5px;
}
`;

export const ModalButton = styled.button`
position: relative;
width: 259px;
height: 33px;
color: white;
border: none;
background: #E85D17;
cursor: pointer;
top: 45px;
margin-bottom: 60px;
border-radius: 15px;
box-shadow: 0px 4px 4px rgba(232, 93, 23, 0.6);
&:hover{
  box-shadow: 0px 4px 4px rgba(232, 93, 23, 0.6);
}
`;

export const ModalCount = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 117px;
  height: 30px;
  top: 25px;
  color: white;
  background: #E85D17;
  border-radius: 20px;
`;
export const ModalCountBtn = styled.button`
 background: transparent;
 border: none;
 color: white;
 font-size: 20px;
`;

export const ModalCartProduct = styled.div`
display:flex;
width: 310px;
height: 111px;
left: 335px;
top: 532px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
margin-top: 15px;
`;

export const ModalCartImage = styled.img`
  width: 97px;
  height: 94px;
  border-radius: 20px;
  margin-left: 10px;
  margin-top: 10px;
  `;

  export const ModalCartP = styled.p`
  position: absolute;
  width: 125px;
  font-size: 13px;
  font-weight: bold;
  margin-left: 115px;
  margin-top: 20px;
`;

export const ModalCartDescripcion = styled.p`  	
font-size: 9px;
width: 130px;
margin-left: 10px;
margin-top: 45px;
text-align: left;
`;


export const ModalUnPrice = styled.p`
position:absolute;
font-size: 11px;
width: 65px;
margin-left: 230px;
margin-top: 22px;
background: #E85D17;
color: white;
padding-left: 2px;
padding-top: 2px;
padding-bottom: 2px;
padding-right: 2px;
border-radius: 15px;	
`;

export const ModalCartDelete = styled.button`
position: absolute;
width: 80px;
height: 20px;
left: 230px;
right: 15px;
margin-top: 80px;
color: white;
border: none;
background: #E85D17;
`;

export const ModalCartQty = styled.p`
position: absolute;
font-size: 13px;
font-weight: bold;
left: 130px;
margin-top: 80px;

`;

export const ModalCartInput = styled.input`
position: relative;
width: 310px;
top: 25px;
height: 96px;
border: 2px solid #E85D17;
box-sizing: border-box;
border-radius: 10px;
::placeholder{
  padding: 5px;
}
`;
export const ModalSubtotal = styled.h3`
  position:relative;
  top: 40px;
`;
export const ModalCartBtns = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;
  justify-content: space-around;
  margin-top: 25px;
`;

export const ModalBtnCancel = styled.button`
position: relative;
width: 141px;
height: 35px;

background: transparent;
border: 2px solid #E85D17;
box-sizing: border-box;
border-radius: 15px;
cursor: pointer;
top: 40px;
margin-bottom: 60px;
&:hover{
  box-shadow: 0px 4px 4px rgba(232, 93, 23, 0.6);
}
`;

export const ModalBtnContinue = styled.button`
position: relative;
width: 141px;
height: 35px;


border: none;
color: white;
background: #E85D17;
border-radius: 15px;
box-sizing: border-box;
cursor: pointer;
top: 40px;
margin-bottom: 60px;
&:hover{
  box-shadow: 0px 4px 4px rgba(232, 93, 23, 0.6);
}
`;

export const ModalCartCount = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80px;
  height:24px;
  margin-top: 80px;
  margin-right: 15px;
  color: white;
  background: #E85D17;
  border-radius: 20px;
`;

export const ModalCartCountBtn = styled.button`
 background: transparent;
 border: none;
 color: white;
 font-size: 20px;
`;
// .fullscreen-modal .modal-dialog {
//     margin: 0;
//     margin-right: auto;
//     margin-left: auto;
//     width: 100%;
//   }
//   @media (min-width: 768px) {
//     .fullscreen-modal .modal-dialog {
//       width: 750px;
//     }
//   }
//   @media (min-width: 992px) {
//     .fullscreen-modal .modal-dialog {
//       width: 970px;
//     }
//   }
//   @media (min-width: 1200px) {
//     .fullscreen-modal .modal-dialog {
//        width: 1170px;
//     }
//   }