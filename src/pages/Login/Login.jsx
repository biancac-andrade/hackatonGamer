import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://s3-alpha-sig.figma.com/img/cde4/260d/d3c638cfad92e0da21d6f3060c13ce54?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W80nh0Ydygfe~sV5LZEaO45ayNliXYgaB0T0hT0afC3mdlZF7-I69jQlGao9MFEZHWffcvvyifgnSYLQX28v7k6khbtd4zWjLkTPV0-y~-yDJUW0hBQkHsFdHt5YJmEJF69hCUKysJqYOmnw9Ho6EdEKErt~BL-OqTtkpTfW1cshfigz63Mx5Aovi5GlZpc8KvGrVi~iWs9f6jVsjhFXZJ35Lfx0d-1dH43OiKlDmmmMSajnHhV-k5buhvNfgfk~NUfr2Z6tLKQloxuVDt-dZyUA3BpugGf8WxlX6~T6Aiw01dZog-Vi4FwM78XgJbJJNyDKu5Zv49Bdf835k1x8Lw__");
  background-size: cover;
  background-position: center;
`;

const FormWrapper = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  background-color: #444444;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1; 
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 250px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 270px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Login = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mockNickname = "usuario";
    const mockPassword = "senha123";

    if (nickname === mockNickname && password === mockPassword) {
      navigate("/user-page");
    } else {
      alert("Nickname ou senha incorretos!");
    }
  };

  return (
    <Section>
      <FormWrapper>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="nickname">Nickname:</Label>
            <Input
              type="text"
              id="nickname"
              name="nickname"
              value={nickname}
              onChange={handleNicknameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </FormGroup>
          <Button type="submit">Entrar</Button>
        </form>
      </FormWrapper>
    </Section>
  );
};
