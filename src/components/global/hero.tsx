import {
  Box,
  Container,
  Text,
  Image,
  Flex,
  SimpleGrid,
  Grid,
} from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import HTML from "@assets/hero/html.svg";
import CSS from "@assets/hero/css.svg";
import JS from "@assets/hero/js.svg";
import TS from "@assets/hero/typescript-icon.svg";
import CODE from "@assets/codes-removebg-preview.png";

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
  const logos = [
    {
      img: HTML,
      alt: "html",
    },
    {
      img: CSS,
      alt: "css",
    },
    {
      img: JS,
      alt: "js",
    },
    {
      img: TS,
      alt: "ts",
    },
  ];
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
            zIndex={10}
          >
            <Text as={"h1"} fontSize={"100px"} className="text-hero">
              Passyah Raffi
            </Text>
            <Text as={"h2"}>Frontend Developer</Text>
            <Link href={"mailto:passyah11@gmail.com"}>
              <Text as={"p"} fontSize={"20px"} className="animate-hover">
                passyah11@gmail.com
              </Text>
            </Link>
          </Box>

          <Image
            position={"absolute"}
            left={"20%"}
            src={url}
            alt={alt}
            w={"full"}
            h={"1400px"}
            objectFit={"cover"}
            zIndex={10}
          />

          <Image
            position={"absolute"}
            left={"75%"}
            src={CODE.src}
            alt={"code"}
            w={"500px"}
            h={"500px"}
          />

          {logos.map((item, idx) => {
            return (
              <Box key={idx}>
                <Image
                  position={"absolute"}
                  src={item.img.src}
                  alt={item.alt}
                  w={"100px"}
                  h={"100px"}
                  objectFit={"cover"}
                  top={
                    idx === 0
                      ? "20px"
                      : idx === 1
                      ? "150px"
                      : idx === 2
                      ? "300px"
                      : "450px"
                  }
                  left={
                    idx === 0
                      ? "20%"
                      : idx === 1
                      ? "30%"
                      : idx === 2
                      ? "40%"
                      : "50%"
                  }
                />
              </Box>
            );
          })}
          {logos.map((item, idx) => {
            return (
              <Box key={idx}>
                <Image
                  position={"absolute"}
                  src={item.img.src}
                  alt={item.alt}
                  w={"100px"}
                  h={"100px"}
                  objectFit={"cover"}
                  top={
                    idx === 0
                      ? "320px"
                      : idx === 1
                      ? "450px"
                      : idx === 2
                      ? "600px"
                      : "850px"
                  }
                  left={
                    idx === 0
                      ? "20%"
                      : idx === 1
                      ? "30%"
                      : idx === 2
                      ? "40%"
                      : "50%"
                  }
                />
              </Box>
            );
          })}
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
