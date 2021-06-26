import styled from "styled-components";

export const FormContainer = styled.form`
  margin: 0 auto;
  padding: 15px;
  max-width: 500px;
  background-color: white;
  font-family: "Nunito Sans", sans-serif;
`;

export const Group = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Field = styled.input`
  height: 40px;
  padding: 5px 10px;
  width: 100%;
  border-radius: 6px;
  background-color: white;
  border: 1px solid hsl(0, 0%, 52%);
`;

export const Button = styled.button`
  padding: 8px 15px;
  border-radius: 6px;
  text-decoration: none;
  background-color: hsl(207, 26%, 17%);
  box-shadow: 0px 4px 5px hsl(0, 0%, 52%, 0.1);
  border: 0;
  outline: 0;
  color: #fff;
  cursor: pointer;
  height: 40px;
  padding: 10px 10px;
  width: 100%;
`;
