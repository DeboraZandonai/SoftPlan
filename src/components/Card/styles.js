import styled from "styled-components";

export const Container = styled.article`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px));
  max-width: 280px;
  margin: 15px;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex: 100%;
    max-width: 100%;
    width: 100%;
  }

  a {
    background-color: white;
    box-shadow: 0px 4px 5px hsl(0, 0%, 52%, 0.1);
    border: 0;
    border-radius: 10px;
    color: #000;
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }
`;

export const Flag = styled.img`
  height: 200px;
  vertical-align: middle;
  width: 280px;
  border-radius: 12px 12px 0 0;

  @media (max-width: 767px) {
    flex: 100%;
    width: 100%;
    height: 250px;
  }
`;

export const Country = styled.h2`
  font-size: 18px;
  font-family: "Nunito Sans", sans-serif;
  margin: 1rem 0 1rem 1rem;
  flex-wrap: wrap;
`;

export const Capital = styled.p`
  font-size: 16px;
  font-family: "Nunito Sans", sans-serif;
  margin: 0 0 1rem 1rem;
`;
