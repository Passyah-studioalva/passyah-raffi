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
    <Container maxW={"container.xl"} mt={10} position={"relative"}>
      <Text as={"h2"} fontSize={50} px={1} mb={10}>
        Send me an email
      </Text>
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap={5}
        pb={1}
      >
        <GridItem fontSize={25}>
          <FormControl isRequired p={1}>
            <FormLabel fontSize={25}>Name</FormLabel>
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
        <GridItem rowSpan={2}>
          <FormControl isRequired p={1}>
            <FormLabel fontSize={25}>Message</FormLabel>
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
            <FormLabel fontSize={25}>Email</FormLabel>
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
