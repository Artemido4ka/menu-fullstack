import {
  AlternateEmail,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Telegram,
  Home,
} from "@material-ui/icons";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Меню</Logo>
        <Desc>Мы всегда рады новым посетителям !</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <AlternateEmail />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Telegram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Home />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Полезные ссылки</Title>
        <List>
          <ListItem>Главная</ListItem>
          <ListItem>Рекомендация</ListItem>
          <ListItem>Моя страница</ListItem>
          <ListItem>Заказы</ListItem>
          <ListItem>Чат</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Контакты</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> пр. Партизанский, ул Народная
          32, Минск
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +375 24 *******
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> admin@test.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
