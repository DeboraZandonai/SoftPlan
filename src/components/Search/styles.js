import styles from "styled-components";

export const Form = styles.form`
	padding: 20px 35px;
`;

export const Input = styles.input`
	background-color: white;
	box-shadow: 0px 4px 5px hsl(0, 0%, 52%, 0.1);
	border-radius: 4px;
	border: 0;
	font-size: 16px;
	height: 50px;
	padding: 20px;
	margin: 1rem 0 1.5rem 0;
	outline: none;
	width: 40%;
	font-family: 'Nunito Sans', sans-serif;

	@media (max-width: 767px) {
    flex: 100%;
    width: 100%;

  }
`;

export const Label = styles.label`
	border: 0;
	clip: rect(0,0,0,0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
`;
