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
export const FormAdress = styled.input`
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
export const FormComments = styled.input`
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
export const FormBtnDelivery = styled.button`
  width: 259px;
  height: 33px;
  margin: 50px;
  top: 130px;
  margin-bottom: 55px;
  border: none;
  color: white;
  margin-top: 175px;
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
export const FormSubtotal = styled.p`
  position: relative;
  font-size: 15px;
  color: grey;
  top: 210px;
  left: 120px;
  font-weight: bold;
`;
export const FormEnv = styled.p`
  position: relative;
  font-size: 15px;
  color: grey;
  top: 210px;
  left: 100px;
  font-weight: bold;
`;
