import { Box, Container, Text, Image, Flex } from "@chakra-ui/react";

type Props = {
  url?: string;
  alt?: string;
  text?: any;
  about?: boolean;
};

const Hero: React.FC<Props> = ({ url, alt, text, about }) => {
  return (
    <>
      {!about ? (
        <Flex
          bgColor={"blackAlpha.800"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Box
            as={"span"}
            color={"white"}
            fontSize={'40px'}
            textAlign={"center"}
            fontStyle={"italic"}
          >
            <Text as={"h1"} fontSize={'100px'} className="text-hero">
              Passyah Raffi
            </Text>
            <Text as={"h2"}>Frontend Developer</Text>
            <Text as={"p"} fontSize={'20px'}>
              passyah11@gmail.com
            </Text>
          </Box>
          <Image src={url} alt={alt} w={"auto"} h={"600px"} />
        </Flex>
      ) : (
        <Container maxW={"container.xl"} mt={10}>
          <Flex gap={5} justifyContent={"space-between"} alignItems={"center"}>
            <Box
              as="div"
              className="dangerouslySetInnerHTML"
              dangerouslySetInnerHTML={{ __html: text }}
              /* EXAMPLE INLINCE CSS */
              // sx={{
              //   "& h1": {
              //       fontWeight: 600
              //   }
              // }}
            />

            <Image src={url} alt={alt} w={"50%"} />
          </Flex>
        </Container>
      )}
    </>
  );
};

export default Hero;
