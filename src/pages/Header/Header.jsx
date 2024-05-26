import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

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
  flex-grow: 1;
  justify-content: center;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ButtonSection = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin-left: 20px;
  background-color: #3e529e;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <ProfileSection>
        <FaUserCircle size={30} />
        <span>Nome do Usuário</span>
      </ProfileSection>
      <Nav>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/sobre">Sobre</HeaderLink>
        <HeaderLink to="/contato">Contato</HeaderLink>
      </Nav>
      <ButtonSection>
        <HeaderLink to="/login">
          <Button>Entrar</Button>
        </HeaderLink>
        <HeaderLink to="/cadastro">
          <Button>Cadastrar</Button>
        </HeaderLink>
      </ButtonSection>
    </HeaderWrapper>
  );
};
