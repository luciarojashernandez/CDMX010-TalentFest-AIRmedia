import styled from "styled-components";
import {FaHome, FaHeart, FaUserCircle} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export const IconSearch = styled(FiSearch)`
font-size: 1.5rem;
    color: #E85D17;
    margin-top: 68px;
    margin-left: 290px;
    z-index: 5;
;
`;

export const IconUser = styled(FaUserCircle)`
    font-size: 2rem;
    transform: translate(50%, -15%);
    margin-top: 15px;
    color: #E85D17;
   margin-right: 40px;
`;

export const IconLike = styled(FaHeart)`
    font-size: 2rem;
    transform: translate(50%, -15%);
    margin-top: 15px;
    color: #E85D17;
   margin-right: 60px;
`;

export const IconHome = styled(FaHome)`
    font-size: 2rem;
    transform: translate(50%, -15%);
    margin-top: 15px;
    color: #E85D17;
   margin-right: 70px;
`;

export const SucContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  overflow: scroll;
  align-content: center;
`;
export const SucHeader = styled.div`
  display: flex;
  flex-direcction: column;
  justify-contentent: center;
  align-items: center;
  align-content: flex-start;
  position: fixed;
  box-sizing: content-box;
  top: 0px;
  background: white;
  z-index: 1;
  width: 360px;
  height: 133px;
`;
export const SucLogo = styled.img`
  position: absolute;
  width: 65%;
  margin-left: 65px;
  margin-top: -55px;
  @media screen and (min-width: 768px) {
    width: 100%;
    margin-left: 10px;
    margin-top: 5px;
  }
`;
export const SucSearch = styled.input`
  position: absolute;
  width: 310px;
  height: 44px;
  left: 25px;
  top: 79px;
  border: 2px solid #E85D17;
  box-sizing: border-box;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 180%;
    left: -142px;
    top: 120px;
    border: 3px solid #E85D17;
  }
`;
export const SucPromo = styled.div`
  position: absolute;
  width: 312px;
  height: 82px;
  left: 24px;
  top: 150px;
  @media screen and (min-width: 768px) {
    width: 664px;
    height: 164px;
    left: 60px;
    top: 200px;
  }
  @media screen and (min-width: 1280px) {
    width: 664px;
    height: 164px;
    left: 305px;
    top: 200px;
  }
`;
export const SucTitle = styled.p`
  color: E85D17;
  text-align: center;
  margin-top: 230px;
  font-size: 18px;
  font-weight: bold;
  color: #E85D17;
  @media screen and (min-width: 768px) {
    margin-top: 410px;
    font-size: 30px;
  }
`;
export const SucStores = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
}
`;
export const SucStore = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    padding: 15px;
}
`;
export const SucText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  aligh-items: flex-end;
  margin-top: 130px;
  position: absolute;
  @media screen and (min-width: 768px) {
    margin-top: 125px;
  }
`;
export const SucPstore = styled.p`
  color: white;
  position: absolute;
  font-size: 16px;
  padding: 15px;
  margin-left: -115px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const SucPfood = styled.p`
  color: white;
  position: absolute;
  font-size: 16px;
  padding: 15px;
  margin-left: 105px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const SucFooter = styled.div`
  position: fixed;
  width: 100vw;
  height: 56px;
  background: #FFFFFF;
  box-shadow: 0px -5px 4px rgba(232, 93, 23, 0.3);
  border-radius: 20px 20px 0px 0px;
  z-index: 2;
  margin-top: 560px;
  display: flex;
  justify-content: space-around;
  @media screen and (min-width: 768px) {
    width: 100vw;
    height: 120px;
    z-index: 2;
    box-shadow: 0px -10px 10px rgba(232, 93, 23, 0.3);
    margin-top: 885px;
    margin-left: -5px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 800px;
    margin-left: 10px;
  }
`;