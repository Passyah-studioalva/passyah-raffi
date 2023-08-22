import { Box, Container, Text, SimpleGrid, Image } from "@chakra-ui/react";
import Link from "next/link";
// import Image from "next/image";
// import ACETOURS from "@assets/acetours.png";
import ACETOURS from "@assets/acetours-img.png";
// import NUCLEUSUI from "@assets/nucleus-ui.png";
import NUCLEUSUI from "@assets/nucleus-ui-img.png";
// import NUCLEUSICONS from "@assets/nucleus-icons.png";
import NUCLEUSICONS from "@assets/nucleus-icons-img.png";
// import BIZTIPS from "@assets/biztips.png";
import BIZTIPS from "@assets/biztips-img.png";
import Hero from "@src/components/global/hero";
import HERO from '@assets/hero.jpg'

export default function HomePage() {
  const dummy = [
    {
      title: "Travel Singapore",
      desc: "ACETOURS Singapore - Discover Tours, Attractions, Hotels and more - booking.",
      color: "#2B569A",
      /* Domain */
      url: "http://pkg.ezbooking.co",
      /* Vercel */
      // url: 'https://project-travel-orpin.vercel.app'
      img: ACETOURS,
    },
    {
      title: "Nucleus UI",
      desc: "The all-in-one UI kit and Design System for Figma.",
      color: "#6B4EFF",
      /* Domain */
      url: "https://www.nucleus-ui.com",
      /* Vercel */
      // url: "https://figmaterial-thebuddyman.vercel.app",
      img: NUCLEUSUI,
    },
    {
      title: "Nucleus Free Icons",
      desc: "Minimal and beautiful open source icons by Nucleus.",
      color: "#6B4EFF",
      /* Domain */
      url: "https://icon.nucleus-ui.com",
      /* Vercel */
      // url: "https://project-nucleus-icon.vercel.app",
      img: NUCLEUSICONS,
    },
    {
      title: "BizTips",
      desc: "Temukan Tips Praktis untuk Bisnis Anda di BizTips.",
      color: "#772583",
      /* Domain */
      url: "https://biztips.gobiz.co.id",
      /* Vercel */
      // url: "https://gobiz-frontend.vercel.app/biztips",
      img: BIZTIPS,
    },
  ];

  return (
    <Container maxW={"container.xl"} mb={20}>
      <Hero
        url={HERO.src}
        alt="hero"
      />
      <Box mt={10}>
        <Text
          as="h4"
          textAlign={"center"}
          my={10}
          fontSize={25}
          color={"gray.600"}
        >
          My Project
        </Text>
        <SimpleGrid columns={4} spacing={10}>
          {dummy.map((item, idx) => {
            return (
              <Link key={idx} href={item.url} passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <Box
                    bg={item.color}
                    color={"white"}
                    minH="300px"
                    rounded={"md"}
                  >
                    <Image
                      src={item.img.src}
                      alt={item.title}
                      w="full"
                      h="200px"
                      // objectFit={"cover"}
                      objectPosition={"center"}
                      roundedTop={"md"}
                    />

                    <Box py={5} p={2}>
                      <Text fontSize={20} fontWeight={600}>
                        {item.title}
                      </Text>
                      <Text>{item.desc}</Text>
                    </Box>
                  </Box>
                </a>
              </Link>
            );
          })}
        </SimpleGrid>
      </Box>
    </Container>
  );
}
