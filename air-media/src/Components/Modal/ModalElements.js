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
top: 80px;
margin-bottom: 40px;
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