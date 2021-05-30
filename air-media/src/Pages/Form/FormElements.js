import styled from "styled-components";

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
export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormName = styled.input`
  position: absolute;
  width: 310px;
  height: 44px;
  left: 25px;
  top: 280px;
  border: 2px solid #E85D17;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 180%;
    left: -142px;
    top: 120px;
    border: 3px solid #E85D17;
  }
  ::placeholder {
    padding-left: 5px;
  }
`;
export const FormAdress = styled.input`
  position: absolute;
  width: 310px;
  height: 44px;
  left: 25px;
  top: 340px;
  border: 2px solid #E85D17;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 180%;
    left: -142px;
    top: 120px;
    border: 3px solid #E85D17;
  }
  ::placeholder {
    padding-left: 5px;
  }
`;
export const FormDate = styled.p`
  padding-left: 30px;
  margin-top: 395px;
  font-weight: bold;
`;
export const SelectDate = styled.input`
  position: absolute;
  width: 310px;
  height: 44px;
  left: 25px;
  top: 430px;
  border: 2px solid #E85D17;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 180%;
    left: -142px;
    top: 120px;
    border: 3px solid #E85D17;
  }
`;
export const FormPay = styled.p`
  padding-left: 30px;
  margin-top: 48px;
  font-weight: bold;
`;

export const FormRadio = styled.div`
  margin-left: 15px;
`;

export const FormInput = styled.input`
  margin-left: 20px;
`;

export const FormPhone = styled.input`
position: absolute;
width: 310px;
height: 44px;
left: 25px;
top: 560px;
border: 2px solid #E85D17;
box-sizing: border-box;
border-radius: 10px;
outline: none;
@media screen and (min-width: 768px) {
  width: 180%;
  left: -142px;
  top: 120px;
  border: 3px solid #E85D17;
}
::placeholder {
  padding-left: 5px;
}
`;

export const FormComments = styled.input`
position: absolute;
width: 310px;
height: 80px;
left: 25px;
top: 620px;
border: 2px solid #E85D17;
box-sizing: border-box;
border-radius: 10px;
outline: none;
@media screen and (min-width: 768px) {
  width: 180%;
  left: -142px;
  top: 120px;
  border: 3px solid #E85D17;
}
::placeholder {
  padding-left: 5px;
}
`;