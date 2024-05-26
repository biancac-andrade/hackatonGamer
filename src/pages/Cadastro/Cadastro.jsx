import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://s3-alpha-sig.figma.com/img/c3d7/a62e/b0cca31850081cd11713ddc187b6b131?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LF8w3hcQKbxFXD8V1OdF7DJj-XerukGtQ3hX4XcIlxKa51tpBSRuRvfzKhYgn-Ahs4yMv0lnM-y412i0FGq1v8RtNNadD-dQv8zro~iYtj6rB6uaCazeY84Mgva3ySVyB7u3IOBMMLz2iYdutmGyWGSsJDo544NVwm3bttVDRtczm4KKcC7uwqtTehHtXKNHLrrbH~He77qGkzUBv~Eawz0VGLugGUjryNHdi4Pn5P6ILAK~tt4Shw1WANksDaRSbvx77tLAht8g5cNZ4rfKSdXJBD58OfSpxV5eDm26EbWh8AIeS65QQk1nrRfC~o5k9IRD8XvUnLQKt3RStO38wg__");
  background-size: cover;
  background-position: center;
`;

const FormWrapper = styled.div`
  width: 550px;
  padding: 20px;
  border-radius: 8px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  );
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  border: 1px solid;
  border-image-source: linear-gradient(
    95.04deg,
    rgba(255, 255, 255, 0.5) 0.26%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 8px;
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
