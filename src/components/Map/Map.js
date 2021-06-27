import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Country, Table, THead, Cell } from "./styles";
import Message from "../Message/Message";

import { useLazyQuery } from "@apollo/client";
import { DISTANCE } from "../../graphql/queries";

export default function Map({ match }) {
  const [getList, { error, loading, data }] = useLazyQuery(DISTANCE);

  useEffect(() => {
    getList();
  }, [getList]);

  if (loading) return <Message>Carregando...</Message>;
  if (error) return <Message>Falha</Message>;
  if (data === undefined) return <Message>Carregando...</Message>;
  if (data.Country.length === 0) {
    return (
      <Message>
        País não encontrado. Tente novamente. <br />
        <Link to="/softplan">Voltar</Link>
      </Message>
    );
  }

  const name = data.Country.name.value;
  const distance = data.Country.distanceToOtherCountries[5].value;
  const distanceInKm = data.Country.distanceToOtherCountries.distanceInKm.value;
  const countryName = data.Country.distanceToOtherCountries.countryName.value;

  return (
    <>
      <Container>
        <Country>{name}</Country>
        <Table>
          <tbody>
            <tr>
              <THead>Capital:</THead>
              <Cell>{distance}</Cell>
            </tr>
            <tr>
              <THead>Área:</THead>
              <Cell>{distanceInKm} km²</Cell>
            </tr>
            <tr>
              <THead>População:</THead>
              <Cell>{countryName}</Cell>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
