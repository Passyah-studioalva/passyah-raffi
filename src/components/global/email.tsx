import {
  Container,
  Flex,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Button,
  GridItem,
  Textarea,
  Text,
  Box,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form, Field, useField, useForm } from "react-final-form";

const Email: React.FC = () => {
  const lineBreak = "%0D%0A";
  const urlMail = "passyah11@gmail.com";

  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [message, setMessage] = useState(``);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const sendEmail = `mailto:${urlMail}?subject=Hello, My name ${name} ${email}&body=${message.replaceAll(
    "\n",
    lineBreak
  )}`;

  const handleSend = () => {
    if (!name) {
      setErrorMessage(true);
    }

    if (!email) {
      setErrorName(true);
    }

    if (!message) {
      setErrorEmail(true);
    }

    if (name && email && message) {
      setErrorName(false);
      setErrorEmail(false);
      setErrorMessage(false);
      window.open(sendEmail);
    }

    // window.open(sendEmail);
  };

  return (
    <Container
      maxW={"container.xl"}
      pt={10}
      position={"relative"}
      color={"gray.600"}
      className="dangerouslySetInnerHTML"
    >
      <Text as={"h2"} fontSize={50} px={1} mb={10}>
        Send me an email
      </Text>

      <FormControl isRequired p={1} pb={1} className="container">
        <GridItem className="name">
          <FormLabel as={"p"}>Name</FormLabel>
          <Input
            type="text"
            autoComplete={"off"}
            placeholder="input name"
            fontSize={20}
            py={7}
            value={name}
            border={"1px"}
            borderColor={errorName ? "red.500" : "gray.200"}
            onChange={(e) => setName(e.target.value)}
          />
          {errorName && (
            <FormHelperText color={"red.500"}>Name is required.</FormHelperText>
          )}
        </GridItem>

        <GridItem className="email">
          <FormLabel as={"p"}>Email</FormLabel>
          <Input
            type="email"
            autoComplete={"off"}
            placeholder="input email"
            fontSize={20}
            py={7}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && (
            <FormHelperText color={"red.500"}>
              Email is required.
            </FormHelperText>
          )}
        </GridItem>

        <GridItem className="message">
          <FormLabel as={"p"}>Message</FormLabel>
          <Textarea
            placeholder="input message"
            autoComplete={"off"}
            resize={"none"}
            height={"190px"}
            fontSize={20}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errorMessage && (
            <FormHelperText color={"red.500"}>
              Message is required.
            </FormHelperText>
          )}
        </GridItem>
      </FormControl>

      <Flex justifyContent={"end"} p={1} mt={5}>
        <Button
          colorScheme="teal"
          type="submit"
          rounded={"md"}
          fontSize={25}
          p={6}
          onClick={() => handleSend()}
        >
          Send email
        </Button>
      </Flex>
    </Container>
  );
};

export default Email;
