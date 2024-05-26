import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c2f33;
`;

export const Sobre = () => {
  return (
    <Section id="sobre">
      <h1>Sobre</h1>
      <p>Informações sobre nós.</p>
    </Section>
  );
};
