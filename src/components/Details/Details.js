import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import {
  Container,
  Flag,
  Country,
  Table,
  THead,
  Cell,
  Button,
  LinkBack,
} from "./styles";
import Message from "../Message/Message";

import { useLazyQuery } from "@apollo/client";
import { DETAILS } from "../../graphql/queries";
// import { DISTANCE } from "../../graphql/queries";
import Header from "../Header/Header";

export default function Details({ match }) {
  const [getList, { error, loading, data }] = useLazyQuery(DETAILS, {
    variables: { id: match.params.id },
  });

  useEffect(() => {
    getList();
  }, [getList]);

  if (loading) return <Message>Carregando...</Message>;
  if (error) return <Message>Falha</Message>;
  if (data === undefined) return <Message>Carregando...</Message>;
  if (data.details.length === 0) {
    return (
      <Message>
        País não encontrado. Tente novamente. <br />
        <Link to="/softplan">Voltar</Link>
      </Message>
    );
  }

  const name = data.details.nameTranslations[0].value;
  const { flag, capital, area, population, topLevelDomains } = data.details;

  return (
    <>
      <Header />
      <Container>
        <Button>
          <LinkBack href="/softplan">Voltar</LinkBack>
        </Button>
        <Flag>
          <img src={flag.svgFile} alt={` Bandeira ${name} `} />
        </Flag>
        <Country>{name}</Country>
        <Table>
          <tbody>
            <tr>
              <THead>Capital:</THead>
              <Cell>{capital}</Cell>
            </tr>
            <tr>
              <THead>Área:</THead>
              <Cell>{area} km²</Cell>
            </tr>
            <tr>
              <THead>População:</THead>
              <Cell>{population}</Cell>
            </tr>
            <tr>
              <THead>Domínio de topo:</THead>
              <Cell>{topLevelDomains[0].name}</Cell>
            </tr>
          </tbody>
        </Table>
        <Button>
          <LinkBack href={`/softplan/editar/${match.params.id}`}>
            Editar
          </LinkBack>
        </Button>

        <div style={{ height: "180px" }}>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                <Country>{name}</Country>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </Container>
    </>
  );
}
