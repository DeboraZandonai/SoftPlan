import styled from "styled-components";

export const Container = styled.article`
  margin: 3rem auto;
  max-width: 60%;
  width: 100%;
  padding: 15px;
  background-color: white;
  box-shadow: 0px 4px 5px hsl(0, 0%, 52%, 0.1);
  border-radius: 10px;
`;

export const Flag = styled.div`
  margin-bottom: 20px;
  margin-top: 10px;
  text-align: center;

  img {
    max-width: 100%;
    width: 400px;
  }
`;

export const Country = styled.h2`
  font-size: 25px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
`;

export const Table = styled.table`
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-family: "Nunito Sans", sans-serif;
`;

export const THead = styled.th`
  font-weight: normal;
  padding: 5px;
  text-align: start;
`;

export const Cell = styled.td`
  font-weight: bold;
  padding: 5px;
`;

export const Button = styled.button`
  padding: 8px 15px;
  border-radius: 4px;
  text-decoration: none;
  background-color: hsl(207, 26%, 17%);
  box-shadow: 0px 4px 5px hsl(0, 0%, 52%, 0.1);
  border: 0;
  outline: 0;
  cursor: pointer;
`;

export const LinkBack = styled.a`
  padding: 4px;
  text-decoration: none;
  color: white;
  font-family: "Nunito Sans", sans-serif;
`;
