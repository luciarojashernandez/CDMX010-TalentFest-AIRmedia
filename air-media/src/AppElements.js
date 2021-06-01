import styled from 'styled-components';
import { FiChevronLeft, FiSearch } from "react-icons/fi";

export const IconArrow = styled(FiChevronLeft)`
    font-size: 2rem;
    transform: translate(50%, -15%);
    margin-top: 35px;
    color: #E85D17;
    margin-left: -15px;
`;

export const IconSearch = styled(FiSearch)`
    font-size: 1.5rem;
    transform: translate(50%, -15%);
   margin-top:30px;
    color: #E85D17;
    margin-left: 240px;
`;

export const AppTools = styled.div`
background: white;
margin-top: -100px;
height: 90px;
position: fixed;
width:320px;
left: 22px;
z-index: 5;
`;

export const AppContainer = styled.div`
 margin-top:330px;
 margin-bottom: 60px;
`;

export const IconRetMenu = styled(FiChevronLeft)`
    font-size: 2rem;
    transform: translate(50%, -15%);
    margin-top: -1050px;
    color: #E85D17;
    margin-left: 0px;
`;

export const AppP = styled.p`
    color: #E85D17; 
    text-decoration: none;
    font-weight: bold;
    margin-top: -553px;
    margin-left:55px;
    border:none;
`;

