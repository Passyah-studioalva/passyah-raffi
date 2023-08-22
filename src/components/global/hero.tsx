import { Box, Container, Text, Image, Flex } from "@chakra-ui/react";

type Props = {
  url?: string;
  alt?: string;
  text?: any;
  about?: boolean;
};

const Hero: React.FC<Props> = ({ url, alt, text, about }) => {
  return (
    <Container maxW={"container.xl"} mt={10}>
      {!about ? (
        <Flex justifyContent={"center"} alignItems={"center"}>

        <Image src={url} alt={alt} w={'auto'} h={'500px'} />
        </Flex>
      ) : (
        <Flex justifyContent={"space-between"} alignItems={"center"}>

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
     
          <Image src={url} alt={alt} w={'50%'} />
        </Flex>
      )}
    </Container>
  );
};

export default Hero;
