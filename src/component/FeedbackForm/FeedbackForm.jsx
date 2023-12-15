import SubTitle from "../SubTitle/SubTitle";
import { Input, Label, InputWrapper, Container, Textarea, Button, Form } from "./FeedbackForm.styled";

const FeedbackForm = ({ handleOnSubmit, handleSetParam, name, email, message }) => {

    return (<>
        <SubTitle text={'feedback-form'} />
        <Container>
            <Form onSubmit={handleOnSubmit} >
                <InputWrapper>
                    <Label htmlFor="name">_name:</Label>
                    <Input onChange={handleSetParam}
                        type="text"
                        name="name"
                        id="name"
                        placeholder=" "
                        pattern="^[A-Za-z\u0080-\uFFFF ']+$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="email">_email:</Label>
                    <Input onChange={handleSetParam}
                        type="email"
                        name="email"
                        id="email"
                        placeholder=" "
                        value={email}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="message">_message:</Label>
                    <Textarea onChange={handleSetParam}
                        id="message"
                        name="message"
                        rows="6"
                        placeholder=" "
                        value={message}
                    />
                </InputWrapper>
                <Button disabled={true} type="submit">submit-message</Button>
            </Form>
        </Container>
    </>);
};

export default FeedbackForm;