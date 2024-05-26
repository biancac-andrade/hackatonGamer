import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c2f33;
`;

const FormWrapper = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  background-color: #444444;
;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
