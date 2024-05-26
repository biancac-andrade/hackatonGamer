import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 88vh;
  display: flex;
  background-color: #2c2f33;
  position: relative;
`;

const Sidebar = styled.aside`
  background-color: #444444;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 150px;
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const DiscordButton = styled.a`
  background-color: #7289da;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;

  &:hover {
    background-color: #5865f2;
  }
`;

export const UserPage = () => {
  return (
    <Section>
      <Sidebar>
        <Content>
          <p>Sua frase aqui</p>
          <Image
            src="https://s3-alpha-sig.figma.com/img/754c/985f/3602a43d90717c44e463ad31fb97495d?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R-mE~i6SaXIs8BazAgz-URFJ5hp5SIlKTDhBM3mjCsuJPATo9yrIjidT18w2HrPWw~FPCiXqZDwVUxytXJvdNAc0VKM2BW1smGbquAjOA8Bqq1DEQ5jeU5W-hRwx4mBW25TdW~04Zh~2F8NZEvuG~S6EGBB0KaVZSjfK6gb5UPGH4bciqip0IAOzlm9LYO6EWREx~LJCAinZ7brO-S4ySUlrOra638G5zEUI0~nncljMqSDvUJFWopUAVJoWimv4Juwa7mtttas4Za2HHpLrNVrcVOi4C8VYDP1gBon4fF5dlmMw-6ACkY2Pf9070PnCUQWX134UBTiE8R0~UzQLYg__"
            alt="Imagem"
          />
        </Content>
      </Sidebar>
      <DiscordButton
        href="https://discord.gg/DQGzwpxp"
        target="_blank"
        rel="noopener noreferrer"
      >
        Entrar no Discord
      </DiscordButton>
    </Section>
  );
};
