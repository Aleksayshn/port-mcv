import { Container, Title, Text, Button } from "./Message.styled";

const Message = ({ handleReset, titleMessage, textMessage }) => {
  return (
    <Container>
      <Title>{titleMessage}</Title>
      <Text>{textMessage}</Text>
      <Button onClick={handleReset} type="buttom">send-new-message</Button>
    </Container>
  )
};

export default Message;