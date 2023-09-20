import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Text,
  Box,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Email: React.FC = () => {
  const form = useRef(null);
  // const lineBreak = "%0D%0A";
  // const urlMail = "passyah11@gmail.com";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [textAlert, setTextAlert] = useState(false);

  const sendGmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTextAlert(true);
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            // console.log("success", result.text);
            // alert(result.text); /* OK */
            setTextAlert(true);
            return result;
          },
          (error) => {
            // console.log("error", error.text);
            // alert(error.text);
            setTextAlert(false);
            return error;
          }
        );
    }
    setTimeout(function () {
      setName(``);
      setEmail(``);
      setMessage(``);

      setTextAlert(false);

      return setTextAlert;
    }, 5000);
  };

  // const sendEmail = `mailto:${urlMail}?subject=Hello, My name ${name} ${email}&body=${message.replaceAll(
  //   "\n",
  //   lineBreak
  // )}`;

  // const handleSend = () => {
  //   window.open(sendEmail);
  // };

  return (
    <Container
      maxW={"container.xl"}
      pt={10}
      position={"relative"}
      color={"gray.600"}
    >
      <Box className="dangerouslySetInnerHTML">
        <Text as={"h2"} fontSize={50} px={1} mb={10}>
          Send me an email
        </Text>
      </Box>

      <form ref={form} onSubmit={sendGmail}>
        <FormControl
          ref={form}
          onSubmit={() => sendGmail}
          isRequired
          p={1}
          pb={1}
          className="container dangerouslySetInnerHTML"
        >
          <Box className="name">
            <FormLabel as={"p"} htmlFor="to_name">
              Name
            </FormLabel>
            <Input
              type="to_name"
              id="to_name"
              name="to_name"
              autoComplete={"off"}
              placeholder="input name"
              fontSize={20}
              py={7}
              value={name}
              border={"1px"}
              borderColor={"gray.200"}
              onChange={(e) => setName(e.target.value)}
            />
            {/* {errorName && (
            <FormHelperText color={"red.500"}>Name is required.</FormHelperText>
          )} */}
          </Box>

          <Box className="email">
            <FormLabel as={"p"} htmlFor="from_name">
              Email
            </FormLabel>
            <Input
              type="from_name"
              id="from_name"
              name="from_name"
              autoComplete={"off"}
              placeholder="input email"
              fontSize={20}
              py={7}
              border={"1px"}
              borderColor={"gray.200"}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={email.toLowerCase()}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* {errorEmail && (
            <FormHelperText color={"red.500"}>
              Email is required.
            </FormHelperText>
          )} */}
          </Box>

          <Box className="message">
            <FormLabel as={"p"} htmlFor="message">
              Message
            </FormLabel>
            <Textarea
              id="message"
              name="message"
              placeholder="input message"
              autoComplete={"off"}
              resize={"none"}
              height={"190px"}
              fontSize={20}
              border={"1px"}
              borderColor={"gray.200"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {/* {errorMessage && (
            <FormHelperText color={"red.500"}>
              Message is required.
            </FormHelperText>
          )} */}
          </Box>
        </FormControl>
        <Flex position={"relative"} justifyContent={"end"} p={1} mt={5}>
          <Button
            isDisabled={!name || !email || !message || textAlert}
            colorScheme="teal"
            disabled
            type="submit"
            rounded={"md"}
            fontSize={[20, 20, 20, 25]}
            p={[4, 4, 4, 6]}
            // onClick={() => sendGmail}
          >
            Send email
          </Button>
        </Flex>
        <Text
          as={"p"}
          display={textAlert ? "flex" : "none"}
          mt={5}
          p={5}
          justifyContent={"center"}
          alignItems={"center"}
          bgColor={"green.100"}
          fontSize={[18, 18, 18, 20]}
          color={"green.500"}
        >
          Thank you for contacting me 🙌
        </Text>
      </form>
    </Container>
  );
};

export default Email;
