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
import REACT from "@assets/icon/react.svg";
import VUE from "@assets/icon/vue.svg";
import TW from "@assets/icon/tailwind.svg";
import CK from "@assets/icon/CK.svg";

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
  const logo1 = [
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
  const logo2 = [
    {
      img: REACT,
      alt: "react",
    },
    {
      img: VUE,
      alt: "vue",
    },
    {
      img: TW,
      alt: "tailwind",
    },
    {
      img: CK,
      alt: "chakraui",
    },
  ];
  const logo3 = [
    {
      img: CK,
      alt: "chakraui",
    },
  ];
  return (
    <>
      {!about ? (
        <Flex
          bgColor={"blackAlpha.800"}
          justifyContent={"center"}
          alignItems={"center"}
          minH={["400px", "500px", "500px", "500px"]}
          position={"relative"}
          overflow={"hidden"}
          pt={20}
        >
          <Box
            as={"span"}
            position={["relative", "relative", "relative", "absolute"]}
            left={[0, 0, 0, "10%"]}
            color={"white"}
            fontSize={"40px"}
            textAlign={"center"}
            fontStyle={"italic"}
            zIndex={[50]}
          >
            <Text
              as={"h1"}
              fontSize={["60px", "60px", "60px", "80px"]}
              className="text-hero"
            >
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
            left={["0%", "0%", "25%", "20%"]}
            src={url}
            alt={alt}
            w={"full"}
            h={["900px", "1000px", "1000px", "1000px"]}
            objectFit={"cover"}
            zIndex={10}
          />

          <Image
            position={"absolute"}
            objectFit={["contain", "fill", "fill", "fill"]}
            top={["-100px", 0, 0, 10]}
            left={["0%", "0%", "0%", "73%"]}
            src={CODE.src}
            alt={"code"}
            w={"500px"}
            h={"500px"}
          />

          {logo1.map((item, idx) => {
            return (
              <Box key={idx} display={["none", "none", "none", "flex"]}>
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
                      ? "100px"
                      : idx === 2
                      ? "200px"
                      : "300px"
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
          {logo2.map((item, idx) => {
            return (
              <Box key={idx} display={["none", "none", "none", "flex"]}>
                <Image
                  position={"absolute"}
                  src={item.img.src}
                  alt={item.alt}
                  w={"100px"}
                  h={"100px"}
                  objectFit={"cover"}
                  top={
                    idx === 0
                      ? "200px"
                      : idx === 1
                      ? "300px"
                      : idx === 2
                      ? "400px"
                      : "500px"
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
          {logo3.map((item, idx) => {
            return (
              <Box key={idx} display={["none", "none", "none", "flex"]}>
                <Image
                  position={"absolute"}
                  src={item.img.src}
                  alt={item.alt}
                  w={"100px"}
                  h={"100px"}
                  objectFit={"cover"}
                  top={"400px"}
                  left={"20%"}
                />
              </Box>
            );
          })}
        </Flex>
      ) : (
        <Box
          display={["grid", "grid", "flex", "flex"]}
          gap={[2, 2, 2, 5]}
          flexDir={["row-reverse", "row-reverse", "row-reverse", "row"]}
          justifyContent={["center", "center", "center", "space-between"]}
          alignItems={"center"}
        >
          <Grid
            gap={[5, 5, 5, 10]}
            w={["100%", "100%", "100%", "50%"]}
            mt={[10, 10, 10, 0]}
          >
            <Box
              as="div"
              className="dangerouslySetInnerHTML"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            {social && (
              <Flex gap={[5]}>
                {social?.map((item) => {
                  return (
                    <Link key={item.alt} href={item.url}>
                      <Image
                        src={item?.src?.src}
                        alt={item.alt}
                        w={["40px", "40px", "40px", "70px"]}
                        h={["40px", "40px", "40px", "70px"]}
                        objectFit={"cover"}
                        className="animate-hover"
                      />
                    </Link>
                  );
                })}
              </Flex>
            )}
          </Grid>

          <Image
            src={url}
            alt={alt}
            maxH={["500px","600px","700px","700px"]}
            minH={["500px","600px","700px","700px"]}
            w={["100vw", "100vw", "100vw", "50%"]}
            objectFit={"cover"}
            mt={social && [5, 5, 5, 0]}
          />
        </Box>
      )}
    </>
  );
};

export default Hero;
