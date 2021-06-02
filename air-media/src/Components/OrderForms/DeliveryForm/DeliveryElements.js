import styled from "styled-components";
import { FiChevronLeft } from "react-icons/fi";

export const IconReturn = styled(FiChevronLeft)`
  font-size: 2rem;
  transform: translate(50%, -15%);
  margin-top: 150px;
  color: #e85d17;
  margin-left: 0px;
  position: absolute;
`;
export const DeliveryP = styled.p`
  color: #e85d17;
  text-decoration: none;
  font-weight: bold;
  margin-top: 150px;
  margin-left: 55px;
  border: none;
`;
export const DeliveryDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;
export const DeliveryName = styled.input`
  position: absolute;
  width: 310px;
  height: 44px;
  left: 25px;
  top: 280px;
  border: 2px solid #e85d17;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 180%;
    left: -142px;
    top: 120px;
    border: 3px solid #e85d17;
  }
  ::placeholder {
    padding-left: 5px;
  }
`;
export const DeliveryAdress = styled.input`
  position: absolute;
  width: 310px;
  height: 44px;
  left: 25px;
  top: 340px;
  border: 2px solid #e85d17;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 180%;
    left: -142px;
    top: 120px;
    border: 3px solid #e85d17;
  }
  ::placeholder {
    padding-left: 5px;
  }
`;
export const DeliveryInfo = styled.div`
  display: flex;
  justify-content: space-around;
  width: 320px;
  margin-left: -5px;
  margin-top: 170px;
`;
export const DeliveryPay = styled.p`
  padding-left: 5px;
  margin-top: 68px;
  font-weight: bold;
`;
export const DeliveryRadio = styled.div`
  margin-left: 25px;
  margin-top: 10px;
`;
export const FormBtns = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 150px;
  top: 230px;
`;
export const FormRequestBtn = styled.button`
  position: absolute;
  width: 140px;
  height: 32px;
  color: black;
  margin-left: 30px;
  border: 2px solid #e85d17;
  box-sizing: border-box;
  border-radius: 15px;
  background: none;
  cursor: pointer;
  &:hover {
    color: white;
    border: none;
    background: #e85d17;
    box-shadow: 0px 4px 4px rgba(232, 93, 23, 0.6);
  }
`;
export const FormPickUpBtn = styled.button`
  position: absolute;
  width: 140px;
  height: 32px;
  margin-left: 190px;
  color: black;
  border: 2px solid #e85d17;
  box-sizing: border-box;
  border-radius: 15px;
  background: none;
  cursor: pointer;
  &:hover {
    color: white;
    border: none;
    background: #e85d17;
    box-shadow: 0px 4px 4px rgba(232, 93, 23, 0.6);
  }
`;
export const SelectDate = styled.input`
  position: absolute;
  width: 310px;
  height: 44px;
  left: 25px;
  top: 430px;
  border: 2px solid #e85d17;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 180%;
    left: -142px;
    top: 120px;
    border: 3px solid #e85d17;
  }
`;
export const DeliveryInput = styled.input`
  margin-left: 30px;
`;
export const DeliveryComments = styled.input`
  position: absolute;
  width: 310px;
  height: 80px;
  left: 25px;
  top: 620px;
  bottom: 150px;
  border: 2px solid #e85d17;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 180%;
    left: -142px;
    top: 120px;
    border: 3px solid #e85d17;
  }
  ::placeholder {
    padding-left: 5px;
  }
`;
export const DeliveryPhone = styled.input`
  position: absolute;
  width: 310px;
  height: 44px;
  left: 25px;
  top: 560px;
  border: 2px solid #e85d17;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 180%;
    left: -142px;
    top: 120px;
    border: 3px solid #e85d17;
  }
  ::placeholder {
    padding-left: 5px;
  }
`;
export const FormBtnDelivery = styled.button`
  width: 259px;
  height: 33px;
  margin: 50px;
  margin-bottom: 55px;
  border: none;
  color: white;
  margin-top: 30px;
  background: #1bd741;
  border-radius: 15px;
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
export const FormDatePick = styled.p`
  padding-left: 30px;
  margin-top: 335px;
  font-weight: bold;
`;
export const SelectDatePick = styled.input`
  position: absolute;
  width: 310px;
  height: 44px;
  left: 25px;
  top: 370px;
  border: 2px solid #e85d17;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 180%;
    left: -142px;
    top: 120px;
    border: 3px solid #e85d17;
  }
`;
export const FormPhonePick = styled.input`
  position: absolute;
  width: 310px;
  height: 44px;
  left: 25px;
  top: 430px;
  border: 2px solid #e85d17;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 180%;
    left: -142px;
    top: 120px;
    border: 3px solid #e85d17;
  }
  ::placeholder {
    padding-left: 5px;
  }
`;
export const FormCommentsPick = styled.input`
  position: absolute;
  width: 310px;
  height: 80px;
  left: 25px;
  top: 490px;
  bottom: 150px;
  border: 2px solid #e85d17;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 180%;
    left: -142px;
    top: 120px;
    border: 3px solid #e85d17;
  }
  ::placeholder {
    padding-left: 5px;
  }
`;
export const FormBtnPick = styled.button`
  position: relative;
  width: 259px;
  height: 33px;
  margin: 50px;
  top: 170px;
  margin-bottom: 155px;
  border: none;
  color: white;
  background: #1bd741;
  border-radius: 15px;
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
export const DeliverySubtotal = styled.p`
// position: absolute;
// top: 210px;
// left: 120px;
  font-size: 15px;
  color: grey;
  font-weight: bold;
`;
export const DeliveryEnv = styled.p`
  // position: absolute;
  // top: 110px;
  // left: 80px;
  font-size: 15px;
  color: grey;
  
  font-weight: bold;
`;
export const Date = styled.input`
  color: grey;
  position: relative;
  top: 50px;
`;
export const Hour = styled.input`
  color: grey;
  top: 50px;
  position: relative;
`;

export const DeliveryCost = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: space-between;
  text-align: center;
  margin-top: 180px;
  left: -20px;
`;

export const DeliveryTotal = styled.p`
// position: absolute;
// top: 110px;
// left: 80px;
font-size: 20px;
color: grey;
margin-top:10px;
font-weight: bold;
`;