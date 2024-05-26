import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterWrapper = styled.footer`
  padding: 20px;
  background-color: #2c2f33;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  flex: 1;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <span>Feitos por mulheres para mulheres</span>
      <SocialIcons>
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </SocialIcons>
    </FooterWrapper>
  );
};
