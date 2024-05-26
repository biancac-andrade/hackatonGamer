import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c2f33;
`;

export const Contato = () => {
  return (
    <Section id="contato">
      <h1>Contato</h1>
      <p>Entre em contato conosco.</p>
    </Section>
  );
};

