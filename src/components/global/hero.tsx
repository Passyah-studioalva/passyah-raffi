import {
  Box,
  Container,
  Text,
  Image,
  Flex,
  SimpleGrid,
  Grid,
  Center,
} from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  url?: string;
  alt?: string;
  text?: any;
  about?: boolean;
  social?: SOCIAL;
}

type SOCIAL = {
  alt: string;
  src: StaticImageData;
  url: string;
}[];

const Hero: React.FC<Props> = ({ url, alt, text, about, social }) => {
  return (
    <>
      {!about ? (
        <Flex
          bgColor={"blackAlpha.800"}
          justifyContent={"center"}
          alignItems={"center"}
          minH={"700px"}
          position={"relative"}
          overflow={"hidden"}
          pt={20}
        >
          <Box
            as={"span"}
            position={"absolute"}
            left={"15%"}
            color={"white"}
            fontSize={"40px"}
            textAlign={"center"}
            fontStyle={"italic"}
          >
            <Text as={"h1"} fontSize={"100px"} className="text-hero">
              Passyah Raffi
            </Text>
            <Text as={"h2"}>Frontend Developer</Text>
            <Text as={"p"} fontSize={"20px"}>
              passyah11@gmail.com
            </Text>
          </Box>

          <Image
            position={"absolute"}
            left={"20%"}
            src={url}
            alt={alt}
            w={"full"}
            h={"1400px"}
            objectFit={"cover"}
          />
        </Flex>
      ) : (
        <Container maxW={"container.xl"} mt={10} position={"relative"}>
          <Flex gap={5} justifyContent={"space-between"} alignItems={"center"}>
            <Grid gap={10} w={"50%"}>
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
              <SimpleGrid columns={5}>
                {social?.map((item) => {
                  return (
                    <Link key={item.alt} href={item.url}>
                      <Image
                        src={item?.src?.src}
                        alt={item.alt}
                        w={["50px", "50px", "50px", "70px"]}
                        h={["50px", "50px", "50px", "70px"]}
                      />
                    </Link>
                  );
                })}
              </SimpleGrid>
            </Grid>

            <Image src={url} alt={alt} w={"50%"} />
          </Flex>
        </Container>
      )}
    </>
  );
};

export default Hero;
