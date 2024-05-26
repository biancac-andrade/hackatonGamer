import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c2f33;
`;

const FormWrapper = styled.div`
  width: 550px;
  padding: 20px;
  border-radius: 8px;
  background-color: #444444;
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

const Select = styled.select`
  width: 250px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 250px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Cadastro = () => {
  const [cadastroData, setCadastroData] = useState({
    nome: "",
    dataNascimento: "",
    sexo: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCadastroData({
      ...cadastroData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do cadastro:", cadastroData);
  };

  return (
    <Section>
      <FormWrapper>
        <Title>Cadastro</Title>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="nome">Nome:</Label>
            <Input
              type="text"
              id="nome"
              name="nome"
              value={cadastroData.nome}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="dataNascimento">Data de Nascimento:</Label>
            <Input
              type="date"
              id="dataNascimento"
              name="dataNascimento"
              value={cadastroData.dataNascimento}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="sexo">Sexo:</Label>
            <Select
              id="sexo"
              name="sexo"
              value={cadastroData.sexo}
              onChange={handleChange}
            >
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">E-mail:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={cadastroData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="senha">Senha:</Label>
            <Input
              type="password"
              id="senha"
              name="senha"
              value={cadastroData.senha}
              onChange={handleChange}
            />
          </FormGroup>
          <Button type="submit">Cadastrar</Button>
        </form>
      </FormWrapper>
    </Section>
  );
};
