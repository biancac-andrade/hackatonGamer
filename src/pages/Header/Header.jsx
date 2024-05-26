import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2c2f33;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  flex-grow: 1; /* Cresce para ocupar o espaço disponível */
  justify-content: center; /* Centraliza os itens horizontalmente */
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  padding: 5px 10px;
  border-right: 1px solid white;
`;

const Button = styled.button`
  margin-left: 20px;
  background-color: #3e529e;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <NavLink
          href="#home"
          style={{ background: "#2c2f33", color: "#FFFFFF" }}
        >
          Home
        </NavLink>
        <NavLink
          href="#sobre"
          style={{ background: "#2c2f33", color: "#FFFFFF" }}
        >
          Sobre
        </NavLink>
        <NavLink
          href="#contato"
          style={{ background: "#2c2f33", color: "#FFFFFF" }}
        >
          Contato
        </NavLink>
      </Nav>
      <div>
        <Link to="/login">
          <Button>Entrar</Button>
        </Link>
        <Link to="/cadastro">
          <Button>Cadastrar</Button>
        </Link>
      </div>
    </HeaderWrapper>
  );
};
