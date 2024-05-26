import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterWrapper = styled.footer`
  left: 0;
  padding: 20px;
  background-color: #202020;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`;

const NewsletterCard = styled.div`
  background-color: #3a3a3a;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NewsletterTitle = styled.h4`
  margin: 0;
`;

const NewsletterDescription = styled.p`
  margin: 0;
`;

const EmailInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: none;
`;

const SubmitButton = styled.button`
  background-color: #3e529e;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <NewsletterCard>
          <div>
            <NewsletterTitle>Assine nossa newsletter</NewsletterTitle>
            <NewsletterDescription>
              Receba atualizações por e-mail sobre nossos produtos e ofertas.
            </NewsletterDescription>
          </div>
          <form>
            <EmailInput type="email" placeholder="Seu e-mail" />
            <SubmitButton>Enviar</SubmitButton>
          </form>
        </NewsletterCard>
        <SocialIcons>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </SocialIcons>
      </ContentWrapper>
    </FooterWrapper>
  );
};
