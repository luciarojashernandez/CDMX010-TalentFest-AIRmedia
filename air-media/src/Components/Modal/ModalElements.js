import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;
export const ModalImgContainer = styled.img`
  position: relative;
  width: 264px;
  height: auto;
  border-radius: 20px;
  top: 20px;
  margin-left: 23px;
`;
export const ModalH2 = styled.h2`
  position: relative;
  display: block;
  top: 30px;
  text-align: center;
`;
export const ModalH4 = styled.h4`
  position: relative;
  display: block;
  background-color: #E85D17;
  border-radius: 20px;
  color: white;
  font-size: 15px;
  padding-top: 5px;
  width: 100px;
  padding-left: 17px;
  padding-bottom: 5px;
  margin-left: 110px;
  margin-bottom: 15px;
`;
export const ModalP = styled.p`
  width: 264px;
  margin-top: 37px;
  margin-left: 36px;
`;
export const ModalInput = styled.input`
  position: relative;
  width: 259px;
  height: 96px;
  border: 2px solid #E85D17;
  box-sizing: border-box;
  border-radius: 10px;
  margin-left: 30px;
  align-items: center;
  outline: none;
  ::placeholder {
    padding: 5px;
  }
`;
export const DivButton = styled.div`
  margin-left: 50px;
`;
export const ModalButton = styled.button`
  position: relative;
  width: 259px;
  height: 33px;
  color: white;
  border: none;
  background: #E85D17;
  cursor: pointer;
  top: 9px;
  margin-bottom: 12px;
  border-radius: 15px;
  left: -20px;
  box-shadow: 0px 4px 4px rgba(232, 93, 23, 0.6);
  &:hover {
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
  top: 20px;
  color: white;
  background: #E85D17;
  border-radius: 20px;
  margin-left: 100px;
`;
export const ModalCountBtn = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
`;
export const ModalCartProduct = styled.div`
  display: flex;
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
  width: 150px;
  font-size: 11px;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 20px;
`;
export const ModalCartDescripcion = styled.p`
font-size: 9px;
  width: 130px;
  margin-left: -110px;
  margin-top: 40px;
`;
export const ModalUnPrice = styled.p`
  font-size: 12px;
  width: 120px;
  margin-left: 20px;
  margin-top: 20px;
  color: #E85D17;
  font-weight: bold;
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
  font-size: 9px;
  font-weight: bold;
  left: 130px;
  margin-top: 80px;
`;
export const ModalCartInput = styled.input`
  position: relative;
  width: 310px;
  top: 25px;
  height:60px;
  border: 2px solid #E85D17;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  ::placeholder {
    padding: 5px;
  }
`;
export const ModalSubtotal = styled.h3`
  position: relative;
  top: 40px;
  margin-bottom: 60px;
  color: #E85D17;
  margin-left: 70px; 
`;
export const ModalCartBtns = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;
  justify-content: space-around;
  margin-rigth: 50px;
  z-index: 2;
  position: fixed;
  top: 490px;
  left: 20px;
  height: 110px;
  background: white;
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
  &:hover {
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
  &:hover {
    box-shadow: 0px 4px 4px rgba(232, 93, 23, 0.6);
  }
`;
export const ModalCartCount = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 85px;
  height: 24px;
  margin-top: 75px;
  margin-left: 25px;
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
export const IconDelete = styled(RiDeleteBin6Line)`
  color: #E85D17;
  font-size: 1.8rem;
  margin-left: -120px;
  margin-top: 72px;
`;
export const ModalCartContainer = styled.div`
  displya: flex;  
  margin-bottom: 100px; 
  overflow: scroll;
  height: 395px;
`;
export const DivButtons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
paddig-top: 0px;
position: absolute;
margin-rigth: 50px;
`;
// .fullscreen-modal .modal-dialog {
//     margin: 0;
//     margin-right: auto;
//     margin-left: auto;
//     width: 100%;
// overflow: scroll;
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