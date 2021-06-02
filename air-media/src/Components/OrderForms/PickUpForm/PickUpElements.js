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
export const PickP = styled.p`
  color: #e85d17;
  text-decoration: none;
  font-weight: bold;
  margin-top: 150px;
  margin-left: 55px;
  border: none;
`;

export const FormDiv = styled.div`
display: flex;
flex-direction: column;
margin-left: 25px;
`;

export const PickUpInfo = styled.div`
display: flex;
justify-content: space-around;
width: 320px;
margin-left: -5px;
margin-top: 170px;
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

export const FormDate = styled.p`
  padding-left: 30px;
  margin-top: 395px;
  font-weight: bold;
`;

export const Date = styled.input`
color: grey;
`;
export const Hour = styled.input`
color: grey;
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


export const FormSubtotal = styled.p`
//   position: relative;
  font-size: 15px;
  color: grey;
//   top: 210px;
//   left: 120px;
  font-weight: bold;
`;

export const FormEnv = styled.p`
//   position: relative;
  font-size: 15px;
  color: grey;
//   top: 210px;
//   left: 100px;
  font-weight: bold;
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

export const FormBtnPick = styled.button`
  position: relative;
  width: 259px;
  height: 33px;
  margin: 50px;
  top: -5px;
  margin-bottom: 35px;
  border: none;
  color: white;
  background: #1bd741;
  border-radius: 15px;
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const PickUpCost = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: space-between;
  text-align: center;
  margin-top: 220px;
  left: -10px;
`;

export const FormTotal = styled.p`
// position: absolute;
// top: 110px;
// left: 80px;
font-size: 20px;
color: grey;
margin-top:10px;
font-weight: bold;
`;