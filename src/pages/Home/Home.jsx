import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2c2f33;
  padding: 20px;
  color: white;
`;

const ContentBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 40px;
`;

const Text = styled.div`
  max-width: 500px;
  text-align: center;
`;

const Card = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #202020;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
  margin-bottom: 40px;
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    margin: 0;
  }

  button {
    background: none;
    border: 1px solid white;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: white;
  margin: 20px 0;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  text-align: center;

  div {
    flex: 1;
  }

  button {
    background: #3e529e;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const Home = () => {
  return (
    <Section id="home">
      <ContentBlock>
        <CardImage
          src="https://s3-alpha-sig.figma.com/img/c2de/7bd8/1d17caeaeb2b316403c732b7885aa81a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ibJfLNe6bUzrwxQQf~sTxvOL~oOY75xnbJu8XINkKGqmCfJAmt0nn5nqVMqYGufo1Bei9bqoGbk3ytBqJ2JdnYLPrIlyz-6sNDxGJQY2FjcR9iO47zijJ2DHBGLibshSGM6SZZ1weVnvmz2DDWsdYvISYj5-sS2dY~gj1fyYnotc~zvzpZ8ra4eVzatqGcvoV1pPBz1l2AvSUmAhdMHazEdnFgiCNt5p0T9A4dfbWbD~S~ssuAa-25cHMo9GUa9aiRNllTVSoF5jPjHYSS6COgauNekGkJ3dUQc6pqClOgO2X1-Y57XW-MQDxAKcOM64fZgPTawqxutvWYMWdjQYHA__"
          alt="Imagem descritiva"
        />
        <Text>
          <p>
            Este é o texto que ficará ao lado da imagem. Ele pode conter
            informações sobre o que é mostrado na imagem ou qualquer outro
            conteúdo relevante.
          </p>
        </Text>
      </ContentBlock>

      <Card>
        <CardTitle>
          <button>História</button>
        </CardTitle>
        <CardContent>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div>
            <CardImage
              src="https://s3-alpha-sig.figma.com/img/cde4/260d/d3c638cfad92e0da21d6f3060c13ce54?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W80nh0Ydygfe~sV5LZEaO45ayNliXYgaB0T0hT0afC3mdlZF7-I69jQlGao9MFEZHWffcvvyifgnSYLQX28v7k6khbtd4zWjLkTPV0-y~-yDJUW0hBQkHsFdHt5YJmEJF69hCUKysJqYOmnw9Ho6EdEKErt~BL-OqTtkpTfW1cshfigz63Mx5Aovi5GlZpc8KvGrVi~iWs9f6jVsjhFXZJ35Lfx0d-1dH43OiKlDmmmMSajnHhV-k5buhvNfgfk~NUfr2Z6tLKQloxuVDt-dZyUA3BpugGf8WxlX6~T6Aiw01dZog-Vi4FwM78XgJbJJNyDKu5Zv49Bdf835k1x8Lw__"
              alt="Imagem descritiva"
            />
          </div>
        </CardContent>
        <Divider />
        <BottomContent>
          <div>
            <h3>FUNCIONALIDADE 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <button>Leia Mais</button>
          </div>
          <div>
            <h3>FUNCIONALIDADE 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <button>Leia Mais</button>
          </div>
          <div>
            <h3>FUNCIONALIDADE 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <button>Leia Mais</button>
          </div>
        </BottomContent>
      </Card>
      <Card>
        <CardTitle>
          <button>Facilitadores</button>
        </CardTitle>
        <CardContent>
          <div>
            <CardImage
              src="https://s3-alpha-sig.figma.com/img/cde4/260d/d3c638cfad92e0da21d6f3060c13ce54?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W80nh0Ydygfe~sV5LZEaO45ayNliXYgaB0T0hT0afC3mdlZF7-I69jQlGao9MFEZHWffcvvyifgnSYLQX28v7k6khbtd4zWjLkTPV0-y~-yDJUW0hBQkHsFdHt5YJmEJF69hCUKysJqYOmnw9Ho6EdEKErt~BL-OqTtkpTfW1cshfigz63Mx5Aovi5GlZpc8KvGrVi~iWs9f6jVsjhFXZJ35Lfx0d-1dH43OiKlDmmmMSajnHhV-k5buhvNfgfk~NUfr2Z6tLKQloxuVDt-dZyUA3BpugGf8WxlX6~T6Aiw01dZog-Vi4FwM78XgJbJJNyDKu5Zv49Bdf835k1x8Lw__"
              alt="Imagem descritiva"
            />
          </div>
          <div>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <button>Leia Mais</button>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
};
