import styled, { css } from 'styled-components';

const buttonStyles = css`
	background-color: black;
	color: #d9e8ff;
	font-family: 'Redressed', cursive;
	border: none;

	&:hover {
		background-color: #d9e8ff;
		color: black;
		border: 1px solid black;
	}
`;

const invertedButtonStyles = css`
	background-color: #d9e8ff;
	color: black;
	border: 1px solid black;
	font-family: 'Redressed', cursive;

	&:hover {
		background-color: black;
		color: #d9e8ff;
		border: none;
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

const getButtonStyles = (props) => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	}

	return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-family: 'Redressed', cursive;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	cursor: pointer;
	display: flex;
	justify-content: center;

	${getButtonStyles}
`;
