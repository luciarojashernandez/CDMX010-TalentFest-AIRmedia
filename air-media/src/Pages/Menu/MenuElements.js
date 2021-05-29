import styled from 'styled-components';

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;

export const MenuLogo = styled.img`
  display: block;
	width: 65%;	
  padding-left: 10px
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
	margin-top: 10px;
`;

export const MenuImage = styled.img`
	width: 97px;
	height: 94px;
  border-radius: 20px;
	padding-left: 10px;
	padding-top: 15px
  `;

	export const MenuP = styled.p`
		position: absolute;
    width: 100px;
		font-size: 12px;
		font-weight: bold;
    margin-left: 110px;
    margin-top: -80px;
	`;

	export const MenuDescripcion = styled.p`
  position:absolute;
	font-size: 12px;
  width: 200px;
	`;
