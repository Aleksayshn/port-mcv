import {
  Text,
  DevName,
  DevProfile,
  TextDownProfile,
  TextViolet,
  TextGreen,
  LinkOrange,
  Container,
  Section,
  TextList,
  HeadProfile,
  Green,
  Blue,
  MobTextList,
  Img,
  HeadProfileBody,
  ImgContainer,
} from "./Home.styled";
import myPhoto from "../../img/3_2.png";

const Home = () => {
  return (
    <Section>
      <Green></Green>
      <Blue></Blue>
      <Container>
        <HeadProfileBody>
          <HeadProfile>
            <Text>Hello. I am</Text>
            <DevName>Alexandra Tiankina</DevName>
            <DevProfile>&gt; Software Engineer </DevProfile>
            <TextDownProfile>
              &#47;&#47;console.log("Open to Work!")
            </TextDownProfile>
          </HeadProfile>
          <TextList>
            <TextDownProfile>
              &#47;&#47;this resume is built with react
            </TextDownProfile>
            <TextDownProfile>
              &#47;&#47;find my profile on Github:
            </TextDownProfile>
            <TextDownProfile>
              <TextViolet>const</TextViolet>
              <TextGreen> githubLink = </TextGreen>
              <LinkOrange
                aria-label="Repositories on GitHub"
                href="https://github.com/Aleksayshn"
                target="_blank"
              >
                https://github.com/Aleksayshn
              </LinkOrange>
            </TextDownProfile>
          </TextList>
          <MobTextList>
            <TextDownProfile>
              &#47;&#47; find my profile on Github:
            </TextDownProfile>
            <TextDownProfile>
              <TextViolet>const</TextViolet>
              <TextGreen> githubLink = </TextGreen>
              <LinkOrange
                aria-label="Repositories on GitHub"
                href="https://github.com/Aleksayshn"
                target="_blank"
              >
                https://github.com/Aleksayshn
              </LinkOrange>
            </TextDownProfile>
          </MobTextList>
        </HeadProfileBody>
        <ImgContainer>
          <Img src={myPhoto} alt="Photo of the developer" />
        </ImgContainer>
      </Container>
    </Section>
  );
};

export default Home;
