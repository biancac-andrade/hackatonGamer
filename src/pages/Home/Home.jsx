import React from "react";

import styled from "styled-components";

const Section = styled.section`
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c2f33;
`;

export const Home = () => {
  return (
    <Section id="home">
      <h1>Home</h1>
      <p>Bem-vindo ao nosso site!</p>
    </Section>
  );
};
