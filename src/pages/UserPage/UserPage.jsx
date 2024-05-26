import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url("https://s3-alpha-sig.figma.com/img/9607/8042/bd22835ac8ffa4464ade7c639f0950fd?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hIBetGISUj-EcYAd3jhIkn3j~kuZKi~f1PRHQp7KkYAZarUsSru4RkgKaVNF9BmVRtMhn8qVRzn3k44Stm88WP2s5-O27K5jc~FXh9gcdDe-pGwwh4BY9h7IvuhHVKRjfcSLGuPbYvAWBSILwCIsXAyTxe9VRQJKGUwdlLauDc99fvs3Pl9jq7dMU1vT9aJ60YJGFWmK53BOhSxPca1NdiS-XYa6mzaMmE482dX~FTfzB~Y8Us6rkTHU5iWZKup0IIFnjq~ulVd77JHMMK3e5sMlWVC~vFnvVomeHU3SiRU1ILHGXb-S6mTXpi0FkOO2lUV8rs0HqSwrZhH0YYuZ1g__");
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor preta com 50% de opacidade */
`;

const Container = styled.div`
  text-align: center;
  z-index: 1;
`;

const Title = styled.h1`
  color: white;
  margin-top: 10vh; /* Colocando o título mais acima */
`;

const Description = styled.p`
  color: white;
  margin: 20px auto; /* Centralizando a descrição */
  max-width: 600px; /* Limitando a largura da descrição */
`;

const DiscordButton = styled.a`
  background-color: #7289da;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #5865f2;
  }
`;

export const UserPage = () => {
  return (
    <Section>
      <Overlay />
      <Container>
        <Title>Sobre o servidor</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Description>
        <DiscordButton
          href="https://discord.gg/CPzAt69F"
          target="_blank"
          rel="noopener noreferrer"
        >
          VAMOS JOGAR JUNTAS?
        </DiscordButton>
      </Container>
    </Section>
  );
};
