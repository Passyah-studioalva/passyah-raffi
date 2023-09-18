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
} from "@chakra-ui/react";
import { useState } from "react";

const Email: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Container
      maxW={"container.xl"}
      mt={10}
      position={"relative"}
      color={"gray.600"}
      className="dangerouslySetInnerHTML"
    >
      <Text as={"h2"} fontSize={50} px={1} mb={10}>
        Send me an email
      </Text>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
        templateRows={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={[0, 0, 0, 5]}
        pb={1}
      >
        <GridItem>
          <FormControl isRequired p={1}>
            <FormLabel as={"p"}>Name</FormLabel>
            <Input
              type="text"
              value={name}
              autoComplete={"off"}
              placeholder="input name"
              fontSize={20}
              py={7}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem
          display={["none", "none", "none", "flex"]}
          rowSpan={[0, 0, 0, 2]}
        >
          <FormControl isRequired p={1}>
            <FormLabel as={"p"}>Message</FormLabel>
            <Textarea
              placeholder="input message"
              resize={"none"}
              height={"190px"}
              fontSize={20}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl isRequired p={1}>
            <FormLabel as={"p"}>Email</FormLabel>
            <Input
              type="email"
              value={email}
              autoComplete={"off"}
              placeholder="input email"
              fontSize={20}
              py={7}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem
          display={["flex", "flex", "flex", "none"]}
          rowSpan={[0, 0, 0, 2]}
        >
          <FormControl isRequired p={1}>
            <FormLabel as={"p"}>Message</FormLabel>
            <Textarea
              placeholder="input message"
              resize={"none"}
              height={"190px"}
              fontSize={20}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
        </GridItem>
      </Grid>
      <Flex justifyContent={"end"} p={1} mt={5}>
        <Button
          colorScheme="teal"
          type="submit"
          rounded={"md"}
          fontSize={25}
          p={6}
        >
          Send email
        </Button>
      </Flex>
    </Container>
  );
};

export default Email;
