import styled from 'styled-components';
import Burrito from '../../Assets/Images/burrito.png';

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`;

export const LogoDiv = styled.div`
	background-image: url(${Burrito});
	background-size: cover;
	height: 110px;
`;

export const MenuLogo = styled.img`
  display: block;
	width: 65%;	
  padding-left: 10px;
	margin-left: 65px;
	margin-top: 55px;	
`;

export const InfoDiv = styled.div`
	position: absolute;
	background: #FFFFFF;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	width: 360px;
	height: 120px;
	margin-top: 110px;
`;

export const MenuBurrico = styled.img`
	width: 83px;
	height: 83px;
	margin-left: 35px;
	margin-top: 15px;	
		
`;

export const InfoRestaurant = styled.p`
	font-weight: bold;
	color: #E85D17;
	font-size: 20px;
	margin-left: 140px;
	margin-top: -85px;
`;

export const InfoSuc = styled.p`
	font-weight: bold;
	color: #E85D17;
	font-size: 12px;
	margin-left: 140px;
	margin-top: -17px;
`;

export const InfoDirection = styled.p`
	font-weight: bold;	
	font-size: 12px;
	margin-left: 140px;
	margin-top: -10px;
	width: 180px;
`;

export const Insta = styled.img`
	width: 38px;
	height: 38px;
	margin-left: 315px;
	margin-top: -95px;
`;

export const InstaRef = styled.a`	
`;

export const MenuProduct = styled.div`
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

export const MenuImage = styled.img`
	width: 97px;
	height: 94px;
  border-radius: 20px;
	margin-left: 10px;
	margin-top: 10px;
  `;

	export const MenuP = styled.p`
		position: absolute;
    width: 125px;
		font-size: 13px;
		font-weight: bold;
    margin-left: 113px;
    margin-top: 26px;
	`;

	export const MenuDescripcion = styled.p`
  	position:absolute;
		font-size: 11px;
  	width: 190px;
		margin-left: 113px;
		margin-top: 55px;
	`;

	export const MenuPrice = styled.p`
  	position:absolute;
		font-size: 11px;
  	width: 65px;
		margin-left: 230px;
		margin-top: 27px;
		background: #E85D17;
		color: white;
		padding-left: 6px;
		padding-top: 2px;
		padding-bottom: 2px;
		border-radius: 15px;	
	`;

	export const SucPromo = styled.div`
	width: 312px;
	height: 82px;
	left: 24px;
	top: 150px;
	margin-top: 145px;
	margin-left: 5px;
	margin-bottom: 10px
`;		
