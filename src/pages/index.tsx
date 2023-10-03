import * as React from "react";
import { Box, Container, Text, Image, Flex, Center } from "@chakra-ui/react";
import Link from "next/link";
import Hero from "@components/global/hero";
import HERO from "@assets/home.png";
import ARROW from "@assets/icon/right-arrow.svg";
import CardProject from "@src/components/global/cardProject";

const HomePage = () => {

  return (
    <Box mt={"70px"}>
      <Hero url={HERO.src} alt="hero" />
      <Container maxW={"container.xl"} mb={[10, 10, 10, 20]}>
        <Text
          as="h4"
          textAlign={"center"}
          my={10}
          pt={[0, 0, 0, 10]}
          fontSize={25}
          color={"gray.600"}
        >
          SOME OF MY LATEST WORK
        </Text>
        <CardProject />
        <Flex mt={[10]} justifyContent={"end"}>
          <Link href={"/project"}>
            <Center gap={1} className="animate-hover" fontWeight={600}>
              View all project
              <Image src={ARROW.src} w={30} h={30} alt="arrow-right" />
            </Center>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default HomePage;
